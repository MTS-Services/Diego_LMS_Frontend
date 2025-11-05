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
// Auth
import LoginView from '../pages/auth/LoginView.jsx';
// Public Route Config
import { publicRoutes } from './publicRoutes.jsx';
import { nestedPublicRoutes } from './nestedPublicRoutes.jsx';
// Dashboard Route Config
import { dashboardRoutes } from './dashboardRoutes.jsx';
// Error
import ErrorView from '../pages/err/ErrorView.jsx';
import ChooseLanguageView from '../pages/auth/ChooseLanguageView.jsx';
import RegisterView from '../pages/auth/RegisterView.jsx';
import SetupView from '../pages/auth/SetupView.jsx';

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
        <Route path="choose-language" element={<ChooseLanguageView />} />
        <Route path="register" element={<RegisterView />} />
        <Route path="setup-profile" element={<SetupView />} />
        <Route path="setup-profile/role" element={<SetupView />} />
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
