import AdminSettingsDashboard from '../pages/admin/super/sections/AdminSettingsDashboard';
import FeedbackAdminDashboard from '../pages/admin/super/sections/FeedbackAdminDashboard';
import FigureAdminDashboard from '../pages/admin/super/sections/FigureAdminDashboard';

import LicenseeSuperAdminDashboard from '../pages/admin/super/sections/LicenseManagementSuperAdmin';
import CoursesView from '../pages/admin/freelancer/CoursesView';
import FreelancerView from '../pages/admin/freelancer/FreelancerView';
import License from '../pages/admin/freelancer/sections/License';
import Report from '../pages/admin/freelancer/sections/Report';
import ReportDetail from '../pages/admin/freelancer/sections/ReportDetail';
import VideosView from '../pages/admin/freelancer/VideosView';
import SuperAdminView from '../pages/admin/super/SuperAdminView';
import { ROLES } from '../config/roles';

export const dashboardRoutes = [
  {
    //  ✅ Super Admins
    roles: [ROLES.ADMIN],
    routes: [
      { path: 'admin', element: <SuperAdminView /> },
      {
        path: 'admin/gestione-licenze',
        element: <LicenseeSuperAdminDashboard />,
      },
      { path: 'admin/impostazioni', element: <AdminSettingsDashboard /> },
      { path: 'admin/ticket', element: <h1>Ticket</h1> },
      { path: 'admin/feedback', element: <FeedbackAdminDashboard /> },
      {
        path: 'admin/figura-previste',
        element: <FigureAdminDashboard />,
      },
    ],
  },
  {
    //  ✅ Freelancers
    roles: [ROLES.LICENSE_USER],
    routes: [
      { path: 'license-user', element: <FreelancerView /> },
      { path: 'license-user/teacher', element: <FreelancerView /> },
      { path: 'license-user/courses', element: <Report /> },
      { path: 'license-user/courses/:courseId', element: <ReportDetail /> },
      { path: 'license-user/videos', element: <License /> },
    ],
  },
  {
    //  ✅ Company Admins
    roles: [ROLES.COMPANY_ADMIN],
    routes: [
      { path: 'company', element: <h1>COMPANY_HOME</h1> },
      { path: 'company/info', element: <h1>COMPANY_info</h1> },
      { path: 'company/teacher', element: <FreelancerView /> },
      { path: 'company/courses', element: <CoursesView /> },
      { path: 'company/videos', element: <VideosView /> },
      { path: 'company/settings', element: <h1>Settings</h1> },
    ],
  },
  {
    //   Private Users
    roles: [ROLES.PRIVATE_USER],
    routes: [
      { path: 'student', element: <h1>PRIVATE_USER</h1> },
      { path: 'docs', element: <h1>PRIVATE_USER</h1> },
    ],
  },
];
