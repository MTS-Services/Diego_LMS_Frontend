import LicenseeSuperAdminDashboard from '../pages/admin/super/sections/LicenseManagementSuperAdmin';
import CoursesView from '../pages/admin/freelancer/CoursesView';
import FreelancerView from '../pages/admin/freelancer/FreelancerView';
import License from '../pages/admin/freelancer/sections/License';
import Report from '../pages/admin/freelancer/sections/Report';
import ReportDetail from '../pages/admin/freelancer/sections/ReportDetail';
import VideosView from '../pages/admin/freelancer/VideosView';
import DocsView from '../pages/admin/students/DocsView';
import StudentView from '../pages/admin/students/StudentView';
import SuperAdminView from '../pages/admin/super/SuperAdminView';
import { ROLES } from '../config/roles';

export const dashboardRoutes = [
  {
    roles: [ROLES.ADMIN],
    routes: [
      { path: 'admin', element: <SuperAdminView /> },
      {
        path: 'admin/gestione-licenze',
        element: <LicenseeSuperAdminDashboard />,
      },
      { path: 'admin/impostazioni', element: <h1>Impostazioni</h1> },
      { path: 'admin/ticket', element: <h1>Ticket</h1> },
      { path: 'admin/feedback', element: <h1>Feedback</h1> },
      {
        path: 'admin/figura-previste',
        element: <h1>Figura previste LMS CSR 59</h1>,
      },
    ],
  },
  {
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
    roles: [ROLES.COMPANY_ADMIN],
    routes: [
      { path: 'company', element: <h1>COMPANY_HOME</h1> },
      { path: 'company/info', element: <h1>COMPANY_info</h1> },
      { path: 'company/teacher', element: <FreelancerView /> },
      { path: 'company/courses', element: <CoursesView /> },
      { path: 'company/videos', element: <VideosView /> },
    ],
  },
  {
    roles: [ROLES.PRIVATE_USER],
    routes: [
      { path: 'student', element: <h1>PRIVATE_USER</h1> },
      { path: 'docs', element: <h1>PRIVATE_USER</h1> },
    ],
  },
];
