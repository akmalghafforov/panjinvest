import { BarChart3, TrendingUp, TrendingDown, DollarSign, Users, Building2, Calendar } from "lucide-react";
import { AdminPageLayout } from "../admin/AdminPageLayout";
import { Button } from "../ui/button";

export default function AdminStatisticsPage() {
  const kpiData = [
    {
      label: "Total Investment",
      value: "$42.8M",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600 bg-green-50"
    },
    {
      label: "Active Investors",
      value: "248",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-blue-600 bg-blue-50"
    },
    {
      label: "Projects Completed",
      value: "34",
      change: "+5.1%",
      trend: "up",
      icon: Building2,
      color: "text-purple-600 bg-purple-50"
    },
    {
      label: "Avg. Processing Time",
      value: "18 days",
      change: "-3.2%",
      trend: "down",
      icon: Calendar,
      color: "text-orange-600 bg-orange-50"
    }
  ];

  const sectorData = [
    { name: "Tourism", value: 35, amount: "$15.2M", color: "bg-blue-500" },
    { name: "Agriculture", value: 25, amount: "$10.8M", color: "bg-green-500" },
    { name: "Energy", value: 20, amount: "$8.6M", color: "bg-yellow-500" },
    { name: "Manufacturing", value: 12, amount: "$5.2M", color: "bg-purple-500" },
    { name: "Technology", value: 8, amount: "$3.0M", color: "bg-pink-500" }
  ];

  const monthlyData = [
    { month: "Jan", applications: 12, investments: 8, amount: 3.2 },
    { month: "Feb", applications: 15, investments: 10, amount: 4.5 },
    { month: "Mar", applications: 18, investments: 12, amount: 5.8 },
    { month: "Apr", applications: 22, investments: 15, amount: 7.2 },
    { month: "May", applications: 20, investments: 14, amount: 6.5 }
  ];

  return (
    <AdminPageLayout>

      <div className="flex-1">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#1F2933]">Statistics & Analytics</h1>
              <p className="text-[#667085] mt-1">Track performance metrics and insights</p>
            </div>
            <div className="flex gap-3">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
                <option>Last 6 Months</option>
                <option>Last Year</option>
              </select>
              <Button variant="outline">Export Report</Button>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:p-5 lg:p-6 mb-8">
            {kpiData.map((kpi) => {
              const Icon = kpi.icon;
              const TrendIcon = kpi.trend === "up" ? TrendingUp : TrendingDown;
              return (
                <div key={kpi.label} className="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${kpi.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${
                      kpi.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}>
                      <TrendIcon className="h-4 w-4" />
                      <span>{kpi.change}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#667085]">{kpi.label}</p>
                  <p className="text-xl md:text-2xl font-bold text-[#1F2933] mt-1">{kpi.value}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:p-4 md:p-5 lg:p-6 lg:p-8 mb-8">
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
              <h2 className="text-lg font-semibold text-[#1F2933] mb-6">Investment by Sector</h2>
              <div className="space-y-4">
                {sectorData.map((sector) => (
                  <div key={sector.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#1F2933]">{sector.name}</span>
                      <span className="text-sm text-[#667085]">{sector.amount}</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${sector.color}`}
                        style={{ width: `${sector.value}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-[#667085]">{sector.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
              <h2 className="text-lg font-semibold text-[#1F2933] mb-6">Monthly Trends</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-[#667085] mb-3">Applications vs Investments</h3>
                  <div className="h-48 flex items-end gap-4">
                    {monthlyData.map((data) => (
                      <div key={data.month} className="flex-1">
                        <div className="flex gap-1 items-end h-32 mb-2">
                          <div
                            className="flex-1 bg-blue-500 rounded-t"
                            style={{ height: `${(data.applications / 25) * 100}%` }}
                            title={`Applications: ${data.applications}`}
                          />
                          <div
                            className="flex-1 bg-green-500 rounded-t"
                            style={{ height: `${(data.investments / 25) * 100}%` }}
                            title={`Investments: ${data.investments}`}
                          />
                        </div>
                        <p className="text-xs text-center text-[#667085]">{data.month}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-4 md:p-5 lg:p-6 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded" />
                      <span className="text-xs text-[#667085]">Applications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded" />
                      <span className="text-xs text-[#667085]">Investments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
            <h2 className="text-lg font-semibold text-[#1F2933] mb-6">Investment Amount by Month</h2>
            <div className="h-64 flex items-end gap-4 md:p-4 md:p-5 lg:p-6 lg:p-8 px-4">
              {monthlyData.map((data) => (
                <div key={data.month} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-gradient-to-t from-[#0F8A5F] to-[#0F8A5F]/60 rounded-t-lg transition-all hover:from-[#0F8A5F]/80 hover:to-[#0F8A5F]/40"
                    style={{ height: `${(data.amount / 8) * 100}%` }}
                  >
                    <div className="flex items-start justify-center pt-2">
                      <span className="text-xs font-medium text-white">${data.amount}M</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#667085] mt-3">{data.month}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminPageLayout>
  );
}
