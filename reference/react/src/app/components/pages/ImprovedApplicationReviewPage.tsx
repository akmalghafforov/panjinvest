import { useParams, Link } from "react-router";
import { ArrowLeft, User, Building2, Mail, Phone, MapPin, CheckCircle2, XCircle, Send, Calendar, FileText, AlertCircle } from "lucide-react";
import { AdminPageLayout } from "../admin/AdminPageLayout";
import { StatusBadge } from "../invest/StatusBadge";
import { Timeline } from "../invest/Timeline";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function ImprovedApplicationReviewPage() {
  const { id } = useParams();

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
      investorType: "Company",
      address: "123 Business Ave, New York, NY 10001"
    },
    project: {
      id: "eco-lodge-seven-lakes",
      title: "Eco-Lodge near Seven Lakes",
      sector: "Tourism",
      location: "Seven Lakes Region",
      investment: "$250,000 - $500,000"
    },
    formData: {
      sector: "Tourism",
      investmentAmount: "$400,000",
      preferredLocation: "Seven Lakes area",
      timeline: "6-12 months",
      message: "I am interested in developing an eco-lodge in the Seven Lakes region. I have experience in sustainable tourism and believe this location has great potential."
    },
    caseManager: {
      name: "Farrukh Mahmadov",
      position: "Investment Coordinator"
    },
    documents: [
      { title: "Passport / ID", status: "verified", fileName: "passport.pdf" },
      { title: "Company Registration", status: "needs-correction", fileName: "company_reg.pdf" },
      { title: "Business Proposal", status: "verified", fileName: "proposal.pdf" },
      { title: "Financial Information", status: "not-uploaded" }
    ],
    timeline: [
      { title: "Application Submitted", status: "completed" as const, date: "January 15, 2026" },
      { title: "Under Review", status: "completed" as const, date: "January 16, 2026" },
      { title: "Case Manager Assigned", status: "completed" as const, date: "January 17, 2026" },
      { title: "Documents Requested", status: "current" as const, date: "In Progress" },
      { title: "Meeting Scheduled", status: "upcoming" as const },
      { title: "Decision", status: "upcoming" as const }
    ],
    internalNotes: [
      {
        id: "note-001",
        author: "Farrukh Mahmadov",
        content: "Strong candidate with good tourism background. Needs updated company registration.",
        timestamp: "January 17, 2026 3:30 PM"
      }
    ],
    messages: [
      {
        id: "msg-001",
        from: "Farrukh Mahmadov",
        to: "John Investor",
        content: "Thank you for your interest. Please provide updated company registration.",
        timestamp: "January 17, 2026 10:30 AM"
      }
    ]
  };

  return (
    <AdminPageLayout>

      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin" className="text-[#123A63] hover:text-[#0F8A5F]">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-[#1F2933]">Application Review</h1>
                <p className="text-sm text-[#667085]">Ref: {application.referenceNumber}</p>
              </div>
            </div>
            <StatusBadge
              variant="application"
              status={application.status as any}
              label={application.status.replace(/-/g, " ")}
              className="text-base px-4 py-2"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
          <div className="grid lg:grid-cols-3 gap-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="messages">Messages</TabsTrigger>
                  <TabsTrigger value="notes">Internal Notes</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  {/* Investor Profile */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
                    <h2 className="text-xl font-semibold text-[#1F2933] mb-6">Investor Profile</h2>
                    <div className="grid md:grid-cols-2 gap-4 md:p-5 lg:p-6">
                      <div>
                        <p className="text-sm text-[#667085] mb-1">Full Name</p>
                        <p className="font-medium text-[#1F2933]">{application.investor.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#667085] mb-1">Company</p>
                        <p className="font-medium text-[#1F2933]">{application.investor.company}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#667085] mb-1">Email</p>
                        <a href={`mailto:${application.investor.email}`} className="font-medium text-[#123A63] hover:text-[#0F8A5F]">
                          {application.investor.email}
                        </a>
                      </div>
                      <div>
                        <p className="text-sm text-[#667085] mb-1">Phone</p>
                        <a href={`tel:${application.investor.phone}`} className="font-medium text-[#123A63] hover:text-[#0F8A5F]">
                          {application.investor.phone}
                        </a>
                      </div>
                      <div>
                        <p className="text-sm text-[#667085] mb-1">Country</p>
                        <p className="font-medium text-[#1F2933]">{application.investor.country}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#667085] mb-1">Investor Type</p>
                        <p className="font-medium text-[#1F2933]">{application.investor.investorType}</p>
                      </div>
                    </div>
                  </div>

                  {/* Selected Project */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
                    <h2 className="text-xl font-semibold text-[#1F2933] mb-6">Selected Investment Opportunity</h2>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-[#667085] mb-1">Project</p>
                        <Link to={`/opportunities/${application.project.id}`} className="text-lg font-semibold text-[#123A63] hover:text-[#0F8A5F]">
                          {application.project.title}
                        </Link>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-[#667085] mb-1">Sector</p>
                          <StatusBadge variant="sector" label={application.project.sector} />
                        </div>
                        <div>
                          <p className="text-sm text-[#667085] mb-1">Location</p>
                          <p className="font-medium text-[#1F2933]">{application.project.location}</p>
                        </div>
                        <div>
                          <p className="text-sm text-[#667085] mb-1">Investment Range</p>
                          <p className="font-medium text-[#1F2933]">{application.project.investment}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submitted Form Data */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
                    <h2 className="text-xl font-semibold text-[#1F2933] mb-6">Investment Details</h2>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-[#667085] mb-1">Estimated Investment Amount</p>
                        <p className="font-semibold text-[#1F2933] text-lg">{application.formData.investmentAmount}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#667085] mb-1">Expected Timeline</p>
                        <p className="font-medium text-[#1F2933]">{application.formData.timeline}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#667085] mb-1">Investor's Message</p>
                        <p className="text-[#1F2933]">{application.formData.message}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
                    <h2 className="text-xl font-semibold text-[#1F2933] mb-6">Application Progress</h2>
                    <Timeline steps={application.timeline} />
                  </div>
                </TabsContent>

                {/* Documents Tab */}
                <TabsContent value="documents">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
                    <h2 className="text-xl font-semibold text-[#1F2933] mb-6">Document Review</h2>
                    <div className="space-y-4">
                      {application.documents.map((doc, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 md:p-5 lg:p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-semibold text-[#1F2933] mb-1">{doc.title}</h3>
                              {doc.fileName && (
                                <p className="text-sm text-[#667085]">{doc.fileName}</p>
                              )}
                            </div>
                            <StatusBadge variant="document" status={doc.status as any} label={doc.status.replace(/-/g, " ")} />
                          </div>

                          {doc.status !== "not-uploaded" && (
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">View Document</Button>
                              <Button variant="outline" size="sm" className="text-[#0F8A5F] border-[#0F8A5F]">
                                <CheckCircle2 className="h-4 w-4 mr-1" />
                                Approve
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-600 border-red-200">
                                <XCircle className="h-4 w-4 mr-1" />
                                Reject
                              </Button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Messages Tab */}
                <TabsContent value="messages">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
                    <h2 className="text-xl font-semibold text-[#1F2933] mb-6">Message History</h2>
                    <div className="space-y-4 mb-6">
                      {application.messages.map((msg) => (
                        <div key={msg.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-[#1F2933]">{msg.from} → {msg.to}</span>
                            <span className="text-xs text-[#667085]">{msg.timestamp}</span>
                          </div>
                          <p className="text-sm text-[#1F2933]">{msg.content}</p>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <Textarea placeholder="Send message to investor..." rows={4} className="mb-3" />
                      <Button className="bg-[#123A63] hover:bg-[#123A63]/90">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Internal Notes Tab */}
                <TabsContent value="notes">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
                    <h2 className="text-xl font-semibold text-[#1F2933] mb-6">Internal Notes</h2>
                    <div className="space-y-4 mb-6">
                      {application.internalNotes.map((note) => (
                        <div key={note.id} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-[#1F2933]">{note.author}</span>
                            <span className="text-xs text-[#667085]">{note.timestamp}</span>
                          </div>
                          <p className="text-sm text-[#1F2933]">{note.content}</p>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <Textarea placeholder="Add internal note (not visible to investor)..." rows={4} className="mb-3" />
                      <Button variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Add Note
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Admin Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-5 lg:p-6 sticky top-24">
                <h3 className="font-semibold text-[#1F2933] mb-4">Admin Actions</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-[#1F2933] mb-2">Update Status</label>
                    <Select defaultValue={application.status}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="under-review">Under Review</SelectItem>
                        <SelectItem value="documents-pending">Documents Pending</SelectItem>
                        <SelectItem value="meeting-scheduled">Meeting Scheduled</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1F2933] mb-2">Assign Case Manager</label>
                    <Select defaultValue="farrukh">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="farrukh">Farrukh Mahmadov</SelectItem>
                        <SelectItem value="aziza">Aziza Rahimova</SelectItem>
                        <SelectItem value="rustam">Rustam Nazarov</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full bg-[#0F8A5F] hover:bg-[#0F8A5F]/90">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Approve Application
                  </Button>

                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Meeting
                  </Button>

                  <Button variant="outline" className="w-full">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    Request Documents
                  </Button>

                  <Button variant="outline" className="w-full text-red-600 border-red-200">
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject Application
                  </Button>
                </div>
              </div>

              {/* Case Manager Info */}
              <div className="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] rounded-xl shadow-sm p-4 md:p-5 lg:p-6 text-white">
                <h3 className="font-semibold mb-4">Current Case Manager</h3>
                <div>
                  <p className="font-semibold">{application.caseManager.name}</p>
                  <p className="text-white/80 text-sm">{application.caseManager.position}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AdminPageLayout>
  );
}
