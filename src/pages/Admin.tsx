import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminLayout = styled.div`
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

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
`;

const MetricCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  h3 {
    color: #ffffff;
    font-size: 14px;
    margin-bottom: 8px;
  }

  .value {
    color: #FF6B6B;
    font-size: 28px;
    font-weight: bold;
  }

  .change {
    color: #4CAF50;
    font-size: 12px;
    margin-top: 4px;
  }
`;

const ContentArea = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  padding: 30px;
`;

const EditableField = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: #FF6B6B;
      box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.1);
    }
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }
`;

const ImagePreview = styled.div`
  margin-top: 10px;
  
  img {
    max-width: 200px;
    height: auto;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &.primary {
    background: #FF6B6B;
    color: white;

    &:hover {
      background: #ff5252;
    }
  }

  &.secondary {
    background: #eee;
    color: #666;

    &:hover {
      background: #e0e0e0;
    }
  }
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

const pages = [
  {
    title: "Portal",
    description: "Voltar para a página inicial do Portal Davida",
    path: "portal-content"
  },
  {
    title: "Página Principal",
    description: "Gerencie o conteúdo da página inicial do Davida",
    path: "home-content"
  },
  {
    title: "Para Mulheres",
    description: "Edite o conteúdo da seção dedicada às mulheres",
    path: "para-mulheres-content"
  },
  {
    title: "Funcionalidades",
    description: "Atualize as funcionalidades e recursos do aplicativo",
    path: "funcionalidades-content"
  },
  {
    title: "Comunidade",
    description: "Gerencie a seção de comunidade e interações",
    path: "comunidade-content"
  },
  {
    title: "Parceiros",
    description: "Administre parcerias e colaborações",
    path: "parceiros-content"
  },
  {
    title: "Investidores",
    description: "Gerencie a área dedicada aos investidores",
    path: "investidores-content"
  },
  {
    title: "Download",
    description: "Configure a página de download do aplicativo",
    path: "download-content"
  },
  {
    title: "Contato",
    description: "Gerencie informações de contato e formulários",
    path: "contato-content"
  }
];

interface PageSection {
  id: string;
  title: string;
  content: {
    texts?: { [key: string]: string };
    buttons?: Array<{ text: string; link: string }>;
    images?: Array<{ url: string; alt: string }>;
  };
}

const pageContents: { [key: string]: PageSection[] } = {
  'home-content': [
    {
      id: 'hero',
      title: 'Seção Principal',
      content: {
        texts: {
          title: 'Transforme sua vida financeira',
          subtitle: 'Conquiste sua independência financeira com o Davida',
          description: 'Planeje seus gastos, invista seu dinheiro e alcance seus objetivos financeiros.'
        },
        buttons: [
          { text: 'Comece Agora', link: '/cadastro' },
          { text: 'Saiba Mais', link: '/sobre' }
        ],
        images: [
          { url: '/images/hero-image.png', alt: 'Mulher usando aplicativo Davida' }
        ]
      }
    },
    {
      id: 'features',
      title: 'Funcionalidades',
      content: {
        texts: {
          title: 'Recursos Exclusivos',
          description: 'Descubra todas as ferramentas que preparamos para você'
        },
        images: [
          { url: '/images/feature-1.png', alt: 'Controle financeiro' },
          { url: '/images/feature-2.png', alt: 'Investimentos' },
          { url: '/images/feature-3.png', alt: 'Planejamento' }
        ]
      }
    }
  ],
  'para-mulheres-content': [
    {
      id: 'main',
      title: 'Seção Principal',
      content: {
        texts: {
          title: 'Feito para Mulheres',
          description: 'Um app pensado nas necessidades específicas das mulheres'
        },
        buttons: [
          { text: 'Conheça Mais', link: '/sobre-mulheres' }
        ],
        images: [
          { url: '/images/women-finance.png', alt: 'Mulheres e finanças' }
        ]
      }
    }
  ],
  'funcionalidades-content': [
    {
      id: 'features-list',
      title: 'Lista de Funcionalidades',
      content: {
        texts: {
          title: 'Nossas Funcionalidades',
          description: 'Explore todos os recursos disponíveis'
        },
        images: [
          { url: '/images/features-overview.png', alt: 'Visão geral das funcionalidades' }
        ]
      }
    }
  ]
};

const EditSection = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  
  h3 {
    color: #845EC2;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 600;
  }
`;

const EditGroup = styled.div`
  margin-bottom: 30px;
  
  h4 {
    color: #666;
    margin-bottom: 15px;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

const ImagePreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 15px;
`;

const ImagePreviewCard = styled.div`
  background: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  .image-info {
    font-size: 12px;
    color: #666;
  }
  
  button {
    margin-top: 10px;
    width: 100%;
  }
`;

const ButtonPreview = styled.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .button-info {
    span {
      display: block;
      &.text {
        color: #333;
        font-weight: 500;
      }
      &.link {
        color: #666;
        font-size: 12px;
      }
    }
  }
`;

const PageEditor = ({ path }: { path: string }) => {
  const sections = pageContents[path] || [];
  
  return (
    <div>
      {sections.map((section) => (
        <EditSection key={section.id}>
          <h3>{section.title}</h3>
          
          {section.content.texts && (
            <EditGroup>
              <h4>Textos</h4>
              {Object.entries(section.content.texts).map(([key, value]) => (
                <EditableField key={key}>
                  <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                  {key === 'description' ? (
                    <textarea defaultValue={value} />
                  ) : (
                    <input type="text" defaultValue={value} />
                  )}
                </EditableField>
              ))}
            </EditGroup>
          )}
          
          {section.content.buttons && section.content.buttons.length > 0 && (
            <EditGroup>
              <h4>Botões</h4>
              {section.content.buttons.map((button, index) => (
                <ButtonPreview key={index}>
                  <div className="button-info">
                    <span className="text">{button.text}</span>
                    <span className="link">{button.link}</span>
                  </div>
                  <Button className="secondary">Editar</Button>
                </ButtonPreview>
              ))}
            </EditGroup>
          )}
          
          {section.content.images && section.content.images.length > 0 && (
            <EditGroup>
              <h4>Imagens</h4>
              <ImagePreviewGrid>
                {section.content.images.map((image, index) => (
                  <ImagePreviewCard key={index}>
                    <img src={image.url} alt={image.alt} />
                    <div className="image-info">{image.alt}</div>
                    <Button className="secondary">Trocar Imagem</Button>
                  </ImagePreviewCard>
                ))}
              </ImagePreviewGrid>
            </EditGroup>
          )}
        </EditSection>
      ))}
      
      <ButtonGroup>
        <Button className="primary">Salvar Alterações</Button>
        <Button className="secondary">Cancelar</Button>
      </ButtonGroup>
    </div>
  );
};

interface AdminProps {
  isAuthenticated?: boolean;
}

const Dashboard = ({ isAuthenticated = false }: AdminProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [metrics] = useState({
    visitors: { value: "12,458", change: "+15%" },
    pageViews: { value: "45,239", change: "+23%" },
    activeUsers: { value: "1,893", change: "+8%" },
    avgTime: { value: "4:32", change: "+12%" }
  });

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/portal');
  };

  const handleInvestorClick = () => {
    navigate('/investidores');
  };

  // Se não estiver na rota correta, redireciona
  useEffect(() => {
    if (location.pathname !== '/portal/dashboard') {
      navigate('/portal/dashboard');
    }
  }, [location, navigate]);

  return (
    <AdminLayout>
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

        {selectedSection === 'dashboard' ? (
          <>
            <MetricsGrid>
              <MetricCard>
                <h3>Visitantes</h3>
                <div className="value">{metrics.visitors.value}</div>
                <div className="change">{metrics.visitors.change}</div>
              </MetricCard>
              <MetricCard>
                <h3>Visualizações</h3>
                <div className="value">{metrics.pageViews.value}</div>
                <div className="change">{metrics.pageViews.change}</div>
              </MetricCard>
              <MetricCard>
                <h3>Usuários Ativos</h3>
                <div className="value">{metrics.activeUsers.value}</div>
                <div className="change">{metrics.activeUsers.change}</div>
              </MetricCard>
              <MetricCard>
                <h3>Tempo Médio</h3>
                <div className="value">{metrics.avgTime.value}</div>
                <div className="change">{metrics.avgTime.change}</div>
              </MetricCard>
            </MetricsGrid>

            <ContentArea>
              <h2>Atividade Recente</h2>
              {/* Aqui você pode adicionar um feed de atividades recentes */}
            </ContentArea>
          </>
        ) : (
          <ContentArea>
            <PageEditor path={selectedSection} />
          </ContentArea>
        )}
      </MainContent>
    </AdminLayout>
  );
};

export default Dashboard; 