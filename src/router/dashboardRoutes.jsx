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
      { path: 'super-admin', element: <SuperAdminView /> },
      { path: 'gestione-licenze', element: <h1>Gestione Licenze</h1> },
      { path: 'impostazioni', element: <h1>Impostazioni</h1> },
      { path: 'ticket', element: <h1>Ticket</h1> },
      { path: 'feedback', element: <h1>Feedback</h1> },
      {
        path: 'figura-previste',
        element: <h1>Figura previste LMS CSR 59</h1>,
      },
    ],
  },
  {
    roles: [ROLES.LICENSE_USER],
    routes: [
      { path: 'teacher', element: <FreelancerView /> },
      { path: 'courses', element: <Report /> },
      { path: 'courses/:courseId', element: <ReportDetail /> },
      { path: 'videos', element: <License /> },
    ],
  },
  {
    roles: [ROLES.COMPANY_ADMIN],
    routes: [
      { path: 'teacher', element: <FreelancerView /> },
      { path: 'courses', element: <CoursesView /> },
      { path: 'videos', element: <VideosView /> },
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
