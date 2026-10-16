// Browser-only presentation controls; fixtures are supplied by the Blade layout.
export function registerBackend(Alpine) {
Alpine.data('ImprovedAdminDashboardPage', (_props = () => ({})) => ({
  _props,
  get stats() {
    return window.presentationFixtures.ImprovedAdminDashboardPage.stats;
  },
  get pipeline() {
    return window.presentationFixtures.ImprovedAdminDashboardPage.pipeline;
  },
  get recentApplications() {
    return window.presentationFixtures.ImprovedAdminDashboardPage.recentApplications;
  },
  get upcomingMeetings() {
    return window.presentationFixtures.ImprovedAdminDashboardPage.upcomingMeetings;
  }
}));
Alpine.data('AdminProjectsPage', (_props = () => ({})) => ({
  _props,
  get projects() {
    return window.presentationFixtures.AdminProjectsPage.projects;
  },
  get stats() {
    return window.presentationFixtures.AdminProjectsPage.stats;
  }
}));
Alpine.data('ImprovedInvestorCRMPage', (_props = () => ({})) => ({
  _props,
  get crmStages() {
    return window.presentationFixtures.ImprovedInvestorCRMPage.crmStages;
  },
  get sectors() {
    return window.presentationFixtures.ImprovedInvestorCRMPage.sectors;
  },
  get countries() {
    return window.presentationFixtures.ImprovedInvestorCRMPage.countries;
  },
  get officers() {
    return window.presentationFixtures.ImprovedInvestorCRMPage.officers;
  },
  get investors() {
    return window.presentationFixtures.ImprovedInvestorCRMPage.investors;
  },
  get filteredInvestors() {
    return this.investors.filter(investor => {
      const matchesSearch = this.searchQuery === "" || investor.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || investor.company.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesStage = this.selectedStage === "All Stages" || investor.stage === this.selectedStage.toLowerCase().replace(/\//g, "-").replace(/ /g, "-");
      const matchesSector = this.selectedSector === "All Sectors" || investor.sector === this.selectedSector;
      const matchesCountry = this.selectedCountry === "All Countries" || investor.country === this.selectedCountry;
      const matchesOfficer = this.selectedOfficer === "All Officers" || investor.officer === this.selectedOfficer;
      return matchesSearch && matchesStage && matchesSector && matchesCountry && matchesOfficer;
    });
  },
  get getStageColor() {
    return stage => {
      const colors = {
        "new": "new",
        "contacted": "contacted",
        "meeting-scheduled": "meeting-scheduled",
        "negotiation": "negotiation",
        "documents-pending": "documents-pending",
        "approved": "approved",
        "active": "active",
        "closed-rejected": "rejected"
      };
      return colors[stage] || "new";
    };
  },
  searchQuery: undefined,
  setSearchQuery(value) {
    this.searchQuery = typeof value === 'function' ? value(this.searchQuery) : value;
  },
  selectedStage: undefined,
  setSelectedStage(value) {
    this.selectedStage = typeof value === 'function' ? value(this.selectedStage) : value;
  },
  selectedSector: undefined,
  setSelectedSector(value) {
    this.selectedSector = typeof value === 'function' ? value(this.selectedSector) : value;
  },
  selectedCountry: undefined,
  setSelectedCountry(value) {
    this.selectedCountry = typeof value === 'function' ? value(this.selectedCountry) : value;
  },
  selectedOfficer: undefined,
  setSelectedOfficer(value) {
    this.selectedOfficer = typeof value === 'function' ? value(this.selectedOfficer) : value;
  },
  showFilters: undefined,
  setShowFilters(value) {
    this.showFilters = typeof value === 'function' ? value(this.showFilters) : value;
  },
  init() {
    this.searchQuery = "";
    this.selectedStage = "All Stages";
    this.selectedSector = "All Sectors";
    this.selectedCountry = "All Countries";
    this.selectedOfficer = "All Officers";
    this.showFilters = false;
  }
}));
Alpine.data('AdminApplicationsPage', (_props = () => ({})) => ({
  _props,
  get applications() {
    return window.presentationFixtures.AdminApplicationsPage.applications;
  },
  get stats() {
    return window.presentationFixtures.AdminApplicationsPage.stats;
  }
}));
Alpine.data('ImprovedApplicationReviewPage', (_props = () => ({})) => ({
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
        investorType: "Company",
        address: "123 Business Ave, New York, NY 10001"
      },
      project: {
        id: "eco-lodge-seven-lakes",
        title: "Eco-Lodge near Seven Lakes",
        sector: "Tourism",
        location: "Seven Lakes Region",
        investment: "$250,000 - $500,000"
      },
      formData: {
        sector: "Tourism",
        investmentAmount: "$400,000",
        preferredLocation: "Seven Lakes area",
        timeline: "6-12 months",
        message: "I am interested in developing an eco-lodge in the Seven Lakes region. I have experience in sustainable tourism and believe this location has great potential."
      },
      caseManager: {
        name: "Farrukh Mahmadov",
        position: "Investment Coordinator"
      },
      documents: [{
        title: "Passport / ID",
        status: "verified",
        fileName: "passport.pdf"
      }, {
        title: "Company Registration",
        status: "needs-correction",
        fileName: "company_reg.pdf"
      }, {
        title: "Business Proposal",
        status: "verified",
        fileName: "proposal.pdf"
      }, {
        title: "Financial Information",
        status: "not-uploaded"
      }],
      timeline: [{
        title: "Application Submitted",
        status: "completed",
        date: "January 15, 2026"
      }, {
        title: "Under Review",
        status: "completed",
        date: "January 16, 2026"
      }, {
        title: "Case Manager Assigned",
        status: "completed",
        date: "January 17, 2026"
      }, {
        title: "Documents Requested",
        status: "current",
        date: "In Progress"
      }, {
        title: "Meeting Scheduled",
        status: "upcoming"
      }, {
        title: "Decision",
        status: "upcoming"
      }],
      internalNotes: [{
        id: "note-001",
        author: "Farrukh Mahmadov",
        content: "Strong candidate with good tourism background. Needs updated company registration.",
        timestamp: "January 17, 2026 3:30 PM"
      }],
      messages: [{
        id: "msg-001",
        from: "Farrukh Mahmadov",
        to: "John Investor",
        content: "Thank you for your interest. Please provide updated company registration.",
        timestamp: "January 17, 2026 10:30 AM"
      }]
    };
  }
}));
Alpine.data('AdminMapPage', (_props = () => ({})) => ({
  _props,
  get landPlots() {
    return window.presentationFixtures.AdminMapPage.landPlots;
  },
  get categories() {
    return window.presentationFixtures.AdminMapPage.categories;
  },
  selectedCategory: undefined,
  setSelectedCategory(value) {
    this.selectedCategory = typeof value === 'function' ? value(this.selectedCategory) : value;
  },
  init() {
    this.selectedCategory = "all";
  }
}));
Alpine.data('AdminDocumentsPage', (_props = () => ({})) => ({
  _props,
  get documents() {
    return window.presentationFixtures.AdminDocumentsPage.documents;
  },
  get categories() {
    return window.presentationFixtures.AdminDocumentsPage.categories;
  }
}));
Alpine.data('AdminStatisticsPage', (_props = () => ({})) => ({
  _props,
  get kpiData() {
    return window.presentationFixtures.AdminStatisticsPage.kpiData;
  },
  get sectorData() {
    return window.presentationFixtures.AdminStatisticsPage.sectorData;
  },
  get monthlyData() {
    return window.presentationFixtures.AdminStatisticsPage.monthlyData;
  }
}));
Alpine.data('AdminNewsPage', (_props = () => ({})) => ({
  _props,
  get newsItems() {
    return window.presentationFixtures.AdminNewsPage.newsItems;
  },
  get stats() {
    return window.presentationFixtures.AdminNewsPage.stats;
  }
}));
Alpine.data('AdminCMSPage', (_props = () => ({})) => ({
  _props,
  get pages() {
    return window.presentationFixtures.AdminCMSPage.pages;
  },
  get stats() {
    return window.presentationFixtures.AdminCMSPage.stats;
  }
}));
Alpine.data('AdminLanguagesPage', (_props = () => ({})) => ({
  _props,
  get languages() {
    return window.presentationFixtures.AdminLanguagesPage.languages;
  },
  get translationKeys() {
    return window.presentationFixtures.AdminLanguagesPage.translationKeys;
  }
}));
Alpine.data('AdminUsersPage', (_props = () => ({})) => ({
  _props,
  get users() {
    return window.presentationFixtures.AdminUsersPage.users;
  },
  get roles() {
    return window.presentationFixtures.AdminUsersPage.roles;
  },
  get stats() {
    return window.presentationFixtures.AdminUsersPage.stats;
  }
}));
Alpine.data('AdminActivityPage', (_props = () => ({})) => ({
  _props,
  get activities() {
    return window.presentationFixtures.AdminActivityPage.activities;
  },
  get getActivityIcon() {
    return type => {
      switch (type) {
        case "create":
          return "bg-green-50 text-green-600";
        case "update":
          return "bg-blue-50 text-blue-600";
        case "delete":
          return "bg-red-50 text-red-600";
        case "publish":
          return "bg-purple-50 text-purple-600";
        case "approve":
          return "bg-teal-50 text-teal-600";
        case "upload":
          return "bg-orange-50 text-orange-600";
        default:
          return "bg-gray-50 text-gray-600";
      }
    };
  },
  get stats() {
    return window.presentationFixtures.AdminActivityPage.stats;
  }
}));
Alpine.data('AdminSettingsPage', (_props = () => ({})) => ({
  _props,
  get tabs() {
    return window.presentationFixtures.AdminSettingsPage.tabs;
  },
  activeTab: undefined,
  setActiveTab(value) {
    this.activeTab = typeof value === 'function' ? value(this.activeTab) : value;
  },
  init() {
    this.activeTab = "general";
  }
}));
Alpine.data('Admin404Page', (_props = () => ({})) => ({
  _props
}));
}
