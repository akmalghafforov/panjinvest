import { Link, useLocation } from "react-router";
import { Search, LogIn, FileText, Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

  const navItems = [
    { name: "Why Panjakent", path: "/#why" },
    { name: "Opportunities", path: "/opportunities" },
    { name: "Investment Map", path: "/map" },
    { name: "Investor Guide", path: "/guide" },
    { name: "Data & Statistics", path: "/data" },
    { name: "Documents", path: "/documents" },
    { name: "Contact", path: "/contact" },
  ];

  const languages = [
    { code: "EN", name: "English" },
    { code: "RU", name: "Русский" },
    { code: "TJ", name: "Тоҷикӣ" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-[#123A63] flex items-center justify-center">
              <span className="text-white font-bold text-xl">IP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#123A63]">Invest Panjakent</h1>
              <p className="text-xs text-[#667085]">Republic of Tajikistan</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-[#1F2933] hover:text-[#123A63] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors hidden sm:block"
            >
              <Search className="h-5 w-5 text-[#667085]" />
            </button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hidden sm:flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Globe className="h-4 w-4 text-[#667085]" />
                  <span className="text-sm font-medium text-[#1F2933]">{currentLang}</span>
                  <ChevronDown className="h-4 w-4 text-[#667085]" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={currentLang === lang.code ? "bg-gray-100" : ""}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Investor Portal Button - Desktop */}
            <Link
              to="/portal"
              className="hidden md:flex items-center gap-2 px-4 py-2 border border-[#123A63] text-[#123A63] rounded-lg hover:bg-[#123A63]/5 transition-colors"
            >
              <LogIn className="h-4 w-4" />
              <span className="text-sm">Investor Portal</span>
            </Link>

            {/* Submit Interest Button */}
            <Link
              to="/submit-interest"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors"
            >
              <FileText className="h-4 w-4" />
              <span className="text-sm">Submit Interest</span>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Menu className="h-6 w-6 text-[#1F2933]" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-[#123A63]">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg text-[#1F2933] hover:text-[#123A63] transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-200 my-4" />
                  <Link
                    to="/portal"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-lg text-[#1F2933] hover:text-[#123A63] transition-colors py-2"
                  >
                    <LogIn className="h-5 w-5" />
                    Investor Portal
                  </Link>
                  <Link
                    to="/submit-interest"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors justify-center"
                  >
                    <FileText className="h-5 w-5" />
                    Submit Interest
                  </Link>

                  {/* Language Selector - Mobile */}
                  <div className="mt-4">
                    <p className="text-sm text-[#667085] mb-2">Language</p>
                    <div className="flex gap-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => setCurrentLang(lang.code)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            currentLang === lang.code
                              ? "bg-[#123A63] text-white"
                              : "bg-gray-100 text-[#1F2933] hover:bg-gray-200"
                          }`}
                        >
                          {lang.code}
                        </button>
                      ))}
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#667085]" />
              <input
                type="text"
                placeholder="Search investment opportunities, sectors, documents..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63]"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sticky CTA - Shows on scroll */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
        <Link
          to="/submit-interest"
          className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors"
        >
          <FileText className="h-5 w-5" />
          <span className="font-medium">Submit Investment Interest</span>
        </Link>
      </div>
    </header>
  );
}
