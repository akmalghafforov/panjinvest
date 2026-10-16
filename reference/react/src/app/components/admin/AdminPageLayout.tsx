import { useState, ReactNode } from "react";
import { Menu } from "lucide-react";
import { AdminSidebar } from "./AdminSidebar";

interface AdminPageLayoutProps {
  children: ReactNode;
}

export function AdminPageLayout({ children }: AdminPageLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F8FA] flex">
      <AdminSidebar
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header with Menu Button */}
        <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="h-6 w-6 text-[#1F2933]" />
          </button>
          <div>
            <h2 className="font-bold text-[#123A63] text-sm">Admin Panel</h2>
            <p className="text-xs text-[#667085]">Invest Panjakent</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
