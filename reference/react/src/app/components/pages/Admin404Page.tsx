import { Link } from "react-router";
import { Home, ArrowLeft, AlertCircle, LayoutDashboard } from "lucide-react";
import { AdminPageLayout } from "../admin/AdminPageLayout";
import { Button } from "../ui/button";

export default function Admin404Page() {
  return (
    <AdminPageLayout>

      <div className="flex-1 flex items-center justify-center px-4 py-6 md:py-8">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-6 md:mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-red-50 mb-4 md:mb-6">
              <AlertCircle className="h-8 w-8 md:h-12 md:w-12 text-red-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#123A63] mb-3 md:mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2933] mb-3 md:mb-4">
              Admin Page Not Found
            </h2>
            <p className="text-base md:text-lg text-[#667085] mb-6 md:mb-8">
              The admin page you're looking for doesn't exist or hasn't been implemented yet.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8 border border-gray-100">
            <h3 className="text-lg md:text-xl font-semibold text-[#1F2933] mb-4 md:mb-6">
              Where would you like to go?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <Link to="/admin">
                <Button className="w-full bg-[#123A63] hover:bg-[#123A63]/90 text-white gap-2 py-5 md:py-6 text-sm md:text-base">
                  <LayoutDashboard className="h-4 w-4 md:h-5 md:w-5" />
                  Admin Dashboard
                </Button>
              </Link>
              <Link to="/admin/crm">
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#123A63] text-[#123A63] hover:bg-[#123A63]/5 gap-2 py-5 md:py-6 text-sm md:text-base"
                >
                  <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
                  Investor CRM
                </Button>
              </Link>
              <Link to="/">
                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-300 text-[#1F2933] hover:bg-gray-50 gap-2 py-5 md:py-6 text-sm md:text-base"
                >
                  <Home className="h-4 w-4 md:h-5 md:w-5" />
                  Public Homepage
                </Button>
              </Link>
              <Link to="/opportunities">
                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-300 text-[#1F2933] hover:bg-gray-50 gap-2 py-5 md:py-6 text-sm md:text-base"
                >
                  Opportunities
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-[#123A63]">
              <strong>Note:</strong> Some admin features are still under development.
              Please check back later or contact the system administrator.
            </p>
          </div>
        </div>
      </div>
    </AdminPageLayout>
  );
}
