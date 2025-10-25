import { Navigate, Outlet } from 'react-router-dom';
import { user } from '../../config/api';

const AuthGuard = () => {
  const result =
    user && user.isAuthenticated ? (
      <Outlet />
    ) : (
      <Navigate to="/auth/login" replace />
    );

  return result;
};

export default AuthGuard;
