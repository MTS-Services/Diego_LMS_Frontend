import { Navigate, Outlet } from 'react-router-dom';

const PublicGuard = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  if (user && isAuthenticated) {
    switch (user.role) {
      case 'PLATFORM_ADMIN':
        return <Navigate to="/super-admin" replace />;
      case 'COMPANY_ADMIN':
        return <Navigate to="/company-admin" replace />;
      case 'COMPANY_EMPLOYEE':
        return <Navigate to="/company-user" replace />;
      case 'TEACHER':
        return <Navigate to="/teacher-user" replace />;
      case 'LICENSE_USER':
        return <Navigate to="/license-user" replace />;
      case 'PRIVATE_USER':
        return <Navigate to="/private-user" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  // If not logged in, show public/auth routes
  return <Outlet />;
};

export default PublicGuard;
