import { Link } from 'react-router-dom';
import { useUIStore } from '../../../features/zustand';
import { FaBell, FaSearch, FaUser } from 'react-icons/fa';

const DashboardNavbar = () => {
  const { isOpen, isToggle } = useUIStore();

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white p-4 shadow-sm">
      {/* Center Section: Banner Text */}
      <div className="text-center">
        <span className="text-base leading-6 font-normal text-black">
          Stai cercando nuovi corsi?{' '}
        </span>
        <Link
          to="/"
          className="text-base leading-6 font-normal text-emerald-300 hover:underline"
        >
          Esplora ora
        </Link>
      </div>

      {/* Right Section: Icons / Buttons */}
      <div className="flex items-center justify-between gap-4 px-12">
        <span className="cursor-pointer rounded-full bg-slate-100 p-2">
          <FaSearch size={20} />
        </span>
        <span className="cursor-pointer rounded-full bg-slate-100 p-2">
          <FaBell size={20} />
        </span>
        <span className="cursor-pointer rounded-full bg-slate-100 p-2">
          <FaUser size={20} />
        </span>
      </div>
    </header>
  );
};

export default DashboardNavbar;
