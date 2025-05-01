import { Card } from "@/components/ui/card"
import { CreditCard, AlertCircle, DollarSign, Wallet } from "lucide-react"

interface ActivityCardProps {
  title: string
  description: string
  date: string
  amount: string
  type: "policy" | "claim" | "payment" | "wallet"
}

export function ActivityCard({ title, description, date, amount, type }: ActivityCardProps) {
  const getIcon = () => {
    switch (type) {
      case "policy":
        return <CreditCard className="w-4 h-4 text-green-300" />
      case "claim":
        return <AlertCircle className="w-4 h-4 text-purple-400" />
      case "payment":
        return <DollarSign className="w-4 h-4 text-yellow-300" />
      case "wallet":
        return <Wallet className="w-4 h-4 text-blue-300" />
    }
  }

  const getBgColor = () => {
    switch (type) {
      case "policy":
        return "bg-green-300/10"
      case "claim":
        return "bg-purple-400/10"
      case "payment":
        return "bg-yellow-300/10"
      case "wallet":
        return "bg-blue-300/10"
    }
  }

  return (
    <Card className={`backdrop-blur-sm border border-gray-800 rounded-xl p-3 ${getBgColor()}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-black/30 rounded-full p-1.5 mr-2">{getIcon()}</div>
          <div>
            <h3 className="text-sm font-medium text-white">{title}</h3>
            <p className="text-xs text-gray-400">{description}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-white">{amount}</div>
          <div className="text-xs text-gray-400">{date}</div>
        </div>
      </div>
    </Card>
  )
}
