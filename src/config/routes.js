import { ROLES } from './roles';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  ADMIN_DASHBOARD: '/admin/dashboard',
  STUDENT_DASHBOARD: '/student/dashboard',
  NOT_FOUND: '*',
};

export const ROLE_DASHBOARD_ROUTE = {
  [ROLES.ADMIN]: '/dash/admin',
  [ROLES.LICENSE_USER]: '/dash/license-user',
  [ROLES.COMPANY_ADMIN]: '/dash/company',
  [ROLES.PRIVATE_USER]: '/dash/private-user',
};
