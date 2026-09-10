import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SocketProvider } from "@/context/SocketContext"
import { AppSidebar } from "@/components/app-sidebar"

export const metadata: Metadata = {
    title: "Shaine Account",
    description: "social media and e-commerce, built for authentic interaction, instant messaging and seenless user storefront between creators and their communities",
};

export default function Layout({ children }: LayoutProps<"/">) {
    return (
        <SocketProvider>
            <SidebarProvider className="h-full w-full">
                <AppSidebar />
                <main className="w-full h-full">
                    <SidebarTrigger className="w-fit fixed right-5 mt-2 p-2 bg-indigo-500 text-indigo-100" />
                    {children}
                </main>
            </SidebarProvider>
        </SocketProvider>
    )
}