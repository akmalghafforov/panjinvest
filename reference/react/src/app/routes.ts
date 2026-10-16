import { createBrowserRouter } from "react-router";
import RootLayout from "./components/layouts/RootLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import HomePage from "./components/pages/HomePage";
import OpportunitiesPage from "./components/pages/OpportunitiesPage";
import ProjectDetailPage from "./components/pages/ProjectDetailPage";
import InvestmentMapPage from "./components/pages/InvestmentMapPage";
import InvestorGuidePage from "./components/pages/InvestorGuidePage";
import DataStatisticsPage from "./components/pages/DataStatisticsPage";
import DocumentsPage from "./components/pages/DocumentsPage";
import ContactPage from "./components/pages/ContactPage";
import ImprovedInvestorPortalPage from "./components/pages/ImprovedInvestorPortalPage";
import ApplicationDetailPage from "./components/pages/ApplicationDetailPage";
import ImprovedAdminDashboardPage from "./components/pages/ImprovedAdminDashboardPage";
import ImprovedInvestorCRMPage from "./components/pages/ImprovedInvestorCRMPage";
import ImprovedApplicationReviewPage from "./components/pages/ImprovedApplicationReviewPage";
import SubmitInterestPage from "./components/pages/SubmitInterestPage";
import SubmitInterestSuccessPage from "./components/pages/SubmitInterestSuccessPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import Admin404Page from "./components/pages/Admin404Page";
import AdminProjectsPage from "./components/pages/AdminProjectsPage";
import AdminApplicationsPage from "./components/pages/AdminApplicationsPage";
import AdminMapPage from "./components/pages/AdminMapPage";
import AdminDocumentsPage from "./components/pages/AdminDocumentsPage";
import AdminStatisticsPage from "./components/pages/AdminStatisticsPage";
import AdminNewsPage from "./components/pages/AdminNewsPage";
import AdminCMSPage from "./components/pages/AdminCMSPage";
import AdminLanguagesPage from "./components/pages/AdminLanguagesPage";
import AdminUsersPage from "./components/pages/AdminUsersPage";
import AdminActivityPage from "./components/pages/AdminActivityPage";
import AdminSettingsPage from "./components/pages/AdminSettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "opportunities", Component: OpportunitiesPage },
      { path: "opportunities/:id", Component: ProjectDetailPage },
      { path: "map", Component: InvestmentMapPage },
      { path: "guide", Component: InvestorGuidePage },
      { path: "data", Component: DataStatisticsPage },
      { path: "documents", Component: DocumentsPage },
      { path: "contact", Component: ContactPage },
      { path: "submit-interest", Component: SubmitInterestPage },
      { path: "submit-interest/success", Component: SubmitInterestSuccessPage },
      { path: "portal", Component: ImprovedInvestorPortalPage },
      { path: "portal/applications/:id", Component: ApplicationDetailPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: ImprovedAdminDashboardPage },
      { path: "projects", Component: AdminProjectsPage },
      { path: "crm", Component: ImprovedInvestorCRMPage },
      { path: "applications", Component: AdminApplicationsPage },
      { path: "applications/:id", Component: ImprovedApplicationReviewPage },
      { path: "map", Component: AdminMapPage },
      { path: "documents", Component: AdminDocumentsPage },
      { path: "statistics", Component: AdminStatisticsPage },
      { path: "news", Component: AdminNewsPage },
      { path: "cms", Component: AdminCMSPage },
      { path: "languages", Component: AdminLanguagesPage },
      { path: "users", Component: AdminUsersPage },
      { path: "activity", Component: AdminActivityPage },
      { path: "settings", Component: AdminSettingsPage },
      { path: "*", Component: Admin404Page },
    ],
  },
]);
