import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useUIStore } from '../../../features/zustand';
import {
  IoDocumentTextOutline,
  IoSettingsOutline,
  IoTicketOutline,
} from 'react-icons/io5';
import { LiaThumbsUp } from 'react-icons/lia';
import { BsUpload } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { ROLES } from '../../../config/roles';

const linksByRole = {
  [ROLES.ADMIN]: [
    { path: '/dash/admin', label: 'Dashboard', icon: <GoHome /> },
    {
      path: '/dash/admin/gestione-licenze',
      label: 'Gestione licenze',
      icon: <IoDocumentTextOutline />,
    },
    {
      path: '/dash/admin/impostazioni',
      label: 'Impostazioni',
      icon: <IoSettingsOutline />,
    },
    { path: '/dash/admin/ticket', label: 'Ticket', icon: <IoTicketOutline /> },
    { path: '/dash/admin/feedback', label: 'Feedback', icon: <LiaThumbsUp /> },
    {
      path: '/dash/admin/figura-previste',
      label: 'Figura previste LMS CSR 59',
      icon: <BsUpload />,
    },
  ],
  [ROLES.LICENSE_USER]: [
    { path: '/dash/license-user', label: 'Dashboard', icon: <FaHome /> },
    {
      path: '/dash/license-user/courses',
      label: 'Courses',
      icon: <IoTicketOutline />,
    },
    { path: '/dash/license-user/videos', label: 'Videos', icon: <FaHome /> },
  ],
  [ROLES.PRIVATE_USER]: [
    { path: '/dash/student', label: 'Dashboard', icon: <FaHome /> },
    {
      path: 'student/ticket',
      label: 'Ticket',
      icon: <IoTicketOutline />,
    },
  ],
  [ROLES.COMPANY_ADMIN]: [
    { path: '/dash/company', label: 'Dashboard', icon: <FaHome /> },
    { path: '/dash/company/info', label: 'Info', icon: <FaHome /> },
    { path: '/dash/company/courses', label: 'Courses', icon: <FaHome /> },
    { path: '/dash/company/videos', label: 'Videos', icon: <FaHome /> },
    { path: '/dash/company/settings', label: 'Settings', icon: <FaHome /> },
  ],
};

const DashboardSidebar = () => {
  const { setActiveLink } = useUIStore();
  const { user } = useSelector((state) => state.auth);
  const roles = user?.role;
  const links = linksByRole[roles] || [];

  return (
    <aside className="fixed top-0 left-0 h-full w-[300px] bg-white shadow-md">
      <div className="flex justify-center py-4">
        <div className="flex items-center space-x-3">
          <img
            className="h-10 w-10 bg-cover object-contain"
            src="/image/icon/logo.jpg"
            alt="UnoSicurezza Logo"
          />
          <h1 className="text-2xl font-bold text-gray-900">UnoSicurezza</h1>
        </div>
      </div>

      <nav className="space-y-3 p-4">
        {links.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setActiveLink(path)}
            end={path === '/dash/admin'}
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-lg px-3 py-2 font-['Poppins'] ${
                isActive
                  ? 'bg-[#73BFA1] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <span className="">{icon}</span>
            <span className="">{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
