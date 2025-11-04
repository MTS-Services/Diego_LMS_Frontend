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
  [ROLES.PLATFORM_ADMIN]: '/dash/super-admin',
  [ROLES.ADMIN]: '/dash/super-admin',
  [ROLES.LICENSE_USER]: '/dash/license-user',
  [ROLES.COMPANY_ADMIN]: '/dash/teacher',
  [ROLES.STUDENT]: '/dash/student',
  [ROLES.TEACHER]: '/dash/dashboard',
  [ROLES.PRIVATE_USER]: '/dash/teacher',
};
