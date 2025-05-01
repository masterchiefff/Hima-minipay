"use client"

import { SwahiliPattern } from "@/components/swahili-pattern"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"

interface ConnectWalletProps {
  onConnect: () => void
}

export function ConnectWallet({ onConnect }: ConnectWalletProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <SwahiliPattern className="text-white" />

      <div className="w-full max-w-md text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <span className="text-black text-2xl font-bold">H</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-2">Hima Insurance</h1>
        <p className="text-gray-400 mb-8">Quick, on-chain protection for Africa's gig workers</p>

        <div className="space-y-4">
          <div className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-medium mb-4">Connect with MiniPay</h2>
            <p className="text-sm text-gray-400 mb-6">
              Connect your MiniPay wallet to access micro-insurance policies with just a few taps.
            </p>

            <Button
              onClick={onConnect}
              className="w-full bg-yellow-500 hover:bg-yellow-600 py-6 flex items-center justify-center gap-2"
            >
              <Wallet className="w-5 h-5" />
              <span>Connect MiniPay Wallet</span>
            </Button>
          </div>

          <div className="text-xs text-gray-500">
            By connecting, you agree to Hima's Terms of Service and Privacy Policy
          </div>
        </div>
      </div>
    </div>
  )
}
