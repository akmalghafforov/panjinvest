import { Link } from "react-router";
import { CheckCircle2, FileText, Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Timeline } from "../invest/Timeline";

export default function SubmitInterestSuccessPage() {
  const nextSteps = [
    {
      title: "Interest Submitted",
      description: "Your investment interest has been recorded",
      status: "completed" as const,
      date: new Date().toLocaleDateString()
    },
    {
      title: "Initial Review",
      description: "Our team will review your submission",
      status: "current" as const,
      date: "2-3 business days"
    },
    {
      title: "Case Manager Assigned",
      description: "A dedicated officer will be assigned to your case",
      status: "upcoming" as const
    },
    {
      title: "Consultation Scheduled",
      description: "Initial consultation meeting will be arranged",
      status: "upcoming" as const
    },
    {
      title: "Documents Requested",
      description: "Additional documentation may be requested",
      status: "upcoming" as const
    },
    {
      title: "Decision / Next Action",
      description: "You will receive a decision or next steps",
      status: "upcoming" as const
    }
  ];

  const referenceNumber = `INV-PNJ-${new Date().getFullYear()}-${Math.floor(Math.random() * 100000).toString().padStart(5, "0")}`;

  return (
    <div className="bg-[#F6F8FA] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Message */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#0F8A5F]/10 mb-6">
            <CheckCircle2 className="h-10 w-10 text-[#0F8A5F]" />
          </div>

          <h1 className="text-3xl font-bold text-[#1F2933] mb-4">Thank You for Your Interest!</h1>

          <p className="text-lg text-[#667085] mb-6">
            Your investment interest has been submitted successfully. Our investor support team will review your request and contact you.
          </p>

          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#123A63]/5 rounded-lg">
            <span className="text-sm text-[#667085]">Application Reference Number:</span>
            <span className="font-mono font-semibold text-[#123A63]">{referenceNumber}</span>
          </div>

          <p className="text-sm text-[#667085] mt-4">
            Please save this reference number for your records. You can use it to track your application.
          </p>
        </div>

        {/* Next Steps Timeline */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#1F2933] mb-6">What Happens Next?</h2>
          <Timeline steps={nextSteps} />
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link to="/portal" className="block">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow h-full">
              <div className="p-3 bg-[#123A63]/10 rounded-lg w-fit mb-4">
                <FileText className="h-6 w-6 text-[#123A63]" />
              </div>
              <h3 className="font-semibold text-[#1F2933] mb-2">Go to Investor Portal</h3>
              <p className="text-sm text-[#667085]">Track your application and upload documents</p>
            </div>
          </Link>

          <Link to="/opportunities" className="block">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow h-full">
              <div className="p-3 bg-[#0F8A5F]/10 rounded-lg w-fit mb-4">
                <FileText className="h-6 w-6 text-[#0F8A5F]" />
              </div>
              <h3 className="font-semibold text-[#1F2933] mb-2">View More Opportunities</h3>
              <p className="text-sm text-[#667085]">Explore other investment projects</p>
            </div>
          </Link>

          <Link to="/contact" className="block">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow h-full">
              <div className="p-3 bg-[#D6A536]/10 rounded-lg w-fit mb-4">
                <Phone className="h-6 w-6 text-[#D6A536]" />
              </div>
              <h3 className="font-semibold text-[#1F2933] mb-2">Contact Support</h3>
              <p className="text-sm text-[#667085]">Get immediate assistance from our team</p>
            </div>
          </Link>
        </div>

        {/* Contact Support Card */}
        <div className="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">Need Immediate Assistance?</h2>
          <p className="text-white/90 mb-6">
            Our investor support team is available to answer your questions and guide you through the process.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="h-5 w-5" />
                <h3 className="font-semibold">Hotline</h3>
              </div>
              <p className="text-white/90">+992 xxx xxx xxx</p>
              <p className="text-sm text-white/70">Monday - Friday, 9:00 - 18:00</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="h-5 w-5" />
                <h3 className="font-semibold">WhatsApp</h3>
              </div>
              <p className="text-white/90">+992 xxx xxx xxx</p>
              <p className="text-sm text-white/70">Available 24/7</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Send className="h-5 w-5" />
                <h3 className="font-semibold">Telegram</h3>
              </div>
              <p className="text-white/90">@InvestPanjakent</p>
              <p className="text-sm text-white/70">Fast response</p>
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Send className="h-5 w-5" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <p className="text-white/90">invest@panjakent.tj</p>
              <p className="text-sm text-white/70">Response within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Official Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">Official Verified Contact</h3>
          <p className="text-sm text-blue-800 mb-2">
            All investor requests are registered and reviewed officially by the Panjakent Investment Support Department.
          </p>
          <p className="text-sm text-blue-800">
            If anyone asks for payment or unofficial fees during the application process, please report it immediately to our anti-corruption hotline.
          </p>
        </div>
      </div>
    </div>
  );
}
