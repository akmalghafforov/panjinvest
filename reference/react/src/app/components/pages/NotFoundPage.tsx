import { Link } from "react-router";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FA] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#123A63] mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">Page Not Found</h2>
          <p className="text-lg text-[#667085] mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <h3 className="text-xl font-semibold text-[#1F2933] mb-4">What would you like to do?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/"
              className="px-6 py-4 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Home className="h-5 w-5" />
              Go to Homepage
            </Link>
            <Link
              to="/opportunities"
              className="px-6 py-4 border-2 border-[#123A63] text-[#123A63] rounded-lg hover:bg-[#123A63]/5 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Search className="h-5 w-5" />
              Browse Opportunities
            </Link>
          </div>
        </div>

        <div className="text-sm text-[#667085]">
          <p className="mb-4">Need help? Contact our support team:</p>
          <div className="flex justify-center gap-6">
            <a href="tel:+99234225XXXX" className="text-[#123A63] hover:text-[#0F8A5F] transition-colors">
              +992 3422 5-XX-XX
            </a>
            <span>•</span>
            <a href="mailto:invest@panjakent.tj" className="text-[#123A63] hover:text-[#0F8A5F] transition-colors">
              invest@panjakent.tj
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
