import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <header>
        <div className='flex gap-2 justify-center'>
          <Link to='/auth/login'>Login</Link>
          <hr className='border border-gray-300 h-5 m-1' />
          <Link to='/contact'>Contact</Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Public Footer</footer>
    </div>
  );
};

export default MainLayout;
