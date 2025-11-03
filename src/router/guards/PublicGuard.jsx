import { Navigate, Outlet } from 'react-router-dom';
import { user } from '../../config/api';

const PublicGuard = () => {
  // If user is logged in, redirect immediately based on their role
  if (user && user.isAuthenticated) {
    switch (user.role) {
      case 'admin':
        return <Navigate to="/dash/super-admin" replace />;
      case 'teacher':
        return <Navigate to="/dash/teacher" replace />;
      case 'student':
        return <Navigate to="/dash/student" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  // If not logged in, show public/auth routes
  return <Outlet />;
};

export default PublicGuard;
