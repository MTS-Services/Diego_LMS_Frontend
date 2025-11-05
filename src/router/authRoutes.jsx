import ChooseLanguageView from '../pages/auth/ChooseLanguageView';
import CompanyAdminLanguage from '../pages/auth/company_admin_auth/choose_Language/CompanyAdminLanguage';

export const nestedPublicRoutes = [
  { path: 'choose-language', element: <ChooseLanguageView /> },
  { path: 'choose-language', element: <CompanyAdminLanguage /> },
];
