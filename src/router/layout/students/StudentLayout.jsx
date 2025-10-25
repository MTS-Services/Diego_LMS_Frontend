import { Outlet, Link } from 'react-router-dom';

const StudentLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/dashboard/student">Dashboard</Link> |{' '}
        <Link to="/dashboard/docs">Documents</Link> |{' '}
        <Link to="/dashboard/grades">Grades</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default StudentLayout;
