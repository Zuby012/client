import type { Metadata } from "next";
import Header from './_components/v1-Header'

export const metadata: Metadata = {
    title: "shaine",
    description: "social media and e-commerce, built for authentic interaction, instant messaging and seenless user storefront between creators and their communities",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}