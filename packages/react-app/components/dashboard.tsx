import { Card } from "@/components/ui/card"
import { ActivityCard } from "@/components/activity-card"
import { QuickActionCard } from "@/components/quick-action-card"
import { Shield, AlertCircle, CreditCard, Wallet } from "lucide-react"

export function Dashboard() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-xl font-medium">
          Hello, <span className="font-bold">Daniel</span>
        </h1>
        <p className="text-xs text-gray-400">Micro-insurance for gig work protection</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <QuickActionCard
          title="New Policy"
          description="Join in 3 taps"
          icon={<Shield className="w-5 h-5" />}
          color="bg-yellow-300"
          textColor="text-black"
          action="create-policy"
        />
        <QuickActionCard
          title="Make Claim"
          description="Claim in 2 taps"
          icon={<AlertCircle className="w-5 h-5" />}
          color="bg-purple-400"
          textColor="text-black"
          action="create-claim"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <QuickActionCard
          title="My Policies"
          description="View & manage"
          icon={<CreditCard className="w-5 h-5" />}
          color="bg-green-300"
          textColor="text-black"
          action="view-policies"
        />
        <QuickActionCard
          title="My Wallet"
          description="120.50 cKES"
          icon={<Wallet className="w-5 h-5" />}
          color="bg-blue-300"
          textColor="text-black"
          action="view-wallet"
        />
      </div>

      <div className="mt-4">
        <Card className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-xl p-3 mb-3">
          <h3 className="text-sm font-medium text-white">Recent Activity</h3>
        </Card>

        <div className="space-y-3">
          <ActivityCard
            title="Policy Created"
            description="Boda Boda Insurance"
            date="Today"
            amount="8 cKES"
            type="policy"
          />
          <ActivityCard
            title="Premium Payment"
            description="Health Insurance"
            date="Yesterday"
            amount="10 cKES"
            type="payment"
          />
          <ActivityCard
            title="Claim Submitted"
            description="Vehicle Repair"
            date="Apr 15"
            amount="3,000 cKES"
            type="claim"
          />
          <ActivityCard title="Wallet Top-up" description="MiniPay" date="Apr 10" amount="+50 cKES" type="wallet" />
        </div>
      </div>
    </div>
  )
}
