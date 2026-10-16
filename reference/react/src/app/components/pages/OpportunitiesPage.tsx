import { useState } from "react";
import { Link } from "react-router";
import {
  MapPin,
  TrendingUp,
  Download,
  Filter,
  Search,
  X,
  SlidersHorizontal,
  ArrowUpDown,
  FolderOpen,
} from "lucide-react";
import { ProjectCard } from "../invest/ProjectCard";
import { EmptyState } from "../invest/EmptyState";

export default function OpportunitiesPage() {
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<string>("newest");

  const sectors = [
    "All Sectors",
    "Tourism",
    "Agriculture",
    "Food Processing",
    "Logistics",
    "Handicrafts",
    "Renewable Energy",
    "Light Manufacturing",
  ];

  const projects = [
    {
      id: "eco-lodge-seven-lakes",
      title: "Eco-Lodge near Seven Lakes",
      sector: "Tourism",
      location: "Seven Lakes Region",
      investment: "$250,000 - $500,000",
      land: "2-3 hectares",
      stage: "Ready for Investment",
      status: "Available",
      roi: "18-22%",
      description: "Develop eco-friendly accommodation for tourists visiting the famous Seven Lakes.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    },
    {
      id: "hotel-seven-lakes",
      title: "Boutique Hotel near Seven Lakes",
      sector: "Tourism",
      location: "Seven Lakes Highway",
      investment: "$800,000 - $1,500,000",
      land: "5 hectares",
      stage: "Feasibility Complete",
      status: "Available",
      roi: "20-25%",
      description: "30-40 room boutique hotel with restaurant and recreational facilities.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    },
    {
      id: "fruit-drying-facility",
      title: "Modern Fruit Drying Facility",
      sector: "Food Processing",
      location: "Panjakent Industrial Zone",
      investment: "$150,000 - $300,000",
      land: "0.5 hectares",
      stage: "Land Allocated",
      status: "Available",
      roi: "25-30%",
      description: "Solar-powered fruit drying facility for apricots, apples, and other local produce.",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800",
    },
    {
      id: "cold-storage-center",
      title: "Regional Cold Storage Center",
      sector: "Logistics",
      location: "Near Highway M34",
      investment: "$400,000 - $800,000",
      land: "1 hectare",
      stage: "Land Allocated",
      status: "Available",
      roi: "15-20%",
      description: "Modern cold storage facility serving regional agricultural producers.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
    },
    {
      id: "honey-production",
      title: "Organic Honey Production & Packaging",
      sector: "Agriculture",
      location: "Mountain Areas",
      investment: "$80,000 - $150,000",
      land: "Flexible",
      stage: "Ready for Investment",
      status: "Available",
      roi: "30-35%",
      description: "Develop organic honey production with modern packaging for export markets.",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784720?w=800",
    },
    {
      id: "warehouse-trade",
      title: "Warehouse Near Regional Trade Route",
      sector: "Logistics",
      location: "Near Border Crossing",
      investment: "$300,000 - $600,000",
      land: "1.5 hectares",
      stage: "Planning Phase",
      status: "Available",
      roi: "18-22%",
      description: "Strategic warehouse facility for regional trade and distribution.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800",
    },
    {
      id: "export-center",
      title: "Local Product Export Center",
      sector: "Logistics",
      location: "Panjakent City Center",
      investment: "$200,000 - $400,000",
      land: "0.8 hectares",
      stage: "Feasibility Complete",
      status: "Available",
      roi: "20-24%",
      description: "Aggregation and export facilitation center for local handicrafts and products.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800",
    },
    {
      id: "solar-installations",
      title: "Small Solar Installations",
      sector: "Renewable Energy",
      location: "Various Locations",
      investment: "$100,000 - $250,000",
      land: "1-2 hectares",
      stage: "Ready for Investment",
      status: "Available",
      roi: "15-18%",
      description: "Develop small-scale solar power installations for local energy needs.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
    },
    {
      id: "handicraft-workshop",
      title: "Traditional Handicraft Workshop",
      sector: "Handicrafts",
      location: "Old City",
      investment: "$50,000 - $100,000",
      land: "0.2 hectares",
      stage: "Land Allocated",
      status: "Available",
      roi: "25-30%",
      description: "Workshop and training center for traditional Sogdian handicrafts and ceramics.",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800",
    },
  ];

  const filteredProjects = projects
    .filter((project) => {
      const matchesSector =
        selectedSector === "all" ||
        project.sector === selectedSector ||
        selectedSector === "All Sectors";
      const matchesStatus = selectedStatus === "all" || project.status === selectedStatus;
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSector && matchesStatus && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "investment-low") {
        const aMin = parseInt(a.investment.replace(/[^0-9]/g, ""));
        const bMin = parseInt(b.investment.replace(/[^0-9]/g, ""));
        return aMin - bMin;
      }
      if (sortBy === "investment-high") {
        const aMin = parseInt(a.investment.replace(/[^0-9]/g, ""));
        const bMin = parseInt(b.investment.replace(/[^0-9]/g, ""));
        return bMin - aMin;
      }
      if (sortBy === "roi-high") {
        const aROI = parseInt(a.roi.split("-")[1]);
        const bROI = parseInt(b.roi.split("-")[1]);
        return bROI - aROI;
      }
      return 0; // newest (default order)
    });

  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Investment Opportunities</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Explore available investment projects across priority sectors in Panjakent
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" />
              <input
                type="text"
                placeholder="Search opportunities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 bg-[#123A63] text-white rounded-lg hover:bg-[#123A63]/90 transition-colors"
            >
              <SlidersHorizontal className="h-5 w-5" />
              Filters
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-4">
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"
              >
                {sectors.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="investment-low">Lowest Investment</option>
                <option value="investment-high">Highest Investment</option>
                <option value="roi-high">Highest ROI</option>
              </select>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#1F2933] mb-2">Sector</label>
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"
                >
                  {sectors.map((sector) => (
                    <option key={sector} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1F2933] mb-2">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="Available">Available</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Reserved">Reserved</option>
                </select>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-4 text-sm text-[#667085]">
            Showing {filteredProjects.length} of {projects.length} opportunities
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  sector={project.sector}
                  location={project.location}
                  investment={project.investment}
                  roi={project.roi}
                  landSize={project.land}
                  status={project.status.toLowerCase()}
                  image={project.image}
                  description={project.description}
                  onSave={() => console.log("Save project", project.id)}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              icon={FolderOpen}
              title="No opportunities found"
              description="Try adjusting your filters or search query to find investment opportunities"
              actionLabel="Clear Filters"
              onAction={() => {
                setSelectedSector("all");
                setSelectedStatus("all");
                setSearchQuery("");
                setSortBy("newest");
              }}
            />
          )}
        </div>
      </section>
    </div>
  );
}
