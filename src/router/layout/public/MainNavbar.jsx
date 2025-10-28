import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { IoMenu } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import Container from '../../../components/common/Container';

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    {
      label: 'Services',
      path: '/services-view',
      dropdown: [
        {
          label: 'Seveso',
          dropdown: [
            {
              label: 'Corsi SEVESO',
              path: '/services-view/sev/sev-courses',
            },
          ],
        },
        {
          label: 'Sicurezza',
          dropdown: [
            {
              label: 'Servizio ASPP e RSPP',
              path: '/services-view/security/asp-service',
            },
            {
              label: 'Redazione DVR',
              path: '/services-view/sicurezza/redazione-dvr',
            },
            {
              label: 'Piani di emergenza',
              path: '/services-view/sicurezza/piani-di-emergenza',
            },
            {
              label: 'Fulminazione',
              path: '/services-view/sicurezza/fulminazione',
            },
            {
              label: 'Legionella',
              path: '/services-view/sicurezza/legionella',
            },
            {
              label: 'Potabilità acqua',
              path: '/services-view/sicurezza/potabilità-acqua',
            },
            {
              label: 'Radon',
              path: '/services-view/sicurezza/radon',
            },
            {
              label: 'Analisi di laboratorio',
              path: '/services-view/sicurezza/analisi-di-laboratorio',
            },
            {
              label: 'Building management',
              path: '/services-view/sicurezza/building-management',
            },
          ],
        },
        {
          label: 'Ambiente',
          dropdown: [
            { label: 'RENTRI', path: '/services-view/ambiente/rentri' },
          ],
        },
        {
          label: 'Videosorveglianza',
          dropdown: [
            {
              label: 'Gestione autorizzazione impianti',
              path: '/services-view/Videosorveglianza/gestione-autorizzazione',
            },
          ],
        },
        {
          label: 'Medicina del lavoro',
          dropdown: [
            {
              label: 'Incarichi medico competente',
              path: '/services-view/medicina-del/incarichi',
            },
            {
              label: 'Gestione visite mediche',
              path: '/services-view/medicina-del/gestione',
            },
            {
              label: 'Analisi laboratorio',
              path: '/services-view/medicina-del/analisi',
            },
          ],
        },
        {
          label: 'Condominio',
          dropdown: [
            {
              label: 'Gestione immobiliare',
              path: '/services-view/condominio/gestione',
            },
          ],
        },
      ],
    },
    {
      label: 'Formazione',
      path: '/training',
      dropdown: [
        {
          label: 'La nostra piattaforma',
          dropdown: [{ label: 'Come funziona', path: '/training/courses/our' }],
        },
        {
          label: 'Corsi',
          dropdown: [
            {
              label: 'Corsi SEVESO',
              path: '/training/courses/how-it-works',
            },
            {
              label: 'Corsi obbligatori',
              path: '/training/courses/mandatory-courses',
            },
            {
              label: 'Catalogo',
              path: '/training/courses/catalog',
            },
          ],
        },
      ],
    },
    { label: 'Chi siamo', path: '/who-are-you' },
    { label: 'Collabora con noi', path: '/collaborate-with-us' },
    { label: 'Contattaci', path: '/contact-us' },
  ];

  const isActive = (item) => {
    if (item.path === location.pathname) return true;
    if (item.dropdown) {
      return item.dropdown.some(
        (sub) =>
          sub.path === location.pathname ||
          (sub.dropdown &&
            sub.dropdown.some((deep) => deep.path === location.pathname)),
      );
    }
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-2 sm:px-2 md:px-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex h-24 flex-1 items-center gap-10">
            <Link to="/">
              <div className="flex items-center gap-2">
                <div className="h-[50px] w-[40px]">
                  <img
                    className="h-full w-full bg-cover object-cover text-[#46BB9D]"
                    src="/image/icons/singleIcon.jpg"
                    alt="Home"
                  />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">
                  UnoSicurezza
                </h1>
              </div>
            </Link>

            {/* --- DESKTOP MENU --- */}
            <div className="hidden flex-1 justify-center lg:flex">
              <div className="flex items-center gap-6">
                {navItems.map((item, index) => (
                  <div key={index} className="group relative">
                    {!item.dropdown ? (
                      <Link
                        to={item.path}
                        className={`border-b border-transparent pb-[2px] text-base font-semibold transition-all duration-300 ${
                          isActive(item)
                            ? 'border-[#73BFA1] text-[#73BFA1]'
                            : 'text-[#252525] hover:border-[#63be9a]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <Link
                          to={item.path}
                          className={`flex items-center gap-1 border-b border-transparent pb-[2px] text-[15px] font-medium transition-all duration-200 hover:border-[#73BFA1] ${
                            isActive(item) ? 'text-[#73BFA1]' : 'text-gray-700'
                          }`}
                        >
                          <span>{item.label}</span>
                          <FaChevronDown
                            size={14}
                            className="transition-transform duration-200 group-hover:rotate-180"
                          />
                        </Link>

                        {/* ✅ Desktop dropdown (wider) */}
                        <div className="invisible absolute top-full z-50 mt-2 w-64 rounded-lg bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                          {item.dropdown.map((sub, i) => (
                            <div key={i} className="group/sub relative">
                              {/* --- DESKTOP LINK/SPAN LOGIC --- */}
                              {sub.dropdown ? (
                                <span
                                  className="flex cursor-default items-center justify-between px-4 py-2 text-base font-semibold text-gray-700 hover:bg-[#EAF5F1] hover:text-[#568F79]" // cursor-default added for visual cue
                                >
                                  {sub.label}
                                  <FaChevronDown
                                    size={12}
                                    className="ml-2 rotate-[-90deg] transition-transform group-hover/sub:rotate-0"
                                  />
                                </span>
                              ) : (
                                <Link
                                  to={sub.path}
                                  className="flex items-center justify-between px-4 py-2 text-base font-semibold text-gray-700 hover:bg-[#EAF5F1] hover:text-[#568F79]"
                                >
                                  {sub.label}
                                </Link>
                              )}
                              {/* --- END DESKTOP LINK/SPAN LOGIC --- */}

                              {sub.dropdown && (
                                <div className="invisible absolute top-0 left-full z-50 ml-1 w-64 rounded-lg bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover/sub:visible group-hover/sub:opacity-100">
                                  {sub.dropdown.map((deep, j) => (
                                    <Link
                                      key={j}
                                      to={deep.path}
                                      className="block px-4 py-2 text-base font-semibold text-gray-700 hover:bg-[#EAF5F1] hover:text-[#568F79]"
                                    >
                                      {deep.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* --- E-Learning Button (Desktop) --- */}
            <div className="hidden lg:block">
              <Link
                to="/auth/UserLanguage"
                className="inline-block rounded-full bg-[#73BFA1] px-8 py-3 font-semibold text-white"
              >
                E-Learning
              </Link>
            </div>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 p-2 text-gray-700"
            >
              {isMenuOpen ? <GrClose size={28} /> : <IoMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 left-0 z-50 bg-white shadow-md lg:hidden">
          <Container>
            <div className="flex flex-col space-y-3 pt-6 pb-6">
              {navItems.map((item, index) => (
                <div key={index}>
                  {!item.dropdown ? (
                    <Link
                      to={item.path}
                      className={`block py-2 text-[15px] font-medium ${
                        isActive(item) ? 'text-[#73BFA1]' : 'text-gray-700'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.path}
                          className={`flex-1 py-2 text-left text-[15px] font-medium ${
                            isActive(item) ? 'text-[#73BFA1]' : 'text-gray-700'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.label ? null : item.label,
                            )
                          }
                        >
                          <FaChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              openDropdown === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {openDropdown === item.label && (
                        <div className="mt-1 space-y-2 pl-4">
                          {item.dropdown.map((sub, i) => (
                            <div key={i}>
                              {/* --- MOBILE LINK/SPAN LOGIC --- */}
                              {sub.dropdown ? (
                                <div className="flex items-center justify-between">
                                  <span
                                    className="block cursor-default rounded-sm py-1 pl-4 text-base font-semibold duration-200 hover:bg-[#EAF5F1] hover:text-[#568F79]" // cursor-default added
                                  >
                                    {sub.label}
                                  </span>
                                </div>
                              ) : (
                                <Link
                                  to={sub.path}
                                  className="block rounded-sm py-1 pl-4 text-base font-semibold duration-200 hover:bg-[#EAF5F1] hover:text-[#568F79]"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {sub.label}
                                </Link>
                              )}
                              {/* --- END MOBILE LINK/SPAN LOGIC --- */}

                              {sub.dropdown && (
                                <div className="mt-1 space-y-2 pl-4">
                                  {sub.dropdown.map((deep, j) => (
                                    <Link
                                      key={j}
                                      to={deep.path}
                                      className="block rounded-sm py-1 pl-4 text-base font-semibold duration-200 hover:bg-[#EAF5F1] hover:text-[#568F79]"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {deep.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/auth/UserLanguage"
                className="mt-4 inline-block w-full rounded-full bg-[#5FD4C8] px-8 py-3 text-center font-medium text-white transition-colors duration-200 hover:bg-[#4fc4b8]"
                onClick={() => setIsMenuOpen(false)}
              >
                E-Learning
              </Link>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
