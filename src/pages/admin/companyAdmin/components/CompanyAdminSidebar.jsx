import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';
import { PiNoteLight } from 'react-icons/pi';
import { TfiHome } from 'react-icons/tfi';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinksData = [
  { name: 'Home', icon: <TfiHome />, path: '/level-one/home' },
  {
    name: 'Gestisci la formazione',
    icon: <FaUsers />,
    path: '/level-one/gestisci-la',
  },
  {
    name: 'I tuoi attestati',
    icon: <PiNoteLight />,
    path: '/level-one/attestati',
  },
];

const CompanyAdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Close sidebar when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Mobile Top Bar */}
      <div className="fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-between bg-white px-4 py-3 shadow lg:hidden">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          <div className="h-10 w-50">
            <img
              src="./image/icon/logo.jpg"
              alt="Logo"
              className="h-full w-full object-cover"
            />
          </div>
        </a>
        <button
          onClick={toggleSidebar}
          className="p-1 text-gray-950 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX className="h-7 w-7" />
          ) : (
            <FiMenu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 transform bg-[#ffffff] text-gray-950 transition-transform duration-300 ease-in-out lg:static lg:h-screen lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between border-b border-gray-100 bg-white p-4 lg:border-0">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            <div className="h-10 w-50">
              <img
                src="./image/icon/logo.jpg"
                alt="Logo"
                className="h-full w-full object-cover"
              />
            </div>
          </a>
          {/* Close button for mobile inside sidebar */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-gray-950 focus:outline-none lg:hidden"
            aria-label="Close menu"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-4 flex flex-col overflow-y-auto">
          {navLinksData.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.path)}
              className={`relative flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left transition-all duration-200 ${
                isActive(link.path)
                  ? 'bg-[#73BFA1] font-semibold text-white'
                  : 'font-medium text-gray-700 hover:bg-gray-50 hover:text-[#000044]'
              }`}
              type="button"
            >
              {/* Icon */}
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-inherit">
                {link.icon}
              </span>

              {/* Label */}
              <span className="break-words">{link.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default CompanyAdminSidebar;
