import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import type { HomeContent } from '../../pages/Home/HomeContent';

interface CircleProps {
  size: string;
  top: string;
  left: string;
  color: string;
}

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.secondary.cream};
  padding: ${theme.spacing['2xl']};
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  max-width: 1200px;
  text-align: center;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['5xl']};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['4xl']};
  }
`;

const Description = styled(motion.p)`
  font-family: ${theme.typography.fontFamily.body};
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.text.secondary};
  max-width: 800px;
  margin: 0 auto ${theme.spacing.xl};
  line-height: 1.6;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.a`
  display: inline-block;
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.full};
  font-family: ${theme.typography.fontFamily.body};
  font-size: ${theme.typography.fontSize.lg};
  text-decoration: none;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${theme.colors.primary.coral};
  color: ${theme.colors.secondary.white};
`;

const SecondaryButton = styled(Button)`
  background-color: ${theme.colors.secondary.white};
  color: ${theme.colors.primary.coral};
  border: 2px solid ${theme.colors.primary.coral};
`;

const DecorativeCircle = styled(motion.div)<CircleProps>`
  position: absolute;
  width: ${(props: CircleProps) => props.size};
  height: ${(props: CircleProps) => props.size};
  border-radius: 50%;
  background-color: ${(props: CircleProps) => props.color};
  top: ${(props: CircleProps) => props.top};
  left: ${(props: CircleProps) => props.left};
  opacity: 0.1;
`;

export const Hero: React.FC = () => {
  const [content, setContent] = useState<HomeContent>({
    heroTitle: "Um lugar seguro para mulheres em todas as fases da maternidade espiritual",
    heroSubtitle: "Acolhimento, espiritualidade, saúde emocional e conexão real em um só lugar",
    ctaButtonApp: "Conheça o App",
    ctaButtonAppLink: "/download",
    ctaButtonSponsor: "Seja um Patrocinador",
    ctaButtonSponsorLink: "/parceiros",
    whatIsTitle: "O que é Davida?",
    whatIsText: "",
    whyTitle: "Por que \"Davida\"?",
    whyText: "",
    stats: {
      users: "",
      usersText: "",
      groups: "",
      groupsText: "",
      support: "",
      supportText: ""
    }
  });

  useEffect(() => {
    const savedContent = localStorage.getItem('homeContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  return (
    <HeroContainer>
      <DecorativeCircle
        size="300px"
        top="-50px"
        left="-100px"
        color={theme.colors.primary.peach}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <DecorativeCircle
        size="200px"
        top="50%"
        left="80%"
        color={theme.colors.primary.rose}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {content.heroTitle}
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {content.heroSubtitle}
        </Description>
        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <PrimaryButton href="/download">
            {content.ctaButtonApp}
          </PrimaryButton>
          <SecondaryButton href="/parceiros">
            {content.ctaButtonSponsor}
          </SecondaryButton>
        </ButtonContainer>
      </Content>
    </HeroContainer>
  );
}; 