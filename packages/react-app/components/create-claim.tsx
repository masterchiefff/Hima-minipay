"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Upload, CheckCircle, Camera } from "lucide-react"
import { SwahiliPattern } from "@/components/swahili-pattern"

export function CreateClaim() {
  const router = useRouter()
  const [policyId, setPolicyId] = useState("")
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
          <h2 className="text-xl font-bold mb-2">Claim Submitted!</h2>
          <p className="text-gray-400 mb-6">Your claim has been successfully submitted and is under review.</p>
          <Button className="w-full bg-purple-500 hover:bg-purple-600" onClick={() => router.push("/")}>
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
        <h1 className="text-xl font-medium">Submit a Claim</h1>
      </div>

      <Card className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-xl p-4 mb-4">
        <div className="space-y-4">
          <div>
            <Label htmlFor="policySelect">Select Policy</Label>
            <Select value={policyId} onValueChange={setPolicyId}>
              <SelectTrigger className="bg-gray-900/70 border-gray-700 mt-1">
                <SelectValue placeholder="Choose policy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PV8821">Boda Boda Cover (PV8821)</SelectItem>
                <SelectItem value="PV4432">Health Insurance (PV4432)</SelectItem>
                <SelectItem value="PV7292">Family Insurance (PV7292)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {policyId === "PV8821" && (
            <div className="bg-purple-400/10 border border-purple-400/30 rounded-lg p-3">
              <h3 className="text-sm font-medium mb-2">Boda Boda Cover</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="text-gray-400">Policy No.:</div>
                  <div className="text-white">PV8821</div>
                </div>
                <div>
                  <div className="text-gray-400">Bike No.:</div>
                  <div className="text-white">KBZ-123E</div>
                </div>
                <div>
                  <div className="text-gray-400">Coverage:</div>
                  <div className="text-white">Up to 100,000 cKES</div>
                </div>
                <div>
                  <div className="text-gray-400">Status:</div>
                  <div className="text-green-400">Active</div>
                </div>
              </div>
            </div>
          )}

          {policyId === "PV4432" && (
            <div className="bg-yellow-300/10 border border-yellow-300/30 rounded-lg p-3">
              <h3 className="text-sm font-medium mb-2">Health Insurance</h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="text-gray-400">Policy No.:</div>
                  <div className="text-white">PV4432</div>
                </div>
                <div>
                  <div className="text-gray-400">Type:</div>
                  <div className="text-white">Individual</div>
                </div>
                <div>
                  <div className="text-gray-400">Coverage:</div>
                  <div className="text-white">Up to 50,000 cKES</div>
                </div>
                <div>
                  <div className="text-gray-400">Status:</div>
                  <div className="text-green-400">Active</div>
                </div>
              </div>
            </div>
          )}

          {policyId && (
            <>
              <div className="pt-2 border-t border-gray-800">
                <Label htmlFor="claimType">Claim Type</Label>
                <Select>
                  <SelectTrigger className="bg-gray-900/70 border-gray-700 mt-1">
                    <SelectValue placeholder="Select claim type" />
                  </SelectTrigger>
                  <SelectContent>
                    {policyId === "PV8821" && (
                      <>
                        <SelectItem value="accident">Accident</SelectItem>
                        <SelectItem value="theft">Theft</SelectItem>
                        <SelectItem value="damage">Vehicle Damage</SelectItem>
                      </>
                    )}
                    {policyId === "PV4432" && (
                      <>
                        <SelectItem value="medical">Medical Expenses</SelectItem>
                        <SelectItem value="hospital">Hospital Stay</SelectItem>
                        <SelectItem value="medication">Medication</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="incidentDate">Incident Date</Label>
                <Input id="incidentDate" type="date" className="bg-gray-900/70 border-gray-700 mt-1" />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what happened..."
                  className="bg-gray-900/70 border-gray-700 mt-1 min-h-[80px]"
                />
              </div>

              <div>
                <Label htmlFor="claimAmount">Claim Amount (cKES)</Label>
                <Input
                  id="claimAmount"
                  type="number"
                  placeholder="Enter amount"
                  className="bg-gray-900/70 border-gray-700 mt-1"
                />
              </div>

              <div>
                <Label className="block mb-2">Upload Evidence</Label>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center border-dashed border-2 border-gray-700 bg-gray-900/30"
                  >
                    <Camera className="w-5 h-5 mb-1" />
                    <span className="text-xs">Take Photo</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center border-dashed border-2 border-gray-700 bg-gray-900/30"
                  >
                    <Upload className="w-5 h-5 mb-1" />
                    <span className="text-xs">Upload File</span>
                  </Button>
                </div>
              </div>
            </>
          )}

          <Button
            className="w-full bg-purple-500 hover:bg-purple-600"
            onClick={handleSubmit}
            disabled={loading || !policyId}
          >
            {loading ? "Processing..." : "Submit Claim"}
          </Button>
        </div>
      </Card>
    </div>
  )
}
