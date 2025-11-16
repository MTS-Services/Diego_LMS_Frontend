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
      { path: 'super-admin', element: <SuperAdminView /> },
      {
        path: 'super-admin/gestione-licenze',
        element: <LicenseeSuperAdminDashboard />,
      },
      {
        path: 'super-admin/impostazioni/*',
        element: <AdminSettingsDashboard />,
      },
      { path: 'super-admin/ticket', element: <TicketAdminDashboard /> },
      { path: 'super-admin/feedback', element: <FeedbackAdminDashboard /> },
      {
        path: 'super-admin/figura-previste',
        element: <FigureAdminDashboard />,
      },
    ],
  },
  {
    //  ✅ Freelancers
    roles: [ROLES.LICENSE_USER],
    routes: [
      { path: 'license-user', element: <FreelancerView /> },
      { path: 'license-user-teacher', element: <FreelancerView /> },
      { path: 'license-user-courses', element: <Report /> },
      { path: 'license-user-courses/:courseId', element: <ReportDetail /> },
      { path: 'license-user-videos', element: <License /> },
    ],
  },
  {
    //  ✅ Company Admins
    roles: [ROLES.COMPANY_ADMIN],
    routes: [
      { path: 'company-admin', element: <h1>COMPANY_HOME</h1> },
      { path: 'company-admin-info', element: <h1>COMPANY_info</h1> },
      { path: 'company-admin-teacher', element: <FreelancerView /> },
      { path: 'company-admin-courses', element: <CoursesView /> },
      { path: 'company-admin-videos', element: <VideosView /> },
      { path: 'company-admin-settings', element: <h1>Settings</h1> },
    ],
  },
  {
    //  ✅ Private Users
    roles: [ROLES.PRIVATE_USER],
    routes: [
      { path: 'private-user', element: <StudentHomeView /> },
      { path: 'private-user-ticket', element: <SupportTicketView /> },
      { path: 'private-user/profile', element: <StudentIPofile /> },
      { path: 'private-user/credentials', element: <CredentialsReceived /> },
      { path: 'private-user/notifications', element: <NotificationsView /> },
      { path: 'private-user/attestati', element: <CertificatePage /> },
      { path: 'private-user/course/:id', element: <CourseContentView /> },
    ],
  },
];
