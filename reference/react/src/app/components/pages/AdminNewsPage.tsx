import { Newspaper, Plus, Search, Edit, Trash2, Eye, Calendar } from "lucide-react";
import { AdminPageLayout } from "../admin/AdminPageLayout";
import { Button } from "../ui/button";

export default function AdminNewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "New Investment Incentive Program Launched",
      category: "Announcement",
      status: "published",
      author: "Admin",
      publishDate: "2024-05-20",
      views: 1250
    },
    {
      id: 2,
      title: "Panjakent Investment Summit 2024",
      category: "Event",
      status: "published",
      author: "Sarah Johnson",
      publishDate: "2024-05-18",
      views: 892
    },
    {
      id: 3,
      title: "Tourism Sector Shows Record Growth",
      category: "News",
      status: "published",
      author: "Michael Chen",
      publishDate: "2024-05-15",
      views: 1580
    },
    {
      id: 4,
      title: "Updated Tax Incentive Guidelines",
      category: "Update",
      status: "draft",
      author: "David Park",
      publishDate: "2024-05-22",
      views: 0
    },
    {
      id: 5,
      title: "Investor Networking Event - June 2024",
      category: "Event",
      status: "scheduled",
      author: "Admin",
      publishDate: "2024-06-01",
      views: 0
    }
  ];

  const stats = [
    { label: "Total Articles", value: "48", color: "bg-blue-50 text-blue-600" },
    { label: "Published", value: "32", color: "bg-green-50 text-green-600" },
    { label: "Draft", value: "12", color: "bg-yellow-50 text-yellow-600" },
    { label: "Scheduled", value: "4", color: "bg-purple-50 text-purple-600" }
  ];

  return (
    <AdminPageLayout>

      <div className="flex-1">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#1F2933]">News and Events</h1>
              <p className="text-[#667085] mt-1">Manage news articles and event announcements</p>
            </div>
            <Button className="bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 text-white gap-2">
              <Plus className="h-5 w-5" />
              Create New Post
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
                    placeholder="Search news and events..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F] focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">
                  <option>All Categories</option>
                  <option>News</option>
                  <option>Event</option>
                  <option>Announcement</option>
                  <option>Update</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">
                  <option>All Status</option>
                  <option>Published</option>
                  <option>Draft</option>
                  <option>Scheduled</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Author
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Publish Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {newsItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-50 rounded-lg">
                            <Newspaper className="h-5 w-5 text-blue-600" />
                          </div>
                          <p className="font-medium text-[#1F2933]">{item.title}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            item.status === "published"
                              ? "bg-green-50 text-green-700"
                              : item.status === "draft"
                              ? "bg-yellow-50 text-yellow-700"
                              : "bg-purple-50 text-purple-700"
                          }`}
                        >
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#667085]">
                        {item.author}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-[#667085]">
                          <Calendar className="h-4 w-4" />
                          {item.publishDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#667085]">
                        {item.views.toLocaleString()}
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
