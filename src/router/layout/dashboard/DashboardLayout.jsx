import { Outlet } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#fcfcfb]">
      {/* Sidebar (fixed) */}
      <DashboardSidebar />
      {/* Main content area */}
      <div className="ml-[300px] flex flex-1 flex-col">
        {/* Top navbar (sticky) */}
        <DashboardNavbar />
        {/* Main content (scrollable) */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
