import CoursesView from '../pages/admin/freelancer/CoursesView';
import TeacherView from '../pages/admin/freelancer/TeacherView';
import VideosView from '../pages/admin/freelancer/VideosView';
import DocsView from '../pages/admin/students/DocsView';
import StudentView from '../pages/admin/students/StudentView';
import SuperAdminView from '../pages/admin/super/SuperAdminView';

export const dashboardRoutes = [
  {
    roles: ['admin'],
    routes: [{ path: 'super-admin', element: <SuperAdminView /> }],
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
