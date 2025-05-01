"use client"

import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import type { ReactNode } from "react"

interface QuickActionCardProps {
  title: string
  description: string
  icon: ReactNode
  color: string
  textColor: string
  action: string
}

export function QuickActionCard({ title, description, icon, color, textColor, action }: QuickActionCardProps) {
  const router = useRouter()

  const handleClick = () => {
    switch (action) {
      case "create-policy":
        router.push("/create-policy")
        break
      case "create-claim":
        router.push("/create-claim")
        break
      case "view-policies":
        router.push("/policies")
        break
      case "view-wallet":
        router.push("/payments")
        break
    }
  }

  return (
    <Card
      className={`${color} ${textColor} rounded-xl p-3 relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity`}
      onClick={handleClick}
    >
      <div className="flex items-center mb-1">
        <div className="bg-black/20 rounded-full p-1.5 mr-2">{icon}</div>
        <div className="text-sm font-medium">{title}</div>
      </div>
      <div className="text-xs opacity-80 ml-9">{description}</div>
    </Card>
  )
}
