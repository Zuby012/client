'use client'
import { useState, useEffect, Suspense } from 'react';
import { useSocket } from '@/context/SocketContext'
import { auth } from '@/lib/auth';
import { Message, MessageContent, MessageFooter, } from "@/components/ui/message";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";
import {
    InputGroupTextarea,
} from "@/components/ui/input-group"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from "@/components/ui/empty"
import {
    MessageScroller,
    MessageScrollerButton,
    MessageScrollerContent,
    MessageScrollerItem,
    MessageScrollerProvider,
    MessageScrollerViewport,
} from "@/components/ui/message-scroller"

type Session = typeof auth.$Infer.Session

const ClientPage = ({ session }: { session: Session }) => {

    const { socket, isConnected } = useSocket()

    const now = new Date()

    const user = session?.user;

    const [inputMessage, setInputMessage] = useState("")
    const [room, setRoom] = useState('')

    const sendMessage = (e: React.SubmitEvent) => {
        e.preventDefault()
        //check if sockcet is connected before sending data
        if (!socket || !isConnected) {
            console.log("socket is not connected")
            return
        }
        if (!inputMessage.trim()) return
        //send message through socket.io
        socket.emit('send_message', {
            id: now.toISOString(),
            roomId: room,
            senderId: user.id,
            receiverId: '',
            message: inputMessage.trim(),
            sentAt: `${now.getHours()}:${now.getMinutes()}`,
            deliveredAt: '',
            recievedAt: '',
        })
        setInputMessage("")
    }

    //set room id
    useEffect(() => {
        setRoom('1')
    }, [])

    //join room
    useEffect(() => {
        //check if sockcet is connected before joining room
        if (!socket || !isConnected || !room) {
            return
        }

        //join room handler
        socket.emit('join_room', room)
        console.log("socket connected:", socket.id)
    }, [socket, isConnected, room])

    useEffect(() => {
        //check if sockcet is connected
        if (!socket || !isConnected) {
            console.log("socket is not connected")
            return
        }
        //handle in coming messages
        const handleResponseMessage = (data: any) => {
            console.log(data.message)

            //add received message to list
            setMessageList((prevMessages) => [
                ...prevMessages,
                data
            ])
        }

        socket.on('receive_message', handleResponseMessage)

        return () => {
            socket.off('receive_message', handleResponseMessage)
        }
    }, [socket, isConnected])

    type TypeMessageList = {
        id: string
        roomId: string
        senderId: string
        receiverId: string
        message: string
        sentAt: string
        deliveredAt: string
        recievedAt?: string
    }

    const [messageList, setMessageList] = useState<TypeMessageList[]>([])

    return (
        <div className="h-full w-full">
            <MessageScrollerProvider scrollPreviousItemPeek={64} autoScroll>
                <Card className="h-screen w-full pb-40">
                    {/* chat header */}
                    <CardHeader className="h-20 w-full border-b border-gray-400">
                        <CardTitle>Chat Room</CardTitle>
                    </CardHeader>
                    {/* -------chat content------ */}
                    <CardContent className="h-full w-full px-4">
                        {messageList.length === 0 ? (
                            // content to display when there are no exixting messages
                            <Empty className="h-full">
                                <EmptyHeader>
                                    <EmptyTitle>Welcome {user.name}</EmptyTitle>
                                    <EmptyDescription>
                                        Start a conversation with this person
                                    </EmptyDescription>
                                </EmptyHeader>
                            </Empty>
                        ) : (
                            // content to display in existing chat
                            <MessageScroller>
                                <MessageScrollerViewport className="w-full text-md">
                                    <MessageScrollerContent className='w-full flex flex-col gap-2'>
                                        <Suspense fallback={'Loading'}>
                                            {messageList.map((message) => (
                                                message.senderId === user.id ? (
                                                    <MessageScrollerItem
                                                        key={message.id}
                                                        messageId={message.id}
                                                        scrollAnchor={message.senderId === user.id}
                                                        className='w-full flex flex-row justify-end items-end'
                                                    >
                                                        <Message className="w-[70%] flex flex-col items-end justify-end gap-1">
                                                            <MessageContent className='flex flex-col items-end'>
                                                                <Bubble className='w-fit'>
                                                                    <BubbleContent>{message.message}</BubbleContent>
                                                                </Bubble>
                                                            </MessageContent>
                                                            <MessageFooter className='flex flex-row justify-end gap-3'>
                                                                <span className="text-xs text-muted-foreground">Delivered</span>
                                                                <span className="text-xs text-muted-foreground">
                                                                    {message.sentAt}
                                                                </span>
                                                            </MessageFooter>
                                                        </Message>
                                                    </MessageScrollerItem>
                                                ) : (
                                                    <MessageScrollerItem
                                                        key={message.id}
                                                        messageId={message.id}
                                                        className='w-full flex flex-row justify-start items-end'
                                                    >
                                                        <Message key={message.id} className="w-[70%] flex flex-col gap-1">
                                                            <MessageContent>
                                                                <Bubble className='w-fit'>
                                                                    <BubbleContent>{message.message}</BubbleContent>
                                                                </Bubble>
                                                            </MessageContent>
                                                            <MessageFooter className='flex flex-row justify-start'>
                                                                <span className="text-xs text-muted-foreground">
                                                                    {message.recievedAt}
                                                                </span>
                                                            </MessageFooter>
                                                        </Message>
                                                    </MessageScrollerItem>
                                                )
                                            ))}

                                            <MessageScrollerItem />
                                            <MessageScrollerItem />
                                        </Suspense>
                                    </MessageScrollerContent>
                                </MessageScrollerViewport>
                                <MessageScrollerButton />
                            </MessageScroller>
                        )}
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <form
                            onSubmit={sendMessage}
                            className="flex flex-row w-full items-center justify-center gap-2"
                        >
                            <InputGroupTextarea
                                placeholder="Type your message..."
                                className="h-full border border-gray-200 rounded-2xl"
                                value={inputMessage}
                                onChange={(e) => {
                                    setInputMessage(e.target.value);
                                }}
                            />
                            <Button type="submit" className="ml-2">
                                <SendHorizontal className="h-full aspect-auto bg-transparent text-white" />
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            </MessageScrollerProvider>
        </div>
    )
}

export default ClientPage