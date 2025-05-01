import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Statistics() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-xl font-medium">Statistics</h1>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="bg-gray-900/60 mb-4 w-full">
          <TabsTrigger value="overview" className="flex-1">
            Overview
          </TabsTrigger>
          <TabsTrigger value="claims" className="flex-1">
            Claims
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-3">
          <Card className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-xl p-3">
            <h3 className="text-sm font-medium text-white mb-2">Policy Distribution</h3>
            <div className="h-40">
              <SimplePieChart />
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-3">
            <StatCard title="Health" value="10 cKES" change="+5%" positive />
            <StatCard title="Vehicle" value="8 cKES" change="-2%" positive={false} />
          </div>

          <Card className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-xl p-3">
            <h3 className="text-sm font-medium text-white mb-2">Premium Payments</h3>
            <div className="h-40">
              <SimpleBarChart />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="claims" className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <StatCard title="Total Claims" value="12" change="+2" positive={false} />
            <StatCard title="Approved" value="10" change="+2" positive />
          </div>

          <Card className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-xl p-3">
            <h3 className="text-sm font-medium text-white mb-2">Claims History</h3>
            <div className="h-40">
              <SimpleLineChart />
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string
  change: string
  positive: boolean
}

function StatCard({ title, value, change, positive }: StatCardProps) {
  return (
    <Card className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-3">
      <h4 className="text-xs text-gray-400 mb-1">{title}</h4>
      <div className="text-lg font-bold text-white">{value}</div>
      {change && (
        <div className={`text-xs mt-1 ${positive ? "text-green-400" : "text-red-400"}`}>
          {positive ? "↑" : "↓"} {change}
        </div>
      )}
    </Card>
  )
}

function SimplePieChart() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="25" fill="#fcd34d" />
      <path d="M50,50 L50,25 A25,25 0 0,1 75,50 Z" fill="#a78bfa" />
      <path d="M50,50 L75,50 A25,25 0 0,1 50,75 Z" fill="#6ee7b7" />
      <text x="30" y="40" fontSize="3" fill="white">
        Health 40%
      </text>
      <text x="60" y="45" fontSize="3" fill="white">
        Vehicle 30%
      </text>
      <text x="45" y="65" fontSize="3" fill="white">
        Wealth 30%
      </text>
    </svg>
  )
}

function SimpleBarChart() {
  return (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <rect x="10" y="10" width="10" height="40" fill="#fcd34d" opacity="0.7" />
      <rect x="30" y="20" width="10" height="30" fill="#a78bfa" opacity="0.7" />
      <rect x="50" y="15" width="10" height="35" fill="#6ee7b7" opacity="0.7" />
      <rect x="70" y="5" width="10" height="45" fill="#fcd34d" opacity="0.7" />
      <line x1="5" y1="50" x2="95" y2="50" stroke="#666" strokeWidth="0.5" />
      <text x="10" y="55" fontSize="3" fill="#999">
        Jan
      </text>
      <text x="30" y="55" fontSize="3" fill="#999">
        Feb
      </text>
      <text x="50" y="55" fontSize="3" fill="#999">
        Mar
      </text>
      <text x="70" y="55" fontSize="3" fill="#999">
        Apr
      </text>
    </svg>
  )
}

function SimpleLineChart() {
  return (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <polyline points="10,40 30,30 50,35 70,20 90,25" fill="none" stroke="#a78bfa" strokeWidth="1" />
      <polyline points="10,45 30,40 50,30 70,35 90,30" fill="none" stroke="#fcd34d" strokeWidth="1" />
      <line x1="5" y1="50" x2="95" y2="50" stroke="#666" strokeWidth="0.5" />
      <text x="10" y="55" fontSize="3" fill="#999">
        Jan
      </text>
      <text x="30" y="55" fontSize="3" fill="#999">
        Feb
      </text>
      <text x="50" y="55" fontSize="3" fill="#999">
        Mar
      </text>
      <text x="70" y="55" fontSize="3" fill="#999">
        Apr
      </text>
      <text x="90" y="55" fontSize="3" fill="#999">
        May
      </text>
    </svg>
  )
}
