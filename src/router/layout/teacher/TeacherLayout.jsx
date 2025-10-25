import { Outlet, Link } from 'react-router-dom';
import DashboardNavbar from '../admin/DashboardNavbar';
import { user } from '../../../config/api';

const TeacherLayout = () => {
  return (
    <div>
      <nav>
        <DashboardNavbar user={user} />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default TeacherLayout;
