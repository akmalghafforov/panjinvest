import { useState } from "react";
import { Link } from "react-router";
import { Search, Filter, Eye, Send, Calendar, User as UserIcon, ChevronDown } from "lucide-react";
import { AdminPageLayout } from "../admin/AdminPageLayout";
import { StatusBadge } from "../invest/StatusBadge";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

const crmStages = [
  "All Stages",
  "New",
  "Contacted",
  "Meeting Scheduled",
  "Negotiation",
  "Documents Pending",
  "Approved",
  "Active",
  "Closed/Rejected"
];

const sectors = [
  "All Sectors",
  "Tourism",
  "Agriculture",
  "Food Processing",
  "Logistics",
  "Renewable Energy",
  "Handicrafts"
];

const countries = [
  "All Countries",
  "United States",
  "China",
  "UAE",
  "Russia",
  "Iran",
  "Turkey",
  "Brazil"
];

const officers = [
  "All Officers",
  "Farrukh Mahmadov",
  "Aziza Rahimova",
  "Rustam Nazarov",
  "Unassigned"
];

export default function ImprovedInvestorCRMPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStage, setSelectedStage] = useState("All Stages");
  const [selectedSector, setSelectedSector] = useState("All Sectors");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedOfficer, setSelectedOfficer] = useState("All Officers");
  const [showFilters, setShowFilters] = useState(false);

  const investors = [
    {
      id: "inv-001",
      name: "John Investor",
      country: "United States",
      company: "Global Ventures LLC",
      investorType: "Company",
      sector: "Tourism",
      investmentAmount: "$400,000",
      stage: "documents-pending",
      officer: "Farrukh Mahmadov",
      lastContact: "2 days ago",
      nextFollowUp: "Jan 25, 2026",
      email: "john@example.com",
      phone: "+1 555 0100"
    },
    {
      id: "inv-002",
      name: "Maria Santos",
      country: "Brazil",
      company: "Santos Agriculture Ltd",
      investorType: "Company",
      sector: "Agriculture",
      investmentAmount: "$120,000",
      stage: "contacted",
      officer: "Aziza Rahimova",
      lastContact: "5 days ago",
      nextFollowUp: "Jan 28, 2026",
      email: "maria@santos-ag.com",
      phone: "+55 11 9999-0000"
    },
    {
      id: "inv-003",
      name: "Ahmed Al-Rashid",
      country: "UAE",
      company: "Desert Investment Group",
      investorType: "Investment fund",
      sector: "Food Processing",
      investmentAmount: "$500,000",
      stage: "meeting-scheduled",
      officer: "Rustam Nazarov",
      lastContact: "1 day ago",
      nextFollowUp: "Jan 28, 2026",
      email: "ahmed@desertinvest.ae",
      phone: "+971 50 123 4567"
    },
    {
      id: "inv-004",
      name: "Li Wei",
      country: "China",
      company: "Silk Road Logistics",
      investorType: "Company",
      sector: "Logistics",
      investmentAmount: "$750,000",
      stage: "new",
      officer: "Unassigned",
      lastContact: "Just now",
      nextFollowUp: "Pending",
      email: "liwei@silkroadlog.cn",
      phone: "+86 138 0000 0000"
    },
    {
      id: "inv-005",
      name: "Elena Volkova",
      country: "Russia",
      company: "Volga Energy",
      investorType: "Company",
      sector: "Renewable Energy",
      investmentAmount: "$300,000",
      stage: "negotiation",
      officer: "Farrukh Mahmadov",
      lastContact: "3 days ago",
      nextFollowUp: "Feb 1, 2026",
      email: "elena@volgaenergy.ru",
      phone: "+7 495 123-45-67"
    },
    {
      id: "inv-006",
      name: "Mehmet Yilmaz",
      country: "Turkey",
      company: "Anatolian Tourism",
      investorType: "Company",
      sector: "Tourism",
      investmentAmount: "$600,000",
      stage: "approved",
      officer: "Aziza Rahimova",
      lastContact: "1 week ago",
      nextFollowUp: "Feb 5, 2026",
      email: "mehmet@anatoliantour.tr",
      phone: "+90 212 555-0100"
    }
  ];

  const filteredInvestors = investors.filter((investor) => {
    const matchesSearch =
      searchQuery === "" ||
      investor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      investor.company.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStage =
      selectedStage === "All Stages" ||
      investor.stage === selectedStage.toLowerCase().replace(/\//g, "-").replace(/ /g, "-");

    const matchesSector =
      selectedSector === "All Sectors" ||
      investor.sector === selectedSector;

    const matchesCountry =
      selectedCountry === "All Countries" ||
      investor.country === selectedCountry;

    const matchesOfficer =
      selectedOfficer === "All Officers" ||
      investor.officer === selectedOfficer;

    return matchesSearch && matchesStage && matchesSector && matchesCountry && matchesOfficer;
  });

  const getStageColor = (stage: string) => {
    const colors: Record<string, string> = {
      "new": "new",
      "contacted": "contacted",
      "meeting-scheduled": "meeting-scheduled",
      "negotiation": "negotiation",
      "documents-pending": "documents-pending",
      "approved": "approved",
      "active": "active",
      "closed-rejected": "rejected"
    };
    return colors[stage] || "new";
  };

  return (
    <AdminPageLayout>

      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2933]">Investor CRM</h1>
                <p className="text-[#667085] mt-1">{filteredInvestors.length} investors</p>
              </div>
              <Button className="bg-[#0F8A5F] hover:bg-[#0F8A5F]/90">
                <UserIcon className="h-4 w-4 mr-2" />
                Add Investor
              </Button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" />
                <input
                  type="text"
                  placeholder="Search investors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63]"
                />
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 bg-[#123A63] text-white rounded-lg"
              >
                <Filter className="h-5 w-5" />
                Filters
              </button>

              <div className="hidden lg:flex gap-3">
                <Select value={selectedStage} onValueChange={setSelectedStage}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {crmStages.map((stage) => (
                      <SelectItem key={stage} value={stage}>{stage}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedSector} onValueChange={setSelectedSector}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sectors.map((sector) => (
                      <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedOfficer} onValueChange={setSelectedOfficer}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {officers.map((officer) => (
                      <SelectItem key={officer} value={officer}>{officer}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1F2933] mb-2">Stage</label>
                  <Select value={selectedStage} onValueChange={setSelectedStage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {crmStages.map((stage) => (
                        <SelectItem key={stage} value={stage}>{stage}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1F2933] mb-2">Sector</label>
                  <Select value={selectedSector} onValueChange={setSelectedSector}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {sectors.map((sector) => (
                        <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1F2933] mb-2">Country</label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>{country}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1F2933] mb-2">Officer</label>
                  <Select value={selectedOfficer} onValueChange={setSelectedOfficer}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {officers.map((officer) => (
                        <SelectItem key={officer} value={officer}>{officer}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Investor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Country</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Sector</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Stage</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Officer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Next Follow-Up</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredInvestors.map((investor) => (
                    <tr key={investor.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-[#1F2933]">{investor.name}</div>
                          <div className="text-sm text-[#667085]">{investor.company}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#1F2933]">{investor.country}</td>
                      <td className="px-6 py-4">
                        <StatusBadge variant="sector" label={investor.sector} />
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-[#1F2933]">
                        {investor.investmentAmount}
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge
                          variant="application"
                          status={getStageColor(investor.stage) as any}
                          label={investor.stage.replace(/-/g, " ")}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-[#1F2933]">{investor.officer}</td>
                      <td className="px-6 py-4 text-sm text-[#1F2933]">{investor.nextFollowUp}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Link to={`/admin/crm/${investor.id}`}>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Send className="h-4 w-4 mr-2" />
                                Send Message
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Calendar className="h-4 w-4 mr-2" />
                                Schedule Meeting
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <UserIcon className="h-4 w-4 mr-2" />
                                Assign Officer
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </AdminPageLayout>
  );
}
