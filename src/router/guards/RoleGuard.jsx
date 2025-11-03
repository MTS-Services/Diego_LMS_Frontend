import { Navigate, Outlet } from 'react-router-dom';
import { user } from '../../config/api';

const RoleGuard = ({ allowedRoles }) => {
  if (!user && !user.isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
};

export default RoleGuard;
