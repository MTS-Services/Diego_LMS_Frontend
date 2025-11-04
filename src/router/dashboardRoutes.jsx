import CoursesView from '../pages/admin/freelancer/CoursesView';
import TeacherView from '../pages/admin/freelancer/TeacherView';
import VideosView from '../pages/admin/freelancer/VideosView';
import DocsView from '../pages/admin/students/DocsView';
import StudentView from '../pages/admin/students/StudentView';
import AdminSettingsDashboard from '../pages/admin/super/sections/AdminSettingsDashboard';
import FeedbackAdminDashboard from '../pages/admin/super/sections/FeedbackAdminDashboard';
import FigureAdminDashboard from '../pages/admin/super/sections/FigureAdminDashboard';
import LicenseeSuperAdminDashboard from '../pages/admin/super/sections/LicenseManagementSuperAdmin';
import SuperAdminView from '../pages/admin/super/SuperAdminView';

export const dashboardRoutes = [
  {
    roles: ['admin'],
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
    roles: ['freelancer'],
    routes: [
      { path: 'teacher', element: <TeacherView /> },
      { path: 'courses', element: <CoursesView /> },
      { path: 'videos', element: <VideosView /> },
    ],
  },
  {
    roles: ['company'],
    routes: [
      { path: 'teacher', element: <TeacherView /> },
      { path: 'courses', element: <CoursesView /> },
      { path: 'videos', element: <VideosView /> },
    ],
  },
  {
    roles: ['student'],
    routes: [
      { path: 'student', element: <StudentView /> },
      { path: 'docs', element: <DocsView /> },
    ],
  },
];
