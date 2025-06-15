import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import PortalContentEditor from './Portal/PortalContent';
import DownloadContentEditor from './Download/DownloadContent';
import HomeContentEditor from './Home/HomeContent';
import ParaMulheresContentEditor from './ParaMulheres/ParaMulheresContent';

const DashboardLayout = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #FF6B6B 0%, #845EC2 100%);
`;

const Sidebar = styled.div`
  width: 280px;
  background: rgba(255, 255, 255, 0.95);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
`;

const MainContent = styled.div`
  flex: 1;
  padding: 30px;
  overflow-y: auto;
`;

const Logo = styled.div`
  padding: 0 20px 20px;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;

  img {
    width: 150px;
    height: auto;
  }
`;

const NavSection = styled.div`
  margin-bottom: 20px;
  
  h3 {
    padding: 0 20px;
    font-size: 12px;
    text-transform: uppercase;
    color: #845EC2;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const NavItem = styled.div<{ active?: boolean }>`
  padding: 12px 20px;
  cursor: pointer;
  color: ${props => props.active ? '#FF6B6B' : '#333'};
  background: ${props => props.active ? 'rgba(255, 107, 107, 0.1)' : 'transparent'};
  border-left: 3px solid ${props => props.active ? '#FF6B6B' : 'transparent'};
  transition: all 0.2s;
  font-weight: ${props => props.active ? '600' : '400'};

  &:hover {
    background: rgba(255, 107, 107, 0.05);
    color: #FF6B6B;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PageTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  .user-info {
    text-align: right;
    
    .name {
      font-size: 14px;
      font-weight: 600;
      color: #333;
    }
    
    .role {
      font-size: 12px;
      color: #666;
    }
  }
`;

// Lista de páginas do dashboard
const pages = [
  { path: 'home-content', title: 'Página Inicial' },
  { path: 'portal-content', title: 'Conteúdo do Portal' },
  { path: 'download-content', title: 'Página de Download' },
  { path: 'para-mulheres-content', title: 'Para Mulheres' },
  { path: 'funcionalidades-content', title: 'Funcionalidades' },
  { path: 'comunidade-content', title: 'Comunidade' },
  { path: 'parceiros-content', title: 'Parceiros' },
  { path: 'contato-content', title: 'Contato' }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(!!isLoggedIn);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/portal');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  const handleInvestorClick = () => {
    navigate('/investidores');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <DashboardLayout>
      <Sidebar>
        <Logo>
          <img src="/logo-davida.svg" alt="Davida Logo" />
        </Logo>

        <NavSection>
          <h3>Geral</h3>
          <NavItem 
            active={selectedSection === 'dashboard'}
            onClick={() => setSelectedSection('dashboard')}
          >
            Dashboard
          </NavItem>
          <NavItem 
            onClick={handleInvestorClick}
          >
            Área do Investidor
          </NavItem>
        </NavSection>

        <NavSection>
          <h3>Páginas</h3>
          {pages.map(page => (
            <NavItem
              key={page.path}
              active={selectedSection === page.path}
              onClick={() => setSelectedSection(page.path)}
            >
              {page.title}
            </NavItem>
          ))}
        </NavSection>

        <NavSection>
          <h3>Configurações</h3>
          <NavItem onClick={handleLogout}>Sair</NavItem>
        </NavSection>
      </Sidebar>

      <MainContent>
        <TopBar>
          <PageTitle>
            {selectedSection === 'dashboard' ? 'Dashboard' : 
              pages.find(p => p.path === selectedSection)?.title || 'Dashboard'}
          </PageTitle>
          <UserMenu>
            <div className="user-info">
              <div className="name">Administrador</div>
              <div className="role">Admin</div>
            </div>
          </UserMenu>
        </TopBar>

        {/* Conteúdo do Dashboard */}
        {selectedSection === 'portal-content' && <PortalContentEditor />}
        {selectedSection === 'download-content' && <DownloadContentEditor />}
        {selectedSection === 'home-content' && <HomeContentEditor />}
        {selectedSection === 'para-mulheres-content' && <ParaMulheresContentEditor />}

        {selectedSection === 'dashboard' && (
          <ContentContainer>
            <h2>Bem-vindo ao Dashboard</h2>
            <p>Selecione uma opção no menu lateral para começar a editar o conteúdo das páginas.</p>
          </ContentContainer>
        )}
      </MainContent>
    </DashboardLayout>
  );
};

const ContentContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h2 {
    color: #845EC2;
    margin-bottom: 20px;
  }
  
  p {
    color: #666;
  }
`;

export default Dashboard; 