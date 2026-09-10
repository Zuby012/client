'use client';

import { createContext, createElement, useContext, useEffect, useState, ReactNode } from 'react';
import { io, Socket } from 'socket.io-client';

//setting up socket context type
type SocketContextType ={
  socket: Socket | null,
  isConnected: boolean
}

//declearing socket context
const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
})

//creating and exporting a useSocket function 
export const useSocket = () => {
  return useContext(SocketContext);
};

//creating type declaration for Socket provider props
type SocketProviderProps = {
  children: ReactNode
}

//creating and exporting a socket provider function
export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    // 1. Initialize the socket instance
    const socketInstance = io(process.env.NEXT_PUBLIC_SERVER_URL, {
      transports: ['websocket'],
      autoConnect: true, 
    });

    //socket connection handler
    const handleConnect = () => {
      setSocket(socketInstance)
      setIsConnected(true)
    }

    //socket disconnection handler
    const handleDisconnect = () => {
      setIsConnected(false)
    }

    //handle socket connection and expose the socket state once it successfully connects
    socketInstance.on('connect', handleConnect);

    //handle socket disconnection and expose the socket state once it successfully connects
    socketInstance.on('disconnect', handleDisconnect);

    if (!socket) {
      return
    }else{
      socket.connect()
    }
    
    // Disconnect and remove listeners when component unmounts
    return () => {
      socketInstance.off('connect', handleConnect);
      socketInstance.off('disconnect', handleDisconnect);
      socketInstance.disconnect();
    };
  }, []);

  return createElement(
    SocketContext.Provider,
    { value: { socket, isConnected } },
    children,
  );
};


/*

//use case
'use client'

import { useSocket } from '@/context/SocketContext';
import { useEffect, useState } from 'react';

export default function DashboardPage() {

const socket = useSocket();

useEffect(() => {
  if (!socket) return; // Prevent errors if socket is still null

  socket.on('message', (data) => {
    console.log(data);
  });

  return () => socket.off('message');
}, [socket]);
}
*/  