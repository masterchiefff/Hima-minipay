import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Plus, Wallet } from "lucide-react"

export function Payments() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-xl font-medium">Wallet</h1>
      </div>

      <div className="grid grid-cols-1 gap-3 mb-4">
        <WalletCard
          title="cKES Wallet"
          balance="120.50"
          currency="cKES"
          color="bg-yellow-500/20"
          borderColor="border-yellow-500/30"
          icon={<Wallet className="w-5 h-5 text-yellow-500" />}
        />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <ActionCard icon={<Plus />} title="Add Funds" />
        <ActionCard icon={<ArrowUpRight />} title="Send" />
      </div>

      <Tabs defaultValue="history">
        <TabsList className="bg-gray-900/60 mb-4 w-full">
          <TabsTrigger value="history" className="flex-1">
            History
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="flex-1">
            Upcoming
          </TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="space-y-3">
          <TransactionCard
            title="Premium Payment"
            description="Health Insurance"
            amount="-10.00"
            currency="cKES"
            date="Apr 20, 2023"
          />
          <TransactionCard
            title="Wallet Top-up"
            description="MiniPay"
            amount="+50.00"
            currency="cKES"
            date="Apr 15, 2023"
          />
          <TransactionCard
            title="Premium Payment"
            description="Vehicle Insurance"
            amount="-8.00"
            currency="cKES"
            date="Apr 10, 2023"
          />
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-3">
          <TransactionCard
            title="Premium Payment"
            description="Health Insurance"
            amount="-10.00"
            currency="cKES"
            date="May 20, 2023"
            upcoming={true}
          />
          <TransactionCard
            title="Premium Payment"
            description="Vehicle Insurance"
            amount="-8.00"
            currency="cKES"
            date="May 10, 2023"
            upcoming={true}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface WalletCardProps {
  title: string
  balance: string
  currency: string
  color: string
  borderColor: string
  icon: React.ReactNode
}

function WalletCard({ title, balance, currency, color, borderColor, icon }: WalletCardProps) {
  return (
    <Card className={`${color} backdrop-blur-sm border ${borderColor} rounded-xl p-4`}>
      <div className="flex items-center mb-2">
        <div className="bg-black/30 rounded-full p-2">{icon}</div>
        <h3 className="text-sm font-medium text-white ml-2">{title}</h3>
      </div>
      <div className="text-2xl font-bold text-white">
        {balance} <span className="text-sm">{currency}</span>
      </div>
      <div className="flex justify-between mt-3">
        <Button variant="outline" size="sm" className="bg-black/20 border-white/20 text-white">
          <Plus className="w-4 h-4 mr-1" /> Add
        </Button>
        <Button variant="outline" size="sm" className="bg-black/20 border-white/20 text-white">
          <ArrowUpRight className="w-4 h-4 mr-1" /> Send
        </Button>
      </div>
    </Card>
  )
}

interface ActionCardProps {
  icon: React.ReactNode
  title: string
}

function ActionCard({ icon, title }: ActionCardProps) {
  return (
    <Card className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-3 hover:bg-gray-800/40 transition-colors cursor-pointer">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-black/30 rounded-full p-2 mb-2">{icon}</div>
        <h3 className="text-xs font-medium text-white">{title}</h3>
      </div>
    </Card>
  )
}

interface TransactionCardProps {
  title: string
  description: string
  amount: string
  currency: string
  date: string
  upcoming?: boolean
}

function TransactionCard({ title, description, amount, currency, date, upcoming = false }: TransactionCardProps) {
  const isPositive = amount.startsWith("+")

  return (
    <Card className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-xl p-3">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-medium text-white">{title}</h3>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
        <div className="text-right">
          <div className={`text-base font-bold ${isPositive ? "text-green-400" : "text-white"}`}>
            {amount} {currency}
          </div>
          <div className="flex items-center justify-end gap-1 text-xs">
            <span className="text-gray-400">{date}</span>
            {upcoming && <span className="ml-1 text-blue-400">• Upcoming</span>}
          </div>
        </div>
      </div>
    </Card>
  )
}
