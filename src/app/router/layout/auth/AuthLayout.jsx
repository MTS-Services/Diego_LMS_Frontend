// src/layout/auth/AuthLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Login / Register</h2>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
