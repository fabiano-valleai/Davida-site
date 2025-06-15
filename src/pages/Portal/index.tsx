import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const PortalContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #FF6B6B 0%, #845EC2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 40px 20px;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    gap: 40px;
    padding: 30px 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 15px;
    gap: 30px;
    justify-content: flex-start;
    padding-top: 40px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 80%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.7) 20%,
    rgba(255, 255, 255, 0.7) 80%,
    rgba(255, 255, 255, 0)
  );
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    display: none;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  max-width: 500px;
  padding-right: 30px;

  @media (max-width: 1024px) {
    max-width: 450px;
    padding-right: 20px;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    align-items: center;
    text-align: center;
    max-width: 100%;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const BrandLogo = styled.div`
  img {
    width: 280px;
    height: auto;
    margin-bottom: 20px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  @media (max-width: 1024px) {
    img {
      width: 240px;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 200px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 180px;
    }
  }
`;

const BrandName = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    font-size: 56px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

const Briefing = styled.div`
  color: white;
  font-size: 18px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  p {
    margin: 0 0 20px 0;
  }

  .highlight {
    color: #FFD700;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const InvestorButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 20px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

const LoginSection = styled.div`
  background: rgba(255, 255, 255, 0.25);
  padding: 40px;
  border-radius: 16px;
  width: 400px;
  backdrop-filter: blur(25px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25),
              0 16px 48px rgba(0, 0, 0, 0.15),
              0 24px 64px rgba(0, 0, 0, 0.1),
              inset 0 0 0 1px rgba(255, 255, 255, 0.6);
  margin-left: 30px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.35);
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3),
                0 20px 56px rgba(0, 0, 0, 0.2),
                0 28px 72px rgba(0, 0, 0, 0.15),
                inset 0 0 0 1px rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 1024px) {
    width: 360px;
    padding: 30px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    margin: 0 15px;
  }
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 30px;
  
  img {
    width: 200px;
    height: auto;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    
    img {
      width: 160px;
    }
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  label {
    color: #555;
    font-size: 14px;
    font-weight: 500;
  }
  
  input {
    padding: 12px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.9);
    transition: all 0.2s;
    width: 100%;
    
    &:focus {
      outline: none;
      border-color: #FF6B6B;
      box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
      background: rgba(255, 255, 255, 1);
    }

    @media (max-width: 768px) {
      padding: 10px;
      font-size: 14px;
    }
  }
`;

const LoginButton = styled.button`
  background: #FF6B6B;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #ff5252;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 14px;
  text-align: center;
  background: rgba(255, 68, 68, 0.1);
  padding: 8px;
  border-radius: 6px;
  
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px;
  }
`;

const Portal: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [portalContent, setPortalContent] = useState({
    welcomeTitle: "Bem-vindo ao Davida",
    welcomeText: "Um espaço onde a tecnologia encontra a espiritualidade para transformar vidas.",
    missionText: "Nossa missão é criar uma plataforma que não apenas conecta pessoas, mas nutre a jornada espiritual de cada indivíduo, promovendo crescimento pessoal e bem-estar integral.",
    visionText: "Através da sabedoria espiritual e inovação tecnológica, estamos construindo uma comunidade que valoriza a conexão profunda, o autoconhecimento e o desenvolvimento espiritual.",
    investorButtonText: "Área do Investidor",
    investorButtonLink: "/investidores"
  });

  useEffect(() => {
    const savedContent = localStorage.getItem('portalContent');
    if (savedContent) {
      setPortalContent(JSON.parse(savedContent));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.username === 'admin' && formData.password === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/portal/dashboard');
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInvestorClick = () => {
    navigate(portalContent.investorButtonLink);
  };

  return (
    <PortalContainer>
      <LeftSection>
        <BrandLogo>
          <img src="/logopng.png" alt="Davida Logo" />
        </BrandLogo>
        <Briefing>
          <p>
            {portalContent.welcomeTitle}, {portalContent.welcomeText}
          </p>
          <p>
            {portalContent.missionText}
          </p>
          <p>
            {portalContent.visionText}
          </p>
        </Briefing>
        <InvestorButton onClick={handleInvestorClick}>
          {portalContent.investorButtonText}
        </InvestorButton>
      </LeftSection>

      <Divider />

      <LoginSection>
        <Logo>
          <img src="/logopng.png" alt="Davida Logo" />
        </Logo>
        <LoginForm onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </InputGroup>
          
          <InputGroup>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </InputGroup>
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <LoginButton type="submit">
            Entrar
          </LoginButton>
        </LoginForm>
      </LoginSection>
    </PortalContainer>
  );
};

export default Portal; 