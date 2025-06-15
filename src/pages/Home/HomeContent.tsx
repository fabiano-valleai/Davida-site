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

export interface HomeContent {
  heroTitle: string;
  heroSubtitle: string;
  ctaButtonApp: string;
  ctaButtonAppLink: string;
  ctaButtonSponsor: string;
  ctaButtonSponsorLink: string;
  whatIsTitle: string;
  whatIsText: string;
  whyTitle: string;
  whyText: string;
  stats: {
    users: string;
    usersText: string;
    groups: string;
    groupsText: string;
    support: string;
    supportText: string;
  }
}

const defaultContent: HomeContent = {
  heroTitle: "Um lugar seguro para mulheres em todas as fases da maternidade espiritual",
  heroSubtitle: "Acolhimento, espiritualidade, saúde emocional e conexão real em um só lugar",
  ctaButtonApp: "Conheça o App",
  ctaButtonAppLink: "/download",
  ctaButtonSponsor: "Seja um Patrocinador",
  ctaButtonSponsorLink: "/parceiros",
  whatIsTitle: "O que é Davida?",
  whatIsText: "Davida, inspirado na expressão \"Dar a Vida\", é mais do que um app - é um espaço de acolhimento feminino, espiritual e emocional. Criado especialmente para mulheres em diferentes jornadas de maternidade, seja tentando engravidar, durante a gestação ou no pós-parto.",
  whyTitle: "Por que \"Davida\"?",
  whyText: "O nome Davida nasce da união de \"Dar a Vida\" - representando tanto o dom divino da maternidade quanto nossa missão de dar vida a momentos de conexão, fé e acolhimento. É um convite para viver a maternidade em sua plenitude, com suporte emocional e espiritual.",
  stats: {
    users: "10.000+",
    usersText: "Mulheres Acolhidas",
    groups: "50+",
    groupsText: "Grupos de Apoio",
    support: "24/7",
    supportText: "Suporte Contínuo"
  }
};

const HomeContentEditor: React.FC = () => {
  const [content, setContent] = useState<HomeContent>(defaultContent);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('homeContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setContent(prev => {
        const newContent = { ...prev };
        if (parent === 'stats') {
          newContent.stats = {
            ...prev.stats,
            [child]: value
          };
        }
        return newContent;
      });
    } else {
      setContent(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('homeContent', JSON.stringify(content));
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <ContentContainer>
      <form onSubmit={handleSubmit}>
        <Section>
          <SectionTitle>Seção Hero</SectionTitle>
          
          <FormGroup>
            <label htmlFor="heroTitle">Título Principal</label>
            <textarea
              id="heroTitle"
              name="heroTitle"
              value={content.heroTitle}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="heroSubtitle">Subtítulo</label>
            <textarea
              id="heroSubtitle"
              name="heroSubtitle"
              value={content.heroSubtitle}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="ctaButtonApp">Texto do Botão do App</label>
            <input
              type="text"
              id="ctaButtonApp"
              name="ctaButtonApp"
              value={content.ctaButtonApp}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="ctaButtonAppLink">Link do Botão do App</label>
            <input
              type="text"
              id="ctaButtonAppLink"
              name="ctaButtonAppLink"
              value={content.ctaButtonAppLink}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="ctaButtonSponsor">Texto do Botão de Patrocinador</label>
            <input
              type="text"
              id="ctaButtonSponsor"
              name="ctaButtonSponsor"
              value={content.ctaButtonSponsor}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="ctaButtonSponsorLink">Link do Botão de Patrocinador</label>
            <input
              type="text"
              id="ctaButtonSponsorLink"
              name="ctaButtonSponsorLink"
              value={content.ctaButtonSponsorLink}
              onChange={handleChange}
            />
          </FormGroup>
        </Section>

        <Section>
          <SectionTitle>O que é Davida?</SectionTitle>
          
          <FormGroup>
            <label htmlFor="whatIsTitle">Título</label>
            <input
              type="text"
              id="whatIsTitle"
              name="whatIsTitle"
              value={content.whatIsTitle}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="whatIsText">Texto</label>
            <textarea
              id="whatIsText"
              name="whatIsText"
              value={content.whatIsText}
              onChange={handleChange}
            />
          </FormGroup>
        </Section>

        <Section>
          <SectionTitle>Por que Davida?</SectionTitle>
          
          <FormGroup>
            <label htmlFor="whyTitle">Título</label>
            <input
              type="text"
              id="whyTitle"
              name="whyTitle"
              value={content.whyTitle}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="whyText">Texto</label>
            <textarea
              id="whyText"
              name="whyText"
              value={content.whyText}
              onChange={handleChange}
            />
          </FormGroup>
        </Section>

        <Section>
          <SectionTitle>Estatísticas</SectionTitle>
          
          <FormGroup>
            <label htmlFor="stats.users">Número de Usuárias</label>
            <input
              type="text"
              id="stats.users"
              name="stats.users"
              value={content.stats.users}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="stats.usersText">Texto de Usuárias</label>
            <input
              type="text"
              id="stats.usersText"
              name="stats.usersText"
              value={content.stats.usersText}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="stats.groups">Número de Grupos</label>
            <input
              type="text"
              id="stats.groups"
              name="stats.groups"
              value={content.stats.groups}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="stats.groupsText">Texto de Grupos</label>
            <input
              type="text"
              id="stats.groupsText"
              name="stats.groupsText"
              value={content.stats.groupsText}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="stats.support">Suporte</label>
            <input
              type="text"
              id="stats.support"
              name="stats.support"
              value={content.stats.support}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="stats.supportText">Texto de Suporte</label>
            <input
              type="text"
              id="stats.supportText"
              name="stats.supportText"
              value={content.stats.supportText}
              onChange={handleChange}
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

export default HomeContentEditor; 