import { Navigate, Outlet } from 'react-router-dom';

const RoleGuard = ({ allowedRoles }) => {
  const { user } = useAuth();

  if (!user || !allowedRoles.includes(user.role)) {
    // Redirect based on role or to login
    return <Navigate to='/auth/login' replace />;
  }

  return <Outlet />;
};

export default RoleGuard;
