import { Navigate, Outlet } from 'react-router-dom';

const PublicGuard = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  if (user && isAuthenticated) {
    switch (user.role) {
      case 'PLATFORM_ADMIN':
        return <Navigate to="/dash/super-admin" replace />;
      case 'COMPANY_ADMIN':
        return <Navigate to="/dash/company-admin" replace />;
      case 'COMPANY_EMPLOYEE':
        return <Navigate to="/dash/company-employee" replace />;
      case 'TEACHER':
        return <Navigate to="/dash/teacher" replace />;
      case 'LICENSE_USER':
        return <Navigate to="/dash/license-user" replace />;
      case 'PRIVATE_USER':
        return <Navigate to="/dash/private-user" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  // If not logged in, show public/auth routes
  return <Outlet />;
};

export default PublicGuard;
