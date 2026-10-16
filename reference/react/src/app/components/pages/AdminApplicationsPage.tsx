import { Link } from "react-router";
import { FileText, Search, Filter, Calendar, User, Building2 } from "lucide-react";
import { AdminPageLayout } from "../admin/AdminPageLayout";
import { Button } from "../ui/button";
import { StatusBadge } from "../invest/StatusBadge";

export default function AdminApplicationsPage() {
  const applications = [
    {
      id: "APP-2024-001",
      applicantName: "Green Valley Investments LLC",
      projectName: "Solar Farm Development",
      submittedDate: "2024-05-20",
      sector: "Energy",
      requestedAmount: "$8.5M",
      status: "under_review",
      assignedTo: "Sarah Johnson"
    },
    {
      id: "APP-2024-002",
      applicantName: "Mountain Resort Group",
      projectName: "Eco-Tourism Resort",
      submittedDate: "2024-05-18",
      sector: "Tourism",
      requestedAmount: "$4.2M",
      status: "pending",
      assignedTo: "Michael Chen"
    },
    {
      id: "APP-2024-003",
      applicantName: "AgriTech Solutions",
      projectName: "Smart Greenhouse Complex",
      submittedDate: "2024-05-15",
      sector: "Agriculture",
      requestedAmount: "$2.8M",
      status: "approved",
      assignedTo: "Sarah Johnson"
    },
    {
      id: "APP-2024-004",
      applicantName: "Digital Hub Ventures",
      projectName: "Tech Incubator Center",
      submittedDate: "2024-05-12",
      sector: "Technology",
      requestedAmount: "$3.5M",
      status: "under_review",
      assignedTo: "David Park"
    },
    {
      id: "APP-2024-005",
      applicantName: "Heritage Crafts Co.",
      projectName: "Textile Manufacturing",
      submittedDate: "2024-05-10",
      sector: "Manufacturing",
      requestedAmount: "$1.9M",
      status: "pending",
      assignedTo: "Michael Chen"
    }
  ];

  const stats = [
    { label: "Total Applications", value: "47", color: "bg-blue-50 text-blue-600" },
    { label: "Pending Review", value: "12", color: "bg-yellow-50 text-yellow-600" },
    { label: "Under Review", value: "8", color: "bg-purple-50 text-purple-600" },
    { label: "Approved", value: "18", color: "bg-green-50 text-green-600" }
  ];

  return (
    <AdminPageLayout>

      <div className="flex-1">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#1F2933]">Applications</h1>
              <p className="text-[#667085] mt-1">Review and manage investment applications</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Filter className="h-5 w-5" />
                Filter
              </Button>
              <Button variant="outline">Export</Button>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:p-5 lg:p-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
                <p className="text-sm text-[#667085]">{stat.label}</p>
                <p className={`text-xl md:text-2xl lg:text-3xl font-bold mt-2 ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 md:p-5 lg:p-6 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" />
                <input
                  type="text"
                  placeholder="Search applications..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F] focus:border-transparent"
                />
              </div>
            </div>

            <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Application ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Applicant
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Project Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Sector
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Assigned To
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-[#667085]" />
                          <span className="font-medium text-[#1F2933]">{app.id}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-[#667085]" />
                          <span className="text-sm text-[#1F2933]">{app.applicantName}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-[#667085]" />
                          <span className="text-sm text-[#1F2933]">{app.projectName}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {app.sector}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-[#1F2933]">
                        {app.requestedAmount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={app.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                        {app.assignedTo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link to={`/admin/applications/${app.id}`}>
                          <Button variant="outline" size="sm">
                            Review
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminPageLayout>
  );
}
