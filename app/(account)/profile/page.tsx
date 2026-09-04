import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const UserProfile = () => {
    return (
        <>
            <div>{"User Profile"}</div>
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
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
                            Posts appear here.<br />
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

export default UserProfile