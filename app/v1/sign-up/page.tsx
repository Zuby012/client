import { headers } from 'next/headers';
import ClientPage from './ClientPage';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const SignUp = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (session) {
        redirect('/home');
    };

    return <ClientPage />;
};

export default SignUp;