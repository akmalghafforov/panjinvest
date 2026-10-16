import { useState } from "react";
import { Link } from "react-router";
import {
  Users,
  FileText,
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertCircle,
  BarChart3,
  Globe,
  DollarSign,
  Menu,
  Search,
  Bell,
  User,
  ChevronDown,
  MapPin,
  Settings,
  Activity,
  Newspaper,
  Languages,
  Shield,
  LogOut,
  Home,
  Briefcase,
  Map as MapIcon,
  FolderOpen,
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

export default function AdminDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const stats = [
    {
      label: "New Leads",
      value: "12",
      change: "+3 this week",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      label: "Applications Under Review",
      value: "42",
      change: "8 need action",
      icon: FileText,
      color: "bg-orange-500",
    },
    {
      label: "Meetings This Week",
      value: "7",
      change: "3 upcoming",
      icon: Clock,
      color: "bg-green-500",
    },
    {
      label: "Pending Documents",
      value: "17",
      change: "5 overdue",
      icon: AlertCircle,
      color: "bg-red-500",
    },
  ];

  const leadPipeline = [
    { stage: "New", count: 12, color: "bg-blue-500" },
    { stage: "Contacted", count: 8, color: "bg-indigo-500" },
    { stage: "Meeting", count: 5, color: "bg-purple-500" },
    { stage: "Negotiation", count: 7, color: "bg-pink-500" },
    { stage: "Documents", count: 4, color: "bg-orange-500" },
    { stage: "Approved", count: 3, color: "bg-green-500" },
  ];

  const recentApplications = [
    {
      id: "APP-2026-125",
      investor: "Ahmed Hassan",
      project: "Eco-Lodge near Seven Lakes",
      sector: "Tourism",
      amount: "$350,000",
      status: "Under Review",
      date: "May 20, 2026",
      statusColor: "bg-yellow-100 text-yellow-700",
    },
    {
      id: "APP-2026-124",
      investor: "Elena Petrova",
      project: "Cold Storage Facility",
      sector: "Logistics",
      amount: "$600,000",
      status: "Approved",
      date: "May 19, 2026",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: "APP-2026-123",
      investor: "John Smith",
      project: "Organic Honey Production",
      sector: "Agriculture",
      amount: "$120,000",
      status: "Documents Required",
      date: "May 18, 2026",
      statusColor: "bg-red-100 text-red-700",
    },
  ];

  const followUpReminders = [
    {
      investor: "Ahmed Hassan",
      action: "Schedule site visit",
      dueDate: "May 22, 2026",
      priority: "high",
    },
    {
      investor: "Li Wei",
      action: "Review updated business plan",
      dueDate: "May 23, 2026",
      priority: "medium",
    },
    {
      investor: "Mehmet Yılmaz",
      action: "Send approval letter",
      dueDate: "May 24, 2026",
      priority: "high",
    },
  ];

  const projectsNeedingUpdate = [
    {
      project: "Eco-Lodge Development",
      lastUpdated: "15 days ago",
      responsible: "Tourism Dept",
    },
    {
      project: "Industrial Zone Land Plots",
      lastUpdated: "22 days ago",
      responsible: "Planning Dept",
    },
    {
      project: "Solar Farm Opportunity",
      lastUpdated: "8 days ago",
      responsible: "Energy Dept",
    },
  ];

  const notifications = [
    { message: "New application submitted by Ahmed Hassan", time: "5 minutes ago", unread: true },
    { message: "Meeting scheduled with Li Wei", time: "1 hour ago", unread: true },
    { message: "Document uploaded by Elena Petrova", time: "2 hours ago", unread: false },
  ];

  const sidebarItems = [
    { name: "Dashboard", icon: Home, path: "/admin", active: true },
    { name: "Investment Projects", icon: Briefcase, path: "/admin/projects" },
    { name: "Investors / CRM", icon: Users, path: "/admin/crm" },
    { name: "Applications", icon: FileText, path: "/admin/applications" },
    { name: "Map Objects / Land Plots", icon: MapIcon, path: "/admin/land" },
    { name: "Documents", icon: FolderOpen, path: "/admin/documents" },
    { name: "Statistics", icon: BarChart3, path: "/admin/statistics" },
    { name: "News and Events", icon: Newspaper, path: "/admin/news" },
    { name: "Pages / CMS", icon: Globe, path: "/admin/cms" },
    { name: "Languages", icon: Languages, path: "/admin/languages" },
    { name: "Users and Roles", icon: Shield, path: "/admin/users" },
    { name: "Activity Log", icon: Activity, path: "/admin/activity" },
    { name: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  const monthlyData = [
    { month: "Jan", applications: 8, approved: 5 },
    { month: "Feb", applications: 12, approved: 7 },
    { month: "Mar", applications: 10, approved: 6 },
    { month: "Apr", applications: 15, approved: 9 },
    { month: "May", applications: 18, approved: 11 },
  ];

  return (
    <div className="h-screen flex bg-[#F6F8FA]">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } bg-[#123A63] text-white transition-all duration-300 overflow-hidden flex-shrink-0`}
      >
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <p className="text-sm text-white/70">Investment Portal</p>
        </div>
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-120px)]">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu className="h-5 w-5 text-[#667085]" />
              </button>
              <div className="flex-1 max-w-xl relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" />
                <input
                  type="text"
                  placeholder="Search applications, investors, projects..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
                >
                  <Bell className="h-5 w-5 text-[#667085]" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-semibold text-[#1F2933]">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notif, index) => (
                        <div
                          key={index}
                          className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                            notif.unread ? "bg-blue-50" : ""
                          }`}
                        >
                          <p className="text-sm text-[#1F2933] mb-1">{notif.message}</p>
                          <p className="text-xs text-[#667085]">{notif.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 text-center">
                      <button className="text-sm text-[#123A63] hover:text-[#0F8A5F]">
                        View All Notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* User Profile */}
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-[#123A63] rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-medium text-[#1F2933]">Admin User</div>
                    <div className="text-xs text-[#667085]">Administrator</div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-[#667085]" />
                </button>
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <Link
                      to="/admin/profile"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
                    >
                      <User className="h-4 w-4 text-[#667085]" />
                      <span className="text-sm text-[#1F2933]">My Profile</span>
                    </Link>
                    <Link
                      to="/admin/settings"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
                    >
                      <Settings className="h-4 w-4 text-[#667085]" />
                      <span className="text-sm text-[#1F2933]">Settings</span>
                    </Link>
                    <button className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors w-full text-left text-red-600">
                      <LogOut className="h-4 w-4" />
                      <span className="text-sm">Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 ${stat.color} rounded-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-[#1F2933] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#667085] mb-2">{stat.label}</div>
                    <div className="text-xs text-[#0F8A5F]">{stat.change}</div>
                  </div>
                );
              })}
            </div>

            {/* Lead Pipeline */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-[#1F2933] mb-6">Lead Pipeline</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {leadPipeline.map((stage, index) => (
                  <div key={index} className="text-center">
                    <div className={`${stage.color} text-white rounded-lg p-4 mb-2`}>
                      <div className="text-3xl font-bold">{stage.count}</div>
                    </div>
                    <div className="text-sm font-medium text-[#1F2933]">{stage.stage}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Recent Applications */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-[#1F2933]">Recent Applications</h2>
                    <Link to="/admin/crm" className="text-sm text-[#123A63] hover:text-[#0F8A5F]">
                      View All
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {recentApplications.map((app) => (
                      <Link
                        key={app.id}
                        to={`/admin/applications/${app.id}`}
                        className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-sm font-mono text-[#667085]">{app.id}</span>
                              <span className={`px-3 py-1 ${app.statusColor} text-xs rounded-full`}>
                                {app.status}
                              </span>
                            </div>
                            <h3 className="font-semibold text-[#1F2933] mb-1">{app.investor}</h3>
                            <div className="flex flex-wrap gap-2 text-sm text-[#667085]">
                              <span>{app.project}</span>
                              <span>•</span>
                              <span>{app.sector}</span>
                              <span>•</span>
                              <span className="font-semibold text-[#0F8A5F]">{app.amount}</span>
                            </div>
                          </div>
                          <div className="text-sm text-[#667085]">{app.date}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Application Trends Chart */}
                <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-[#1F2933] mb-6">Application Trends</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyData}>
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
                      <Line type="monotone" dataKey="applications" stroke="#123A63" strokeWidth={3} name="Applications" />
                      <Line type="monotone" dataKey="approved" stroke="#0F8A5F" strokeWidth={3} name="Approved" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Follow-up Reminders */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="font-semibold text-[#1F2933] mb-4">Follow-up Reminders</h3>
                  <div className="space-y-3">
                    {followUpReminders.map((reminder, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border-2 ${
                          reminder.priority === "high"
                            ? "bg-red-50 border-red-200"
                            : "bg-yellow-50 border-yellow-200"
                        }`}
                      >
                        <div className="font-medium text-[#1F2933] text-sm mb-1">{reminder.investor}</div>
                        <div className="text-xs text-[#667085] mb-2">{reminder.action}</div>
                        <div className="flex items-center gap-1 text-xs text-red-600">
                          <Clock className="h-3 w-3" />
                          Due: {reminder.dueDate}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects Needing Update */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="font-semibold text-[#1F2933] mb-4">Projects Needing Update</h3>
                  <div className="space-y-3">
                    {projectsNeedingUpdate.map((project, index) => (
                      <div key={index} className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                        <div className="font-medium text-[#1F2933] text-sm mb-1">{project.project}</div>
                        <div className="text-xs text-[#667085] mb-1">Last updated: {project.lastUpdated}</div>
                        <div className="text-xs text-[#667085]">{project.responsible}</div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-[#123A63] text-white rounded-lg hover:bg-[#123A63]/90 transition-colors text-sm">
                    Update Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
