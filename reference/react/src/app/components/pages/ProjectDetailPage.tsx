import { Link, useParams } from "react-router";
import {
  MapPin,
  TrendingUp,
  Download,
  FileText,
  Calendar,
  DollarSign,
  Users,
  Phone,
  Mail,
  Building2,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowLeft,
} from "lucide-react";

export default function ProjectDetailPage() {
  const { id } = useParams();

  const project = {
    id: "eco-lodge-seven-lakes",
    title: "Eco-Lodge near Seven Lakes",
    sector: "Tourism",
    location: "Seven Lakes Region, 45km from Panjakent",
    investment: "$250,000 - $500,000",
    land: "2-3 hectares",
    stage: "Ready for Investment",
    status: "Available",
    roi: "18-22%",
    timeline: "18-24 months",
    description:
      "Develop an eco-friendly accommodation facility to serve the growing number of tourists visiting the famous Seven Lakes (Haft Kul). This project offers an opportunity to create sustainable tourism infrastructure in one of Tajikistan's most visited natural attractions.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200",
    department: "Tourism Development Department",
    contact: {
      name: "Farrukh Mahmadov",
      position: "Investment Coordinator",
      phone: "+992 3422 5-11-22",
      email: "f.mahmadov@panjakent.tj",
    },
    infrastructure: [
      { name: "Road Access", available: true },
      { name: "Electricity", available: true },
      { name: "Water Supply", available: true },
      { name: "Internet Connectivity", available: false },
      { name: "Waste Management", available: false },
      { name: "Mobile Coverage", available: true },
    ],
    financials: [
      { label: "Minimum Investment", value: "$250,000" },
      { label: "Maximum Investment", value: "$500,000" },
      { label: "Expected ROI", value: "18-22% annually" },
      { label: "Payback Period", value: "5-7 years" },
      { label: "Land Lease Cost", value: "$2,000/year" },
      { label: "Property Tax", value: "0.5% of value" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?w=800",
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800",
    ],
  };

  const similarProjects = [
    {
      id: "hotel-seven-lakes",
      title: "Boutique Hotel near Seven Lakes",
      sector: "Tourism",
      investment: "$800,000 - $1,500,000",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    },
    {
      id: "fruit-drying-facility",
      title: "Modern Fruit Drying Facility",
      sector: "Food Processing",
      investment: "$150,000 - $300,000",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/opportunities"
            className="inline-flex items-center gap-2 text-[#123A63] hover:text-[#0F8A5F] transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Opportunities
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-2 mb-4">
              <span className="px-4 py-2 bg-[#123A63] text-white text-sm rounded-full">
                {project.sector}
              </span>
              <span className="px-4 py-2 bg-[#0F8A5F] text-white text-sm rounded-full">
                {project.status}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {project.title}
            </h1>
            <p className="text-xl text-white/90">{project.location}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1F2933] mb-4">Project Overview</h2>
                <p className="text-[#667085] leading-relaxed">{project.description}</p>
              </div>

              {/* Financial Overview */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1F2933] mb-6">Financial Overview</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.financials.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-[#F6F8FA] rounded-lg">
                      <span className="text-[#667085]">{item.label}</span>
                      <span className="font-semibold text-[#1F2933]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Infrastructure Availability */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1F2933] mb-6">Infrastructure Availability</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.infrastructure.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-[#F6F8FA] rounded-lg">
                      {item.available ? (
                        <CheckCircle2 className="h-5 w-5 text-[#0F8A5F] flex-shrink-0" />
                      ) : (
                        <XCircle className="h-5 w-5 text-[#667085] flex-shrink-0" />
                      )}
                      <span className={item.available ? "text-[#1F2933]" : "text-[#667085]"}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Map Placeholder */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1F2933] mb-6">Location</h2>
                <div className="h-64 bg-gradient-to-br from-[#123A63]/5 to-[#0F8A5F]/5 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-[#123A63] mx-auto mb-4" />
                    <p className="text-[#667085]">Interactive map view</p>
                  </div>
                </div>
              </div>

              {/* Photo Gallery */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1F2933] mb-6">Photo Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="h-48 rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 sticky top-24">
                <h3 className="text-lg font-semibold text-[#1F2933] mb-4">Take Action</h3>
                <div className="space-y-3">
                  <Link
                    to={`/submit-interest?project=${id}`}
                    className="w-full px-6 py-3 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <FileText className="h-5 w-5" />
                    Submit Interest in This Project
                  </Link>
                  <button className="w-full px-6 py-3 border-2 border-[#123A63] text-[#123A63] rounded-lg hover:bg-[#123A63]/5 transition-colors inline-flex items-center justify-center gap-2">
                    <Download className="h-5 w-5" />
                    Download Investment Brief
                  </button>
                  <Link
                    to="/contact"
                    className="w-full px-6 py-3 border border-gray-300 text-[#1F2933] rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Book Consultation
                  </Link>
                  <button className="w-full px-6 py-3 border border-gray-300 text-[#1F2933] rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    Ask a Question
                  </button>
                </div>

                {/* Key Details */}
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-[#123A63] mt-0.5" />
                    <div>
                      <div className="text-sm text-[#667085]">Investment Range</div>
                      <div className="font-semibold text-[#1F2933]">{project.investment}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-[#123A63] mt-0.5" />
                    <div>
                      <div className="text-sm text-[#667085]">Expected ROI</div>
                      <div className="font-semibold text-[#0F8A5F]">{project.roi}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-[#123A63] mt-0.5" />
                    <div>
                      <div className="text-sm text-[#667085]">Timeline</div>
                      <div className="font-semibold text-[#1F2933]">{project.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#123A63] mt-0.5" />
                    <div>
                      <div className="text-sm text-[#667085]">Land Size</div>
                      <div className="font-semibold text-[#1F2933]">{project.land}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-[#123A63] mt-0.5" />
                    <div>
                      <div className="text-sm text-[#667085]">Project Stage</div>
                      <div className="font-semibold text-[#1F2933]">{project.stage}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-[#123A63] mt-0.5" />
                    <div>
                      <div className="text-sm text-[#667085]">Responsible Department</div>
                      <div className="font-semibold text-[#1F2933] text-sm">{project.department}</div>
                    </div>
                  </div>
                </div>

                {/* Trust Information */}
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#0F8A5F]" />
                    <span className="text-[#667085]">Verified by government</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-[#667085]" />
                    <span className="text-[#667085]">Last updated: January 2026</span>
                  </div>
                </div>
              </div>

              {/* Contact Person */}
              <div className="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] rounded-xl shadow-sm p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Government Contact</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-white/80 text-sm">Department</div>
                    <div className="font-medium">{project.department}</div>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="text-white/80 text-sm mb-2">Contact Person</div>
                    <div className="font-semibold mb-1">{project.contact.name}</div>
                    <div className="text-white/90 text-sm mb-3">{project.contact.position}</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4" />
                        <span>{project.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4" />
                        <span>{project.contact.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Opportunities */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#1F2933] mb-8">Similar Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {similarProjects.map((similarProject) => (
                <Link
                  key={similarProject.id}
                  to={`/opportunities/${similarProject.id}`}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 group"
                >
                  <div className="flex">
                    <div className="w-40 h-40 flex-shrink-0">
                      <img
                        src={similarProject.image}
                        alt={similarProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <span className="px-3 py-1 bg-[#123A63]/10 text-[#123A63] text-xs rounded-full">
                        {similarProject.sector}
                      </span>
                      <h3 className="text-lg font-semibold text-[#1F2933] mt-3 mb-2 group-hover:text-[#123A63] transition-colors">
                        {similarProject.title}
                      </h3>
                      <div className="text-sm text-[#667085] flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        {similarProject.investment}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
