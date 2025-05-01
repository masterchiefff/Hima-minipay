"use client"

import { useState, useEffect } from "react"
import { Dashboard } from "@/components/dashboard"
import { Policies } from "@/components/policies"
import { Claims } from "@/components/claims"
import { Payments } from "@/components/payments"
import { Statistics } from "@/components/statistics"
import { CreatePolicy } from "@/components/create-policy"
import { CreateClaim } from "@/components/create-claim"
import { ConnectWallet } from "@/components/connect-wallet"
import { SwahiliPattern } from "@/components/swahili-pattern"
import { useRouter, usePathname } from "next/navigation"

export default function Home() {
  const [connected, setConnected] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  // Simulate checking for existing connection
  useEffect(() => {
    const checkConnection = async () => {
      // In a real app, check if MiniPay wallet is already connected
      const hasConnection = localStorage.getItem("miniPayConnected") === "true"
      setConnected(hasConnection)
      setLoading(false)
    }

    checkConnection()
  }, [])

  const handleConnect = () => {
    // Simulate connecting to MiniPay wallet
    localStorage.setItem("miniPayConnected", "true")
    setConnected(true)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
            <span className="text-black text-xl font-bold">H</span>
          </div>
          <p className="text-sm">Loading...</p>
        </div>
      </div>
    )
  }

  if (!connected) {
    return <ConnectWallet onConnect={handleConnect} />
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SwahiliPattern className="text-white" />

      <div>
        <main className="p-4 max-w-lg mx-auto">
          {pathname === "/" && <Dashboard />}
          {pathname === "/policies" && <Policies />}
          {pathname === "/claims" && <Claims />}
          {pathname === "/payments" && <Payments />}
          {pathname === "/stats" && <Statistics />}
          {pathname === "/create-policy" && <CreatePolicy />}
          {pathname === "/create-claim" && <CreateClaim />}
        </main>
      </div>
    </div>
  )
}
