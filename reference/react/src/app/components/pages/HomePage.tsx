import { Link } from "react-router";
import {
  Users,
  Building2,
  Briefcase,
  HeadphonesIcon,
  MapPin,
  TrendingUp,
  Leaf,
  Truck,
  Utensils,
  Lightbulb,
  Factory,
  ArrowRight,
  Download,
  FileText,
  BarChart3,
  Map,
  CheckCircle2,
  Globe,
  Shield,
  Zap,
  Award,
} from "lucide-react";

export default function HomePage() {
  const stats = [
    { label: "Population", value: "280,000+", icon: Users },
    { label: "Priority Sectors", value: "7", icon: Building2 },
    { label: "Available Projects", value: "24", icon: Briefcase },
    { label: "Investor Support", value: "24/7", icon: HeadphonesIcon },
    { label: "Strategic Location", value: "Central Asia", icon: MapPin },
  ];

  const advantages = [
    {
      icon: Globe,
      title: "Strategic Location",
      description: "Gateway to Central Asian markets with access to regional trade routes",
    },
    {
      icon: TrendingUp,
      title: "Growing Economy",
      description: "Stable economic growth with government support for foreign investment",
    },
    {
      icon: Shield,
      title: "Investment Protection",
      description: "Legal framework protecting investor rights and property",
    },
    {
      icon: Zap,
      title: "Quick Registration",
      description: "Streamlined business registration process within 7 days",
    },
    {
      icon: Award,
      title: "Tax Incentives",
      description: "Special tax benefits for priority sectors and foreign investors",
    },
    {
      icon: Leaf,
      title: "Natural Resources",
      description: "Rich agricultural land, water resources, and renewable energy potential",
    },
  ];

  const sectors = [
    {
      icon: Globe,
      name: "Tourism",
      description: "Seven Lakes, Ancient Sogdian sites, eco-tourism opportunities",
      color: "bg-blue-500",
    },
    {
      icon: Leaf,
      name: "Agriculture",
      description: "Fruits, vegetables, beekeeping, organic farming",
      color: "bg-green-500",
    },
    {
      icon: Utensils,
      name: "Food Processing",
      description: "Fruit drying, dairy, honey packaging, organic products",
      color: "bg-orange-500",
    },
    {
      icon: Truck,
      name: "Logistics",
      description: "Warehousing, cold storage, regional distribution",
      color: "bg-purple-500",
    },
    {
      icon: Lightbulb,
      name: "Handicrafts",
      description: "Traditional textiles, ceramics, souvenirs",
      color: "bg-pink-500",
    },
    {
      icon: Zap,
      name: "Renewable Energy",
      description: "Solar, small hydro, energy independence",
      color: "bg-yellow-500",
    },
  ];

  const featuredProjects = [
    {
      id: "eco-lodge-seven-lakes",
      title: "Eco-Lodge near Seven Lakes",
      sector: "Tourism",
      location: "Seven Lakes Region",
      investment: "$250,000 - $500,000",
      land: "2-3 hectares",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    },
    {
      id: "fruit-drying-facility",
      title: "Modern Fruit Drying Facility",
      sector: "Food Processing",
      location: "Panjakent Industrial Zone",
      investment: "$150,000 - $300,000",
      land: "0.5 hectares",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800",
    },
    {
      id: "cold-storage-center",
      title: "Regional Cold Storage Center",
      sector: "Logistics",
      location: "Near Highway M34",
      investment: "$400,000 - $800,000",
      land: "1 hectare",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
    },
  ];

  const journeySteps = [
    {
      step: 1,
      title: "Explore Opportunities",
      description: "Browse available projects and priority sectors",
    },
    {
      step: 2,
      title: "Submit Interest",
      description: "Register and express interest in specific projects",
    },
    {
      step: 3,
      title: "Get Support",
      description: "Receive guidance from investment facilitation team",
    },
    {
      step: 4,
      title: "Site Visit",
      description: "Visit location and meet with local authorities",
    },
    {
      step: 5,
      title: "Legal Setup",
      description: "Register business and obtain necessary permits",
    },
    {
      step: 6,
      title: "Start Operations",
      description: "Launch your investment with ongoing support",
    },
  ];

  return (
    <div className="bg-[#F6F8FA]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#123A63] to-[#0F8A5F] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Invest in Panjakent
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Gateway to tourism, agriculture, logistics, regional trade, food processing, and sustainable growth in Tajikistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/opportunities"
                className="px-8 py-4 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                <FileText className="h-5 w-5" />
                Submit Investment Interest
              </Link>
              <Link
                to="/opportunities"
                className="px-8 py-4 bg-white text-[#123A63] rounded-lg hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                View Opportunities
              </Link>
              <Link
                to="/guide"
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download Investor Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="bg-white shadow-lg -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-[#123A63]/10 rounded-lg">
                      <Icon className="h-6 w-6 text-[#123A63]" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-[#123A63] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#667085]">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Panjakent Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F2933] mb-4">Why Panjakent?</h2>
            <p className="text-lg text-[#667085] max-w-2xl mx-auto">
              Discover the competitive advantages that make Panjakent an ideal investment destination
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="p-3 bg-[#0F8A5F]/10 rounded-lg w-fit mb-4">
                    <Icon className="h-6 w-6 text-[#0F8A5F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2933] mb-2">{advantage.title}</h3>
                  <p className="text-[#667085]">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Investment Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[#1F2933] mb-4">Featured Investment Opportunities</h2>
              <p className="text-lg text-[#667085]">Explore high-priority projects ready for investment</p>
            </div>
            <Link
              to="/opportunities"
              className="hidden md:flex items-center gap-2 text-[#123A63] hover:text-[#0F8A5F] transition-colors"
            >
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/opportunities/${project.id}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#123A63]/10 text-[#123A63] text-xs rounded-full">
                      {project.sector}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2933] mb-2 group-hover:text-[#123A63] transition-colors">
                    {project.title}
                  </h3>
                  <div className="space-y-2 text-sm text-[#667085] mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      <span>{project.investment}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors text-sm">
                      View Project
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-[#1F2933] rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              to="/opportunities"
              className="inline-flex items-center gap-2 text-[#123A63] hover:text-[#0F8A5F] transition-colors"
            >
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Map Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F2933] mb-4">Interactive Investment Map</h2>
            <p className="text-lg text-[#667085] max-w-2xl mx-auto">
              Explore investment opportunities by location and sector
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="h-96 bg-gradient-to-br from-[#123A63]/5 to-[#0F8A5F]/5 flex items-center justify-center">
              <Link
                to="/map"
                className="px-8 py-4 bg-[#123A63] text-white rounded-lg hover:bg-[#123A63]/90 transition-colors inline-flex items-center gap-2"
              >
                <Map className="h-5 w-5" />
                Explore Interactive Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Sectors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F2933] mb-4">Priority Sectors</h2>
            <p className="text-lg text-[#667085] max-w-2xl mx-auto">
              Key industries with high growth potential and government support
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#0F8A5F] transition-colors">
                  <div className={`p-3 ${sector.color} rounded-lg w-fit mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2933] mb-2">{sector.name}</h3>
                  <p className="text-[#667085] text-sm">{sector.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investor Journey Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F2933] mb-4">Your Investment Journey</h2>
            <p className="text-lg text-[#667085] max-w-2xl mx-auto">
              A clear path from interest to successful operation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeySteps.map((step) => (
              <div key={step.step} className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#D6A536] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-[#1F2933] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#667085]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Dashboard Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F2933] mb-4">Data & Statistics</h2>
            <p className="text-lg text-[#667085] max-w-2xl mx-auto">
              Access comprehensive economic and demographic data
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] rounded-xl shadow-lg p-8 text-white">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold mb-2">$120M</div>
                <div className="text-white/80">Regional GDP</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15%</div>
                <div className="text-white/80">Annual Growth Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">8,500+</div>
                <div className="text-white/80">Active Businesses</div>
              </div>
            </div>
            <Link
              to="/data"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#123A63] rounded-lg hover:bg-white/90 transition-colors"
            >
              <BarChart3 className="h-5 w-5" />
              View Full Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Documents and Downloads */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F2933] mb-4">Essential Documents</h2>
            <p className="text-lg text-[#667085] max-w-2xl mx-auto">
              Download guides, regulations, and templates for investors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Investor Guide 2026", size: "2.4 MB" },
              { name: "Legal Framework", size: "1.8 MB" },
              { name: "Tax Incentives Guide", size: "1.2 MB" },
              { name: "Application Templates", size: "890 KB" },
            ].map((doc, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <FileText className="h-10 w-10 text-[#123A63] mb-4" />
                <h3 className="font-semibold text-[#1F2933] mb-2">{doc.name}</h3>
                <p className="text-sm text-[#667085] mb-4">{doc.size}</p>
                <button className="w-full px-4 py-2 bg-[#0F8A5F] text-white rounded-lg hover:bg-[#0F8A5F]/90 transition-colors text-sm inline-flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F2933] mb-4">Success Stories</h2>
            <p className="text-lg text-[#667085] max-w-2xl mx-auto">
              Learn from investors who have already succeeded in Panjakent
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#123A63]/5 to-[#0F8A5F]/5 p-8 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#D6A536] rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2933] mb-2">Mountain View Eco-Lodge</h3>
                  <p className="text-sm text-[#667085] mb-4">Turkish investor | Tourism Sector</p>
                  <p className="text-[#667085]">
                    "The support from local authorities and the streamlined process made our eco-lodge dream a reality. We're now hosting visitors from across the region."
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#123A63]/5 to-[#0F8A5F]/5 p-8 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#D6A536] rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1F2933] mb-2">Golden Valley Dried Fruits</h3>
                  <p className="text-sm text-[#667085] mb-4">Iranian investor | Food Processing</p>
                  <p className="text-[#667085]">
                    "Access to high-quality local fruits and export support helped us build a thriving dried fruit export business serving markets in Russia and Kazakhstan."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#123A63] to-[#0F8A5F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Invest in Panjakent?</h2>
          <p className="text-xl text-white/90 mb-8">
            Our investment facilitation team is ready to guide you through every step of your investment journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/opportunities"
              className="px-8 py-4 bg-white text-[#123A63] rounded-lg hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              <FileText className="h-5 w-5" />
              Submit Investment Interest
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              Contact Investment Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
