import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function DashboardNav() {
    return (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="account">Overview</TabsTrigger>
                <TabsTrigger value="report">Analysis</TabsTrigger>
                <TabsTrigger value="entries">Entries</TabsTrigger>
            </TabsList>
        </Tabs>

    )
}