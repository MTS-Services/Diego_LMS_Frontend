import { NavLink } from 'react-router-dom';

const DashboardSidebar = ({ role }) => {
  const linksByRole = {
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

  const links = linksByRole[role] || [];

  return (
    <aside className="w-64 border-r border-amber-100 bg-white p-4 shadow-sm">
      <nav className="flex flex-col gap-2">
        {links.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
