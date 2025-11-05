import AdminSettingsDashboard from '../pages/admin/super/sections/AdminSettingsDashboard';
import FeedbackAdminDashboard from '../pages/admin/super/sections/FeedbackAdminDashboard';
import FigureAdminDashboard from '../pages/admin/super/sections/FigureAdminDashboard';
import TicketAdminDashboard from '../pages/admin/super/sections/TicketAdminDashboard';

import LicenseeSuperAdminDashboard from '../pages/admin/super/sections/LicenseManagementSuperAdmin';
import FreelancerView from '../pages/admin/freelancer/FreelancerView';
import ReportDetail from '../pages/admin/freelancer/sections/ReportDetail';
import CoursesView from '../pages/admin/freelancer/CoursesView';
import License from '../pages/admin/freelancer/sections/License';
import SuperAdminView from '../pages/admin/super/SuperAdminView';
import Report from '../pages/admin/freelancer/sections/Report';
import VideosView from '../pages/admin/freelancer/VideosView';

import StudentHomeView from '../pages/admin/studentAdmin/StudentHomeView.jsx';
import StudentIPofile from '../pages/admin/studentAdmin/components/StudentIPofile.jsx';
import CertificatePage from '../pages/admin/studentAdmin/components/CertificatePage.jsx';
import CredentialsReceived from '../pages/admin/studentAdmin/CredentialsReceived.jsx';

import SupportFeedbackView from '../pages/admin/studentAdmin/SupportFeedbackView.jsx';
import NotificationsView from '../pages/admin/studentAdmin/NotificationsView.jsx';
import CourseContentView from '../pages/admin/studentAdmin/CourseContentView.jsx';
import SupportTicketView from '../pages/admin/studentAdmin/SupportTicketView.jsx';

import QuizesView from '../pages/admin/studentAdmin/QuizesView.jsx';
import QuizResult from '../pages/admin/studentAdmin/QuizResult.jsx';
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
      { path: 'admin/impostazioni/*', element: <AdminSettingsDashboard /> },
      { path: 'admin/ticket', element: <TicketAdminDashboard /> },
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
      { path: 'student', element: <StudentHomeView /> },
      { path: 'student/profile', element: <StudentIPofile /> },
      { path: 'student/credentials', element: <CredentialsReceived /> },
      { path: 'student/attestati', element: <CertificatePage /> },
      { path: 'student/ticket', element: <SupportTicketView /> },
      { path: 'student/course/:id', element: <CourseContentView /> },
    ],
  },
];
