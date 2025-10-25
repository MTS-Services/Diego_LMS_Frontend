import { Outlet, Link } from 'react-router-dom';
import LanguageSwitcher from '../../../components/common/LanguageSwitcher';

const TeacherLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/dashboard/teacher">Dashboard</Link> |{' '}
        <Link to="/dashboard/courses">Courses</Link> |{' '}
        <Link to="/dashboard/videos">Videos</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="space-x-2">
        <LanguageSwitcher />
      </footer>
    </div>
  );
};

export default TeacherLayout;
