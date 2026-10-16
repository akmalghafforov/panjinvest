import { Link, useLocation } from "react-router";
import {
  LayoutDashboard, Building2, Users, FileText, Map, FolderOpen,
  BarChart3, Newspaper, FileCode, Languages, Shield, Activity,
  Settings, ChevronLeft, ChevronRight, X
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  { icon: Building2, label: "Investment Projects", path: "/admin/projects" },
  { icon: Users, label: "Investors / CRM", path: "/admin/crm" },
  { icon: FileText, label: "Applications", path: "/admin/applications" },
  { icon: Map, label: "Map Objects / Land Plots", path: "/admin/map" },
  { icon: FolderOpen, label: "Documents", path: "/admin/documents" },
  { icon: BarChart3, label: "Statistics", path: "/admin/statistics" },
  { icon: Newspaper, label: "News and Events", path: "/admin/news" },
  { icon: FileCode, label: "Pages / CMS", path: "/admin/cms" },
  { icon: Languages, label: "Languages", path: "/admin/languages" },
  { icon: Shield, label: "Users and Roles", path: "/admin/users" },
  { icon: Activity, label: "Activity Log", path: "/admin/activity" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

interface AdminSidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

export function AdminSidebar({ mobileOpen = false, onMobileClose }: AdminSidebarProps) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    if (onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300 flex-shrink-0",
        "fixed lg:static inset-y-0 left-0 z-50 lg:z-auto",
        "transform lg:transform-none",
        collapsed ? "w-20" : "w-64",
        mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 lg:h-20 border-b border-gray-200 flex items-center justify-between px-4 lg:px-6">
            {!collapsed && (
              <div>
                <h2 className="font-bold text-[#123A63] text-sm lg:text-base">Admin Panel</h2>
                <p className="text-xs text-[#667085]">Invest Panjakent</p>
              </div>
            )}
            <div className="flex items-center gap-2">
              {/* Mobile Close Button */}
              <button
                onClick={onMobileClose}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-[#667085]" />
              </button>
              {/* Desktop Collapse Button */}
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="hidden lg:block p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {collapsed ? (
                  <ChevronRight className="h-5 w-5 text-[#667085]" />
                ) : (
                  <ChevronLeft className="h-5 w-5 text-[#667085]" />
                )}
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-4 lg:py-6">
            <ul className="space-y-1 px-2 lg:px-3">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 lg:py-3 rounded-lg transition-colors",
                        isActive
                          ? "bg-[#123A63] text-white"
                          : "text-[#1F2933] hover:bg-gray-100"
                      )}
                      title={collapsed ? item.label : undefined}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && (
                        <span className="text-sm font-medium">{item.label}</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Profile */}
          <div className="border-t border-gray-200 p-3 lg:p-4">
            {!collapsed ? (
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 lg:h-10 lg:w-10 rounded-full bg-[#123A63] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">FM</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#1F2933] truncate">Farrukh M.</p>
                  <p className="text-xs text-[#667085] truncate">Administrator</p>
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="h-10 w-10 rounded-full bg-[#123A63] flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">FM</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
