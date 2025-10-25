import { Navigate, Outlet } from 'react-router-dom';
import { user } from '../../config/api';

const AuthGuard = () => {
  return user && user.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to='/auth/login' replace />
  );
};

export default AuthGuard;
