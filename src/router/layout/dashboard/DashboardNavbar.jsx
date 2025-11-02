import { Link } from 'react-router-dom';
import { Heading } from '../../../components/ui';
import { useUIStore } from '../../../features/zustand';
import {
  Fa500Px,
  FaAlignJustify,
  FaAlignLeft,
  FaBars,
  FaBell,
  FaSearch,
  FaUser,
} from 'react-icons/fa';

const DashboardNavbar = ({ user }) => {
  const role = user?.role || 'student';
  const { isOpen, isToggle } = useUIStore();

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
    <div className="inline-flex items-center justify-between bg-white px-4 py-4">
      {/* Center Section: Banner Text */}
      <div>
        <button onClick={isToggle} className="rounded p-2 hover:bg-slate-100">
          {isOpen ? <FaAlignJustify /> : <FaAlignLeft />}
        </button>
      </div>
      <div className="w-96 text-center">
        <span className="text-base leading-6 font-normal text-black">
          Stai cercando nuovi corsi?{' '}
        </span>
        <span className="text-base leading-6 font-normal text-emerald-300">
          Esplora ora
        </span>
      </div>

      {/* Right Section: Icons / Buttons */}
      <div className="flex items-center justify-center gap-4 px-12">
        <span className="cursor-pointer rounded-full bg-slate-100 p-2">
          <FaSearch size={25} />
        </span>
        <span className="cursor-pointer rounded-full bg-slate-100 p-2">
          <FaBell size={25} />
        </span>
        <span className="cursor-pointer rounded-full bg-slate-100 p-2">
          <FaUser size={25} />
        </span>
      </div>
    </div>
  );
};

export default DashboardNavbar;
