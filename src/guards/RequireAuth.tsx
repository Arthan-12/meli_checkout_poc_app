import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth: React.FC = () => {
  const token = localStorage.getItem('authToken');
  return token ? <Outlet /> : <Navigate to="/not-allowed" replace />;
};

export default RequireAuth;
