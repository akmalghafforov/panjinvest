import { Link } from "react-router";
import {
  FileText, Users, Calendar, CheckCircle2, Clock, AlertCircle,
  TrendingUp, Building2, DollarSign, Eye
} from "lucide-react";
import { AdminPageLayout } from "../admin/AdminPageLayout";
import { StatusBadge } from "../invest/StatusBadge";
import { Button } from "../ui/button";

export default function ImprovedAdminDashboardPage() {
  const stats = [
    {
      label: "New Interests",
      value: "12",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      label: "Under Review",
      value: "8",
      icon: Clock,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      label: "Meetings This Week",
      value: "5",
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      label: "Pending Documents",
      value: "15",
      icon: AlertCircle,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      label: "Active Investors",
      value: "34",
      icon: Users,
      color: "text-[#0F8A5F]",
      bgColor: "bg-[#0F8A5F]/10"
    },
    {
      label: "Total Investment",
      value: "$12.5M",
      icon: DollarSign,
      color: "text-[#123A63]",
      bgColor: "bg-[#123A63]/10"
    }
  ];

  const pipeline = [
    { stage: "New", count: 12, color: "bg-blue-500" },
    { stage: "Contacted", count: 8, color: "bg-indigo-500" },
    { stage: "Meeting Scheduled", count: 5, color: "bg-purple-500" },
    { stage: "Negotiation", count: 4, color: "bg-pink-500" },
    { stage: "Documents Pending", count: 6, color: "bg-orange-500" },
    { stage: "Approved", count: 3, color: "bg-green-500" },
    { stage: "Active", count: 7, color: "bg-emerald-500" },
    { stage: "Closed/Rejected", count: 2, color: "bg-gray-400" }
  ];

  const recentApplications = [
    {
      id: "app-001",
      investorName: "John Investor",
      country: "United States",
      investorType: "Company",
      sector: "Tourism",
      project: "Eco-Lodge near Seven Lakes",
      investmentAmount: "$250,000",
      status: "under-review",
      officer: "Farrukh Mahmadov",
      lastContact: "2 hours ago",
      nextFollowUp: "Tomorrow"
    },
    {
      id: "app-002",
      investorName: "Maria Santos",
      country: "Brazil",
      investorType: "Individual investor",
      sector: "Agriculture",
      project: "Organic Honey Production",
      investmentAmount: "$120,000",
      status: "documents-pending",
      officer: "Aziza Rahimova",
      lastContact: "1 day ago",
      nextFollowUp: "Jan 25"
    },
    {
      id: "app-003",
      investorName: "Ahmed Al-Rashid",
      country: "UAE",
      investorType: "Investment fund",
      sector: "Food Processing",
      project: "Fruit Drying Facility",
      investmentAmount: "$500,000",
      status: "meeting-scheduled",
      officer: "Rustam Nazarov",
      lastContact: "3 days ago",
      nextFollowUp: "Jan 28"
    },
    {
      id: "app-004",
      investorName: "Li Wei",
      country: "China",
      investorType: "Company",
      sector: "Logistics",
      project: "Cold Storage Center",
      investmentAmount: "$750,000",
      status: "new",
      officer: "Unassigned",
      lastContact: "Just now",
      nextFollowUp: "Pending"
    }
  ];

  const upcomingMeetings = [
    {
      id: "meet-001",
      investor: "Ahmed Al-Rashid",
      project: "Fruit Drying Facility",
      date: "Jan 28, 2026",
      time: "10:00 AM",
      type: "Online"
    },
    {
      id: "meet-002",
      investor: "John Investor",
      project: "Eco-Lodge near Seven Lakes",
      date: "Jan 29, 2026",
      time: "2:00 PM",
      type: "In-person"
    }
  ];

  return (
    <AdminPageLayout>

      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2933]">Dashboard</h1>
            <p className="text-[#667085] mt-1">Welcome back, Farrukh</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:p-5 lg:p-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-5 lg:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 ${stat.bgColor} rounded-lg`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2933] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#667085]">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Lead Pipeline */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-4 md:p-5 lg:p-6 lg:p-8 mb-8">
            <h2 className="text-2xl font-semibold text-[#1F2933] mb-6">Lead Pipeline</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {pipeline.map((stage, index) => (
                <div key={index} className="text-center">
                  <div className={`${stage.color} text-white rounded-lg p-4 mb-2`}>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold">{stage.count}</div>
                  </div>
                  <div className="text-xs text-[#667085] font-medium">{stage.stage}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
            {/* Recent Applications */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 md:p-5 lg:p-6 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-[#1F2933]">Recent Applications</h2>
                  <Link to="/admin/applications">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>

                <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Investor</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Project</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Officer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentApplications.map((app) => (
                        <tr key={app.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div>
                              <div className="font-medium text-[#1F2933]">{app.investorName}</div>
                              <div className="text-sm text-[#667085]">{app.country}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-[#1F2933]">{app.project}</div>
                            <div className="text-xs text-[#667085]">{app.sector}</div>
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold text-[#1F2933]">
                            {app.investmentAmount}
                          </td>
                          <td className="px-6 py-4">
                            <StatusBadge
                              variant="application"
                              status={app.status as any}
                              label={app.status.replace(/-/g, " ")}
                            />
                          </td>
                          <td className="px-6 py-4 text-sm text-[#1F2933]">{app.officer}</td>
                          <td className="px-6 py-4">
                            <Link to={`/admin/applications/${app.id}`}>
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
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

            {/* Upcoming Meetings */}
            <div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-5 lg:p-6 mb-6">
                <h2 className="text-xl font-semibold text-[#1F2933] mb-6">Upcoming Meetings</h2>
                <div className="space-y-4">
                  {upcomingMeetings.map((meeting) => (
                    <div key={meeting.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="font-semibold text-[#1F2933] mb-2">{meeting.investor}</div>
                      <div className="text-sm text-[#667085] mb-3">{meeting.project}</div>
                      <div className="flex items-center gap-2 text-xs text-[#667085] mb-2">
                        <Calendar className="h-3 w-3" />
                        {meeting.date} at {meeting.time}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#667085]">
                        <CheckCircle2 className="h-3 w-3" />
                        {meeting.type}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] rounded-xl shadow-sm p-4 md:p-5 lg:p-6 text-white">
                <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link to="/admin/applications/new">
                    <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                      <FileText className="h-4 w-4 mr-2" />
                      New Application
                    </Button>
                  </Link>
                  <Link to="/admin/crm">
                    <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                      <Users className="h-4 w-4 mr-2" />
                      View All Investors
                    </Button>
                  </Link>
                  <Link to="/admin/projects">
                    <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                      <Building2 className="h-4 w-4 mr-2" />
                      Manage Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AdminPageLayout>
  );
}
