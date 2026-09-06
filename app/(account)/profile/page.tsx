import { auth } from '@/lib/auth';
import ClientPage from './ClientPage'
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const UserProfile = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/v1/sign-in');
    }

    return <ClientPage session={session} />
}

export default UserProfile