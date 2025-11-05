import { RiRadioButtonFill } from 'react-icons/ri';
import { PiRadioButtonDuotone } from 'react-icons/pi';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Heading, Paragraph } from '../../components/ui';

const categories = [
  {
    label: 'Role',
    icon: <RiRadioButtonFill className="h-5 w-5" />,
    activeIcon: <PiRadioButtonDuotone className="h-5 w-5 text-[#30AD75]" />,
    path: 'role',
  },
  {
    label: 'Information',
    icon: <RiRadioButtonFill className="h-5 w-5" />,
    activeIcon: <PiRadioButtonDuotone className="h-5 w-5 text-[#30AD75]" />,
    path: 'information',
  },
  {
    label: 'Password',
    icon: <RiRadioButtonFill className="h-5 w-5" />,
    activeIcon: <PiRadioButtonDuotone className="h-5 w-5 text-[#30AD75]" />,
    path: 'password',
  },
];

const SetupView = () => {
  const location = useLocation();

  const basePath = '/auth/setUp-userProfile';

  return (
    <div className="mx-auto grid w-full grid-cols-7 overflow-hidden md:h-screen md:grid-cols-6">
      <div className="col-span-3 flex h-auto flex-col items-center border border-gray-100 bg-[#F1F9F6] p-8 md:col-span-2 md:h-screen">
        <img
          className="h-[91px] w-[104px]"
          src="/image/icon/droplogo.png"
          alt=""
        />
        <Heading level={3}>Set up your user profile</Heading>

        <div className="flex flex-col gap-4">
          {categories.map((category, index) => {
            const fullPath = `${basePath}/${category.path}`.toLowerCase();
            const currentPath = location.pathname.toLowerCase();

            const isActive =
              currentPath === fullPath ||
              (category.path === 'role' &&
                currentPath === basePath.toLowerCase());

            return (
              <Link
                key={index}
                to={`${category.path}`}
                className={`flex items-center gap-3 transition-colors ${
                  isActive ? 'text-[#30AD75]' : 'text-gray-500'
                }`}
              >
                <button>
                  {isActive ? category.activeIcon : category.icon}
                </button>
                <Paragraph
                  className={`text-lg ${
                    isActive ? 'font-medium text-[#30AD75]' : 'text-gray-500'
                  }`}
                >
                  {category.label}
                </Paragraph>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="col-span-4 h-auto overflow-auto md:h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default SetupView;
