import { Link } from "react-router";
import { Building2, Plus, Search, Filter, MapPin, DollarSign, Calendar, TrendingUp } from "lucide-react";
import { AdminPageLayout } from "../admin/AdminPageLayout";
import { Button } from "../ui/button";
import { StatusBadge } from "../invest/StatusBadge";

export default function AdminProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "Silk Road Tourism Complex",
      location: "Panjakent City Center",
      sector: "Tourism",
      investment: "$5.2M",
      status: "active",
      progress: 65,
      startDate: "2024-03-15"
    },
    {
      id: 2,
      name: "Agricultural Processing Facility",
      location: "Rural District 3",
      sector: "Agriculture",
      investment: "$3.8M",
      status: "planning",
      progress: 25,
      startDate: "2024-06-01"
    },
    {
      id: 3,
      name: "Renewable Energy Park",
      location: "Mountain Region",
      sector: "Energy",
      investment: "$12.5M",
      status: "active",
      progress: 40,
      startDate: "2023-11-20"
    },
    {
      id: 4,
      name: "Textile Manufacturing Hub",
      location: "Industrial Zone",
      sector: "Manufacturing",
      investment: "$4.2M",
      status: "completed",
      progress: 100,
      startDate: "2023-01-10"
    },
    {
      id: 5,
      name: "Tech Innovation Center",
      location: "Panjakent Downtown",
      sector: "Technology",
      investment: "$2.9M",
      status: "active",
      progress: 55,
      startDate: "2024-02-01"
    }
  ];

  const stats = [
    { label: "Total Projects", value: "24", icon: Building2, color: "bg-blue-50 text-blue-600" },
    { label: "Active Projects", value: "12", icon: TrendingUp, color: "bg-green-50 text-green-600" },
    { label: "Total Investment", value: "$42.8M", icon: DollarSign, color: "bg-purple-50 text-purple-600" },
    { label: "New This Month", value: "3", icon: Calendar, color: "bg-orange-50 text-orange-600" }
  ];

  return (
    <AdminPageLayout>

      <div className="flex-1">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2933]">Investment Projects</h1>
              <p className="text-sm md:text-base text-[#667085] mt-1">Manage and monitor all investment projects</p>
            </div>
            <Button className="bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 text-white gap-2">
              <Plus className="h-5 w-5" />
              <span className="hidden sm:inline">Add New Project</span>
              <span className="sm:hidden">Add</span>
            </Button>
          </div>
        </div>

        <div className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:p-5 lg:p-6 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${stat.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-[#667085]">{stat.label}</p>
                      <p className="text-xl md:text-2xl font-bold text-[#1F2933] mt-1">{stat.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 md:p-5 lg:p-6 border-b border-gray-200">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F] focus:border-transparent"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Project Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Sector
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Investment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Progress
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {projects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-50 rounded-lg">
                            <Building2 className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-[#1F2933]">{project.name}</p>
                            <p className="text-sm text-[#667085]">ID: PRJ-{project.id.toString().padStart(3, '0')}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-[#667085]">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{project.location}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                          {project.sector}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-[#1F2933]">
                        {project.investment}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={project.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#0F8A5F]"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <span className="text-sm text-[#667085] w-12">{project.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
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
