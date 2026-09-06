import ClientPage from './clientPage'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation';

const SignIn = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (session) {
        redirect('/home')
    }
    return (<ClientPage />)
}

export default SignIn   