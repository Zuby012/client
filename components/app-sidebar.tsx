import Link from "next/link";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import {
    Bell,
    House,
    MessageCircle,
    UserPlus,
    Store,
    ShoppingCart,
    Settings,
    HelpCircle,
    User,
    LogOut
} from "lucide-react";

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="p-2 m-2 flex flex-row items-center justify-between">
                <div className="text-indigo-400 text-2xl font-bold">Shaine</div>
                <Bell className="text-indigo-400" />
            </SidebarHeader>
            <SidebarContent className="p-2 m-2 flex flex-col gap-2">
                <SidebarGroup className="flex flex-col gap-4">
                    <Link href="/home" className="flex flex-row items-center gap-2">
                        <House className="w-4 h-4 text-indigo-400" />
                        <span className="ml-2">Home</span>
                    </Link>
                    <Link href="/messages" className="flex flex-row items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-indigo-400" />
                        <span className="ml-2">Messages</span>
                    </Link>
                    <Link href="/friend-requests" className="flex flex-row items-center gap-2">
                        <UserPlus className="w-4 h-4 text-indigo-400" />
                        <span className="ml-2">Friend Requests</span>
                    </Link>
                    <Link href="/notifications" className="flex flex-row items-center gap-2">
                        <Bell className="w-4 h-4 text-indigo-400" />
                        <span className="ml-2">Notifications</span>
                    </Link>
                </SidebarGroup>
                <SidebarGroup className="border-t-2 p-2 m-2 flex flex-col gap-4">
                    <Link href="/stores" className="flex flex-row items-center gap-2">
                        <Store className="w-4 h-4 text-indigo-400" />
                        <span className="ml-2">Stores</span>
                    </Link>
                    <Link href="/cart" className="flex flex-row items-center gap-2">
                        <ShoppingCart className="w-4 h-4 text-indigo-400" />
                        <span className="ml-2">Cart</span>
                    </Link>
                    <Link href="/settings" className="flex flex-row items-center gap-2">
                        <Settings className="w-4 h-4 text-indigo-400" />
                        <span className="ml-2">Settings</span>
                    </Link>
                    <Link href="/help" className="flex flex-row items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-indigo-400" />
                        <span className="ml-2">Help</span>
                    </Link>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t-2 p-2 m-2">
                <Link href="/profile" className="flex flex-row items-center gap-2">
                    <User className="w-4 h-4 text-indigo-400" />
                    <span className="ml-2">User name</span>
                </Link>
                <div className="bg-indigo-500 text-white rounded-2xl p-4 flex flex-row items-center gap-2">
                    <LogOut className="w-4 h-4" />
                    <span className="ml-2">Logout</span>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}