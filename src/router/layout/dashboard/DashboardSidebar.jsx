import { NavLink } from 'react-router-dom';
import { useUIStore } from '../../../features/zustand';

const DashboardSidebar = ({ role }) => {
  const { isOpen, isToggle, setActiveLink } = useUIStore();

  const linksByRole = {
    admin: [
      { path: '/dash/super-admin', label: 'Dashboard' },
      { path: '/dash/freelancer-admin', label: 'freelancer-admin' },
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
    <aside
      className={`w-[300px] space-y-8 p-4 shadow-sm transition-all duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-64'
      }`}
    >
      {/* Left Section: Logo + Title */}
      <div className="flex h-12 w-56 items-center gap-3">
        <img
          className="h-10 w-10 object-contain"
          src="/images/icons/title.png"
          alt="Home"
        />
        <h1 className="text-3xl font-bold text-gray-900">UnoSicurezza</h1>
      </div>

      <nav className="flex flex-col gap-2">
        {links.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setActiveLink(path)}
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 ${
                isActive
                  ? 'bg-[#73BFA1] text-white'
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
