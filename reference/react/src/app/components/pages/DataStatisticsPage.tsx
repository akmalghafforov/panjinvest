import { useState } from "react";
import { BarChart3, TrendingUp, Users, Building2, DollarSign, Globe, Download, FileSpreadsheet, Calendar, MapPin, Briefcase, Factory, Plane, Wheat, Zap } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

export default function DataStatisticsPage() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedSector, setSelectedSector] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const dataBlocks = [
    {
      label: "Population",
      value: "280,000",
      change: "+2.1% YoY",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      label: "Workforce",
      value: "110,000",
      change: "39% of population",
      icon: Briefcase,
      color: "bg-green-500",
    },
    {
      label: "Average Salary",
      value: "$250/month",
      change: "+8% YoY",
      icon: DollarSign,
      color: "bg-purple-500",
    },
    {
      label: "Tourism Visitors",
      value: "85,000",
      change: "+28% YoY",
      icon: Plane,
      color: "bg-orange-500",
    },
    {
      label: "Agriculture Production",
      value: "$45M",
      change: "+12% YoY",
      icon: Wheat,
      color: "bg-emerald-500",
    },
    {
      label: "Available Land",
      value: "1,200 ha",
      change: "For investment",
      icon: MapPin,
      color: "bg-pink-500",
    },
    {
      label: "Active Businesses",
      value: "8,500+",
      change: "+12% YoY",
      icon: Building2,
      color: "bg-indigo-500",
    },
    {
      label: "Export Products",
      value: "$28M",
      change: "+18% YoY",
      icon: Globe,
      color: "bg-cyan-500",
    },
    {
      label: "Infrastructure Coverage",
      value: "92%",
      change: "Electricity access",
      icon: Zap,
      color: "bg-yellow-500",
    },
  ];

  const economicData = [
    { year: "2020", gdp: 95, investment: 12, exports: 18 },
    { year: "2021", gdp: 105, investment: 15, exports: 20 },
    { year: "2022", gdp: 110, investment: 18, exports: 22 },
    { year: "2023", gdp: 115, investment: 22, exports: 24 },
    { year: "2024", gdp: 118, investment: 25, exports: 26 },
    { year: "2025", gdp: 120, investment: 28, exports: 28 },
  ];

  const sectorData = [
    { name: "Tourism", value: 35, color: "#3B82F6" },
    { name: "Agriculture", value: 28, color: "#10B981" },
    { name: "Food Processing", value: 18, color: "#F59E0B" },
    { name: "Logistics", value: 12, color: "#8B5CF6" },
    { name: "Other", value: 7, color: "#6B7280" },
  ];

  const monthlyVisitors = [
    { month: "Jan", visitors: 3200 },
    { month: "Feb", visitors: 2800 },
    { month: "Mar", visitors: 4500 },
    { month: "Apr", visitors: 6200 },
    { month: "May", visitors: 8100 },
    { month: "Jun", visitors: 12500 },
    { month: "Jul", visitors: 15800 },
    { month: "Aug", visitors: 14200 },
    { month: "Sep", visitors: 10500 },
    { month: "Oct", visitors: 7200 },
    { month: "Nov", visitors: 4800 },
    { month: "Dec", visitors: 3400 },
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Data & Statistics</h1>
              <p className="text-xl text-white/90">
                Comprehensive economic and demographic data for Panjakent region
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-white text-[#123A63] rounded-lg hover:bg-white/90 transition-colors inline-flex items-center gap-2">
                <Download className="h-5 w-5" />
                Export PDF
              </button>
              <button className="px-6 py-3 bg-white text-[#123A63] rounded-lg hover:bg-white/90 transition-colors inline-flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5" />
                Export Excel
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#1F2933] mb-2">Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"
              >
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#1F2933] mb-2">Sector</label>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"
              >
                <option value="all">All Sectors</option>
                <option value="tourism">Tourism</option>
                <option value="agriculture">Agriculture</option>
                <option value="food">Food Processing</option>
                <option value="logistics">Logistics</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#1F2933] mb-2">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"
              >
                <option value="all">All Locations</option>
                <option value="city">Panjakent City</option>
                <option value="seven-lakes">Seven Lakes Region</option>
                <option value="industrial">Industrial Zone</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Data Blocks */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {dataBlocks.map((block, index) => {
              const Icon = block.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 ${block.color} rounded-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-[#1F2933] mb-1">{block.value}</div>
                  <div className="text-sm text-[#667085] mb-2">{block.label}</div>
                  <div className="text-xs text-[#0F8A5F]">{block.change}</div>
                </div>
              );
            })}
          </div>

          {/* Economic Growth Chart */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 mb-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1F2933] mb-2">Economic Growth Trends</h2>
                <p className="text-[#667085]">GDP, Foreign Investment, and Exports (in millions USD)</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={economicData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="year" stroke="#667085" />
                <YAxis stroke="#667085" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="gdp" stroke="#123A63" strokeWidth={3} name="GDP" />
                <Line type="monotone" dataKey="investment" stroke="#0F8A5F" strokeWidth={3} name="FDI" />
                <Line type="monotone" dataKey="exports" stroke="#D6A536" strokeWidth={3} name="Exports" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Sector Distribution */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1F2933] mb-6">Investment by Sector</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {sectorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-6 space-y-2">
                {sectorData.map((sector, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: sector.color }} />
                      <span className="text-sm text-[#1F2933]">{sector.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-[#1F2933]">{sector.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tourism Statistics */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1F2933] mb-6">Tourism Visitors (2025)</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyVisitors}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" stroke="#667085" />
                  <YAxis stroke="#667085" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #E5E7EB",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="visitors" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Infrastructure Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 mb-8">
            <div className="p-8 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-[#1F2933]">Infrastructure Overview</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#1F2933]">Infrastructure</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#1F2933]">Coverage</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#1F2933]">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#1F2933]">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#1F2933]">Electricity</td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#1F2933]">99%</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Excellent</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#667085]">Reliable grid, industrial capacity available</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#1F2933]">Water Supply</td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#1F2933]">95%</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Excellent</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#667085]">Clean mountain water, abundant supply</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#1F2933]">Road Network</td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#1F2933]">88%</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Good</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#667085]">Connection to M34 highway</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#1F2933]">Internet/Telecom</td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#1F2933]">72%</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Developing</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#667085]">4G coverage, fiber expansion underway</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#1F2933]">Airport Access</td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#1F2933]">Regional</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Available</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#667085]">Dushanbe Airport 280km (4 hours drive)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Export Products */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#1F2933] mb-6">Top Export Products (2025)</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-[#F6F8FA] rounded-lg">
                <div className="text-2xl font-bold text-[#123A63] mb-1">$12M</div>
                <div className="text-sm text-[#667085]">Dried Fruits</div>
              </div>
              <div className="text-center p-4 bg-[#F6F8FA] rounded-lg">
                <div className="text-2xl font-bold text-[#123A63] mb-1">$8M</div>
                <div className="text-sm text-[#667085]">Fresh Produce</div>
              </div>
              <div className="text-center p-4 bg-[#F6F8FA] rounded-lg">
                <div className="text-2xl font-bold text-[#123A63] mb-1">$5M</div>
                <div className="text-sm text-[#667085]">Honey Products</div>
              </div>
              <div className="text-center p-4 bg-[#F6F8FA] rounded-lg">
                <div className="text-2xl font-bold text-[#123A63] mb-1">$3M</div>
                <div className="text-sm text-[#667085]">Handicrafts</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
