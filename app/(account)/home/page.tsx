import { auth } from '@/lib/auth';
import ClientPage from './ClientPage'
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const Home = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        redirect('v1/sign-in')
    }
    return <ClientPage />
}

export default Home