import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Portal from './pages/Portal';
import Dashboard from './pages/Dashboard';

// Componente para proteger rotas que precisam de autenticação
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  
  if (!isAuthenticated) {
    return <Navigate to="/portal" replace />;
  }

  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rota do portal (login) */}
      <Route path="/portal" element={<Portal />} />
      
      {/* Rota do dashboard (área administrativa) */}
      <Route path="/portal/dashboard" element={<Dashboard />} />

      {/* Outras rotas do seu aplicativo */}
      {/* ... */}
    </Routes>
  );
};

export default AppRoutes; 