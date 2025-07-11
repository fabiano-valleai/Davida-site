import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { theme } from '../../styles/theme';

const Section = styled.section`
  padding: ${theme.spacing['2xl']} ${theme.spacing.xl};
  padding-top: calc(${theme.spacing['2xl']} + 80px);
  background: linear-gradient(135deg, ${theme.colors.primary.peach} 0%, ${theme.colors.primary.rose} 100%);
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: ${theme.spacing['2xl']};
`;

const Title = styled.h2`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: 2.8rem;
  color: white;
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
  padding-top: ${theme.spacing.lg};
`;

const Subtitle = styled.p`
  font-family: ${theme.typography.fontFamily.body};
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing.lg};
  line-height: 1.7;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-areas: 
    "nao-tentantes tentantes gestantes pos-parto";
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  margin-top: ${theme.spacing.xl};
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-areas: 
      "nao-tentantes nao-tentantes pos-parto pos-parto"
      "tentantes tentantes gestantes gestantes";
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-areas: 
      "nao-tentantes"
      "tentantes"
      "gestantes"
      "pos-parto";
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)<{ area: string; isHighlighted?: boolean }>`
  grid-area: ${props => props.area};
  background: ${props => props.isHighlighted 
    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95))'
    : 'rgba(255, 255, 255, 0.95)'};
  border-radius: ${theme.borderRadius.lg};
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.isHighlighted 
    ? '0 8px 32px rgba(255, 107, 107, 0.2)'
    : '0 4px 16px rgba(255, 107, 107, 0.1)'};

  &:hover {
    transform: ${props => props.isHighlighted ? 'translateY(-12px)' : 'translateY(-8px)'};
    box-shadow: ${props => props.isHighlighted 
      ? '0 12px 40px rgba(255, 107, 107, 0.3)'
      : '0 8px 24px rgba(255, 107, 107, 0.2)'};
  }
`;

const CardIcon = styled.div<{ isHighlighted?: boolean }>`
  width: ${props => props.isHighlighted ? '100px' : '80px'};
  height: ${props => props.isHighlighted ? '100px' : '80px'};
  margin: 0 auto ${theme.spacing.lg};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.isHighlighted 
    ? theme.typography.fontSize['4xl']
    : theme.typography.fontSize['3xl']};
  background: ${props => props.isHighlighted
    ? 'linear-gradient(45deg, #FF8C7F, #FF6B6B)'
    : 'linear-gradient(45deg, ${theme.colors.primary.peach}, ${theme.colors.primary.coral})'};
  color: white;
  box-shadow: ${props => props.isHighlighted 
    ? '0 8px 24px rgba(255, 107, 107, 0.3)'
    : '0 4px 12px rgba(255, 107, 107, 0.2)'};
`;

const CardTitle = styled.h3<{ isHighlighted?: boolean }>`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${props => props.isHighlighted 
    ? '2rem'
    : '1.5rem'};
  color: ${theme.colors.text.primary};
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-family: ${theme.typography.fontFamily.body};
  font-size: 1.05rem;
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 0.75rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  margin-top: auto;
`;

const FeatureItem = styled.li<{ isHighlighted?: boolean }>`
  font-family: ${theme.typography.fontFamily.body};
  font-size: ${props => props.isHighlighted 
    ? theme.typography.fontSize.lg
    : theme.typography.fontSize.base};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
  display: flex;
  align-items: center;

  &:before {
    content: "•";
    color: ${theme.colors.primary.coral};
    font-size: 1.5em;
    margin-right: ${theme.spacing.sm};
  }
`;

export const ForWomen: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Section id="para-mulheres">
      <Helmet>
        <title>Para Mulheres | Davida - Apoio com Propósito</title>
        <meta name="description" content="Acolhimento personalizado para mulheres em diferentes fases da maternidade, com fé e cuidado em todas as etapas." />
        <meta name="keywords" content="apoio materno, tentantes, gestantes, pós-parto, não tentantes, acolhimento feminino" />
      </Helmet>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 96, marginBottom: 32 }}>
        <img src="/davidalogo.png" alt="Davida Logo" style={{ height: 85 }} />
      </div>

      <Container>
        <Title>Para Mulheres que Buscam Apoio com Propósito</Title>
        <Subtitle>
          Acolhimento personalizado para cada momento da sua jornada, com fé e cuidado em todas as etapas
        </Subtitle>
        
        <CardGrid>
          <Card
            area="nao-tentantes"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '2rem', paddingBottom: '2rem' }} // diminui o espaço vertical
          >
            <CardIcon>🌸</CardIcon>
            <CardTitle style={{ marginBottom: '0.25rem' }}>Autoconhecimento</CardTitle>
            <CardDescription style={{ marginBottom: '0.5rem' }}>
              Para mulheres que buscam se conectar consigo mesmas, fortalecer sua autoestima e viver com propósito.
            </CardDescription>
            <FeatureList>
              <FeatureItem>Reflexões e meditações guiadas</FeatureItem>
              <FeatureItem>Grupos de apoio emocional</FeatureItem>
              <FeatureItem>Conteúdo sobre autocuidado</FeatureItem>
              <FeatureItem>Rede de conexão feminina</FeatureItem>
            </FeatureList>
          </Card>

          <Card
            area="tentantes"
            isHighlighted
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <CardIcon isHighlighted>🌱</CardIcon>
            <CardTitle isHighlighted>Tentantes</CardTitle>
            <CardDescription>
              Para quem sonha em ser mãe, com acolhimento, fé e esperança em cada etapa da jornada.
            </CardDescription>
            <FeatureList>
              <FeatureItem isHighlighted>Grupos de partilha e oração</FeatureItem>
              <FeatureItem isHighlighted>Devocionais e meditações especiais</FeatureItem>
              <FeatureItem isHighlighted>Rede de apoio para tentantes</FeatureItem>
              <FeatureItem isHighlighted>Conteúdo sobre fertilidade e saúde</FeatureItem>
            </FeatureList>
          </Card>

          <Card
            area="gestantes"
            isHighlighted
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CardIcon isHighlighted>🤰</CardIcon>
            <CardTitle isHighlighted>Gestantes</CardTitle>
            <CardDescription>
              Para quem está vivendo a gestação, com suporte, informação e espiritualidade em cada fase.
            </CardDescription>
            <FeatureList>
              <FeatureItem isHighlighted>Conteúdo semanal para gestantes</FeatureItem>
              <FeatureItem isHighlighted>Grupos por trimestre</FeatureItem>
              <FeatureItem isHighlighted>Meditações e orações para gestação</FeatureItem>
              <FeatureItem isHighlighted>Dicas de saúde e bem-estar</FeatureItem>
            </FeatureList>
          </Card>

          <Card
            area="pos-parto"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <CardIcon>👶</CardIcon>
            <CardTitle>Pós-parto</CardTitle>
            <CardDescription>
              Para o pós-parto, com acolhimento, troca de experiências e apoio para a nova fase da maternidade.
            </CardDescription>
            <FeatureList>
              <FeatureItem>Grupos de mães e partilha</FeatureItem>
              <FeatureItem>Conteúdo sobre amamentação</FeatureItem>
              <FeatureItem>Dicas de autocuidado materno</FeatureItem>
              <FeatureItem>Rede de apoio para o bebê e a mãe</FeatureItem>
            </FeatureList>
          </Card>
        </CardGrid>
      </Container>
    </Section>
  );
}; 