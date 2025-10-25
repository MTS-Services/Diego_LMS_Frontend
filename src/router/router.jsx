// src/router/router.jsx
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Layouts
import MainLayout from "../layout/public/MainLayout.jsx";
import AuthLayout from "../layout/auth/AuthLayout.jsx";
import AdminLayout from "../layout/admin/AdminLayout.jsx";
import TeacherLayout from "../layout/teacher/TeacherLayout.jsx";
import StudentLayout from "../layout/students/StudentLayout.jsx";

// Views
import HomeView from "../pages/home/HomeView.jsx";
import LoginView from "../pages/auth/LoginView.jsx";
import AdminView from "../pages/admin/AdminView.jsx";
import UsersView from "../pages/admin/UsersView.jsx";
import TeacherView from "../pages/teacher/TeacherView.jsx";
import VideosView from "../pages/teacher/VideosView.jsx";
import StudentView from "../pages/students/StudentView.jsx";
import DocsView from "../pages/students/DocsView.jsx";

// Guards
import PublicGuard from "./guards/PublicGuard.jsx";
import RoleGuard from "./guards/RoleGuard.jsx";

import ErrorView from "../pages/err/ErrorView.jsx";
import ContactView from "../pages/home/ContactView.jsx";
import CoursesView from "../pages/teacher/CoursesView.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PublicGuard />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeView />} />
          <Route path="contact" element={<ContactView />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<LoginView />} />
        </Route>
      </Route>

      <Route element={<RoleGuard allowedRoles={["admin"]} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminView />} />
          <Route path="users" element={<UsersView />} />
        </Route>
      </Route>

      <Route element={<RoleGuard allowedRoles={["teacher"]} />}>
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<TeacherView />} />
          <Route path="courses" element={<CoursesView />} />
        </Route>
      </Route>

      <Route element={<RoleGuard allowedRoles={["student"]} />}>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentView />} />
          <Route path="docs" element={<DocsView />} />
        </Route>
      </Route>

      <Route path="*" element={<ErrorView />} />
    </>,
  ),
);

export default router;
