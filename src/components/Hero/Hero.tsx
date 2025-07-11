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
  background: linear-gradient(135deg, ${theme.colors.secondary.cream} 0%, ${theme.colors.primary.peach} 100%);
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
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.2;
  letter-spacing: -0.02em;

  .gradient-text {
    background: linear-gradient(135deg, ${theme.colors.primary.coral} 0%, ${theme.colors.primary.rose} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

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
  line-height: 1.7;
  font-weight: ${theme.typography.fontWeight.medium};
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.a`
  display: inline-block;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.full};
  font-family: ${theme.typography.fontFamily.body};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: ${theme.shadows.md};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(135deg, ${theme.colors.primary.coral} 0%, ${theme.colors.primary.rose} 100%);
  color: ${theme.colors.secondary.white};
  border: none;

  &:hover {
    background: linear-gradient(135deg, ${theme.colors.primary.rose} 0%, ${theme.colors.primary.coral} 100%);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: ${theme.colors.secondary.white};
  color: ${theme.colors.primary.coral};
  border: 2px solid ${theme.colors.primary.coral};

  &:hover {
    background-color: ${theme.colors.primary.coral};
    color: ${theme.colors.secondary.white};
  }
`;

const DecorativeCircle = styled(motion.div)<CircleProps>`
  position: absolute;
  width: ${(props: CircleProps) => props.size};
  height: ${(props: CircleProps) => props.size};
  border-radius: 50%;
  background: linear-gradient(135deg, ${(props: CircleProps) => props.color} 0%, ${theme.colors.primary.peach} 100%);
  top: ${(props: CircleProps) => props.top};
  left: ${(props: CircleProps) => props.left};
  opacity: 0.15;
  filter: blur(1px);
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, ${theme.colors.primary.pink} 0%, ${theme.colors.primary.rose} 100%);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  opacity: 0.1;
  top: 20%;
  right: 10%;
  filter: blur(2px);
`;

export const Hero: React.FC = () => {
  const [content, setContent] = useState<HomeContent>({
    heroTitle: "Um lugar seguro para mulheres em todas as fases da maternidade espiritual",
    heroSubtitle: "Acolhimento, espiritualidade, saúde emocional e conexão real em um só lugar",
    ctaButtonApp: "Conheça o App",
    ctaButtonAppLink: "/download",
    ctaButtonSponsor: "Seja um Parceiro",
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
        size="400px"
        top="-100px"
        left="-150px"
        color={theme.colors.primary.peach}
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <DecorativeCircle
        size="300px"
        top="60%"
        left="85%"
        color={theme.colors.primary.rose}
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: -360 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />
      <FloatingShape
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 180 }}
        transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
      />
      <Content>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
          <img src="/davidalogo.png" alt="Davida Logo" style={{ height: 128 }} />
        </div>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Um lugar seguro para mulheres em todas as fases da <span className="gradient-text">maternidade espiritual</span>
        </Title>
        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {content.heroSubtitle}
        </Description>
        <ButtonContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
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