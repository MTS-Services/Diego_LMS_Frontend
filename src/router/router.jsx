// src/router/router.jsx
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// Layouts
import DashboardLayout from './layout/dashboard/DashboardLayout.jsx';
import MainLayout from './layout/public/MainLayout.jsx';
import AuthLayout from './layout/auth/AuthLayout.jsx';

// Guards
import PublicGuard from './guards/PublicGuard.jsx';
import AuthGuard from './guards/AuthGuard.jsx';
import RoleGuard from './guards/RoleGuard.jsx';

// Public Views
// Main Page
import ContactView from '../pages/public/ContactView.jsx';
import HomeView from '../pages/public/HomeView.jsx';

// Nested Page

// Auth
import LoginView from '../pages/auth/LoginView.jsx';
// Admin View
import SettingsView from '../pages/admin/SettingsView.jsx';
import AdminView from '../pages/admin/AdminView.jsx';
import UsersView from '../pages/admin/UsersView.jsx';
// Teacher
import TeacherView from '../pages/teacher/TeacherView.jsx';
import CoursesView from '../pages/teacher/CoursesView.jsx';
import VideosView from '../pages/teacher/VideosView.jsx';
// Student
import StudentView from '../pages/students/StudentView.jsx';
import DocsView from '../pages/students/DocsView.jsx';

import ErrorView from '../pages/err/ErrorView.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeView />} />
        <Route path="contact" element={<ContactView />} />
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="login" />} />
        <Route path="login" element={<LoginView />} />
      </Route>

      <Route path="/dash" element={<DashboardLayout />}>
        {/* Admin */}
        <Route element={<RoleGuard allowedRoles={['admin']} />}>
          <Route path="super-admin" element={<AdminView />} />
          <Route path="users" element={<UsersView />} />
          <Route path="ad-settings" element={<SettingsView />} />
        </Route>

        {/* Teacher */}
        <Route element={<RoleGuard allowedRoles={['teacher']} />}>
          <Route path="teacher" element={<TeacherView />} />
          <Route path="courses" element={<CoursesView />} />
          <Route path="videos" element={<VideosView />} />
          <Route path="te-settings" element={<SettingsView />} />
        </Route>

        {/* Student */}
        <Route element={<RoleGuard allowedRoles={['student']} />}>
          <Route path="student" element={<StudentView />} />
          <Route path="docs" element={<DocsView />} />
          <Route path="st-settings" element={<SettingsView />} />
        </Route>
      </Route>

      <Route path="*" element={<ErrorView />} />
    </>,
  ),
);

export default router;
