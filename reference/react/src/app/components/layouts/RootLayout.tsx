import { Outlet } from "react-router";
import Header from "../shared/Header";
import TopBar from "../shared/TopBar";
import Footer from "../shared/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8FA]">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
