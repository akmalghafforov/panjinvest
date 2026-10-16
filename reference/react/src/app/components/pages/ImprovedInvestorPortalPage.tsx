import { Link } from "react-router";
import { FileText, Bookmark, Calendar, MessageSquare, User, Bell, Upload, Download, Settings } from "lucide-react";
import { ApplicationCard } from "../invest/ApplicationCard";
import { EmptyState } from "../invest/EmptyState";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function ImprovedInvestorPortalPage() {
  // Mock data - would come from API
  const myApplications = [
    {
      id: "app-001",
      projectName: "Eco-Lodge near Seven Lakes",
      sector: "Tourism",
      submittedDate: "January 15, 2026",
      status: "under-review",
      assignedOfficer: "Farrukh Mahmadov",
      nextAction: "Initial review in progress"
    },
    {
      id: "app-002",
      projectName: "Fruit Drying Facility",
      sector: "Food Processing",
      submittedDate: "January 10, 2026",
      status: "documents-pending",
      assignedOfficer: "Aziza Rahimova",
      nextAction: "Upload company registration documents"
    }
  ];

  const savedOpportunities = [
    {
      id: "eco-lodge-seven-lakes",
      title: "Eco-Lodge near Seven Lakes",
      sector: "Tourism",
      investment: "$250,000 - $500,000"
    },
    {
      id: "cold-storage-center",
      title: "Regional Cold Storage Center",
      sector: "Logistics",
      investment: "$400,000 - $800,000"
    }
  ];

  const upcomingMeetings = [
    {
      id: "meet-001",
      title: "Initial Consultation - Eco-Lodge Project",
      date: "January 28, 2026",
      time: "10:00 AM",
      type: "Online Meeting",
      with: "Farrukh Mahmadov"
    }
  ];

  const recentMessages = [
    {
      id: "msg-001",
      from: "Investment Support Team",
      subject: "Application Received - Eco-Lodge Project",
      date: "January 15, 2026",
      read: true
    },
    {
      id: "msg-002",
      from: "Aziza Rahimova",
      subject: "Document Request - Fruit Drying Facility",
      date: "January 12, 2026",
      read: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Investor Portal</h1>
              <p className="text-white/90">Welcome back, John Investor</p>
            </div>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <FileText className="h-8 w-8 text-[#123A63]" />
                <span className="text-3xl font-bold text-[#123A63]">{myApplications.length}</span>
              </div>
              <h3 className="text-sm text-[#667085]">Active Applications</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <Bookmark className="h-8 w-8 text-[#0F8A5F]" />
                <span className="text-3xl font-bold text-[#0F8A5F]">{savedOpportunities.length}</span>
              </div>
              <h3 className="text-sm text-[#667085]">Saved Opportunities</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <Calendar className="h-8 w-8 text-[#D6A536]" />
                <span className="text-3xl font-bold text-[#D6A536]">{upcomingMeetings.length}</span>
              </div>
              <h3 className="text-sm text-[#667085]">Upcoming Meetings</h3>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <MessageSquare className="h-8 w-8 text-blue-600" />
                <span className="text-3xl font-bold text-blue-600">
                  {recentMessages.filter(m => !m.read).length}
                </span>
              </div>
              <h3 className="text-sm text-[#667085]">Unread Messages</h3>
            </div>
          </div>

          {/* Profile Completion */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <Bell className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-blue-900 mb-2">Complete Your Profile</h3>
                <p className="text-sm text-blue-800 mb-4">
                  Your profile is 60% complete. Add more information to help us serve you better.
                </p>
                <div className="w-full bg-blue-200 rounded-full h-2 mb-4">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "60%" }} />
                </div>
                <Link to="/portal/profile">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <User className="h-4 w-4 mr-2" />
                    Complete Profile
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="applications" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto">
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
              <TabsTrigger value="meetings">Meetings</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>

            {/* Applications Tab */}
            <TabsContent value="applications" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#1F2933]">My Applications</h2>
                <Link to="/submit-interest">
                  <Button className="bg-[#0F8A5F] hover:bg-[#0F8A5F]/90">
                    <FileText className="h-4 w-4 mr-2" />
                    New Application
                  </Button>
                </Link>
              </div>

              {myApplications.length > 0 ? (
                <div className="grid gap-6">
                  {myApplications.map((app) => (
                    <ApplicationCard key={app.id} {...app} />
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon={FileText}
                  title="No applications yet"
                  description="You haven't submitted any investment interest applications. Browse opportunities and submit your first application."
                  actionLabel="Browse Opportunities"
                  onAction={() => window.location.href = "/opportunities"}
                />
              )}
            </TabsContent>

            {/* Saved Opportunities Tab */}
            <TabsContent value="saved" className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1F2933]">Saved Opportunities</h2>

              {savedOpportunities.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {savedOpportunities.map((opp) => (
                    <Link key={opp.id} to={`/opportunities/${opp.id}`}>
                      <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <span className="px-3 py-1 bg-[#123A63]/10 text-[#123A63] text-xs rounded-full">
                            {opp.sector}
                          </span>
                          <Bookmark className="h-5 w-5 text-[#0F8A5F] fill-current" />
                        </div>
                        <h3 className="font-semibold text-[#1F2933] mb-2">{opp.title}</h3>
                        <p className="text-sm text-[#667085]">{opp.investment}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon={Bookmark}
                  title="No saved opportunities"
                  description="Save investment opportunities to easily find them later and compare options."
                  actionLabel="Browse Opportunities"
                  onAction={() => window.location.href = "/opportunities"}
                />
              )}
            </TabsContent>

            {/* Meetings Tab */}
            <TabsContent value="meetings" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#1F2933]">Upcoming Meetings</h2>
                <Link to="/contact">
                  <Button variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Consultation
                  </Button>
                </Link>
              </div>

              {upcomingMeetings.length > 0 ? (
                <div className="space-y-4">
                  {upcomingMeetings.map((meeting) => (
                    <div key={meeting.id} className="bg-white rounded-lg border border-gray-200 p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#1F2933] mb-2">{meeting.title}</h3>
                          <div className="space-y-1 text-sm text-[#667085]">
                            <p className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {meeting.date} at {meeting.time}
                            </p>
                            <p className="flex items-center gap-2">
                              <User className="h-4 w-4" />
                              With: {meeting.with}
                            </p>
                            <p className="flex items-center gap-2">
                              <MessageSquare className="h-4 w-4" />
                              Type: {meeting.type}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Join Meeting
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon={Calendar}
                  title="No upcoming meetings"
                  description="Schedule a consultation with our investment team to discuss opportunities."
                  actionLabel="Book Consultation"
                  onAction={() => window.location.href = "/contact"}
                />
              )}
            </TabsContent>

            {/* Messages Tab */}
            <TabsContent value="messages" className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1F2933]">Messages</h2>

              {recentMessages.length > 0 ? (
                <div className="space-y-2">
                  {recentMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`bg-white rounded-lg border border-gray-200 p-6 hover:shadow-sm transition-shadow cursor-pointer ${
                        !message.read ? "border-l-4 border-l-blue-600" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-[#1F2933]">{message.from}</h3>
                            {!message.read && (
                              <span className="px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full">
                                New
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-[#1F2933] mb-1">{message.subject}</p>
                          <p className="text-xs text-[#667085]">{message.date}</p>
                        </div>
                        <MessageSquare className="h-5 w-5 text-[#667085]" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon={MessageSquare}
                  title="No messages"
                  description="You don't have any messages from the investment support team yet."
                />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
