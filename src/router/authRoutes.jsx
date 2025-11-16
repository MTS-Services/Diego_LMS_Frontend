import ChooseLanguageView from '../pages/auth/ChooseLanguageView';
import LoginView from '../pages/auth/LoginView';
import RegisterView from '../pages/auth/RegisterView';
import Information from '../pages/auth/user_Auth/setUp_UserProfile/components/Information';
import Password from '../pages/auth/user_Auth/setUp_UserProfile/components/Password';
import Role from '../pages/auth/user_Auth/setUp_UserProfile/components/Role';

export const authRoutes = [
  { path: 'login', element: <LoginView /> },
  { path: 'register', element: <RegisterView /> },
  { path: 'register/choose-language', element: <ChooseLanguageView /> },
];

export const setupRoutes = [
  { path: 'register/setup-profile/role', element: <Role /> },
  { path: 'register/setup-profile/information', element: <Information /> },
  { path: 'register/setup-profile/password', element: <Password /> },
];
