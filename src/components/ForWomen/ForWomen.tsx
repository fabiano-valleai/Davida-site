import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { theme } from '../../styles/theme';

const Section = styled.section`
  padding: ${theme.spacing['2xl']} ${theme.spacing.xl};
  padding-top: calc(${theme.spacing['2xl']} + 80px);
  background: linear-gradient(135deg, #FF8C7F 0%, #FF6B6B 100%);
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: ${theme.spacing['2xl']};
`;

const Title = styled.h2`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['4xl']};
  color: white;
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  padding-top: ${theme.spacing.xl};
`;

const Subtitle = styled.p`
  font-family: ${theme.typography.fontFamily.body};
  font-size: ${theme.typography.fontSize.xl};
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing['2xl']};
  line-height: 1.6;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-areas: 
    "nao-tentantes tentantes gestantes pos-parto";
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.xl};
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
  padding: ${theme.spacing.xl};
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
    ? theme.typography.fontSize['3xl']
    : theme.typography.fontSize['2xl']};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const CardDescription = styled.p`
  font-family: ${theme.typography.fontFamily.body};
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.lg};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
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
          >
            <CardIcon>💜</CardIcon>
            <CardTitle>Não Tentantes</CardTitle>
            <CardDescription>
              Apoio e acolhimento para mulheres que não estão buscando gravidez no momento
            </CardDescription>
            <FeatureList>
              <FeatureItem>Grupos de apoio e escuta</FeatureItem>
              <FeatureItem>Conteúdo sobre autoconhecimento</FeatureItem>
              <FeatureItem>Meditações e reflexões</FeatureItem>
              <FeatureItem>Conexão com outras mulheres</FeatureItem>
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
            <CardIcon isHighlighted>🙏</CardIcon>
            <CardTitle isHighlighted>Tentantes</CardTitle>
            <CardDescription>
              Suporte emocional e espiritual para mulheres em busca da realização da maternidade
            </CardDescription>
            <FeatureList>
              <FeatureItem isHighlighted>Grupos de apoio específicos</FeatureItem>
              <FeatureItem isHighlighted>Devocionais diários</FeatureItem>
              <FeatureItem isHighlighted>Meditações guiadas</FeatureItem>
              <FeatureItem isHighlighted>Compartilhamento de experiências</FeatureItem>
              <FeatureItem isHighlighted>Acompanhamento personalizado</FeatureItem>
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
              Acompanhamento completo durante toda a gestação, com foco no bem-estar físico e espiritual
            </CardDescription>
            <FeatureList>
              <FeatureItem isHighlighted>Conteúdo semanal personalizado</FeatureItem>
              <FeatureItem isHighlighted>Grupos por trimestre</FeatureItem>
              <FeatureItem isHighlighted>Orações específicas</FeatureItem>
              <FeatureItem isHighlighted>Dicas de saúde e bem-estar</FeatureItem>
              <FeatureItem isHighlighted>Preparação para o parto</FeatureItem>
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
            <CardIcon>💝</CardIcon>
            <CardTitle>Pós-parto</CardTitle>
            <CardDescription>
              Suporte integral para o período pós-parto, focando no vínculo mãe-bebê e na recuperação materna
            </CardDescription>
            <FeatureList>
              <FeatureItem>Apoio emocional 24/7</FeatureItem>
              <FeatureItem>Orientações de especialistas</FeatureItem>
              <FeatureItem>Grupos de mães recentes</FeatureItem>
              <FeatureItem>Conteúdo sobre amamentação</FeatureItem>
              <FeatureItem>Dicas de cuidados com o bebê</FeatureItem>
            </FeatureList>
          </Card>
        </CardGrid>
      </Container>
    </Section>
  );
}; 