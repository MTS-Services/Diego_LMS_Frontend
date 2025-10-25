import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const EnhancedDashboardNavbar = ({ user, onLogout }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard/teacher', icon: '📊' },
    { name: 'Courses', href: '/dashboard/courses', icon: '📚' },
    { name: 'Videos', href: '/dashboard/videos', icon: '🎥' },
  ];

  const userMenu = [
    { name: 'Profile', href: '/dashboard/profile', icon: '👤' },
    { name: 'Settings', href: '/dashboard/settings', icon: '⚙️' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="border-b border-gray-200 bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center">
            {/* Logo/Brand */}
            <div className="flex flex-shrink-0 items-center">
              <Link to="/dashboard/teacher" className="flex items-center">
                <h1 className="text-xl font-bold text-gray-800">
                  EduDashboard
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-8 md:flex md:space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'border-b-2 border-blue-500 bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-2 text-base">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - User menu and mobile button */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900">
              <span className="sr-only">Notifications</span>
              <span className="text-lg">🔔</span>
            </button>

            {/* User menu */}
            {user && (
              <div className="hidden items-center md:flex" ref={userMenuRef}>
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-3 rounded-lg bg-gray-50 px-3 py-2 transition-colors hover:bg-gray-100"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="text-left text-sm">
                      <div className="font-medium text-gray-900">
                        {user.name}
                      </div>
                      <div className="text-gray-500">{user.role}</div>
                    </div>
                    <svg
                      className={`h-4 w-4 text-gray-500 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* User dropdown menu */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 z-50 mt-2 w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                      <div className="border-b border-gray-100 px-4 py-2">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>

                      {userMenu.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                        >
                          <span className="mr-3 text-base">{item.icon}</span>
                          {item.name}
                        </Link>
                      ))}

                      <div className="border-t border-gray-100 pt-2">
                        <button
                          onClick={() => {
                            onLogout();
                            setIsUserMenuOpen(false);
                          }}
                          className="flex w-full items-center px-4 py-2 text-sm text-red-600 transition-colors hover:bg-red-50"
                        >
                          <span className="mr-3 text-base">🚪</span>
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="mt-2 space-y-1 rounded-lg bg-gray-50 px-2 pt-2 pb-3 shadow-inner sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center rounded-md px-3 py-3 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'border-l-4 border-blue-500 bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.name}
                </Link>
              ))}

              {/* Mobile user section */}
              {user && (
                <div className="border-t border-gray-200 pt-4 pb-2">
                  <div className="mb-2 flex items-center px-3 py-2">
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500">{user.role}</div>
                    </div>
                  </div>

                  {userMenu.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    >
                      <span className="mr-3 text-lg">{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}

                  <button
                    onClick={() => {
                      onLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50 hover:text-red-700"
                  >
                    <span className="mr-3 text-lg">🚪</span>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedDashboardNavbar;
