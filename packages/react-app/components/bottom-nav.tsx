"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, CreditCard, Wallet, BarChart2, AlertCircle, Settings } from "lucide-react"

export function BottomNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 z-10">
      <div className="flex items-center justify-around p-3">
        <BottomNavItem href="/dashboard" icon={<LayoutDashboard />} active={isActive("/dashboard")} />
        <BottomNavItem href="/policies" icon={<CreditCard />} active={isActive("/policies")} />
        <BottomNavItem href="/claims" icon={<AlertCircle />} active={isActive("/claims")} />
        <BottomNavItem href="/payments" icon={<Wallet />} active={isActive("/payments")} />
        <BottomNavItem href="/statistics" icon={<BarChart2 />} active={isActive("/statistics")} />
        <BottomNavItem href="/settings" icon={<Settings />} active={isActive("/settings")} />
      </div>
    </div>
  )
}

interface BottomNavItemProps {
  icon: React.ReactNode
  href: string
  active: boolean
}

function BottomNavItem({ icon, href, active }: BottomNavItemProps) {
  return (
    <Link href={href} className="flex flex-col items-center justify-center text-gray-500 hover:text-white">
      <div className={`${active ? "text-yellow-300" : "text-gray-500"}`}>{icon}</div>
      <span className="text-[0.6rem] mt-1">{href.substring(1)}</span>
    </Link>
  )
}
