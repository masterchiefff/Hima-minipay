"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, CheckCircle, ArrowLeft } from "lucide-react"
import { SwahiliPattern } from "@/components/swahili-pattern"

export default function CreatePolicyPage() {
  const router = useRouter()
  const [policyType, setPolicyType] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleBack = () => {
    router.push("/dashboard")
  }

  const handleSubmit = () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      // Redirect after showing success
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
    }, 1500)
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <SwahiliPattern className="text-white" />
        <div className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 w-full max-w-md text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-xl font-bold mb-2">Policy Created!</h2>
          <p className="text-gray-400 mb-6">Your new policy has been successfully created.</p>
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600" onClick={() => router.push("/dashboard")}>
            Back to Dashboard
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" onClick={handleBack} className="mr-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-xl font-medium">Create New Policy</h1>
          <p className="text-xs text-gray-400">Set up a new insurance policy in minutes</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Card className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 mb-4">
            <h2 className="text-lg font-medium mb-4">Select Policy Type</h2>

            <div className="space-y-4">
              <div>
                <Label htmlFor="policyType">Insurance Type</Label>
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
                <div className="bg-purple-400/10 border border-purple-400/30 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-purple-400 mr-2" />
                    <h3 className="text-sm font-medium">Boda Boda Insurance</h3>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">
                    Covers accidents, theft, and third-party liability for your motorcycle.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Premium:</span>
                      <span className="text-white font-medium">8 cKES / month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Coverage:</span>
                      <span className="text-white font-medium">Up to 100,000 cKES</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Deductible:</span>
                      <span className="text-white font-medium">500 cKES</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Claim Processing:</span>
                      <span className="text-white font-medium">24-48 hours</span>
                    </div>
                  </div>
                </div>
              )}

              {policyType === "health" && (
                <div className="bg-yellow-300/10 border border-yellow-300/30 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-yellow-300 mr-2" />
                    <h3 className="text-sm font-medium">Health Insurance</h3>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">
                    Basic health coverage for medical expenses and hospital visits.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Premium:</span>
                      <span className="text-white font-medium">10 cKES / month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Coverage:</span>
                      <span className="text-white font-medium">Up to 50,000 cKES</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Waiting Period:</span>
                      <span className="text-white font-medium">30 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Claim Processing:</span>
                      <span className="text-white font-medium">3-5 days</span>
                    </div>
                  </div>
                </div>
              )}

              {policyType === "family" && (
                <div className="bg-green-300/10 border border-green-300/30 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-green-300 mr-2" />
                    <h3 className="text-sm font-medium">Family Insurance</h3>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">
                    Comprehensive coverage for your entire family&apos;s health needs.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Premium:</span>
                      <span className="text-white font-medium">25 cKES / month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Coverage:</span>
                      <span className="text-white font-medium">Up to 100,000 cKES</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Members Covered:</span>
                      <span className="text-white font-medium">Up to 5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Claim Processing:</span>
                      <span className="text-white font-medium">3-5 days</span>
                    </div>
                  </div>
                </div>
              )}

              {policyType === "market" && (
                <div className="bg-blue-300/10 border border-blue-300/30 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-blue-300 mr-2" />
                    <h3 className="text-sm font-medium">Market Vendor Insurance</h3>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">
                    Protection for your market stall, inventory, and business liability.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Premium:</span>
                      <span className="text-white font-medium">15 cKES / month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Coverage:</span>
                      <span className="text-white font-medium">Up to 75,000 cKES</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Inventory Protection:</span>
                      <span className="text-white font-medium">Up to 30,000 cKES</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Claim Processing:</span>
                      <span className="text-white font-medium">24-48 hours</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>

        <div>
          <Card className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 mb-4">
            <h2 className="text-lg font-medium mb-4">Policy Details</h2>

            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" className="bg-gray-900/70 border-gray-700 mt-1" defaultValue="Daniel Kamau" />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" className="bg-gray-900/70 border-gray-700 mt-1" defaultValue="+254 712 345 678" />
              </div>

              <div>
                <Label htmlFor="email">Email (Optional)</Label>
                <Input id="email" className="bg-gray-900/70 border-gray-700 mt-1" placeholder="Your email address" />
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
                  <div>
                    <Label htmlFor="year">Year of Manufacture</Label>
                    <Input id="year" className="bg-gray-900/70 border-gray-700 mt-1" placeholder="e.g. 2020" />
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
                  <div>
                    <Label htmlFor="preExisting">Pre-existing Conditions</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-900/70 border-gray-700 mt-1">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="diabetes">Diabetes</SelectItem>
                        <SelectItem value="hypertension">Hypertension</SelectItem>
                        <SelectItem value="asthma">Asthma</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {policyType === "family" && (
                <>
                  <div>
                    <Label htmlFor="familyMembers">Number of Family Members</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-900/70 border-gray-700 mt-1">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="spouseName">Spouse Name</Label>
                    <Input
                      id="spouseName"
                      className="bg-gray-900/70 border-gray-700 mt-1"
                      placeholder="Spouse's full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="childrenAges">Children&apos;s Ages (comma separated)</Label>
                    <Input
                      id="childrenAges"
                      className="bg-gray-900/70 border-gray-700 mt-1"
                      placeholder="e.g. 5, 8, 12"
                    />
                  </div>
                </>
              )}

              {policyType === "market" && (
                <>
                  <div>
                    <Label htmlFor="marketName">Market Name</Label>
                    <Input
                      id="marketName"
                      className="bg-gray-900/70 border-gray-700 mt-1"
                      placeholder="e.g. Gikomba Market"
                    />
                  </div>
                  <div>
                    <Label htmlFor="stallNumber">Stall Number/Location</Label>
                    <Input
                      id="stallNumber"
                      className="bg-gray-900/70 border-gray-700 mt-1"
                      placeholder="Your stall identifier"
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessType">Type of Business</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-900/70 border-gray-700 mt-1">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="produce">Fresh Produce</SelectItem>
                        <SelectItem value="clothing">Clothing</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="food">Food Vendor</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {policyType && (
                <div className="flex items-center justify-between bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mt-6">
                  <span className="text-sm font-medium">Monthly Premium:</span>
                  <span className="text-lg font-bold">
                    {policyType === "boda" && "8 cKES"}
                    {policyType === "health" && "10 cKES"}
                    {policyType === "family" && "25 cKES"}
                    {policyType === "market" && "15 cKES"}
                  </span>
                </div>
              )}

              <Button
                className="w-full bg-yellow-500 hover:bg-yellow-600 mt-4"
                onClick={handleSubmit}
                disabled={loading || !policyType}
              >
                {loading ? "Processing..." : "Create Policy"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
