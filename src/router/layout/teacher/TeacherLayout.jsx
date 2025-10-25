import { Outlet, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TeacherLayout = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

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
        <button onClick={() => changeLanguage('en')}>🇬🇧 English</button>
        <button onClick={() => changeLanguage('zh')}>🇨🇳 中文</button>
        <button onClick={() => changeLanguage('ar')}>🇦🇪 العربية</button>
        <button onClick={() => changeLanguage('it')}>🇮🇹 Italiano</button>
      </footer>
    </div>
  );
};

export default TeacherLayout;
