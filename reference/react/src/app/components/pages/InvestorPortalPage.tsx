import { Link } from "react-router";
import {
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Download,
  MessageSquare,
  Calendar,
  TrendingUp,
  Briefcase,
  User,
  Upload,
  Bell,
  Mail,
  ArrowRight,
  MapPin,
} from "lucide-react";

export default function InvestorPortalPage() {
  const profileCompletion = 75;

  const applications = [
    {
      id: "APP-2026-001",
      project: "Eco-Lodge near Seven Lakes",
      sector: "Tourism",
      status: "Under Review",
      date: "May 15, 2026",
      statusColor: "bg-yellow-100 text-yellow-700",
      icon: Clock,
    },
    {
      id: "APP-2026-002",
      project: "Fruit Drying Facility",
      sector: "Food Processing",
      status: "Approved",
      date: "May 10, 2026",
      statusColor: "bg-green-100 text-green-700",
      icon: CheckCircle2,
    },
  ];

  const savedProjects = [
    {
      id: "hotel-seven-lakes",
      title: "Boutique Hotel near Seven Lakes",
      sector: "Tourism",
      investment: "$800,000 - $1,500,000",
      roi: "20-25%",
    },
    {
      id: "honey-production",
      title: "Organic Honey Production & Packaging",
      sector: "Agriculture",
      investment: "$80,000 - $150,000",
      roi: "30-35%",
    },
  ];

  const documentRequests = [
    { name: "Updated Financial Statements", deadline: "May 25, 2026", status: "pending" },
    { name: "Environmental Impact Assessment", deadline: "May 28, 2026", status: "pending" },
  ];

  const meetings = [
    {
      title: "Site Visit - Seven Lakes",
      date: "May 22, 2026",
      time: "10:00 AM",
      attendees: "Farrukh Mahmadov, Investment Team",
      location: "Seven Lakes Region",
    },
    {
      title: "Final Review Meeting",
      date: "May 30, 2026",
      time: "2:00 PM",
      attendees: "Investment Committee",
      location: "City Administration Office",
    },
  ];

  const messages = [
    {
      from: "Investment Department",
      subject: "Application APP-2026-001 Status Update",
      preview: "Your application has been assigned to case manager Farrukh Mahmadov...",
      date: "May 20, 2026",
      unread: true,
    },
    {
      from: "Farrukh Mahmadov",
      subject: "Additional Documentation Required",
      preview: "Please submit updated financial statements for your eco-lodge project...",
      date: "May 18, 2026",
      unread: false,
    },
  ];

  const timelineSteps = [
    { step: "Submitted", status: "completed", date: "May 15, 2026" },
    { step: "Under Review", status: "completed", date: "May 16, 2026" },
    { step: "Case Manager Assigned", status: "completed", date: "May 17, 2026" },
    { step: "Documents Requested", status: "active", date: "May 20, 2026" },
    { step: "Meeting Scheduled", status: "upcoming", date: "May 22, 2026" },
    { step: "Decision", status: "pending", date: "Pending" },
  ];

  const documentChecklist = [
    { name: "Passport / ID", status: "completed", uploadedDate: "May 15, 2026" },
    { name: "Company Registration Document", status: "completed", uploadedDate: "May 15, 2026" },
    { name: "Business Proposal", status: "completed", uploadedDate: "May 15, 2026" },
    { name: "Financial Information", status: "pending", uploadedDate: null },
    { name: "Environmental Assessment", status: "pending", uploadedDate: null },
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Investor Portal</h1>
              <p className="text-xl text-white/90">Welcome back, John Investor</p>
            </div>
            <Link
              to="/opportunities"
              className="px-6 py-3 bg-white text-[#123A63] rounded-lg hover:bg-white/90 transition-colors inline-flex items-center gap-2"
            >
              <Briefcase className="h-5 w-5" />
              Browse Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Completion Card */}
          <div className="bg-gradient-to-r from-[#D6A536] to-[#F59E0B] rounded-xl shadow-lg p-6 text-white mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Complete Your Profile</h3>
                <p className="text-white/90 mb-4">
                  {profileCompletion}% complete - Add missing information to speed up application processing
                </p>
                <div className="w-full bg-white/30 rounded-full h-2 mb-2">
                  <div
                    className="bg-white h-2 rounded-full"
                    style={{ width: `${profileCompletion}%` }}
                  />
                </div>
              </div>
              <button className="px-6 py-3 bg-white text-[#D6A536] rounded-lg hover:bg-white/90 transition-colors inline-flex items-center gap-2 whitespace-nowrap">
                <User className="h-5 w-5" />
                Complete Profile
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Application Status Timeline */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1F2933] mb-6">Application Status Timeline</h2>
                <div className="space-y-4">
                  {timelineSteps.map((step, index) => (
                    <div key={index} className="relative flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                            step.status === "completed"
                              ? "bg-[#0F8A5F] text-white"
                              : step.status === "active"
                              ? "bg-[#D6A536] text-white"
                              : "bg-gray-200 text-gray-400"
                          }`}
                        >
                          {step.status === "completed" && <CheckCircle2 className="h-5 w-5" />}
                          {step.status === "active" && <Clock className="h-5 w-5" />}
                          {(step.status === "upcoming" || step.status === "pending") && (
                            <div className="w-3 h-3 bg-gray-400 rounded-full" />
                          )}
                        </div>
                        {index < timelineSteps.length - 1 && (
                          <div className="w-0.5 h-16 bg-gray-200 mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <h3 className="font-semibold text-[#1F2933] mb-1">{step.step}</h3>
                        <p className="text-sm text-[#667085]">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Applications */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1F2933] mb-6">My Applications</h2>
                <div className="space-y-4">
                  {applications.map((app) => {
                    const Icon = app.icon;
                    return (
                      <div key={app.id} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-sm font-mono text-[#667085]">{app.id}</span>
                              <span className={`px-3 py-1 ${app.statusColor} text-xs rounded-full inline-flex items-center gap-1`}>
                                <Icon className="h-3 w-3" />
                                {app.status}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-[#1F2933] mb-1">{app.project}</h3>
                            <div className="flex gap-4 text-sm text-[#667085]">
                              <span>{app.sector}</span>
                              <span>•</span>
                              <span>{app.date}</span>
                            </div>
                          </div>
                          <button className="px-4 py-2 border-2 border-[#123A63] text-[#123A63] rounded-lg hover:bg-[#123A63]/5 transition-colors text-sm">
                            View Details
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Document Upload Checklist */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1F2933] mb-6">Document Upload Checklist</h2>
                <div className="space-y-3">
                  {documentChecklist.map((doc, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 ${
                        doc.status === "completed"
                          ? "bg-green-50 border-green-200"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                          {doc.status === "completed" ? (
                            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                          ) : (
                            <div className="h-5 w-5 border-2 border-gray-300 rounded flex-shrink-0" />
                          )}
                          <div>
                            <div className="font-semibold text-[#1F2933]">{doc.name}</div>
                            {doc.uploadedDate && (
                              <div className="text-xs text-[#667085]">Uploaded: {doc.uploadedDate}</div>
                            )}
                          </div>
                        </div>
                        {doc.status === "pending" && (
                          <button className="px-4 py-2 bg-[#123A63] text-white rounded-lg hover:bg-[#123A63]/90 transition-colors text-sm inline-flex items-center gap-2">
                            <Upload className="h-4 w-4" />
                            Upload
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Saved Projects */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1F2933] mb-6">Saved Opportunities</h2>
                <div className="space-y-4">
                  {savedProjects.map((project) => (
                    <Link
                      key={project.id}
                      to={`/opportunities/${project.id}`}
                      className="block p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <span className="px-3 py-1 bg-[#123A63]/10 text-[#123A63] text-xs rounded-full">
                            {project.sector}
                          </span>
                          <h3 className="text-lg font-semibold text-[#1F2933] mt-2 mb-1">{project.title}</h3>
                          <div className="flex gap-4 text-sm text-[#667085]">
                            <span className="flex items-center gap-1">
                              <TrendingUp className="h-4 w-4" />
                              {project.investment}
                            </span>
                            <span>•</span>
                            <span>ROI: {project.roi}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Document Requests */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-[#1F2933]">Document Requests</h3>
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">{documentRequests.length}</span>
                </div>
                <div className="space-y-3">
                  {documentRequests.map((doc, index) => (
                    <div key={index} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="font-medium text-[#1F2933] text-sm mb-1">{doc.name}</div>
                      <div className="text-xs text-red-600 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Due: {doc.deadline}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-[#123A63] text-white rounded-lg hover:bg-[#123A63]/90 transition-colors text-sm">
                  Upload Documents
                </button>
              </div>

              {/* Upcoming Meetings */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-5 w-5 text-[#123A63]" />
                  <h3 className="font-semibold text-[#1F2933]">Upcoming Meetings</h3>
                </div>
                <div className="space-y-4">
                  {meetings.map((meeting, index) => (
                    <div key={index} className="p-4 bg-[#F6F8FA] rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-[#1F2933] mb-2">{meeting.title}</h4>
                      <div className="space-y-1 text-xs text-[#667085]">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          {meeting.date} at {meeting.time}
                        </div>
                        <div className="flex items-start gap-2">
                          <User className="h-3 w-3 mt-0.5" />
                          <span>{meeting.attendees}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3" />
                          {meeting.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[#123A63]" />
                    <h3 className="font-semibold text-[#1F2933]">Messages</h3>
                  </div>
                  <span className="px-2 py-1 bg-[#123A63] text-white text-xs rounded-full">1</span>
                </div>
                <div className="space-y-3">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border cursor-pointer hover:shadow-md transition-shadow ${
                        message.unread
                          ? "bg-blue-50 border-blue-200"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div className="font-medium text-[#1F2933] text-sm">{message.from}</div>
                        {message.unread && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        )}
                      </div>
                      <div className="text-xs font-medium text-[#1F2933] mb-1">{message.subject}</div>
                      <div className="text-xs text-[#667085] line-clamp-2">{message.preview}</div>
                      <div className="text-xs text-[#667085] mt-2">{message.date}</div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 px-4 py-2 border-2 border-[#123A63] text-[#123A63] rounded-lg hover:bg-[#123A63]/5 transition-colors text-sm inline-flex items-center justify-center gap-2">
                  View All Messages
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
