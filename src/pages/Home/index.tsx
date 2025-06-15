import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import type { HomeContent } from './HomeContent';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 80px 0;
  background: linear-gradient(135deg, #845EC2 0%, #D65DB1 100%);
  color: white;
  border-radius: 20px;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: 700;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 40px;
  opacity: 0.9;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const Button = styled.a`
  display: inline-block;
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const PrimaryButton = styled(Button)`
  background: white;
  color: #845EC2;
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: white;
  border: 2px solid white;
`;

const Section = styled.section`
  margin-bottom: 80px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #845EC2;
  font-size: 2rem;
  margin-bottom: 30px;
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
`;

const StatBox = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  color: #845EC2;
  margin-bottom: 10px;
`;

const StatText = styled.p`
  color: #333;
  font-size: 1.1rem;
`;

const Home: React.FC = () => {
  const [content, setContent] = useState<HomeContent>({
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
  });

  useEffect(() => {
    const savedContent = localStorage.getItem('homeContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  return (
    <Container>
      <HeroSection>
        <Title>{content.heroTitle}</Title>
        <Subtitle>{content.heroSubtitle}</Subtitle>
        <ButtonContainer>
          <PrimaryButton href="/download">
            {content.ctaButtonApp}
          </PrimaryButton>
          <SecondaryButton href="/parceiros">
            {content.ctaButtonSponsor}
          </SecondaryButton>
        </ButtonContainer>
      </HeroSection>

      <Section id="conheca">
        <SectionTitle>{content.whatIsTitle}</SectionTitle>
        <SectionText>{content.whatIsText}</SectionText>
      </Section>

      <Section id="patrocine">
        <SectionTitle>{content.whyTitle}</SectionTitle>
        <SectionText>{content.whyText}</SectionText>
      </Section>

      <Section>
        <StatsContainer>
          <StatBox>
            <StatNumber>{content.stats.users}</StatNumber>
            <StatText>{content.stats.usersText}</StatText>
          </StatBox>
          <StatBox>
            <StatNumber>{content.stats.groups}</StatNumber>
            <StatText>{content.stats.groupsText}</StatText>
          </StatBox>
          <StatBox>
            <StatNumber>{content.stats.support}</StatNumber>
            <StatText>{content.stats.supportText}</StatText>
          </StatBox>
        </StatsContainer>
      </Section>
    </Container>
  );
};

export default Home; 