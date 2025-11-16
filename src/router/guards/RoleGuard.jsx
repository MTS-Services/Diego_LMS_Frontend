import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RoleGuard = ({ allowedRoles }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  if (!user && !isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
};

export default RoleGuard;
