import { Link, useParams } from "react-router";
import {
  ArrowLeft, FileText, User, Calendar, MessageSquare, Download,
  Upload, Send, AlertCircle, CheckCircle2, Clock, XCircle
} from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Timeline } from "../invest/Timeline";
import { FileUploadCard } from "../invest/FileUploadCard";
import { StatusBadge } from "../invest/StatusBadge";

export default function ApplicationDetailPage() {
  const { id } = useParams();

  // Mock data - would come from API
  const application = {
    id: id || "app-001",
    referenceNumber: "INV-PNJ-2026-00024",
    submittedDate: "January 15, 2026",
    status: "documents-pending",
    investor: {
      name: "John Investor",
      email: "john@example.com",
      phone: "+1 555 0100",
      country: "United States",
      company: "Global Ventures LLC",
      investorType: "Company"
    },
    project: {
      id: "eco-lodge-seven-lakes",
      title: "Eco-Lodge near Seven Lakes",
      sector: "Tourism",
      location: "Seven Lakes Region",
      investment: "$250,000 - $500,000"
    },
    caseManager: {
      name: "Farrukh Mahmadov",
      position: "Investment Coordinator",
      email: "f.mahmadov@panjakent.tj",
      phone: "+992 3422 5-11-22"
    },
    nextAction: "Upload required company registration documents",
    timeline: [
      {
        title: "Application Submitted",
        description: "Investment interest submitted successfully",
        status: "completed" as const,
        date: "January 15, 2026"
      },
      {
        title: "Under Review",
        description: "Initial review by investment team",
        status: "completed" as const,
        date: "January 16, 2026"
      },
      {
        title: "Case Manager Assigned",
        description: "Farrukh Mahmadov assigned to your application",
        status: "completed" as const,
        date: "January 17, 2026"
      },
      {
        title: "Documents Requested",
        description: "Additional documentation required",
        status: "current" as const,
        date: "In Progress"
      },
      {
        title: "Meeting Scheduled",
        description: "Initial consultation meeting",
        status: "upcoming" as const
      },
      {
        title: "Decision",
        description: "Final decision on investment application",
        status: "upcoming" as const
      }
    ],
    documents: [
      {
        title: "Passport / ID",
        description: "Valid government-issued identification",
        required: true,
        status: "uploaded" as const,
        fileName: "passport_john_doe.pdf"
      },
      {
        title: "Company Registration",
        description: "Certificate of incorporation or registration",
        required: true,
        status: "needs-correction" as const,
        fileName: "company_reg.pdf",
        adminComment: "Please provide a more recent certificate (within last 6 months)"
      },
      {
        title: "Business Proposal",
        description: "Detailed business plan for this investment",
        required: true,
        status: "verified" as const,
        fileName: "business_proposal_v2.pdf"
      },
      {
        title: "Financial Information",
        description: "Bank statements or proof of funds",
        required: true,
        status: "not-uploaded" as const
      },
      {
        title: "Power of Attorney",
        description: "If applicable, legal authorization",
        required: false,
        status: "not-uploaded" as const
      }
    ],
    messages: [
      {
        id: "msg-001",
        from: "Farrukh Mahmadov",
        fromType: "admin",
        content: "Thank you for your interest in the Eco-Lodge project. I've reviewed your initial application and would like to request some additional documentation.",
        timestamp: "January 17, 2026 10:30 AM"
      },
      {
        id: "msg-002",
        from: "John Investor",
        fromType: "investor",
        content: "Thank you for the update. I'll upload the requested documents by end of week.",
        timestamp: "January 17, 2026 2:15 PM"
      }
    ],
    meetings: [
      {
        id: "meet-001",
        title: "Initial Consultation",
        date: "January 28, 2026",
        time: "10:00 AM",
        type: "Online Meeting",
        status: "scheduled"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/portal"
            className="inline-flex items-center gap-2 text-[#123A63] hover:text-[#0F8A5F] transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Portal
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Application Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-[#1F2933] mb-2">Application Details</h1>
              <p className="text-[#667085]">Reference: {application.referenceNumber}</p>
            </div>
            <div className="mt-4 lg:mt-0">
              <StatusBadge
                variant="application"
                status={application.status as any}
                label={application.status.replace(/-/g, " ")}
                className="text-base px-4 py-2"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-[#667085] mb-1">Submitted</p>
              <p className="font-semibold text-[#1F2933]">{application.submittedDate}</p>
            </div>
            <div>
              <p className="text-sm text-[#667085] mb-1">Project</p>
              <Link to={`/opportunities/${application.project.id}`} className="font-semibold text-[#123A63] hover:text-[#0F8A5F]">
                {application.project.title}
              </Link>
            </div>
            <div>
              <p className="text-sm text-[#667085] mb-1">Case Manager</p>
              <p className="font-semibold text-[#1F2933]">{application.caseManager.name}</p>
            </div>
          </div>

          {application.nextAction && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-900 mb-1">Next Action Required</p>
                <p className="text-sm text-blue-800">{application.nextAction}</p>
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Application Timeline */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-[#1F2933] mb-6">Application Status</h2>
              <Timeline steps={application.timeline} />
            </div>

            {/* Document Checklist */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-[#1F2933] mb-6">Required Documents</h2>
              <div className="space-y-4">
                {application.documents.map((doc, index) => (
                  <FileUploadCard
                    key={index}
                    title={doc.title}
                    description={doc.description}
                    required={doc.required}
                    status={doc.status}
                    fileName={doc.fileName}
                    adminComment={doc.adminComment}
                    onUpload={(file) => console.log("Upload", file)}
                    onRemove={() => console.log("Remove")}
                    onDownload={() => console.log("Download")}
                  />
                ))}
              </div>
            </div>

            {/* Message Thread */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-[#1F2933] mb-6">Messages</h2>

              <div className="space-y-4 mb-6">
                {application.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-4 rounded-lg ${
                      message.fromType === "admin"
                        ? "bg-[#123A63]/5 border border-[#123A63]/10"
                        : "bg-gray-50 border border-gray-200"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-[#667085]" />
                        <span className="font-semibold text-[#1F2933]">{message.from}</span>
                      </div>
                      <span className="text-xs text-[#667085]">{message.timestamp}</span>
                    </div>
                    <p className="text-sm text-[#1F2933]">{message.content}</p>
                  </div>
                ))}
              </div>

              {/* Send Message */}
              <div className="border-t border-gray-200 pt-6">
                <Textarea
                  placeholder="Type your message to the investment team..."
                  rows={4}
                  className="mb-3"
                />
                <Button className="bg-[#123A63] hover:bg-[#123A63]/90">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 className="font-semibold text-[#1F2933] mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Download Application
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Request Meeting
                </Button>
                <Button variant="outline" className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50">
                  <XCircle className="h-4 w-4 mr-2" />
                  Withdraw Application
                </Button>
              </div>
            </div>

            {/* Project Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-[#1F2933] mb-4">Selected Project</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-[#667085]">Project Name</p>
                  <Link to={`/opportunities/${application.project.id}`} className="font-medium text-[#123A63] hover:text-[#0F8A5F]">
                    {application.project.title}
                  </Link>
                </div>
                <div>
                  <p className="text-sm text-[#667085]">Sector</p>
                  <p className="font-medium text-[#1F2933]">{application.project.sector}</p>
                </div>
                <div>
                  <p className="text-sm text-[#667085]">Location</p>
                  <p className="font-medium text-[#1F2933]">{application.project.location}</p>
                </div>
                <div>
                  <p className="text-sm text-[#667085]">Investment Range</p>
                  <p className="font-medium text-[#1F2933]">{application.project.investment}</p>
                </div>
              </div>
            </div>

            {/* Case Manager */}
            <div className="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] rounded-xl shadow-sm p-6 text-white">
              <h3 className="font-semibold mb-4">Your Case Manager</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">{application.caseManager.name}</p>
                  <p className="text-white/80 text-sm">{application.caseManager.position}</p>
                </div>
                <div className="pt-3 border-t border-white/20 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Send className="h-4 w-4" />
                    <span>{application.caseManager.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <User className="h-4 w-4" />
                    <span>{application.caseManager.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Meetings */}
            {application.meetings.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-[#1F2933] mb-4">Upcoming Meetings</h3>
                {application.meetings.map((meeting) => (
                  <div key={meeting.id} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-[#1F2933] mb-2">{meeting.title}</h4>
                    <div className="space-y-1 text-sm text-[#667085]">
                      <p className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {meeting.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {meeting.time}
                      </p>
                      <p className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        {meeting.type}
                      </p>
                    </div>
                    <Button variant="outline" className="w-full mt-3" size="sm">
                      Join Meeting
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
