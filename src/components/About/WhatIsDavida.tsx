import React from 'react';
import styled from '@emotion/styled';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

const Section = styled.section`
  padding: ${theme.spacing['2xl']} ${theme.spacing.xl};
  padding-top: calc(${theme.spacing['2xl']} + 80px);
  background: linear-gradient(135deg, ${theme.colors.primary.peach} 0%, ${theme.colors.primary.rose} 100%);
  min-height: 100vh;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['2xl']};
  align-items: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TextContent = styled.div`
  color: white;
`;

const Title = styled(motion.h1)`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['4xl']};
  margin-bottom: ${theme.spacing.xl};
`;

const Description = styled(motion.div)`
  font-size: ${theme.typography.fontSize.xl};
  line-height: 1.8;
  opacity: 0.9;
  margin-bottom: ${theme.spacing.xl};

  p {
    margin-bottom: ${theme.spacing.lg};
  }
`;

const HighlightBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
`;

const HighlightTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.xl};
  margin-bottom: ${theme.spacing.md};
  color: white;
`;

const HighlightText = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
`;

const ImpactStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing['2xl']};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: bold;
  margin-bottom: ${theme.spacing.sm};
`;

const StatLabel = styled.div`
  font-size: ${theme.typography.fontSize.md};
  opacity: 0.9;
`;

export const WhatIsDavida: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>O que é Davida | App de Acolhimento Feminino e Espiritual</title>
        <meta name="description" content="Davida - de 'Dar a Vida' - é um app de acolhimento feminino, espiritual e emocional para mulheres em jornadas de maternidade. Um espaço seguro guiado pela fé." />
        <meta name="keywords" content="app materno, acolhimento feminino, espiritualidade materna, maternidade cristã, apoio gestantes, apoio pós-parto, tentantes" />
        <meta property="og:title" content="Davida - App de Acolhimento Feminino e Espiritual" />
        <meta property="og:description" content="Um espaço seguro e guiado pela fé para mulheres em jornadas de maternidade." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://davida.app/sobre" />
      </Helmet>

      <Section>
        <Container>
          <ContentGrid>
            <TextContent>
              <Title
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                O que é Davida?
              </Title>
              <Description
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p>
                  <strong>Davida</strong>, inspirado na expressão "Dar a Vida", é mais do que um app - é um espaço de 
                  acolhimento feminino, espiritual e emocional. Criado especialmente para mulheres em diferentes 
                  jornadas de maternidade, seja tentando engravidar, durante a gestação ou no pós-parto.
                </p>
                <p>
                  Nossa missão é proporcionar um ambiente seguro e guiado pela fé, onde cada mulher encontra 
                  apoio, conexão e cuidado integral em sua jornada única.
                </p>
              </Description>

              <HighlightBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <HighlightTitle>Por que "Davida"?</HighlightTitle>
                <HighlightText>
                  O nome Davida nasce da união de "Dar a Vida" - representando tanto o dom divino da maternidade 
                  quanto nossa missão de dar vida a momentos de conexão, fé e acolhimento. É um convite para 
                  viver a maternidade em sua plenitude, com suporte emocional e espiritual.
                </HighlightText>
              </HighlightBox>

              <ImpactStats>
                <StatCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <StatNumber>10.000+</StatNumber>
                  <StatLabel>Mulheres Acolhidas</StatLabel>
                </StatCard>
                <StatCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <StatNumber>50+</StatNumber>
                  <StatLabel>Grupos de Apoio</StatLabel>
                </StatCard>
                <StatCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <StatNumber>24/7</StatNumber>
                  <StatLabel>Suporte Contínuo</StatLabel>
                </StatCard>
              </ImpactStats>
            </TextContent>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Aqui podemos adicionar uma ilustração ou imagem representativa */}
            </motion.div>
          </ContentGrid>
        </Container>
      </Section>
    </HelmetProvider>
  );
}; 