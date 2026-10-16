import { useState } from "react";
import { Map, Plus, Search, Filter, MapPin, Maximize2, Edit, Trash2 } from "lucide-react";
import { AdminPageLayout } from "../admin/AdminPageLayout";
import { Button } from "../ui/button";

export default function AdminMapPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const landPlots = [
    {
      id: "PLOT-001",
      name: "Industrial Zone A",
      area: "45.2 hectares",
      location: "North District",
      zoning: "Industrial",
      status: "available",
      price: "$2.5M"
    },
    {
      id: "PLOT-002",
      name: "Tourism Development Area",
      area: "28.5 hectares",
      location: "City Center",
      zoning: "Commercial/Tourism",
      status: "reserved",
      price: "$4.2M"
    },
    {
      id: "PLOT-003",
      name: "Agricultural Land Block C",
      area: "120 hectares",
      location: "Rural District 2",
      zoning: "Agricultural",
      status: "available",
      price: "$1.8M"
    },
    {
      id: "PLOT-004",
      name: "Tech Park Zone",
      area: "35 hectares",
      location: "South District",
      zoning: "Technology/Office",
      status: "occupied",
      price: "$3.5M"
    },
    {
      id: "PLOT-005",
      name: "Renewable Energy Site",
      area: "85 hectares",
      location: "Mountain Region",
      zoning: "Energy/Industrial",
      status: "available",
      price: "$2.1M"
    }
  ];

  const categories = [
    { id: "all", label: "All Plots", count: 24 },
    { id: "available", label: "Available", count: 12 },
    { id: "reserved", label: "Reserved", count: 6 },
    { id: "occupied", label: "Occupied", count: 6 }
  ];

  return (
    <AdminPageLayout>

      <div className="flex-1">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#1F2933]">Map Objects & Land Plots</h1>
              <p className="text-[#667085] mt-1">Manage investment locations and land parcels</p>
            </div>
            <Button className="bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 text-white gap-2">
              <Plus className="h-5 w-5" />
              Add New Plot
            </Button>
          </div>
        </div>

        <div className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:p-5 lg:p-6 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-4 md:p-5 lg:p-6 rounded-lg border-2 transition-all ${
                  selectedCategory === cat.id
                    ? "border-[#0F8A5F] bg-[#0F8A5F]/5"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <p className="text-sm text-[#667085]">{cat.label}</p>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2933] mt-2">{cat.count}</p>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-[#1F2933]">Interactive Map</h2>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Maximize2 className="h-4 w-4" />
                    Fullscreen
                  </Button>
                </div>
                <div className="aspect-video bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Map className="h-16 w-16 text-[#667085] mx-auto mb-4" />
                    <p className="text-[#667085]">Interactive Map View</p>
                    <p className="text-sm text-[#667085] mt-2">
                      Map integration would display here
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
              <h2 className="text-lg font-semibold text-[#1F2933] mb-4">Quick Filters</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#667085] mb-2">
                    Zoning Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">
                    <option>All Types</option>
                    <option>Industrial</option>
                    <option>Commercial</option>
                    <option>Agricultural</option>
                    <option>Technology</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#667085] mb-2">
                    Area Range
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">
                    <option>All Sizes</option>
                    <option>0-50 hectares</option>
                    <option>50-100 hectares</option>
                    <option>100+ hectares</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#667085] mb-2">
                    Location
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">
                    <option>All Locations</option>
                    <option>City Center</option>
                    <option>North District</option>
                    <option>South District</option>
                    <option>Rural Areas</option>
                  </select>
                </div>
                <Button className="w-full bg-[#123A63] hover:bg-[#123A63]/90 text-white">
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 mt-8">
            <div className="p-4 md:p-5 lg:p-6 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" />
                <input
                  type="text"
                  placeholder="Search land plots..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F] focus:border-transparent"
                />
              </div>
            </div>

            <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Plot ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Area
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Zoning
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {landPlots.map((plot) => (
                    <tr key={plot.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-[#1F2933]">
                        {plot.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#1F2933]">
                        {plot.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#667085]">
                        {plot.area}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-[#667085]">
                          <MapPin className="h-4 w-4" />
                          {plot.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                          {plot.zoning}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            plot.status === "available"
                              ? "bg-green-50 text-green-700"
                              : plot.status === "reserved"
                              ? "bg-yellow-50 text-yellow-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {plot.status.charAt(0).toUpperCase() + plot.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-[#1F2933]">
                        {plot.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminPageLayout>
  );
}
