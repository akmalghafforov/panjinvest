import { Link } from "react-router";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Globe,
  Building2,
  DollarSign,
  FileText,
  Download,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Calendar,
  MapPin,
} from "lucide-react";

export default function ApplicationReviewPage() {
  const application = {
    id: "APP-2026-125",
    status: "Under Review",
    submittedDate: "May 20, 2026",
    investor: {
      name: "Ahmed Hassan",
      email: "ahmed.hassan@example.com",
      phone: "+971 50 123 4567",
      country: "United Arab Emirates",
      company: "Hassan Investments LLC",
    },
    project: {
      title: "Eco-Lodge near Seven Lakes",
      sector: "Tourism",
      location: "Seven Lakes Region",
      investment: "$350,000",
      land: "2.5 hectares",
      timeline: "18 months",
      roi: "20% annually",
    },
    documents: [
      { name: "Business Plan", uploaded: true, date: "May 20, 2026", size: "1.2 MB" },
      { name: "Financial Projections", uploaded: true, date: "May 20, 2026", size: "890 KB" },
      { name: "Passport Copy", uploaded: true, date: "May 20, 2026", size: "245 KB" },
      { name: "Company Registration", uploaded: true, date: "May 20, 2026", size: "560 KB" },
      { name: "Bank Reference Letter", uploaded: false, date: "-", size: "-" },
      { name: "Environmental Assessment", uploaded: false, date: "-", size: "-" },
    ],
    timeline: [
      {
        date: "May 20, 2026",
        action: "Application Submitted",
        user: "Ahmed Hassan",
        status: "completed",
      },
      {
        date: "May 20, 2026",
        action: "Initial Review Started",
        user: "Farrukh Mahmadov",
        status: "completed",
      },
      {
        date: "May 21, 2026",
        action: "Document Verification",
        user: "Pending",
        status: "pending",
      },
      {
        date: "Pending",
        action: "Site Visit Scheduled",
        user: "Pending",
        status: "upcoming",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/admin"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Dashboard
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold">{application.id}</h1>
                <span className="px-4 py-2 bg-yellow-500 text-white rounded-full text-sm">
                  {application.status}
                </span>
              </div>
              <p className="text-xl text-white/90">Submitted {application.submittedDate}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Investor Information */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1F2933] mb-6">Investor Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-[#123A63] mt-0.5" />
                    <div>
                      <div className="text-sm text-[#667085]">Full Name</div>
                      <div className="font-semibold text-[#1F2933]">{application.investor.name}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#123A63] mt-0.5" />
                    <div>
                      <div className="text-sm text-[#667085]">Email</div>
                      <div className="font-semibold text-[#1F2933]">{application.investor.email}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[#123A63] mt-0.5" />
                    <div>
                      <div className="text-sm text-[#667085]">Phone</div>
                      <div className="font-semibold text-[#1F2933]">{application.investor.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-[#123A63] mt-0.5" />
                    <div>
                      <div className="text-sm text-[#667085]">Country</div>
                      <div className="font-semibold text-[#1F2933]">{application.investor.country}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-[#123A63] mt-0.5" />
                    <div>
                      <div className="text-sm text-[#667085]">Company</div>
                      <div className="font-semibold text-[#1F2933]">{application.investor.company}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1F2933] mb-6">Project Details</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1F2933] mb-2">{application.project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#123A63]/10 text-[#123A63] text-sm rounded-full">
                        {application.project.sector}
                      </span>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#0F8A5F] mt-0.5" />
                      <div>
                        <div className="text-sm text-[#667085]">Location</div>
                        <div className="font-semibold text-[#1F2933]">{application.project.location}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <DollarSign className="h-5 w-5 text-[#0F8A5F] mt-0.5" />
                      <div>
                        <div className="text-sm text-[#667085]">Investment Amount</div>
                        <div className="font-semibold text-[#1F2933]">{application.project.investment}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#0F8A5F] mt-0.5" />
                      <div>
                        <div className="text-sm text-[#667085]">Land Size</div>
                        <div className="font-semibold text-[#1F2933]">{application.project.land}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-[#0F8A5F] mt-0.5" />
                      <div>
                        <div className="text-sm text-[#667085]">Timeline</div>
                        <div className="font-semibold text-[#1F2933]">{application.project.timeline}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1F2933] mb-6">Submitted Documents</h2>
                <div className="space-y-3">
                  {application.documents.map((doc, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-lg border ${
                        doc.uploaded
                          ? "bg-green-50 border-green-200"
                          : "bg-red-50 border-red-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {doc.uploaded ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                        <div>
                          <div className="font-semibold text-[#1F2933]">{doc.name}</div>
                          {doc.uploaded && (
                            <div className="flex gap-2 text-xs text-[#667085] mt-1">
                              <span>{doc.size}</span>
                              <span>•</span>
                              <span>{doc.date}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {doc.uploaded && (
                        <button className="p-2 hover:bg-white rounded transition-colors">
                          <Download className="h-5 w-5 text-[#123A63]" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1F2933] mb-6">Application Timeline</h2>
                <div className="space-y-6">
                  {application.timeline.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            event.status === "completed"
                              ? "bg-green-500"
                              : event.status === "pending"
                              ? "bg-yellow-500"
                              : "bg-gray-300"
                          }`}
                        >
                          {event.status === "completed" && <CheckCircle2 className="h-5 w-5 text-white" />}
                          {event.status === "pending" && <Calendar className="h-5 w-5 text-white" />}
                        </div>
                        {index < application.timeline.length - 1 && (
                          <div className="w-0.5 h-12 bg-gray-300" />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="font-semibold text-[#1F2933]">{event.action}</div>
                        <div className="text-sm text-[#667085] mt-1">
                          {event.date} • {event.user}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Actions */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 sticky top-24">
                <h3 className="text-lg font-semibold text-[#1F2933] mb-4">Actions</h3>
                <div className="space-y-3">
                  <button className="w-full px-6 py-3 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors inline-flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Approve Application
                  </button>
                  <button className="w-full px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors inline-flex items-center justify-center gap-2">
                    <FileText className="h-5 w-5" />
                    Request Documents
                  </button>
                  <button className="w-full px-6 py-3 border-2 border-[#123A63] text-[#123A63] rounded-lg hover:bg-[#123A63]/5 transition-colors inline-flex items-center justify-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Send Message
                  </button>
                  <button className="w-full px-6 py-3 border-2 border-gray-300 text-[#1F2933] rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Schedule Meeting
                  </button>
                </div>
              </div>

              {/* Notes */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-[#1F2933] mb-4">Internal Notes</h3>
                <textarea
                  rows={6}
                  placeholder="Add notes about this application..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent text-sm"
                />
                <button className="w-full mt-3 px-4 py-2 bg-[#123A63] text-white rounded-lg hover:bg-[#123A63]/90 transition-colors text-sm">
                  Save Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
