import { Navigate, Outlet } from 'react-router-dom';
import { user } from '../../config/api';

const AuthGuard = () => {
  const result =
    user && user.isAuthenticated ? (
      <Navigate to="/auth/login" replace />
    ) : (
      <Outlet />
    );

  return result;
};

export default AuthGuard;
