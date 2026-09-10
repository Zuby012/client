import type { Metadata } from "next";
import Header from './_components/v1-Header';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export const metadata: Metadata = {
    title: "shaine - social media and e-commerce platform",
    description: "social media and e-commerce, built for authentic interaction, instant messaging and seemless user storefront between creators and their communities",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    return (
        <>
            <Header session={session} />
            <main>{children}</main>
        </>
    );
}