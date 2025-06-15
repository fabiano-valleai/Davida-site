import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const ContentContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #845EC2;
  margin-bottom: 20px;
  font-size: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 8px;
    color: #333;
    font-weight: 500;
  }
  
  input, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
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

const SaveButton = styled.button`
  background: #FF6B6B;
  color: white;
  border: none;
  padding: 12px 24px;
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
`;

const SuccessMessage = styled.div`
  background: #4CAF50;
  color: white;
  padding: 12px;
  border-radius: 8px;
  margin-top: 20px;
  text-align: center;
`;

interface PortalContent {
  welcomeTitle: string;
  welcomeText: string;
  missionText: string;
  visionText: string;
  investorButtonText: string;
  investorButtonLink: string;
}

const defaultContent: PortalContent = {
  welcomeTitle: "Bem-vindo ao Davida",
  welcomeText: "Um espaço onde a tecnologia encontra a espiritualidade para transformar vidas.",
  missionText: "Nossa missão é criar uma plataforma que não apenas conecta pessoas, mas nutre a jornada espiritual de cada indivíduo, promovendo crescimento pessoal e bem-estar integral.",
  visionText: "Através da sabedoria espiritual e inovação tecnológica, estamos construindo uma comunidade que valoriza a conexão profunda, o autoconhecimento e o desenvolvimento espiritual.",
  investorButtonText: "Área do Investidor",
  investorButtonLink: "/investidores"
};

const PortalContentEditor: React.FC = () => {
  const [content, setContent] = useState<PortalContent>(defaultContent);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Aqui você pode carregar o conteúdo salvo do localStorage ou de uma API
    const savedContent = localStorage.getItem('portalContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContent(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Salva o conteúdo no localStorage (você pode adaptar para salvar em uma API)
    localStorage.setItem('portalContent', JSON.stringify(content));
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <ContentContainer>
      <form onSubmit={handleSubmit}>
        <Section>
          <SectionTitle>Conteúdo da Página Inicial</SectionTitle>
          
          <FormGroup>
            <label htmlFor="welcomeTitle">Título de Boas-vindas</label>
            <input
              type="text"
              id="welcomeTitle"
              name="welcomeTitle"
              value={content.welcomeTitle}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="welcomeText">Texto de Boas-vindas</label>
            <textarea
              id="welcomeText"
              name="welcomeText"
              value={content.welcomeText}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="missionText">Texto da Missão</label>
            <textarea
              id="missionText"
              name="missionText"
              value={content.missionText}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="visionText">Texto da Visão</label>
            <textarea
              id="visionText"
              name="visionText"
              value={content.visionText}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="investorButtonText">Texto do Botão do Investidor</label>
            <input
              type="text"
              id="investorButtonText"
              name="investorButtonText"
              value={content.investorButtonText}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="investorButtonLink">Link do Botão do Investidor</label>
            <input
              type="text"
              id="investorButtonLink"
              name="investorButtonLink"
              value={content.investorButtonLink}
              onChange={handleChange}
              placeholder="/investidores"
            />
          </FormGroup>
        </Section>

        <SaveButton type="submit">Salvar Alterações</SaveButton>

        {showSuccess && (
          <SuccessMessage>
            Conteúdo salvo com sucesso!
          </SuccessMessage>
        )}
      </form>
    </ContentContainer>
  );
};

export default PortalContentEditor; 