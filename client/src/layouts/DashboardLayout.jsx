import { Outlet } from "react-router-dom";
import DashboardSidebar from "../features/dashboard/components/DashboardSidebar.jsx";
import DashboardNavbar from "../features/dashboard/components/DashboardNavbar.jsx";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Fixed sidebar on desktop */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-border bg-bg lg:block">
        <DashboardSidebar />
      </aside>

      {/* Main dashboard area */}
      <div className="min-h-screen min-w-0 lg:ml-64">
        {/* Navbar component */}
        <DashboardNavbar />

        {/* Dashboard pages */}
        <main className="mx-auto w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
