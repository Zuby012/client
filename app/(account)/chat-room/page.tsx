import { auth } from '@/lib/auth';
import ClientPage from './ClientPage'
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { io } from 'socket.io-client'

const chatRoom = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/v1/sign-in');
    }

    return (
        <div>
            <ClientPage session={session} />
        </div>
    )
}

export default chatRoom