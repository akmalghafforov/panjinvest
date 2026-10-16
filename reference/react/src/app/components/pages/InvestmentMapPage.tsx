import { useState } from "react";
import { Link } from "react-router";
import {
  MapPin,
  Search,
  Building2,
  Leaf,
  Utensils,
  Truck,
  Lightbulb,
  Zap,
  X,
  Wifi,
  Droplet,
  Power,
  Navigation,
  TrendingUp,
  Eye,
  Filter,
  Menu,
} from "lucide-react";

export default function InvestmentMapPage() {
  const [selectedSector, setSelectedSector] = useState<string[]>([]);
  const [selectedInfrastructure, setSelectedInfrastructure] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedLandType, setSelectedLandType] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPin, setSelectedPin] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const sectors = [
    { name: "Tourism", value: "tourism", icon: Building2, color: "#3B82F6" },
    { name: "Agriculture", value: "agriculture", icon: Leaf, color: "#10B981" },
    { name: "Food Processing", value: "food", icon: Utensils, color: "#F59E0B" },
    { name: "Logistics", value: "logistics", icon: Truck, color: "#8B5CF6" },
    { name: "Handicrafts", value: "handicrafts", icon: Lightbulb, color: "#EC4899" },
    { name: "Renewable Energy", value: "energy", icon: Zap, color: "#EAB308" },
  ];

  const infrastructure = [
    { name: "Electricity", value: "electricity", icon: Power },
    { name: "Water", value: "water", icon: Droplet },
    { name: "Internet", value: "internet", icon: Wifi },
    { name: "Road Access", value: "road", icon: Navigation },
  ];

  const statusOptions = [
    { name: "Available", value: "available" },
    { name: "Under Review", value: "review" },
    { name: "Reserved", value: "reserved" },
  ];

  const landTypes = [
    { name: "Agricultural", value: "agricultural" },
    { name: "Commercial", value: "commercial" },
    { name: "Industrial", value: "industrial" },
    { name: "Residential", value: "residential" },
  ];

  const projects = [
    {
      id: 1,
      title: "Eco-Lodge near Seven Lakes",
      sector: "tourism",
      location: "Seven Lakes Region",
      investment: "$250,000 - $500,000",
      land: "2-3 hectares",
      distance: "45 km from city center",
      status: "available",
      infrastructure: ["electricity", "water", "road"],
      landType: "commercial",
      position: { top: "25%", left: "60%" },
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
    },
    {
      id: 2,
      title: "Fruit Drying Facility",
      sector: "food",
      location: "Industrial Zone",
      investment: "$150,000 - $300,000",
      land: "0.5 hectares",
      distance: "8 km from city center",
      status: "available",
      infrastructure: ["electricity", "water", "road", "internet"],
      landType: "industrial",
      position: { top: "50%", left: "45%" },
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400",
    },
    {
      id: 3,
      title: "Cold Storage Center",
      sector: "logistics",
      location: "Highway M34",
      investment: "$400,000 - $800,000",
      land: "1 hectare",
      distance: "12 km from city center",
      status: "available",
      infrastructure: ["electricity", "water", "road"],
      landType: "industrial",
      position: { top: "60%", left: "70%" },
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400",
    },
    {
      id: 4,
      title: "Organic Honey Production",
      sector: "agriculture",
      location: "Mountain Areas",
      investment: "$80,000 - $150,000",
      land: "Flexible",
      distance: "28 km from city center",
      status: "available",
      infrastructure: ["electricity", "road"],
      landType: "agricultural",
      position: { top: "30%", left: "40%" },
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784720?w=400",
    },
    {
      id: 5,
      title: "Traditional Handicraft Workshop",
      sector: "handicrafts",
      location: "Old City",
      investment: "$50,000 - $100,000",
      land: "0.2 hectares",
      distance: "2 km from city center",
      status: "review",
      infrastructure: ["electricity", "water", "internet", "road"],
      landType: "commercial",
      position: { top: "50%", left: "50%" },
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400",
    },
    {
      id: 6,
      title: "Solar Installation",
      sector: "energy",
      location: "South Region",
      investment: "$100,000 - $250,000",
      land: "1-2 hectares",
      distance: "18 km from city center",
      status: "available",
      infrastructure: ["road"],
      landType: "industrial",
      position: { top: "70%", left: "55%" },
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSector = selectedSector.length === 0 || selectedSector.includes(project.sector);
    const matchesInfrastructure =
      selectedInfrastructure.length === 0 ||
      selectedInfrastructure.every((infra) => project.infrastructure.includes(infra));
    const matchesStatus = selectedStatus.length === 0 || selectedStatus.includes(project.status);
    const matchesLandType = selectedLandType.length === 0 || selectedLandType.includes(project.landType);
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSector && matchesInfrastructure && matchesStatus && matchesLandType && matchesSearch;
  });

  const toggleFilter = (value: string, filterArray: string[], setFilter: (arr: string[]) => void) => {
    if (filterArray.includes(value)) {
      setFilter(filterArray.filter((item) => item !== value));
    } else {
      setFilter([...filterArray, value]);
    }
  };

  const getSectorColor = (sectorValue: string) => {
    return sectors.find((s) => s.value === sectorValue)?.color || "#123A63";
  };

  return (
    <div className="h-screen flex flex-col bg-[#F6F8FA]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] text-white py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-3xl font-bold mb-1 md:mb-2">Interactive Investment Map</h1>
              <p className="text-white/90 text-sm md:text-base">Explore {filteredProjects.length} investment opportunities across Panjakent</p>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Filter className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Mobile Filter Overlay */}
        {showFilters && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setShowFilters(false)}
          />
        )}

        {/* Left Filter Panel */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
          w-80 bg-white border-r border-gray-200 overflow-y-auto
          transform transition-transform duration-300 lg:transform-none
          ${showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-4 md:p-6 space-y-4 md:space-y-6">
            {/* Mobile Header */}
            <div className="flex items-center justify-between lg:hidden pb-4 border-b border-gray-200">
              <h2 className="font-semibold text-[#1F2933]">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search */}
            <div>
              <label className="block text-sm font-semibold text-[#1F2933] mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" />
                <input
                  type="text"
                  placeholder="Location or project..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Sector Filters */}
            <div>
              <label className="block text-sm font-semibold text-[#1F2933] mb-3">Sector</label>
              <div className="space-y-2">
                {sectors.map((sector) => {
                  const Icon = sector.icon;
                  const isSelected = selectedSector.includes(sector.value);
                  return (
                    <button
                      key={sector.value}
                      onClick={() => toggleFilter(sector.value, selectedSector, setSelectedSector)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm ${
                        isSelected
                          ? "bg-[#123A63] text-white"
                          : "bg-gray-50 text-[#1F2933] hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="flex-1 text-left">{sector.name}</span>
                      {isSelected && <X className="h-4 w-4" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Infrastructure Filters */}
            <div>
              <label className="block text-sm font-semibold text-[#1F2933] mb-3">Infrastructure</label>
              <div className="space-y-2">
                {infrastructure.map((infra) => {
                  const Icon = infra.icon;
                  const isSelected = selectedInfrastructure.includes(infra.value);
                  return (
                    <button
                      key={infra.value}
                      onClick={() => toggleFilter(infra.value, selectedInfrastructure, setSelectedInfrastructure)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm ${
                        isSelected
                          ? "bg-[#0F8A5F] text-white"
                          : "bg-gray-50 text-[#1F2933] hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="flex-1 text-left">{infra.name}</span>
                      {isSelected && <X className="h-4 w-4" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Status Filters */}
            <div>
              <label className="block text-sm font-semibold text-[#1F2933] mb-3">Project Status</label>
              <div className="space-y-2">
                {statusOptions.map((status) => {
                  const isSelected = selectedStatus.includes(status.value);
                  return (
                    <button
                      key={status.value}
                      onClick={() => toggleFilter(status.value, selectedStatus, setSelectedStatus)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm ${
                        isSelected
                          ? "bg-[#123A63] text-white"
                          : "bg-gray-50 text-[#1F2933] hover:bg-gray-100"
                      }`}
                    >
                      <span className="flex-1 text-left">{status.name}</span>
                      {isSelected && <X className="h-4 w-4" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Land Type Filters */}
            <div>
              <label className="block text-sm font-semibold text-[#1F2933] mb-3">Land Type</label>
              <div className="space-y-2">
                {landTypes.map((landType) => {
                  const isSelected = selectedLandType.includes(landType.value);
                  return (
                    <button
                      key={landType.value}
                      onClick={() => toggleFilter(landType.value, selectedLandType, setSelectedLandType)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm ${
                        isSelected
                          ? "bg-[#D6A536] text-white"
                          : "bg-gray-50 text-[#1F2933] hover:bg-gray-100"
                      }`}
                    >
                      <span className="flex-1 text-left">{landType.name}</span>
                      {isSelected && <X className="h-4 w-4" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Distance Calculator */}
            <div className="pt-4 border-t border-gray-200">
              <label className="block text-sm font-semibold text-[#1F2933] mb-2">Distance Calculator</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Max km"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123A63] focus:border-transparent text-sm"
                />
                <button className="px-4 py-2 bg-[#123A63] text-white rounded-lg hover:bg-[#123A63]/90 transition-colors text-sm">
                  Apply
                </button>
              </div>
            </div>

            {/* Clear All */}
            {(selectedSector.length > 0 || selectedInfrastructure.length > 0 || selectedStatus.length > 0 || selectedLandType.length > 0) && (
              <button
                onClick={() => {
                  setSelectedSector([]);
                  setSelectedInfrastructure([]);
                  setSelectedStatus([]);
                  setSelectedLandType([]);
                  setSearchQuery("");
                }}
                className="w-full px-4 py-2 border-2 border-[#123A63] text-[#123A63] rounded-lg hover:bg-[#123A63]/5 transition-colors text-sm"
              >
                Clear All Filters
              </button>
            )}

            {/* Apply Button (Mobile) */}
            <button
              onClick={() => setShowFilters(false)}
              className="lg:hidden w-full px-4 py-3 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors text-sm font-medium"
            >
              Apply Filters ({filteredProjects.length} projects)
            </button>
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] via-[#FFF8E1] to-[#E3F2FD]">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#123A63" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Map Pins */}
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                style={project.position}
                onClick={() => setSelectedPin(selectedPin === project.id ? null : project.id)}
              >
                <div
                  className="w-10 h-10 rounded-full border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                  style={{ backgroundColor: getSectorColor(project.sector) }}
                >
                  <MapPin className="h-5 w-5 text-white" />
                </div>

                {/* Pin Popup Card */}
                {selectedPin === project.id && (
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPin(null);
                      }}
                      className="absolute top-2 right-2 z-10 p-1.5 bg-white/90 rounded-full shadow-md hover:bg-white"
                    >
                      <X className="h-4 w-4 text-[#1F2933]" />
                    </button>
                    <div className="h-32 md:h-40 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 md:p-4">
                      <span
                        className="px-2 md:px-3 py-1 text-white text-xs rounded-full inline-block mb-2"
                        style={{ backgroundColor: getSectorColor(project.sector) }}
                      >
                        {sectors.find((s) => s.value === project.sector)?.name}
                      </span>
                      <h3 className="text-base md:text-lg font-semibold text-[#1F2933] mb-2">{project.title}</h3>
                      <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-[#667085] mb-3 md:mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
                          <span className="truncate">{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
                          <span>{project.investment}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Navigation className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
                          <span>{project.distance}</span>
                        </div>
                      </div>
                      <Link
                        to={`/opportunities/${project.id}`}
                        className="w-full px-3 md:px-4 py-2 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors inline-flex items-center justify-center gap-2 text-xs md:text-sm"
                      >
                        <Eye className="h-3.5 w-3.5 md:h-4 md:w-4" />
                        View Project
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Legend */}
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 bg-white rounded-lg shadow-lg p-3 md:p-4 border border-gray-200 max-w-[calc(100vw-2rem)] md:max-w-none">
              <h3 className="font-semibold text-[#1F2933] mb-2 md:mb-3 text-xs md:text-sm">Map Legend</h3>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-1.5 md:gap-2">
                {sectors.map((sector) => {
                  const Icon = sector.icon;
                  return (
                    <div key={sector.value} className="flex items-center gap-1.5 md:gap-2">
                      <div
                        className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-white shadow flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: sector.color }}
                      >
                        <Icon className="h-2.5 w-2.5 md:h-3 md:w-3 text-white" />
                      </div>
                      <span className="text-[10px] md:text-xs text-[#667085] truncate">{sector.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats Card */}
            <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-white rounded-lg shadow-lg p-3 md:p-4 border border-gray-200">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#123A63]">{filteredProjects.length}</div>
                <div className="text-xs md:text-sm text-[#667085] whitespace-nowrap">Projects Found</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
