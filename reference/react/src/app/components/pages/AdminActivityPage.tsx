import { Activity, Calendar, User, Filter, Download } from "lucide-react";
import { AdminPageLayout } from "../admin/AdminPageLayout";
import { Button } from "../ui/button";

export default function AdminActivityPage() {
  const activities = [
    {
      id: 1,
      user: "Sarah Johnson",
      action: "Created new project",
      target: "Solar Farm Development",
      timestamp: "2024-05-24 10:35:22",
      category: "Projects",
      type: "create"
    },
    {
      id: 2,
      user: "Michael Chen",
      action: "Updated application status",
      target: "APP-2024-001",
      timestamp: "2024-05-24 10:15:45",
      category: "Applications",
      type: "update"
    },
    {
      id: 3,
      user: "Admin",
      action: "Published news article",
      target: "New Investment Incentive Program Launched",
      timestamp: "2024-05-24 09:50:12",
      category: "News",
      type: "publish"
    },
    {
      id: 4,
      user: "David Park",
      action: "Uploaded document",
      target: "Investment Policy Framework 2024.pdf",
      timestamp: "2024-05-24 09:30:08",
      category: "Documents",
      type: "upload"
    },
    {
      id: 5,
      user: "Sarah Johnson",
      action: "Modified user permissions",
      target: "Emma Wilson",
      timestamp: "2024-05-24 09:10:33",
      category: "Users",
      type: "update"
    },
    {
      id: 6,
      user: "Michael Chen",
      action: "Approved application",
      target: "APP-2024-003",
      timestamp: "2024-05-23 16:45:21",
      category: "Applications",
      type: "approve"
    },
    {
      id: 7,
      user: "Admin",
      action: "Created land plot",
      target: "PLOT-006 - Commercial Zone B",
      timestamp: "2024-05-23 15:20:17",
      category: "Map",
      type: "create"
    },
    {
      id: 8,
      user: "David Park",
      action: "Updated CMS page",
      target: "Investment Opportunities",
      timestamp: "2024-05-23 14:05:42",
      category: "CMS",
      type: "update"
    },
    {
      id: 9,
      user: "Sarah Johnson",
      action: "Deleted news article",
      target: "Outdated Announcement",
      timestamp: "2024-05-23 13:30:55",
      category: "News",
      type: "delete"
    },
    {
      id: 10,
      user: "Michael Chen",
      action: "Added translation",
      target: "common.welcome (Tajik)",
      timestamp: "2024-05-23 11:15:28",
      category: "Languages",
      type: "create"
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "create":
        return "bg-green-50 text-green-600";
      case "update":
        return "bg-blue-50 text-blue-600";
      case "delete":
        return "bg-red-50 text-red-600";
      case "publish":
        return "bg-purple-50 text-purple-600";
      case "approve":
        return "bg-teal-50 text-teal-600";
      case "upload":
        return "bg-orange-50 text-orange-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const stats = [
    { label: "Today", value: "24", color: "bg-blue-50 text-blue-600" },
    { label: "This Week", value: "156", color: "bg-green-50 text-green-600" },
    { label: "This Month", value: "892", color: "bg-purple-50 text-purple-600" },
    { label: "Total Users", value: "18", color: "bg-orange-50 text-orange-600" }
  ];

  return (
    <AdminPageLayout>

      <div className="flex-1">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#1F2933]">Activity Log</h1>
              <p className="text-[#667085] mt-1">Monitor system activity and user actions</p>
            </div>
            <Button variant="outline" className="gap-2">
              <Download className="h-5 w-5" />
              Export Log
            </Button>
          </div>
        </div>

        <div className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:p-5 lg:p-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
                <p className="text-sm text-[#667085]">{stat.label}</p>
                <p className={`text-xl md:text-2xl lg:text-3xl font-bold mt-2 ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-[#667085] mt-1">activities</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 md:p-5 lg:p-6 border-b border-gray-200">
              <div className="flex gap-4">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">
                  <option>All Categories</option>
                  <option>Projects</option>
                  <option>Applications</option>
                  <option>News</option>
                  <option>Documents</option>
                  <option>Users</option>
                  <option>Map</option>
                  <option>CMS</option>
                  <option>Languages</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">
                  <option>All Actions</option>
                  <option>Create</option>
                  <option>Update</option>
                  <option>Delete</option>
                  <option>Publish</option>
                  <option>Approve</option>
                  <option>Upload</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">
                  <option>All Users</option>
                  <option>Sarah Johnson</option>
                  <option>Michael Chen</option>
                  <option>David Park</option>
                  <option>Admin</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">
                  <option>Last 24 Hours</option>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                </select>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {activities.map((activity) => (
                <div key={activity.id} className="p-4 md:p-5 lg:p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${getActivityIcon(activity.type)}`}>
                      <Activity className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-medium text-[#1F2933]">
                            <span className="text-[#0F8A5F]">{activity.user}</span> {activity.action}
                          </p>
                          <p className="text-sm text-[#667085] mt-1">{activity.target}</p>
                        </div>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {activity.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-[#667085]">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {activity.timestamp}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {activity.user}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 md:p-5 lg:p-6 border-t border-gray-200 flex items-center justify-between">
              <p className="text-sm text-[#667085]">Showing 10 of 892 activities</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminPageLayout>
  );
}
