import { Search, Filter, Mail, Phone, Globe, Building2, TrendingUp, MoreVertical, Plus } from "lucide-react";
import { useState } from "react";

export default function InvestorCRMPage() {
  const [viewMode, setViewMode] = useState<"pipeline" | "table">("pipeline");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const stages = [
    { name: "New", color: "bg-blue-500", textColor: "text-blue-700", bgLight: "bg-blue-50" },
    { name: "Contacted", color: "bg-indigo-500", textColor: "text-indigo-700", bgLight: "bg-indigo-50" },
    { name: "Meeting Scheduled", color: "bg-purple-500", textColor: "text-purple-700", bgLight: "bg-purple-50" },
    { name: "Negotiation", color: "bg-pink-500", textColor: "text-pink-700", bgLight: "bg-pink-50" },
    { name: "Documents Pending", color: "bg-orange-500", textColor: "text-orange-700", bgLight: "bg-orange-50" },
    { name: "Approved", color: "bg-green-500", textColor: "text-green-700", bgLight: "bg-green-50" },
    { name: "Active", color: "bg-emerald-500", textColor: "text-emerald-700", bgLight: "bg-emerald-50" },
    { name: "Closed / Rejected", color: "bg-gray-500", textColor: "text-gray-700", bgLight: "bg-gray-50" },
  ];

  const investors = [
    {
      id: 1,
      name: "Ahmed Hassan",
      country: "UAE",
      email: "ahmed.hassan@example.com",
      phone: "+971 50 123 4567",
      sector: "Tourism",
      investment: "$350,000",
      stage: "Negotiation",
      responsible: "Farrukh Mahmadov",
      lastContact: "May 20, 2026",
      nextFollowUp: "May 22, 2026",
      type: "Individual",
    },
    {
      id: 2,
      name: "Elena Petrova",
      country: "Russia",
      email: "elena.p@example.com",
      phone: "+7 495 123 4567",
      sector: "Logistics",
      investment: "$600,000",
      stage: "Active",
      responsible: "Farrukh Mahmadov",
      lastContact: "May 19, 2026",
      nextFollowUp: "June 1, 2026",
      type: "Company",
    },
    {
      id: 3,
      name: "John Smith",
      country: "USA",
      email: "john.smith@example.com",
      phone: "+1 555 123 4567",
      sector: "Agriculture",
      investment: "$120,000",
      stage: "Documents Pending",
      responsible: "Rustam Nazarov",
      lastContact: "May 18, 2026",
      nextFollowUp: "May 23, 2026",
      type: "Individual",
    },
    {
      id: 4,
      name: "Li Wei",
      country: "China",
      email: "li.wei@example.com",
      phone: "+86 138 0000 0000",
      sector: "Tourism",
      investment: "$1,200,000",
      stage: "Meeting Scheduled",
      responsible: "Dilbar Rahimova",
      lastContact: "May 17, 2026",
      nextFollowUp: "May 22, 2026",
      type: "Company",
    },
    {
      id: 5,
      name: "Mehmet Yılmaz",
      country: "Turkey",
      email: "mehmet.y@example.com",
      phone: "+90 532 123 4567",
      sector: "Food Processing",
      investment: "$280,000",
      stage: "Approved",
      responsible: "Rustam Nazarov",
      lastContact: "May 15, 2026",
      nextFollowUp: "May 28, 2026",
      type: "Company",
    },
    {
      id: 6,
      name: "Sarah Johnson",
      country: "UK",
      email: "sarah.j@example.com",
      phone: "+44 20 7123 4567",
      sector: "Renewable Energy",
      investment: "$180,000",
      stage: "Contacted",
      responsible: "Farrukh Mahmadov",
      lastContact: "May 14, 2026",
      nextFollowUp: "May 21, 2026",
      type: "Individual",
    },
    {
      id: 7,
      name: "Hans Mueller",
      country: "Germany",
      email: "h.mueller@example.com",
      phone: "+49 30 1234 5678",
      sector: "Tourism",
      investment: "$450,000",
      stage: "New",
      responsible: "Dilbar Rahimova",
      lastContact: "May 21, 2026",
      nextFollowUp: "May 24, 2026",
      type: "Company",
    },
    {
      id: 8,
      name: "Maria Garcia",
      country: "Spain",
      email: "maria.g@example.com",
      phone: "+34 91 123 4567",
      sector: "Agriculture",
      investment: "$95,000",
      stage: "New",
      responsible: "Rustam Nazarov",
      lastContact: "May 20, 2026",
      nextFollowUp: "May 23, 2026",
      type: "Individual",
    },
  ];

  const filteredInvestors = investors.filter((investor) => {
    const matchesSearch =
      searchQuery === "" ||
      investor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      investor.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      investor.sector.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || investor.stage === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getInvestorsByStage = (stageName: string) => {
    return filteredInvestors.filter((investor) => investor.stage === stageName);
  };

  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Investor CRM</h1>
          <p className="text-xl text-white/90">Manage relationships with current and prospective investors</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#123A63] mb-1">{investors.length}</div>
              <div className="text-sm text-[#667085]">Total Investors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0F8A5F] mb-1">
                {investors.filter((i) => i.stage === "Active").length}
              </div>
              <div className="text-sm text-[#667085]">Active</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D6A536] mb-1">
                {investors.filter((i) => i.stage === "New").length}
              </div>
              <div className="text-sm text-[#667085]">New This Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#123A63] mb-1">15</div>
              <div className="text-sm text-[#667085]">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search, Filter, and View Toggle */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 flex-1 w-full">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" />
                <input
                  type="text"
                  placeholder="Search investors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-4">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  {stages.map((stage) => (
                    <option key={stage.name} value={stage.name}>
                      {stage.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("pipeline")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  viewMode === "pipeline"
                    ? "bg-[#123A63] text-white"
                    : "bg-gray-100 text-[#667085] hover:bg-gray-200"
                }`}
              >
                Pipeline View
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  viewMode === "table"
                    ? "bg-[#123A63] text-white"
                    : "bg-gray-100 text-[#667085] hover:bg-gray-200"
                }`}
              >
                Table View
              </button>
            </div>
          </div>
          <div className="mt-4 text-sm text-[#667085]">
            Showing {filteredInvestors.length} of {investors.length} investors
          </div>
        </div>
      </section>

      {/* Pipeline View */}
      {viewMode === "pipeline" && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-4 min-w-max">
                {stages.map((stage) => {
                  const stageInvestors = getInvestorsByStage(stage.name);
                  return (
                    <div key={stage.name} className="w-80 flex-shrink-0">
                      <div className={`${stage.color} text-white p-4 rounded-t-xl`}>
                        <h3 className="font-semibold mb-1">{stage.name}</h3>
                        <p className="text-sm text-white/80">{stageInvestors.length} investors</p>
                      </div>
                      <div className={`${stage.bgLight} p-4 rounded-b-xl min-h-[500px] space-y-3`}>
                        {stageInvestors.map((investor) => (
                          <div
                            key={investor.id}
                            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="font-semibold text-[#1F2933] mb-1">{investor.name}</h4>
                                <div className="flex items-center gap-1 text-xs text-[#667085]">
                                  <Globe className="h-3 w-3" />
                                  {investor.country}
                                </div>
                              </div>
                              <button className="p-1 hover:bg-gray-100 rounded">
                                <MoreVertical className="h-4 w-4 text-[#667085]" />
                              </button>
                            </div>
                            <div className="space-y-2 mb-3">
                              <div className="text-xs text-[#667085]">
                                <span className="font-medium">Sector:</span> {investor.sector}
                              </div>
                              <div className="text-xs text-[#667085]">
                                <span className="font-medium">Investment:</span> {investor.investment}
                              </div>
                              <div className="text-xs text-[#667085]">
                                <span className="font-medium">Type:</span> {investor.type}
                              </div>
                            </div>
                            <div className="pt-3 border-t border-gray-100">
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-[#667085]">Responsible:</span>
                                <span className="font-medium text-[#1F2933]">{investor.responsible.split(" ")[0]}</span>
                              </div>
                              <div className="flex items-center justify-between text-xs mt-1">
                                <span className="text-[#667085]">Next follow-up:</span>
                                <span className="font-medium text-[#0F8A5F]">{investor.nextFollowUp.split(",")[0]}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                        <button className={`w-full p-4 border-2 border-dashed ${stage.textColor} border-current rounded-lg hover:bg-white/50 transition-colors flex items-center justify-center gap-2`}>
                          <Plus className="h-4 w-4" />
                          <span className="text-sm">Add Investor</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Table View */}
      {viewMode === "table" && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#1F2933]">Investor</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#1F2933]">Contact</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#1F2933]">Sector</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#1F2933]">Investment</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#1F2933]">Stage</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#1F2933]">Responsible</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#1F2933]">Next Follow-up</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredInvestors.map((investor) => {
                      const stage = stages.find((s) => s.name === investor.stage);
                      return (
                        <tr key={investor.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <div>
                              <div className="font-semibold text-[#1F2933]">{investor.name}</div>
                              <div className="flex items-center gap-1 text-sm text-[#667085] mt-1">
                                <Globe className="h-3 w-3" />
                                {investor.country}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-sm text-[#667085]">
                                <Mail className="h-3 w-3" />
                                <span className="truncate max-w-[200px]">{investor.email}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-[#667085]">
                                <Phone className="h-3 w-3" />
                                {investor.phone}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 bg-[#123A63]/10 text-[#123A63] text-xs rounded-full">
                              {investor.sector}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-[#0F8A5F]" />
                              <span className="font-semibold text-[#1F2933]">{investor.investment}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 ${stage?.bgLight} ${stage?.textColor} text-xs rounded-full`}>
                              {investor.stage}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-[#1F2933]">{investor.responsible}</td>
                          <td className="px-6 py-4 text-sm text-[#667085]">{investor.nextFollowUp}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
