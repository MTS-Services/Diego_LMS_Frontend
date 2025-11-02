// src/router/router.jsx
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// Layouts
import DashboardLayout from './layout/dashboard/DashboardLayout.jsx';
import MainLayout from './layout/public/MainLayout.jsx';
import AuthLayout from './layout/auth/AuthLayout.jsx';

// Guards
import RoleGuard from './guards/RoleGuard.jsx';

// Public Views
import HomeView from '../pages/public/home/HomeView.jsx';
import ServicesView from '../pages/public/ServicesView.jsx';
import TrainingView from '../pages/public/TrainingView.jsx';
import WhoWeAreView from '../pages/public/WhoWeAreView.jsx';
import ContactUsView from '../pages/public/ContactUsView.jsx';
import WorkWithUsView from '../pages/public/WorkWithUsView.jsx';
import {
  SafetyEditorial,
  SafetyRadonView,
  SafetyLegionView,
  SafetyServiceView,
  SafetySevCoursesView,
  SafetyLaboratoryView,
  SafetyEmergencyView,
  SafetyLightningView,
  SafetyDrinkingWater,
  SafetyBuildingView,
  AmbientRentView,
  VideoAndAuthorizationView,
  OccupationalCompetentView,
  OccupationalLaboratoryView,
  TrainingCoursesRequiredView,
  TrainingCoursesCatalogView,
  OccupationalMedicalView,
  CondominiumPropertyView,
  TrainingOurPlatformView,
  TrainingCoursesSevView,
} from '../pages/public/nested'; // assuming you can export all nested views from index.js

// Auth
import LoginView from '../pages/auth/LoginView.jsx';

// Admin / Teacher / Student Views
import SuperAdminView from '../pages/admin/super/SuperAdminView.jsx';
import TeacherView from '../pages/admin/freelancer/TeacherView.jsx';
import CoursesView from '../pages/admin/freelancer/CoursesView.jsx';
import VideosView from '../pages/admin/freelancer/VideosView.jsx';
import StudentView from '../pages/admin/students/StudentView.jsx';
import DocsView from '../pages/admin/students/DocsView.jsx';

// Error
import ErrorView from '../pages/err/ErrorView.jsx';

// Public Route Config
const publicRoutes = [
  { path: '', element: <HomeView /> },
  { path: 'services', element: <ServicesView /> },
  { path: 'training', element: <TrainingView /> },
  { path: 'who_we_are', element: <WhoWeAreView /> },
  { path: 'work_with_us', element: <WorkWithUsView /> },
  { path: 'contact_us', element: <ContactUsView /> },
];

const nestedPublicRoutes = [
  { path: 'services/sev/sev-courses', element: <SafetySevCoursesView /> },
  { path: 'services/security/asp-service', element: <SafetyServiceView /> },
  { path: 'services/security/dvr-editorial', element: <SafetyEditorial /> },
  {
    path: 'services/security/emergency-plans',
    element: <SafetyEmergencyView />,
  },
  { path: 'services/security/legion', element: <SafetyLegionView /> },
  { path: 'services/security/radon', element: <SafetyRadonView /> },
  { path: 'services/security/lightning', element: <SafetyLightningView /> },
  { path: 'services/safety/drinking-water', element: <SafetyDrinkingWater /> },
  {
    path: 'services/security/laboratory-analysis',
    element: <SafetyLaboratoryView />,
  },
  {
    path: 'services/security/building-management',
    element: <SafetyBuildingView />,
  },
  { path: 'services/environment/rent', element: <AmbientRentView /> },
  {
    path: 'services/video/authorization',
    element: <VideoAndAuthorizationView />,
  },
  {
    path: 'services/medicine/assignments',
    element: <OccupationalCompetentView />,
  },
  {
    path: 'services/medicine-del/assignments',
    element: <OccupationalMedicalView />,
  },
  {
    path: 'services/medicine-del/analysis',
    element: <OccupationalLaboratoryView />,
  },
  {
    path: 'services/condominium/management',
    element: <CondominiumPropertyView />,
  },
  { path: 'training/courses/our', element: <TrainingOurPlatformView /> },
  {
    path: 'training/courses/mandatory-courses',
    element: <TrainingCoursesSevView />,
  },
  {
    path: 'training/courses/how-it-works',
    element: <TrainingCoursesRequiredView />,
  },
  { path: 'training/courses/catalog', element: <TrainingCoursesCatalogView /> },
];

// Dashboard Route Config
const dashboardRoutes = [
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public */}
      <Route path="/" element={<MainLayout />}>
        {publicRoutes.map((r) => (
          <Route
            key={r.path}
            path={r.path}
            index={r.path === ''}
            element={r.element}
          />
        ))}
        {nestedPublicRoutes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Route>

      {/* Auth */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="login" />} />
        <Route path="login" element={<LoginView />} />
      </Route>

      {/* Dashboard */}
      <Route path="/dash" element={<DashboardLayout />}>
        {dashboardRoutes.map(({ roles, routes }) => (
          <Route
            key={roles.join('-')}
            element={<RoleGuard allowedRoles={roles} />}
          >
            {routes.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
          </Route>
        ))}
      </Route>

      {/* Fallback */}
      <Route path="*" element={<ErrorView />} />
    </>,
  ),
);

export default router;
