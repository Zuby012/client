import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { auth } from '@/lib/auth';

type Session = typeof auth.$Infer.Session

const ClientPage = ({ session }: { session: Session }) => {

    const user = session?.user;

    return (
        <>
            <div>{user?.name}</div>
            <div>{user?.email}</div>
            <div id="cover image">
                <div id="follow-message">
                    <Button>follow</Button>
                    <Button variant={'secondary'}>message</Button>
                </div>
            </div>
            <div id="profile-section">
                <div id="info-section" className="w-full"></div>
                <Tabs defaultValue="posts" className="w-full">
                    <TabsList variant="line" className="w-full flex-row justify-between">
                        <TabsTrigger value="posts">Posts</TabsTrigger>
                        <TabsTrigger value="store">Storefront</TabsTrigger>
                        <TabsTrigger value="about">About</TabsTrigger>
                    </TabsList>
                    <TabsContent value="posts" className="w-full flex-row justify-between">
                        <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                            Posts appear here.
                        </ScrollArea>
                    </TabsContent>
                    <TabsContent value="store" className="w-full flex-row justify-between">
                        <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                            Store content appears here.
                        </ScrollArea>
                    </TabsContent>
                    <TabsContent value="about" className="w-full flex-row justify-between">
                        <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                            About content appears here.
                        </ScrollArea>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}

export default ClientPage