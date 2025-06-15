import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Global } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';
import { globalStyles } from './styles/global';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { ForWomen } from './components/ForWomen/ForWomen';
import { Community } from './components/Community/Community';
import { Partners } from './components/Partners/Partners';
import { Investors } from './components/Investors/Investors';
import { Download } from './components/Download/Download';
import { Contact } from './components/Contact/Contact';
import { AppFeatures } from './components/AppFeatures/AppFeatures';
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

const AppContent = () => {
  const location = useLocation();
  const isPortalRoute = location.pathname.startsWith('/portal');

  return (
    <>
      {!isPortalRoute && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/para-mulheres" element={<ForWomen />} />
        <Route path="/funcionalidades" element={<AppFeatures />} />
        <Route path="/comunidade" element={<Community />} />
        <Route path="/parceiros" element={<Partners />} />
        <Route path="/investidores" element={<Investors />} />
        <Route path="/portal" element={<Portal />} />
        <Route 
          path="/portal/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route path="/download" element={<Download />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </>
  );
};

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Global styles={globalStyles} />
        <AppContent />
      </Router>
    </HelmetProvider>
  );
};
