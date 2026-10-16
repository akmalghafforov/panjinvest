// Browser-only presentation controls; fixtures are supplied by the Blade layout.
export function registerFrontend(Alpine) {
Alpine.data('HomePage', (_props = () => ({})) => ({
  _props,
  get stats() {
    return window.presentationFixtures.HomePage.stats;
  },
  get advantages() {
    return window.presentationFixtures.HomePage.advantages;
  },
  get sectors() {
    return window.presentationFixtures.HomePage.sectors;
  },
  get featuredProjects() {
    return window.presentationFixtures.HomePage.featuredProjects;
  },
  get journeySteps() {
    return window.presentationFixtures.HomePage.journeySteps;
  }
}));
Alpine.data('OpportunitiesPage', (_props = () => ({})) => ({
  _props,
  get sectors() {
    return window.presentationFixtures.OpportunitiesPage.sectors;
  },
  get projects() {
    return window.presentationFixtures.OpportunitiesPage.projects;
  },
  get filteredProjects() {
    return this.projects.filter(project => {
      const matchesSector = this.selectedSector === "all" || project.sector === this.selectedSector || this.selectedSector === "All Sectors";
      const matchesStatus = this.selectedStatus === "all" || project.status === this.selectedStatus;
      const matchesSearch = this.searchQuery === "" || project.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || project.description.toLowerCase().includes(this.searchQuery.toLowerCase()) || project.location.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesSector && matchesStatus && matchesSearch;
    }).sort((a, b) => {
      if (this.sortBy === "investment-low") {
        const aMin = parseInt(a.investment.replace(/[^0-9]/g, ""));
        const bMin = parseInt(b.investment.replace(/[^0-9]/g, ""));
        return aMin - bMin;
      }
      if (this.sortBy === "investment-high") {
        const aMin = parseInt(a.investment.replace(/[^0-9]/g, ""));
        const bMin = parseInt(b.investment.replace(/[^0-9]/g, ""));
        return bMin - aMin;
      }
      if (this.sortBy === "roi-high") {
        const aROI = parseInt(a.roi.split("-")[1]);
        const bROI = parseInt(b.roi.split("-")[1]);
        return bROI - aROI;
      }
      return 0;
    });
  },
  selectedSector: undefined,
  setSelectedSector(value) {
    this.selectedSector = typeof value === 'function' ? value(this.selectedSector) : value;
  },
  selectedStatus: undefined,
  setSelectedStatus(value) {
    this.selectedStatus = typeof value === 'function' ? value(this.selectedStatus) : value;
  },
  searchQuery: undefined,
  setSearchQuery(value) {
    this.searchQuery = typeof value === 'function' ? value(this.searchQuery) : value;
  },
  showFilters: undefined,
  setShowFilters(value) {
    this.showFilters = typeof value === 'function' ? value(this.showFilters) : value;
  },
  sortBy: undefined,
  setSortBy(value) {
    this.sortBy = typeof value === 'function' ? value(this.sortBy) : value;
  },
  init() {
    this.selectedSector = "all";
    this.selectedStatus = "all";
    this.searchQuery = "";
    this.showFilters = false;
    this.sortBy = "newest";
  }
}));
Alpine.data('ProjectDetailPage', (_props = () => ({})) => ({
  _props,
  get id() {
    return window.pageContext.id;
  },
  get project() {
    return window.presentationFixtures.ProjectDetailPage.project;
  },
  get similarProjects() {
    return window.presentationFixtures.ProjectDetailPage.similarProjects;
  }
}));
Alpine.data('InvestmentMapPage', (_props = () => ({})) => ({
  _props,
  get sectors() {
    return window.presentationFixtures.InvestmentMapPage.sectors;
  },
  get infrastructure() {
    return window.presentationFixtures.InvestmentMapPage.infrastructure;
  },
  get statusOptions() {
    return window.presentationFixtures.InvestmentMapPage.statusOptions;
  },
  get landTypes() {
    return window.presentationFixtures.InvestmentMapPage.landTypes;
  },
  get projects() {
    return window.presentationFixtures.InvestmentMapPage.projects;
  },
  get filteredProjects() {
    return this.projects.filter(project => {
      const matchesSector = this.selectedSector.length === 0 || this.selectedSector.includes(project.sector);
      const matchesInfrastructure = this.selectedInfrastructure.length === 0 || this.selectedInfrastructure.every(infra => project.infrastructure.includes(infra));
      const matchesStatus = this.selectedStatus.length === 0 || this.selectedStatus.includes(project.status);
      const matchesLandType = this.selectedLandType.length === 0 || this.selectedLandType.includes(project.landType);
      const matchesSearch = this.searchQuery === "" || project.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || project.location.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesSector && matchesInfrastructure && matchesStatus && matchesLandType && matchesSearch;
    });
  },
  get toggleFilter() {
    return (value, filterArray, setFilter) => {
      if (filterArray.includes(value)) {
        setFilter.call(this, filterArray.filter(item => item !== value));
      } else {
        setFilter.call(this, [...filterArray, value]);
      }
    };
  },
  get getSectorColor() {
    return sectorValue => {
      return this.sectors.find(s => s.value === sectorValue)?.color || "#123A63";
    };
  },
  selectedSector: undefined,
  setSelectedSector(value) {
    this.selectedSector = typeof value === 'function' ? value(this.selectedSector) : value;
  },
  selectedInfrastructure: undefined,
  setSelectedInfrastructure(value) {
    this.selectedInfrastructure = typeof value === 'function' ? value(this.selectedInfrastructure) : value;
  },
  selectedStatus: undefined,
  setSelectedStatus(value) {
    this.selectedStatus = typeof value === 'function' ? value(this.selectedStatus) : value;
  },
  selectedLandType: undefined,
  setSelectedLandType(value) {
    this.selectedLandType = typeof value === 'function' ? value(this.selectedLandType) : value;
  },
  searchQuery: undefined,
  setSearchQuery(value) {
    this.searchQuery = typeof value === 'function' ? value(this.searchQuery) : value;
  },
  selectedPin: undefined,
  setSelectedPin(value) {
    this.selectedPin = typeof value === 'function' ? value(this.selectedPin) : value;
  },
  showFilters: undefined,
  setShowFilters(value) {
    this.showFilters = typeof value === 'function' ? value(this.showFilters) : value;
  },
  init() {
    this.selectedSector = [];
    this.selectedInfrastructure = [];
    this.selectedStatus = [];
    this.selectedLandType = [];
    this.searchQuery = "";
    this.selectedPin = null;
    this.showFilters = false;
  }
}));
Alpine.data('InvestorGuidePage', (_props = () => ({})) => ({
  _props,
  get tableOfContents() {
    return window.presentationFixtures.InvestorGuidePage.tableOfContents;
  },
  get investmentSteps() {
    return window.presentationFixtures.InvestorGuidePage.investmentSteps;
  },
  get faqs() {
    return window.presentationFixtures.InvestorGuidePage.faqs;
  },
  get scrollToSection() {
    return id => {
      this.setActiveSection(id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    };
  },
  activeSection: undefined,
  setActiveSection(value) {
    this.activeSection = typeof value === 'function' ? value(this.activeSection) : value;
  },
  init() {
    this.activeSection = "how-to-invest";
  }
}));
Alpine.data('DataStatisticsPage', (_props = () => ({})) => ({
  _props,
  get dataBlocks() {
    return window.presentationFixtures.DataStatisticsPage.dataBlocks;
  },
  get economicData() {
    return window.presentationFixtures.DataStatisticsPage.economicData;
  },
  get sectorData() {
    return window.presentationFixtures.DataStatisticsPage.sectorData;
  },
  get monthlyVisitors() {
    return window.presentationFixtures.DataStatisticsPage.monthlyVisitors;
  },
  selectedYear: undefined,
  setSelectedYear(value) {
    this.selectedYear = typeof value === 'function' ? value(this.selectedYear) : value;
  },
  selectedSector: undefined,
  setSelectedSector(value) {
    this.selectedSector = typeof value === 'function' ? value(this.selectedSector) : value;
  },
  selectedLocation: undefined,
  setSelectedLocation(value) {
    this.selectedLocation = typeof value === 'function' ? value(this.selectedLocation) : value;
  },
  init() {
    this.selectedYear = "2025";
    this.selectedSector = "all";
    this.selectedLocation = "all";
  }
}));
Alpine.data('DocumentsPage', (_props = () => ({})) => ({
  _props,
  get categories() {
    return window.presentationFixtures.DocumentsPage.categories;
  },
  get documents() {
    return window.presentationFixtures.DocumentsPage.documents;
  },
  get filteredDocuments() {
    return this.documents.filter(doc => {
      const matchesCategory = this.selectedCategory === "all" || doc.category === this.selectedCategory || this.selectedCategory === "All Documents";
      const matchesSearch = this.searchQuery === "" || doc.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || doc.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  },
  searchQuery: undefined,
  setSearchQuery(value) {
    this.searchQuery = typeof value === 'function' ? value(this.searchQuery) : value;
  },
  selectedCategory: undefined,
  setSelectedCategory(value) {
    this.selectedCategory = typeof value === 'function' ? value(this.selectedCategory) : value;
  },
  init() {
    this.searchQuery = "";
    this.selectedCategory = "all";
  }
}));
Alpine.data('ContactPage', (_props = () => ({})) => ({
  _props
}));
Alpine.data('SubmitInterestPage', (_props = () => ({})) => ({
  _props,
  get steps() {
    return window.presentationFixtures.SubmitInterestPage.steps;
  },
  get sectors() {
    return window.presentationFixtures.SubmitInterestPage.sectors;
  },
  get investorTypes() {
    return window.presentationFixtures.SubmitInterestPage.investorTypes;
  },
  get timelines() {
    return window.presentationFixtures.SubmitInterestPage.timelines;
  },
  get navigate() {
    return window.navigate;
  },
  get searchParams() {
    return new URLSearchParams(window.location.search);
  },
  get projectId() {
    return this.searchParams.get("project");
  },
  get updateField() {
    return (field, value) => {
      this.setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    };
  },
  get handleNext() {
    return () => {
      if (this.currentStep < 4) {
        this.setCurrentStep(prev => prev + 1);
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    };
  },
  get handleBack() {
    return () => {
      if (this.currentStep > 1) {
        this.setCurrentStep(prev => prev - 1);
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    };
  },
  get handleSubmit() {
    return () => {
      this.navigate("/submit-interest/success");
    };
  },
  get canProceed() {
    return () => {
      switch (this.currentStep) {
        case 1:
          return this.formData.fullName && this.formData.email && this.formData.phone && this.formData.investorType;
        case 2:
          return this.formData.sector && this.formData.investmentAmount && this.formData.timeline;
        case 3:
          return true;
        case 4:
          return this.formData.agreeContact && this.formData.confirmAccurate;
        default:
          return false;
      }
    };
  },
  currentStep: undefined,
  setCurrentStep(value) {
    this.currentStep = typeof value === 'function' ? value(this.currentStep) : value;
  },
  formData: undefined,
  setFormData(value) {
    this.formData = typeof value === 'function' ? value(this.formData) : value;
  },
  init() {
    this.currentStep = 1;
    this.formData = {
      fullName: "",
      companyName: "",
      country: "",
      email: "",
      phone: "",
      investorType: "",
      sector: "",
      selectedProject: this.projectId || "",
      investmentAmount: "",
      location: "",
      timeline: "",
      message: "",
      questions: "",
      businessProposal: null,
      companyProfile: null,
      financialInfo: null,
      agreeContact: false,
      confirmAccurate: false
    };
  }
}));
Alpine.data('SubmitInterestSuccessPage', (_props = () => ({})) => ({
  _props,
  get nextSteps() {
    return [{
      title: "Interest Submitted",
      description: "Your investment interest has been recorded",
      status: "completed",
      date: new Date().toLocaleDateString()
    }, {
      title: "Initial Review",
      description: "Our team will review your submission",
      status: "current",
      date: "2-3 business days"
    }, {
      title: "Case Manager Assigned",
      description: "A dedicated officer will be assigned to your case",
      status: "upcoming"
    }, {
      title: "Consultation Scheduled",
      description: "Initial consultation meeting will be arranged",
      status: "upcoming"
    }, {
      title: "Documents Requested",
      description: "Additional documentation may be requested",
      status: "upcoming"
    }, {
      title: "Decision / Next Action",
      description: "You will receive a decision or next steps",
      status: "upcoming"
    }];
  },
  get referenceNumber() {
    return `INV-PNJ-${new Date().getFullYear()}-${Math.floor(Math.random() * 100000).toString().padStart(5, "0")}`;
  }
}));
Alpine.data('ImprovedInvestorPortalPage', (_props = () => ({})) => ({
  _props,
  get myApplications() {
    return window.presentationFixtures.ImprovedInvestorPortalPage.myApplications;
  },
  get savedOpportunities() {
    return window.presentationFixtures.ImprovedInvestorPortalPage.savedOpportunities;
  },
  get upcomingMeetings() {
    return window.presentationFixtures.ImprovedInvestorPortalPage.upcomingMeetings;
  },
  get recentMessages() {
    return window.presentationFixtures.ImprovedInvestorPortalPage.recentMessages;
  }
}));
Alpine.data('ApplicationDetailPage', (_props = () => ({})) => ({
  _props,
  get id() {
    return window.pageContext.id;
  },
  get application() {
    return {
      id: this.id || "app-001",
      referenceNumber: "INV-PNJ-2026-00024",
      submittedDate: "January 15, 2026",
      status: "documents-pending",
      investor: {
        name: "John Investor",
        email: "john@example.com",
        phone: "+1 555 0100",
        country: "United States",
        company: "Global Ventures LLC",
        investorType: "Company"
      },
      project: {
        id: "eco-lodge-seven-lakes",
        title: "Eco-Lodge near Seven Lakes",
        sector: "Tourism",
        location: "Seven Lakes Region",
        investment: "$250,000 - $500,000"
      },
      caseManager: {
        name: "Farrukh Mahmadov",
        position: "Investment Coordinator",
        email: "f.mahmadov@panjakent.tj",
        phone: "+992 3422 5-11-22"
      },
      nextAction: "Upload required company registration documents",
      timeline: [{
        title: "Application Submitted",
        description: "Investment interest submitted successfully",
        status: "completed",
        date: "January 15, 2026"
      }, {
        title: "Under Review",
        description: "Initial review by investment team",
        status: "completed",
        date: "January 16, 2026"
      }, {
        title: "Case Manager Assigned",
        description: "Farrukh Mahmadov assigned to your application",
        status: "completed",
        date: "January 17, 2026"
      }, {
        title: "Documents Requested",
        description: "Additional documentation required",
        status: "current",
        date: "In Progress"
      }, {
        title: "Meeting Scheduled",
        description: "Initial consultation meeting",
        status: "upcoming"
      }, {
        title: "Decision",
        description: "Final decision on investment application",
        status: "upcoming"
      }],
      documents: [{
        title: "Passport / ID",
        description: "Valid government-issued identification",
        required: true,
        status: "uploaded",
        fileName: "passport_john_doe.pdf"
      }, {
        title: "Company Registration",
        description: "Certificate of incorporation or registration",
        required: true,
        status: "needs-correction",
        fileName: "company_reg.pdf",
        adminComment: "Please provide a more recent certificate (within last 6 months)"
      }, {
        title: "Business Proposal",
        description: "Detailed business plan for this investment",
        required: true,
        status: "verified",
        fileName: "business_proposal_v2.pdf"
      }, {
        title: "Financial Information",
        description: "Bank statements or proof of funds",
        required: true,
        status: "not-uploaded"
      }, {
        title: "Power of Attorney",
        description: "If applicable, legal authorization",
        required: false,
        status: "not-uploaded"
      }],
      messages: [{
        id: "msg-001",
        from: "Farrukh Mahmadov",
        fromType: "admin",
        content: "Thank you for your interest in the Eco-Lodge project. I've reviewed your initial application and would like to request some additional documentation.",
        timestamp: "January 17, 2026 10:30 AM"
      }, {
        id: "msg-002",
        from: "John Investor",
        fromType: "investor",
        content: "Thank you for the update. I'll upload the requested documents by end of week.",
        timestamp: "January 17, 2026 2:15 PM"
      }],
      meetings: [{
        id: "meet-001",
        title: "Initial Consultation",
        date: "January 28, 2026",
        time: "10:00 AM",
        type: "Online Meeting",
        status: "scheduled"
      }]
    };
  }
}));
Alpine.data('NotFoundPage', (_props = () => ({})) => ({
  _props
}));
}
