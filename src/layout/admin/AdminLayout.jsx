import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <nav>
        <Link to='/admin'>Dashboard</Link> |{' '}
        <Link to='/admin/user-management'>Users</Link> |{' '}
        <Link to='/admin/settings'>Settings</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
