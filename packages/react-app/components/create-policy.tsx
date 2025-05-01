"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Shield, CheckCircle } from "lucide-react"
import { SwahiliPattern } from "@/components/swahili-pattern"

export function CreatePolicy() {
  const router = useRouter()
  const [policyType, setPolicyType] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleBack = () => {
    router.push("/")
  }

  const handleSubmit = () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      // Redirect after showing success
      setTimeout(() => {
        router.push("/")
      }, 2000)
    }, 1500)
  }

  if (success) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <SwahiliPattern className="text-white" />
        <div className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 w-full max-w-md text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-xl font-bold mb-2">Policy Created!</h2>
          <p className="text-gray-400 mb-6">Your new policy has been successfully created.</p>
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600" onClick={() => router.push("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center mb-4">
        <Button variant="ghost" size="icon" onClick={handleBack} className="mr-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-medium">Create New Policy</h1>
      </div>

      <Card className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-xl p-4 mb-4">
        <div className="space-y-4">
          <div>
            <Label htmlFor="policyType">Select Policy Type</Label>
            <Select value={policyType} onValueChange={setPolicyType}>
              <SelectTrigger className="bg-gray-900/70 border-gray-700 mt-1">
                <SelectValue placeholder="Choose policy type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="boda">Boda Boda Insurance</SelectItem>
                <SelectItem value="health">Health Insurance</SelectItem>
                <SelectItem value="family">Family Insurance</SelectItem>
                <SelectItem value="market">Market Vendor Insurance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {policyType === "boda" && (
            <div className="bg-purple-400/10 border border-purple-400/30 rounded-lg p-3">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="text-sm font-medium">Boda Boda Insurance</h3>
              </div>
              <p className="text-xs text-gray-400 mb-2">
                Covers accidents, theft, and third-party liability for your motorcycle.
              </p>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Premium:</span>
                <span className="text-white font-medium">8 cKES / month</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Coverage:</span>
                <span className="text-white font-medium">Up to 100,000 cKES</span>
              </div>
            </div>
          )}

          {policyType === "health" && (
            <div className="bg-yellow-300/10 border border-yellow-300/30 rounded-lg p-3">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-yellow-300 mr-2" />
                <h3 className="text-sm font-medium">Health Insurance</h3>
              </div>
              <p className="text-xs text-gray-400 mb-2">
                Basic health coverage for medical expenses and hospital visits.
              </p>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Premium:</span>
                <span className="text-white font-medium">10 cKES / month</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Coverage:</span>
                <span className="text-white font-medium">Up to 50,000 cKES</span>
              </div>
            </div>
          )}

          {policyType && (
            <>
              <div className="pt-2 border-t border-gray-800">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" className="bg-gray-900/70 border-gray-700 mt-1" defaultValue="Daniel Kamau" />
              </div>

              {policyType === "boda" && (
                <>
                  <div>
                    <Label htmlFor="plateNumber">Motorcycle Plate Number</Label>
                    <Input
                      id="plateNumber"
                      className="bg-gray-900/70 border-gray-700 mt-1"
                      placeholder="e.g. KBZ-123E"
                    />
                  </div>
                  <div>
                    <Label htmlFor="model">Motorcycle Model</Label>
                    <Input id="model" className="bg-gray-900/70 border-gray-700 mt-1" placeholder="e.g. Boxer BM150" />
                  </div>
                </>
              )}

              {policyType === "health" && (
                <>
                  <div>
                    <Label htmlFor="idNumber">ID Number</Label>
                    <Input
                      id="idNumber"
                      className="bg-gray-900/70 border-gray-700 mt-1"
                      placeholder="National ID Number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" className="bg-gray-900/70 border-gray-700 mt-1" />
                  </div>
                </>
              )}

              <div className="flex items-center justify-between bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                <span className="text-sm font-medium">Payment Amount:</span>
                <span className="text-lg font-bold">
                  {policyType === "boda" && "8 cKES"}
                  {policyType === "health" && "10 cKES"}
                </span>
              </div>
            </>
          )}

          <Button
            className="w-full bg-yellow-500 hover:bg-yellow-600"
            onClick={handleSubmit}
            disabled={loading || !policyType}
          >
            {loading ? "Processing..." : "Create Policy & Pay"}
          </Button>
        </div>
      </Card>
    </div>
  )
}
