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
import RoleGuard from './guards/RoleGuard.jsx';

// Public Views
// Main Page
import HomeView from '../pages/public/home/HomeView.jsx';
import TrainingView from '../pages/public/TrainingView.jsx';
import WhoWeAreView from '../pages/public/WhoWeAreView.jsx';
import ContactUsView from '../pages/public/ContactUsView.jsx';
import WorkWithUsView from '../pages/public/WorkWithUsView.jsx';

// Nested Page
import SafetySevCoursesView from '../pages/public/nested/SafetySevCoursesView.jsx';
import SafetyServiceView from '../pages/public/nested/SafetyServiceView.jsx';
import SafetyEditorial from '../pages/public/nested/SafetyEditorial.jsx';
import SafetyEmergencyView from '../pages/public/nested/SafetyEmergencyView.jsx';
import SafetyLightningView from '../pages/public/nested/SafetyLightningView.jsx';
import SafetyLegionView from '../pages/public/nested/SafetyLegionView.jsx';
import SafetyDrinkingWater from '../pages/public/nested/SafetyDrinkingWater.jsx';
import SafetyRadonView from '../pages/public/nested/SafetyRadonView.jsx';
import SafetyLaboratoryView from '../pages/public/nested/SafetyLaboratoryView.jsx';
import SafetyBuildingView from '../pages/public/nested/SafetyBuildingView.jsx';
import AmbientRentView from '../pages/public/nested/AmbientRentView.jsx';
import VideoAndAuthorizationView from '../pages/public/nested/VideoAndAuthorizationView.jsx';
import OccupationalCompetentView from '../pages/public/nested/OccupationalCompetentView.jsx';
import OccupationalMedicalView from '../pages/public/nested/OccupationalMedicalView.jsx';
import OccupationalLaboratoryView from '../pages/public/nested/OccupationalLaboratoryView.jsx';
import CondominiumPropertyView from '../pages/public/nested/CondominiumPropertyView.jsx';
import TrainingOurPlatformView from '../pages/public/nested/TrainingOurPlatformView.jsx';
import TrainingCoursesSevView from '../pages/public/nested/TrainingCoursesSevView.jsx';
import TrainingCoursesRequiredView from '../pages/public/nested/TrainingCoursesRequiredView.jsx';
import TrainingCoursesCatalogView from '../pages/public/nested/TrainingCoursesCatalogView.jsx';

// Auth
import LoginView from '../pages/auth/LoginView.jsx';
import ServicesView from '../pages/public/services/ServicesView.jsx';

// Admin View
import SuperAdminView from '../pages/admin/superAdmin/SuperAdminView.jsx';
import FreelancerAdminView from '../pages/admin/freelancerAdmin/FreelancerAdminView.jsx';
import CompanyAdminView from '../pages/admin/companyAdmin/CompanyAdminView.jsx';
import StudentAdminSidebar from '../pages/admin/studentAdmin/StudentHomeView.jsx';

// Teacher
import TeacherView from '../pages/teacher/TeacherView.jsx';
import CoursesView from '../pages/teacher/CoursesView.jsx';
import VideosView from '../pages/teacher/VideosView.jsx';

// Student
import StudentView from '../pages/students/StudentView.jsx';
import DocsView from '../pages/students/DocsView.jsx';
// Profile (reusable)

// ErrorView
import ErrorView from '../pages/err/ErrorView.jsx';
import Email from '../pages/auth/user_Auth/email/Email.jsx';
import StudentHomeView from '../pages/admin/studentAdmin/StudentHomeView.jsx';
import StudentIPofile from '../pages/admin/studentAdmin/components/StudentIPofile.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Views // Main Page */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeView />} />
        <Route path="services" element={<ServicesView />} />
        <Route path="training" element={<TrainingView />} />
        <Route path="who_we_are" element={<WhoWeAreView />} />
        <Route path="work_with_us" element={<WorkWithUsView />} />
        <Route path="contact_us" element={<ContactUsView />} />
        {/* Services Nested View */}
        <Route
          path="services/sev/sev-courses"
          element={<SafetySevCoursesView />}
        />
        <Route
          path="/services/security/asp-service"
          element={<SafetyServiceView />}
        />
        <Route
          path="/services/security/dvr-editorial"
          element={<SafetyEditorial />}
        />
        <Route
          path="/services/security/emergency-plans"
          element={<SafetyEmergencyView />}
        />
        <Route
          path="/services/security/lightning"
          element={<SafetyLightningView />}
        />
        <Route
          path="/services/security/legion"
          element={<SafetyLegionView />}
        />
        <Route
          path="/services/safety/drinking-water"
          element={<SafetyDrinkingWater />}
        />
        <Route path="/services/security/radon" element={<SafetyRadonView />} />
        <Route
          path="/services/security/laboratory-analysis"
          element={<SafetyLaboratoryView />}
        />
        <Route
          path="/services/security/building-management"
          element={<SafetyBuildingView />}
        />
        <Route
          path="/services/environment/rent"
          element={<AmbientRentView />}
        />
        <Route
          path="/services/video/authorization"
          element={<VideoAndAuthorizationView />}
        />
        <Route
          path="/services/medicine/assignments"
          element={<OccupationalCompetentView />}
        />
        <Route
          path="/services/medicine-del/assignments"
          element={<OccupationalMedicalView />}
        />
        <Route
          path="/services/medicine-del/analysis"
          element={<OccupationalLaboratoryView />}
        />
        <Route
          path="/services/condominium/management"
          element={<CondominiumPropertyView />}
        />

        {/* Training Nested View */}
        <Route
          path="/training/courses/our"
          element={<TrainingOurPlatformView />}
        />
        <Route
          path="/training/courses/mandatory-courses"
          element={<TrainingCoursesSevView />}
        />
        <Route
          path="/training/courses/how-it-works"
          element={<TrainingCoursesRequiredView />}
        />
        <Route
          path="/training/courses/catalog"
          element={<TrainingCoursesCatalogView />}
        />
      </Route>

      {/* Auth */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="login" />} />
        <Route path="login" element={<LoginView />} />
      </Route>
      <Route path="/dash" element={<DashboardLayout />}>
        {/* Admin */}
        <Route element={<RoleGuard allowedRoles={['admin']} />}>
          <Route path="super-admin" element={<SuperAdminView />} />
          <Route path="freelancer-admin" element={<FreelancerAdminView />} />
          <Route path="company-admin" element={<CompanyAdminView />} />
          <Route path="student-admin" element={<StudentAdminSidebar />} />
          <Route path="email" element={<Email />} />
          <Route path="password" element={<Email />} />
        </Route>

        {/* Teacher */}
        <Route element={<RoleGuard allowedRoles={['teacher']} />}>
          <Route path="teacher" element={<TeacherView />} />
          <Route path="courses" element={<CoursesView />} />
          <Route path="videos" element={<VideosView />} />
          {/* <Route path="te-settings" element={<SettingsView />} /> */}
        </Route>

        {/* Student */}
        <Route element={<RoleGuard allowedRoles={['student']} />}>
          <Route path="student" element={<StudentHomeView />} />
          <Route path="student/profile" element={<StudentIPofile />} />
          <Route path="docs" element={<DocsView />} />
          {/* <Route path="st-settings" element={<SettingsView />} /> */}
        </Route>
      </Route>
      <Route path="*" element={<ErrorView />} />
    </>,
  ),
);

export default router;
