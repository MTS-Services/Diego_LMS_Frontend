// src/layout/students/StudentLayout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const StudentLayout = () => {
  return (
    <div>
      <nav>
        <Link to='/student'>Dashboard</Link> |{' '}
        <Link to='/student/docs'>Documents</Link> |{' '}
        <Link to='/student/grades'>Grades</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default StudentLayout;
