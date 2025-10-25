// src/layout/teacher/TeacherLayout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const TeacherLayout = () => {
  return (
    <div>
      <nav>
        <Link to='/teacher'>Dashboard</Link> |{' '}
        <Link to='/teacher/videos'>Videos</Link> |{' '}
        <Link to='/teacher/courses'>Courses</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default TeacherLayout;
