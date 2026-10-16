import { Download, FileText, File, Search, Filter } from "lucide-react";
import { useState } from "react";

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "All Documents",
    "Investor Guides",
    "Legal Framework",
    "Tax & Incentives",
    "Templates & Forms",
    "Sector Reports",
    "Statistics",
  ];

  const documents = [
    {
      title: "Complete Investor Guide 2026",
      category: "Investor Guides",
      description: "Comprehensive guide covering all aspects of investing in Panjakent",
      size: "2.4 MB",
      pages: "48 pages",
      date: "January 2026",
      type: "PDF",
      language: "EN / RU / TJ",
    },
    {
      title: "Investment Opportunities Booklet",
      category: "Investor Guides",
      description: "Glossy overview of key investment projects with photos and contact information",
      size: "5.2 MB",
      pages: "32 pages",
      date: "January 2026",
      type: "PDF",
      language: "EN / RU",
    },
    {
      title: "Panjakent Economic Profile",
      category: "Statistics",
      description: "Detailed economic and demographic data for the Panjakent region",
      size: "3.1 MB",
      pages: "56 pages",
      date: "December 2025",
      type: "PDF",
      language: "EN / RU",
    },
    {
      title: "Land Plot Catalog",
      category: "Templates & Forms",
      description: "Available land plots with maps, sizes, and lease rates",
      size: "4.8 MB",
      pages: "24 pages",
      date: "January 2026",
      type: "PDF",
      language: "EN / RU",
    },
    {
      title: "Tourism Investment Brief",
      category: "Sector Reports",
      description: "Opportunities and market analysis for tourism sector investments",
      size: "2.8 MB",
      pages: "42 pages",
      date: "November 2025",
      type: "PDF",
      language: "EN / RU",
    },
    {
      title: "Agriculture Investment Brief",
      category: "Sector Reports",
      description: "Guide to agricultural investment opportunities and support programs",
      size: "2.6 MB",
      pages: "38 pages",
      date: "November 2025",
      type: "PDF",
      language: "EN / RU",
    },
    {
      title: "Legal and Tax Guide",
      category: "Legal Framework",
      description: "Overview of legal framework, tax rates, and incentive programs",
      size: "1.8 MB",
      pages: "32 pages",
      date: "December 2025",
      type: "PDF",
      language: "EN / RU / TJ",
    },
    {
      title: "Application Forms Package",
      category: "Templates & Forms",
      description: "All required forms for investment applications and permits",
      size: "890 KB",
      pages: "12 pages",
      date: "January 2026",
      type: "PDF / Word",
      language: "EN / RU / TJ",
    },
  ];

  const filteredDocuments = documents.filter((doc) => {
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory || selectedCategory === "All Documents";
    const matchesSearch =
      searchQuery === "" ||
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Documents & Downloads</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Access guides, regulations, templates, and essential documents for investors
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 text-sm text-[#667085]">
            Showing {filteredDocuments.length} of {documents.length} documents
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((doc, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#123A63]/10 rounded-lg">
                    <FileText className="h-6 w-6 text-[#123A63]" />
                  </div>
                  <div className="flex-1">
                    <span className="px-2 py-1 bg-[#0F8A5F]/10 text-[#0F8A5F] text-xs rounded-full">
                      {doc.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#1F2933] mb-2">{doc.title}</h3>
                <p className="text-sm text-[#667085] mb-4">{doc.description}</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#667085] mb-4">
                  <div><span className="font-medium">Type:</span> {doc.type}</div>
                  <div><span className="font-medium">Size:</span> {doc.size}</div>
                  <div><span className="font-medium">Pages:</span> {doc.pages}</div>
                  <div><span className="font-medium">Language:</span> {doc.language}</div>
                  <div className="col-span-2"><span className="font-medium">Updated:</span> {doc.date}</div>
                </div>
                <button className="w-full px-4 py-3 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors inline-flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
