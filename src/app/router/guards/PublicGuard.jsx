// src/router/guards/PublicGuard.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { user } from '../../../config/api';

const PublicGuard = () => {
  if (user && user.isAuthenticated) {
    // Redirect based on role
    switch (user.role) {
      case 'admin':
        return <Navigate to="/super-admin" replace />;
      case 'teacher':
        return <Navigate to="/dashboard/teacher" replace />;
      case 'student':
        return <Navigate to="/dashboard/student" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  // Not authenticated → allow public routes
  return <Outlet />;
};

export default PublicGuard;
