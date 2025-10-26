import { Link } from 'react-router-dom';
import { Heading } from '../../../components/ui';

const DashboardNavbar = ({ user }) => {
  const role = user?.role || 'student'; // default role if missing

  const navItemsByRole = {
    admin: [
      { path: '/dash/super-admin', label: 'Dashboard' },
      { path: '/dash/users', label: 'Users' },
      { path: '/dash/ad-settings', label: 'Settings' },
    ],
    teacher: [
      { path: '/dash/teacher', label: 'Dashboard' },
      { path: '/dash/courses', label: 'Courses' },
      { path: '/dash/videos', label: 'Videos' },
      { path: '/dash/te-settings', label: 'Settings' },
    ],
    student: [
      { path: '/dash/student', label: 'Dashboard' },
      { path: '/dash/docs', label: 'Documents' },
      { path: '/dash/st-settings', label: 'Settings' },
    ],
  };

  const navItems = navItemsByRole[role] || [];

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-6 shadow-sm">
      {/* Left side: role title */}
      <div className="flex items-center gap-3">
        <Heading className="text-lg font-semibold text-gray-800 capitalize">
          {role} Panel
        </Heading>
      </div>

      {/* Center links */}
      <nav className="hidden gap-4 md:flex">
        {navItems.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className="text-gray-700 transition-colors hover:text-blue-600"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Right side: user info */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">{user?.name || 'Guest'}</span>
        <button
          className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-700"
          onClick={() => console.log('Logout clicked')}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default DashboardNavbar;
