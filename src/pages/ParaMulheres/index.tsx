import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import type { ParaMulheresContent } from './ParaMulheresContent';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 24px;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const SectionCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SectionLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const SectionIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  transition: transform 0.2s ease-in-out;

  ${SectionCard}:hover & {
    transform: scale(1.1);
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
`;

const SectionDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const FeatureItem = styled.li`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  &:before {
    content: "•";
    color: #FF6B6B;
    font-weight: bold;
    margin-right: 10px;
  }
`;

const ParaMulheres: React.FC = () => {
  const [content, setContent] = useState<ParaMulheresContent>({
    hero: {
      title: "Para Mulheres que Buscam Apoio com Propósito",
      subtitle: "Acolhimento personalizado para cada momento da sua jornada, com fé e cuidado em todas as etapas"
    },
    sections: [
      {
        icon: "💜",
        title: "Não Tentantes",
        description: "Apoio e acolhimento para mulheres que não estão buscando gravidez no momento",
        features: [
          "Grupos de apoio e escuta",
          "Conteúdo sobre autoconhecimento",
          "Meditações e reflexões",
          "Conexão com outras mulheres"
        ],
        url: "/nao-tentantes"
      },
      {
        icon: "🙏",
        title: "Tentantes",
        description: "Suporte emocional e espiritual para mulheres em busca da realização da maternidade",
        features: [
          "Grupos de apoio específicos",
          "Devocionais diários",
          "Meditações guiadas",
          "Compartilhamento de experiências",
          "Acompanhamento personalizado"
        ],
        url: "/tentantes"
      },
      {
        icon: "🤰",
        title: "Gestantes",
        description: "Acompanhamento completo durante toda a gestação, com foco no bem-estar físico e espiritual",
        features: [
          "Conteúdo semanal personalizado",
          "Grupos por trimestre",
          "Orações específicas",
          "Dicas de saúde e bem-estar",
          "Preparação para o parto"
        ],
        url: "/gestantes"
      },
      {
        icon: "💝",
        title: "Pós-parto",
        description: "Suporte integral para o período pós-parto, focando no vínculo mãe-bebê e na recuperação materna",
        features: [
          "Apoio emocional 24/7",
          "Orientações de especialistas",
          "Grupos de mães recentes",
          "Conteúdo sobre amamentação",
          "Dicas de cuidados com o bebê"
        ],
        url: "/pos-parto"
      }
    ]
  });

  useEffect(() => {
    const savedContent = localStorage.getItem('paraMulheresContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  return (
    <Container>
      <HeroSection>
        <HeroTitle>{content.hero.title}</HeroTitle>
        <HeroSubtitle>{content.hero.subtitle}</HeroSubtitle>
      </HeroSection>

      <SectionsGrid>
        {content.sections.map((section, index) => (
          <SectionCard key={index}>
            <SectionLink to={section.url}>
              <SectionIcon>{section.icon}</SectionIcon>
              <SectionTitle>{section.title}</SectionTitle>
            </SectionLink>
            <SectionDescription>{section.description}</SectionDescription>
            <FeaturesList>
              {section.features.map((feature, featureIndex) => (
                <FeatureItem key={featureIndex}>{feature}</FeatureItem>
              ))}
            </FeaturesList>
          </SectionCard>
        ))}
      </SectionsGrid>
    </Container>
  );
};

export default ParaMulheres; 