import { FileCode, Plus, Search, Edit, Trash2, Eye, Globe } from "lucide-react";
import { AdminPageLayout } from "../admin/AdminPageLayout";
import { Button } from "../ui/button";

export default function AdminCMSPage() {
  const pages = [
    {
      id: 1,
      title: "Home Page",
      slug: "/",
      status: "published",
      lastModified: "2024-05-20",
      modifiedBy: "Admin",
      language: "EN"
    },
    {
      id: 2,
      title: "About Panjakent",
      slug: "/about",
      status: "published",
      lastModified: "2024-05-18",
      modifiedBy: "Sarah Johnson",
      language: "EN"
    },
    {
      id: 3,
      title: "Investment Opportunities",
      slug: "/opportunities",
      status: "published",
      lastModified: "2024-05-15",
      modifiedBy: "Michael Chen",
      language: "EN"
    },
    {
      id: 4,
      title: "Investor Guide",
      slug: "/guide",
      status: "published",
      lastModified: "2024-05-12",
      modifiedBy: "David Park",
      language: "EN"
    },
    {
      id: 5,
      title: "Contact Us",
      slug: "/contact",
      status: "published",
      lastModified: "2024-05-10",
      modifiedBy: "Admin",
      language: "EN"
    },
    {
      id: 6,
      title: "Investment Map",
      slug: "/map",
      status: "published",
      lastModified: "2024-05-08",
      modifiedBy: "Sarah Johnson",
      language: "EN"
    },
    {
      id: 7,
      title: "Terms and Conditions",
      slug: "/terms",
      status: "draft",
      lastModified: "2024-05-22",
      modifiedBy: "Admin",
      language: "EN"
    }
  ];

  const stats = [
    { label: "Total Pages", value: "24", color: "bg-blue-50 text-blue-600" },
    { label: "Published", value: "18", color: "bg-green-50 text-green-600" },
    { label: "Draft", value: "6", color: "bg-yellow-50 text-yellow-600" },
    { label: "Translations", value: "48", color: "bg-purple-50 text-purple-600" }
  ];

  return (
    <AdminPageLayout>

      <div className="flex-1">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#1F2933]">Pages / CMS</h1>
              <p className="text-[#667085] mt-1">Manage website content and pages</p>
            </div>
            <Button className="bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 text-white gap-2">
              <Plus className="h-5 w-5" />
              Create New Page
            </Button>
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
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" />
                  <input
                    type="text"
                    placeholder="Search pages..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F] focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">
                  <option>All Status</option>
                  <option>Published</option>
                  <option>Draft</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">
                  <option>All Languages</option>
                  <option>English</option>
                  <option>Tajik</option>
                  <option>Russian</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Page Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      URL Slug
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Language
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Last Modified
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Modified By
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pages.map((page) => (
                    <tr key={page.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-purple-50 rounded-lg">
                            <FileCode className="h-5 w-5 text-purple-600" />
                          </div>
                          <p className="font-medium text-[#1F2933]">{page.title}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-[#667085]">
                          <Globe className="h-4 w-4" />
                          <code className="text-sm">{page.slug}</code>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            page.status === "published"
                              ? "bg-green-50 text-green-700"
                              : "bg-yellow-50 text-yellow-700"
                          }`}
                        >
                          {page.status.charAt(0).toUpperCase() + page.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {page.language}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#667085]">
                        {page.lastModified}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#667085]">
                        {page.modifiedBy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
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
