import { useState } from "react";
import { Download, FileText, CheckCircle2, Shield, DollarSign, Building2, HelpCircle, Users, Gavel, Landmark, FileCheck, Briefcase, TrendingUp, HeadphonesIcon, Clock } from "lucide-react";

export default function InvestorGuidePage() {
  const [activeSection, setActiveSection] = useState("how-to-invest");

  const tableOfContents = [
    { id: "how-to-invest", title: "How to Invest", icon: TrendingUp },
    { id: "registration", title: "Business Registration", icon: Building2 },
    { id: "land", title: "Land Allocation", icon: Landmark },
    { id: "permits", title: "Permits and Licenses", icon: FileCheck },
    { id: "taxes", title: "Taxes and Incentives", icon: DollarSign },
    { id: "labor", title: "Labor Market", icon: Users },
    { id: "banking", title: "Banking and Finance", icon: Briefcase },
    { id: "legal", title: "Legal Protection", icon: Gavel },
    { id: "faq", title: "FAQ", icon: HelpCircle },
  ];

  const investmentSteps = [
    {
      number: 1,
      title: "Choose Opportunity",
      description: "Browse our catalog of pre-vetted investment projects across priority sectors.",
      duration: "1-3 days",
    },
    {
      number: 2,
      title: "Submit Interest",
      description: "Complete the online expression of interest form with your preliminary investment concept.",
      duration: "1 day",
    },
    {
      number: 3,
      title: "Initial Consultation",
      description: "Meet with our investment facilitation team to discuss your project and requirements.",
      duration: "3-5 days",
    },
    {
      number: 4,
      title: "Prepare Documents",
      description: "Gather required documentation including business plan, financial statements, and identity documents.",
      duration: "1-2 weeks",
    },
    {
      number: 5,
      title: "Review and Verification",
      description: "Government team reviews your application and verifies all submitted documentation.",
      duration: "2-3 weeks",
    },
    {
      number: 6,
      title: "Agreement",
      description: "Sign investment agreement and land lease or purchase contract.",
      duration: "1 week",
    },
    {
      number: 7,
      title: "Registration and Permits",
      description: "Complete business registration and obtain necessary operating permits and licenses.",
      duration: "1-2 weeks",
    },
    {
      number: 8,
      title: "Launch and Aftercare Support",
      description: "Begin operations with ongoing support from our investment facilitation team.",
      duration: "Ongoing",
    },
  ];

  const faqs = [
    {
      question: "Can foreign investors own land in Tajikistan?",
      answer: "Foreign investors can lease land for up to 50 years with the option to renew. While land ownership is restricted, long-term leases provide security and can be transferred or used as collateral.",
    },
    {
      question: "What is the minimum investment amount?",
      answer: "There is no official minimum investment amount. Projects range from $50,000 for small-scale operations to over $1 million for larger developments. We welcome investors across all scales.",
    },
    {
      question: "How long does business registration take?",
      answer: "The streamlined registration process typically takes 7-10 business days from submission of complete documentation to receiving your business certificate.",
    },
    {
      question: "Are there restrictions on profit repatriation?",
      answer: "Foreign investors have the right to repatriate profits, dividends, and proceeds from the sale of assets after fulfilling tax obligations. All transfers must comply with currency regulations.",
    },
    {
      question: "What tax incentives are available?",
      answer: "Priority sectors including tourism, agriculture, and food processing receive reduced corporate tax rates (ranging from 0-13%), VAT exemptions on imported equipment, and property tax holidays for up to 3 years.",
    },
    {
      question: "Do I need a local partner?",
      answer: "No, 100% foreign ownership is permitted in most sectors. However, some investors choose to partner with local businesses for market knowledge and operational support.",
    },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Investor Guide</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-6">
            Complete guide to investing in Panjakent - from initial interest to successful operations
          </p>
          <button className="px-6 py-3 bg-white text-[#123A63] rounded-lg hover:bg-white/90 transition-colors inline-flex items-center gap-2">
            <Download className="h-5 w-5" />
            Download Complete Guide (PDF)
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Sticky Table of Contents */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="font-semibold text-[#1F2933] mb-4">Contents</h3>
                  <nav className="space-y-1">
                    {tableOfContents.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
                            activeSection === item.id
                              ? "bg-[#123A63] text-white"
                              : "text-[#667085] hover:bg-gray-50"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {item.title}
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-12">
              {/* How to Invest */}
              <div id="how-to-invest" className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="h-8 w-8 text-[#123A63]" />
                  <h2 className="text-3xl font-bold text-[#1F2933]">How to Invest</h2>
                </div>
                <p className="text-[#667085] mb-8">
                  Follow our streamlined 8-step process from initial interest to successful launch. Our dedicated investment facilitation team supports you at every stage.
                </p>

                <div className="space-y-6">
                  {investmentSteps.map((step, index) => (
                    <div key={index} className="relative flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-[#D6A536] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                          <span className="text-white text-lg font-bold">{step.number}</span>
                        </div>
                        {index < investmentSteps.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-200 mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-[#1F2933]">{step.title}</h3>
                          <span className="flex items-center gap-1 text-sm text-[#667085]">
                            <Clock className="h-4 w-4" />
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-[#667085]">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Registration */}
              <div id="registration" className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="h-8 w-8 text-[#123A63]" />
                  <h2 className="text-3xl font-bold text-[#1F2933]">Business Registration</h2>
                </div>
                <p className="text-[#667085] mb-6">
                  Tajikistan offers a streamlined business registration process that typically takes 7-10 business days.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-[#F6F8FA] rounded-lg">
                    <h4 className="font-semibold text-[#1F2933] mb-3">Required Documents</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-[#667085]">
                        <CheckCircle2 className="h-4 w-4 text-[#0F8A5F] mt-0.5 flex-shrink-0" />
                        Application form with company details
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#667085]">
                        <CheckCircle2 className="h-4 w-4 text-[#0F8A5F] mt-0.5 flex-shrink-0" />
                        Company charter and founding documents
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#667085]">
                        <CheckCircle2 className="h-4 w-4 text-[#0F8A5F] mt-0.5 flex-shrink-0" />
                        Passport copies of founders/shareholders
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#667085]">
                        <CheckCircle2 className="h-4 w-4 text-[#0F8A5F] mt-0.5 flex-shrink-0" />
                        Proof of registered office address
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#667085]">
                        <CheckCircle2 className="h-4 w-4 text-[#0F8A5F] mt-0.5 flex-shrink-0" />
                        Payment receipt for state registration fee
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 bg-[#F6F8FA] rounded-lg">
                    <h4 className="font-semibold text-[#1F2933] mb-3">Legal Entities</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-[#667085]">
                        <CheckCircle2 className="h-4 w-4 text-[#0F8A5F] mt-0.5 flex-shrink-0" />
                        Limited Liability Company (LLC)
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#667085]">
                        <CheckCircle2 className="h-4 w-4 text-[#0F8A5F] mt-0.5 flex-shrink-0" />
                        Joint Stock Company (JSC)
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#667085]">
                        <CheckCircle2 className="h-4 w-4 text-[#0F8A5F] mt-0.5 flex-shrink-0" />
                        Branch of foreign company
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#667085]">
                        <CheckCircle2 className="h-4 w-4 text-[#0F8A5F] mt-0.5 flex-shrink-0" />
                        Representative office
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Land Allocation */}
              <div id="land" className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Landmark className="h-8 w-8 text-[#123A63]" />
                  <h2 className="text-3xl font-bold text-[#1F2933]">Land Allocation</h2>
                </div>
                <p className="text-[#667085] mb-6">
                  Panjakent offers designated land plots for investment projects with transparent allocation procedures.
                </p>
                <div className="space-y-4">
                  <div className="p-6 border-l-4 border-[#0F8A5F] bg-[#0F8A5F]/5">
                    <h4 className="font-semibold text-[#1F2933] mb-2">Lease Terms</h4>
                    <p className="text-sm text-[#667085]">
                      Land lease periods range from 10 to 50 years with renewal options. Lease rates vary by location and purpose, starting from $2,000/hectare annually.
                    </p>
                  </div>
                  <div className="p-6 border-l-4 border-[#123A63] bg-[#123A63]/5">
                    <h4 className="font-semibold text-[#1F2933] mb-2">Application Process</h4>
                    <p className="text-sm text-[#667085]">
                      Submit land allocation request through the investment portal. Review typically takes 2-3 weeks. Site visits can be arranged upon request.
                    </p>
                  </div>
                </div>
              </div>

              {/* Permits and Licenses */}
              <div id="permits" className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <FileCheck className="h-8 w-8 text-[#123A63]" />
                  <h2 className="text-3xl font-bold text-[#1F2933]">Permits and Licenses</h2>
                </div>
                <p className="text-[#667085] mb-6">
                  Depending on your sector and activity, you may need specific permits and licenses.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#F6F8FA] rounded-lg">
                    <h4 className="font-semibold text-[#1F2933] mb-2 text-sm">Tourism</h4>
                    <p className="text-xs text-[#667085]">Tourism operator license, accommodation permit</p>
                  </div>
                  <div className="p-4 bg-[#F6F8FA] rounded-lg">
                    <h4 className="font-semibold text-[#1F2933] mb-2 text-sm">Food Processing</h4>
                    <p className="text-xs text-[#667085]">Food safety certificate, sanitary permit</p>
                  </div>
                  <div className="p-4 bg-[#F6F8FA] rounded-lg">
                    <h4 className="font-semibold text-[#1F2933] mb-2 text-sm">Construction</h4>
                    <p className="text-xs text-[#667085]">Building permit, environmental assessment</p>
                  </div>
                </div>
              </div>

              {/* Taxes and Incentives */}
              <div id="taxes" className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="h-8 w-8 text-[#123A63]" />
                  <h2 className="text-3xl font-bold text-[#1F2933]">Taxes and Incentives</h2>
                </div>
                <p className="text-[#667085] mb-6">
                  Competitive tax regime with special incentives for priority sectors and investment projects.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#1F2933] mb-4">Standard Tax Rates</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-[#F6F8FA] rounded-lg">
                        <span className="text-sm text-[#667085]">Corporate Income Tax</span>
                        <span className="font-semibold text-[#1F2933]">13%</span>
                      </div>
                      <div className="flex justify-between p-3 bg-[#F6F8FA] rounded-lg">
                        <span className="text-sm text-[#667085]">VAT</span>
                        <span className="font-semibold text-[#1F2933]">18%</span>
                      </div>
                      <div className="flex justify-between p-3 bg-[#F6F8FA] rounded-lg">
                        <span className="text-sm text-[#667085]">Social Tax</span>
                        <span className="font-semibold text-[#1F2933]">25%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1F2933] mb-4">Available Incentives</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-[#667085]">
                        <CheckCircle2 className="h-4 w-4 text-[#0F8A5F] mt-0.5 flex-shrink-0" />
                        Reduced corporate tax (0-6%) for tourism projects
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#667085]">
                        <CheckCircle2 className="h-4 w-4 text-[#0F8A5F] mt-0.5 flex-shrink-0" />
                        VAT exemption on imported equipment
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#667085]">
                        <CheckCircle2 className="h-4 w-4 text-[#0F8A5F] mt-0.5 flex-shrink-0" />
                        Property tax holiday up to 3 years
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#667085]">
                        <CheckCircle2 className="h-4 w-4 text-[#0F8A5F] mt-0.5 flex-shrink-0" />
                        Customs duty exemption for priority sectors
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Labor Market */}
              <div id="labor" className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-8 w-8 text-[#123A63]" />
                  <h2 className="text-3xl font-bold text-[#1F2933]">Labor Market</h2>
                </div>
                <p className="text-[#667085] mb-6">
                  Access to skilled and motivated workforce with competitive labor costs.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-[#F6F8FA] rounded-lg">
                    <div className="text-3xl font-bold text-[#123A63] mb-2">110,000</div>
                    <div className="text-sm text-[#667085]">Available Workforce</div>
                  </div>
                  <div className="text-center p-6 bg-[#F6F8FA] rounded-lg">
                    <div className="text-3xl font-bold text-[#123A63] mb-2">99.5%</div>
                    <div className="text-sm text-[#667085]">Literacy Rate</div>
                  </div>
                  <div className="text-center p-6 bg-[#F6F8FA] rounded-lg">
                    <div className="text-3xl font-bold text-[#123A63] mb-2">$250</div>
                    <div className="text-sm text-[#667085]">Average Monthly Wage</div>
                  </div>
                </div>
              </div>

              {/* Banking and Finance */}
              <div id="banking" className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="h-8 w-8 text-[#123A63]" />
                  <h2 className="text-3xl font-bold text-[#1F2933]">Banking and Finance</h2>
                </div>
                <p className="text-[#667085] mb-6">
                  Access to local and international banking services with support for foreign currency accounts.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-[#F6F8FA] rounded-lg">
                    <h4 className="font-semibold text-[#1F2933] mb-2">Bank Account Opening</h4>
                    <p className="text-sm text-[#667085]">
                      Both domestic and foreign currency accounts available. Required documents: business registration certificate, company charter, passport of authorized signatories.
                    </p>
                  </div>
                  <div className="p-4 bg-[#F6F8FA] rounded-lg">
                    <h4 className="font-semibold text-[#1F2933] mb-2">Currency Exchange</h4>
                    <p className="text-sm text-[#667085]">
                      Free currency exchange at commercial banks. International transfers supported through SWIFT network.
                    </p>
                  </div>
                </div>
              </div>

              {/* Legal Protection */}
              <div id="legal" className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Gavel className="h-8 w-8 text-[#123A63]" />
                  <h2 className="text-3xl font-bold text-[#1F2933]">Legal Protection</h2>
                </div>
                <p className="text-[#667085] mb-6">
                  Comprehensive legal framework protecting investor rights and property.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 border-2 border-[#0F8A5F] rounded-lg">
                    <Shield className="h-8 w-8 text-[#0F8A5F] mb-3" />
                    <h4 className="font-semibold text-[#1F2933] mb-2">Investment Guarantees</h4>
                    <p className="text-sm text-[#667085]">
                      Protection against nationalization, expropriation, and unfair treatment. Guaranteed profit repatriation rights.
                    </p>
                  </div>
                  <div className="p-6 border-2 border-[#123A63] rounded-lg">
                    <FileText className="h-8 w-8 text-[#123A63] mb-3" />
                    <h4 className="font-semibold text-[#1F2933] mb-2">Dispute Resolution</h4>
                    <p className="text-sm text-[#667085]">
                      Access to local courts and international arbitration. Tajikistan is party to bilateral investment treaties.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div id="faq" className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="h-8 w-8 text-[#123A63]" />
                  <h2 className="text-3xl font-bold text-[#1F2933]">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="p-6 bg-[#F6F8FA] rounded-lg">
                      <h4 className="font-semibold text-[#1F2933] mb-2">{faq.question}</h4>
                      <p className="text-sm text-[#667085]">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#123A63] to-[#0F8A5F] rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h3>
                <p className="text-white/90 mb-6">
                  Our investment facilitation team is ready to answer your specific questions and guide you through the process.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="px-6 py-3 bg-white text-[#123A63] rounded-lg hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2">
                    <HeadphonesIcon className="h-5 w-5" />
                    Contact Support Team
                  </button>
                  <button className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
                    <Download className="h-5 w-5" />
                    Download Full Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
