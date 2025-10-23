import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// Guards
import PrivateGuard from './guards/PrivateGuard';
import PublicGuard from './guards/PublicGuard';
import AuthGuard from './guards/AuthGuard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* 🔓 Public Routes */}
      <Route element={<PublicGuard />}>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomeView />} />
          <Route path='welcome/:id' element={<WelcomeScanView />} />
          <Route path='checkout/setup-profile' element={<SetupProfileView />} />
        </Route>
      </Route>

      {/* 🛂 Auth Routes */}
      <Route element={<AuthGuard />}>
        <Route path='/auth' element={<AuthLayout />}>
          <Route index path='login' element={<LoginView />} />
        </Route>
      </Route>

      {/* 🔒 Admin Routes */}
      <Route element={<PrivateGuard />}>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminView />} />
          <Route path='user-management' element={<UserManageView />} />
        </Route>
      </Route>

      {/* 🔒 Licence Routes */}
      <Route element={<PrivateGuard />}>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminView />} />
          <Route path='user-management' element={<UserManageView />} />
        </Route>
      </Route>

      {/* 🔒 Students Routes */}
      <Route element={<PrivateGuard />}>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminView />} />
          <Route path='user-management' element={<UserManageView />} />
        </Route>
      </Route>

      {/* ⚠️ 404 */}
      <Route path='*' element={<ErrorView />} />
    </>
  )
);

export default router;
