import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PolicyCard } from "@/components/policy-card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function Policies() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-medium">Policies</h1>
        <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 h-8 gap-1">
          <Plus className="w-4 h-4" /> New
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="bg-gray-900/60 mb-4 w-full">
          <TabsTrigger value="all" className="flex-1">
            All
          </TabsTrigger>
          <TabsTrigger value="health" className="flex-1">
            Health
          </TabsTrigger>
          <TabsTrigger value="vehicle" className="flex-1">
            Vehicle
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-3">
          <PolicyCard title="Haven Life Micro" policyNo="PV9292" dueDate="12 Dec 2023" />
          <PolicyCard title="Sauls Wealth Ins" policyNo="PV7292" dueDate="12 Dec 2023" type="wealth" />
          <PolicyCard title="Family Floater" policyNo="PV4432" dueDate="12 Dec 2023" type="health" />
          <PolicyCard title="Boda Boda Cover" policyNo="PV8821" dueDate="15 Dec 2023" type="vehicle" />
        </TabsContent>

        <TabsContent value="health" className="space-y-3">
          <PolicyCard title="Family Floater" policyNo="PV4432" dueDate="12 Dec 2023" type="health" />
        </TabsContent>

        <TabsContent value="vehicle" className="space-y-3">
          <PolicyCard title="Boda Boda Cover" policyNo="PV8821" dueDate="15 Dec 2023" type="vehicle" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
