import CoursesView from '../pages/admin/freelancer/CoursesView';
import TeacherView from '../pages/admin/freelancer/TeacherView';
import VideosView from '../pages/admin/freelancer/VideosView';
import DocsView from '../pages/admin/students/DocsView';
import StudentView from '../pages/admin/students/StudentView';
import AdminSettingsDashboard from '../pages/admin/super/sections/AdminSettingsDashboard';
import FeedbackAdminDashboard from '../pages/admin/super/sections/FeedbackAdminDashboard';
import FigureAdminDashboard from '../pages/admin/super/sections/FigureAdminDashboard';
// import CoursesView from '../pages/admin/freelancer/CoursesView';
// import TeacherView from '../pages/admin/freelancer/TeacherView';
// import VideosView from '../pages/admin/freelancer/VideosView';
// import DocsView from '../pages/admin/students/DocsView';
// import StudentView from '../pages/admin/students/StudentView';
import LicenseeSuperAdminDashboard from '../pages/admin/super/sections/LicenseManagementSuperAdmin';
import SuperAdminView from '../pages/admin/super/SuperAdminView';
import { ROLES } from '../config/roles';

export const dashboardRoutes = [
  {
    roles: [ROLES.ADMIN],
    routes: [
      { path: 'super-admin', element: <SuperAdminView /> },
      { path: 'gestione-licenze', element: <LicenseeSuperAdminDashboard /> },
      { path: 'impostazioni/*', element: <AdminSettingsDashboard /> },
      { path: 'ticket', element: <h1>Ticket</h1> },
      { path: 'feedback', element: <FeedbackAdminDashboard /> },
      {
        path: 'figura-previste',
        element: <FigureAdminDashboard />,
      },
    ],
  },
  {
    roles: [ROLES.LICENSE_USER],
    routes: [
      { path: 'license-user', element: <h1>LICENSE_USER</h1> },
      { path: 'courses', element: <h1>LICENSE_USER</h1> },
      { path: 'videos', element: <h1>LICENSE_USER</h1> },
    ],
  },
  {
    roles: [ROLES.COMPANY_ADMIN],
    routes: [
      { path: 'company', element: <h1>COMPANY_ADMIN</h1> },
      { path: 'info', element: <h1>COMPANY_ADMIN</h1> },
      { path: 'video', element: <h1>COMPANY_ADMIN</h1> },
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
