import CoursesView from '../pages/admin/freelancer/CoursesView';
import TeacherView from '../pages/admin/freelancer/TeacherView';
import VideosView from '../pages/admin/freelancer/VideosView';
import DocsView from '../pages/admin/students/DocsView';
import StudentView from '../pages/admin/students/StudentView';
import SuperAdminView from '../pages/admin/super/SuperAdminView';

export const dashboardRoutes = [
  {
    roles: ['admin'],
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
