import { Outlet } from 'react-router-dom';
import { user } from '../../../config/api';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayout = () => {
  const role = user?.role || 'student';

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar role={role} />
      {/* Main section */}
      <div className="flex flex-1 flex-col">
        <DashboardNavbar user={user} />
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
