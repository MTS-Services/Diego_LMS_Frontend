import { Outlet, Link } from 'react-router-dom';

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
    </div>
  );
};

export default TeacherLayout;
