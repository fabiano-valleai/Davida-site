import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { theme } from '../../styles/theme';
import type { HomeContent } from '../../pages/Home/HomeContent';

const Section = styled.section`
  padding: ${theme.spacing['2xl']} ${theme.spacing.xl};
  background: linear-gradient(135deg, #FF6B6B 0%, #845EC2 100%);
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: ${theme.spacing['2xl']};
`;

const Title = styled.h1`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['4xl']};
  color: white;
  text-align: center;
  margin-bottom: ${theme.spacing.md};
`;

const Subtitle = styled.h2`
  font-size: ${theme.typography.fontSize.xl};
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing.xl};
  line-height: 1.6;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: ${theme.spacing.xl};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.xl};
  margin: ${theme.spacing['2xl']} 0;
`;

const WhyInvestCard = styled(Card)`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const WhyInvestTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const WhyInvestText = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: ${theme.spacing.xl} 0;
`;

const Th = styled.th`
  text-align: left;
  padding: ${theme.spacing.md};
  background: ${theme.colors.primary.coral};
  color: white;
  font-weight: bold;
`;

const Td = styled.td`
  padding: ${theme.spacing.md};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const SponsorshipCard = styled(Card)`
  h3 {
    color: ${theme.colors.primary.coral};
    margin-bottom: ${theme.spacing.md};
  }
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
  margin: ${theme.spacing.md} 0;

    li {
      margin-bottom: ${theme.spacing.sm};
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    
    &:before {
      content: "•";
      color: ${theme.colors.primary.coral};
    font-weight: bold;
    }
  }
`;

const MarketingSection = styled(Card)`
  h3 {
  color: ${theme.colors.primary.coral};
    margin-bottom: ${theme.spacing.lg};
  }

  h4 {
    font-size: ${theme.typography.fontSize.lg};
    margin: ${theme.spacing.lg} 0 ${theme.spacing.md};
  }
`;

const Form = styled.form`
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin-top: ${theme.spacing['2xl']};
`;

const FormTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

const Label = styled.label`
  display: block;
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xs};
`;

const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.sm};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.coral};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: ${theme.spacing.sm};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.coral};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.sm};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.coral};
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${theme.colors.primary.coral};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.full};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  font-size: ${theme.typography.fontSize.lg};
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  margin: ${theme.spacing.xl} auto 0;
`;

const ProblemSolutionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.xl};
  margin: ${theme.spacing['2xl']} 0;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const RoadmapCard = styled(Card)`
  h3 {
    color: ${theme.colors.primary.coral};
    margin-bottom: ${theme.spacing.lg};
  }

  ul {
    margin-top: ${theme.spacing.md};
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};

  span {
  background: ${theme.colors.primary.peach};
  color: white;
    padding: ${theme.spacing.xs} ${theme.spacing.md};
    border-radius: ${theme.borderRadius.full};
    font-size: ${theme.typography.fontSize.sm};
  }
`;

const AudienceSection = styled(Card)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.lg};
  text-align: center;

  div {
    padding: ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.lg};
    background: rgba(255, 192, 203, 0.1);
  }

  h4 {
    color: ${theme.colors.primary.coral};
    margin-bottom: ${theme.spacing.md};
  }
`;

const ImpactSection = styled(Card)`
  text-align: center;

  h3 {
    color: ${theme.colors.primary.coral};
    margin-bottom: ${theme.spacing.xl};
  }

  .impact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${theme.spacing.xl};
  }

  .impact-item {
    padding: ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.lg};
    background: rgba(255, 192, 203, 0.1);
  }
`;

const TeamCard = styled(Card)`
  h4 {
    color: ${theme.colors.primary.coral};
    margin-bottom: ${theme.spacing.md};
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${theme.spacing.xl};
  }

  .team-group {
    background: rgba(255, 192, 203, 0.1);
    padding: ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.lg};
  }

  .team-meta {
    margin-top: ${theme.spacing.md};
    padding-top: ${theme.spacing.md};
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    font-size: ${theme.typography.fontSize.sm};
    color: ${theme.colors.text.secondary};
  }
`;

const MetricsCard = styled(Card)`
  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${theme.spacing.xl};
    margin: ${theme.spacing.xl} 0;
  }

  .metric-item {
    text-align: center;
    padding: ${theme.spacing.lg};
    background: rgba(255, 192, 203, 0.1);
    border-radius: ${theme.borderRadius.lg};
  }

  .metric-value {
    font-size: ${theme.typography.fontSize['3xl']};
    color: ${theme.colors.primary.coral};
    font-weight: bold;
    margin-bottom: ${theme.spacing.sm};
  }

  .metric-label {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.fontSize.sm};
  }
`;

const ProjectionCard = styled(Card)`
  .projection-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.xl};
    margin: ${theme.spacing.xl} 0;

    @media (max-width: ${theme.breakpoints.md}) {
      grid-template-columns: 1fr;
    }
  }

  .year-projection {
    text-align: center;
    padding: ${theme.spacing.xl};
    background: rgba(255, 192, 203, 0.1);
    border-radius: ${theme.borderRadius.lg};
    position: relative;
    overflow: hidden;
  }

  .year-label {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.primary.coral};
    margin-bottom: ${theme.spacing.md};
  }

  .projection-list {
    text-align: left;
  }
`;

const CompetitiveCard = styled(Card)`
  .advantage-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${theme.spacing.xl};
    margin: ${theme.spacing.xl} 0;
  }

  .advantage-item {
    padding: ${theme.spacing.lg};
    background: rgba(255, 192, 203, 0.1);
    border-radius: ${theme.borderRadius.lg};
  }

  h4 {
    color: ${theme.colors.primary.coral};
    margin-bottom: ${theme.spacing.md};
  }
`;

const InvestmentTypesCard = styled(Card)`
  .types-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: ${theme.spacing.xl};
    margin: ${theme.spacing.xl} 0;
  }

  .type-item {
    background: rgba(255, 192, 203, 0.1);
    padding: ${theme.spacing.xl};
    border-radius: ${theme.borderRadius.lg};
    position: relative;
    overflow: hidden;
  }

  .type-header {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.lg};
  }

  .type-icon {
    font-size: ${theme.typography.fontSize['3xl']};
  }

  .type-title {
    color: ${theme.colors.primary.coral};
    font-size: ${theme.typography.fontSize.xl};
    font-weight: bold;
  }

  .investment-range {
    background: ${theme.colors.primary.peach};
    color: white;
    padding: ${theme.spacing.xs} ${theme.spacing.md};
    border-radius: ${theme.borderRadius.full};
    font-size: ${theme.typography.fontSize.sm};
    display: inline-block;
    margin: ${theme.spacing.sm} 0;
  }
`;

const SponsorshipOpportunitiesCard = styled(Card)`
  .opportunities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: ${theme.spacing.xl};
    margin: ${theme.spacing.xl} 0;
  }

  .opportunity-item {
    background: rgba(255, 192, 203, 0.1);
    padding: ${theme.spacing.xl};
    border-radius: ${theme.borderRadius.lg};
    border: 1px solid rgba(255, 192, 203, 0.2);
  }

  .opportunity-header {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.lg};
  }

  .opportunity-icon {
    font-size: ${theme.typography.fontSize['3xl']};
  }

  .opportunity-title {
    color: ${theme.colors.primary.coral};
    font-size: ${theme.typography.fontSize.xl};
    font-weight: bold;
  }

  .opportunity-description {
    color: ${theme.colors.text.secondary};
    margin-bottom: ${theme.spacing.md};
  }

  .highlight-tag {
    display: inline-block;
    background: ${theme.colors.primary.peach};
    color: white;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.full};
    font-size: ${theme.typography.fontSize.sm};
    margin: ${theme.spacing.xs} ${theme.spacing.xs} ${theme.spacing.xs} 0;
  }
`;

const PartnershipModelsCard = styled(Card)`
  .models-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${theme.spacing.xl};
    margin: ${theme.spacing.xl} 0;
  }

  .model-item {
    background: white;
    padding: ${theme.spacing.xl};
    border-radius: ${theme.borderRadius.lg};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .model-icon {
    font-size: 48px;
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.primary.coral};
  }

  .model-title {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.md};
  }
`;

const BenefitsHighlightCard = styled(Card)`
  .benefits-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.xl};
    margin: ${theme.spacing.xl} 0;

    @media (max-width: ${theme.breakpoints.md}) {
      grid-template-columns: 1fr;
    }
  }

  .benefit-group {
    background: rgba(255, 192, 203, 0.1);
    padding: ${theme.spacing.xl};
    border-radius: ${theme.borderRadius.lg};
  }

  .benefit-title {
    color: ${theme.colors.primary.coral};
    font-size: ${theme.typography.fontSize.xl};
    margin-bottom: ${theme.spacing.lg};
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
  }

  .benefit-icon {
  font-size: ${theme.typography.fontSize['2xl']};
  }
`;

const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['2xl']};
  align-items: center;
  margin-bottom: ${theme.spacing['2xl']};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  text-align: center;
  }
`;

const HeroContent = styled.div`
  h1 {
  font-family: ${theme.typography.fontFamily.heading};
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    color: ${theme.colors.text.primary};
    line-height: 1.2;
    margin-bottom: ${theme.spacing.lg};
  }

  p {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.text.secondary};
    margin-bottom: ${theme.spacing.xl};
    line-height: 1.6;
  }
`;

const HeroIllustration = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .logo-container {
    position: relative;
    width: 100%;
    max-width: 400px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .oval-mask {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    background: ${theme.colors.primary.peach};
    border-radius: 50%;
    opacity: 0.2;
    z-index: -1;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.primary.coral};
  color: white;
  border-radius: ${theme.borderRadius.full};
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  color: ${theme.colors.primary.coral};
  border: 2px solid ${theme.colors.primary.coral};
`;

const UserTypesSection = styled.div`
  margin: ${theme.spacing['2xl']} 0;
`;

const UserTypesTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['3xl']};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xl};
`;

const UserTypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.xl};
`;

const UserTypeCard = styled(motion.div)`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  .header {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.lg};
  }

  .icon {
    font-size: ${theme.typography.fontSize['2xl']};
  }

  .title {
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize.xl};
    color: ${theme.colors.text.primary};
  }

  .description {
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
  }
`;

const PartnershipSection = styled.div`
  margin: ${theme.spacing['2xl']} 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['2xl']};
  align-items: center;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const PartnershipContent = styled.div`
  h2 {
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize['2xl']};
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.lg};
  }

  h3 {
    font-size: ${theme.typography.fontSize.xl};
    color: ${theme.colors.text.primary};
    margin: ${theme.spacing.xl} 0 ${theme.spacing.md};
  }

  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
    margin-bottom: ${theme.spacing.md};
  }
`;

const PartnershipIllustration = styled.div`
  svg {
    width: 100%;
    max-width: 400px;
    height: auto;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${theme.spacing.lg} 0;

  li {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.text.secondary};

    &:before {
      content: "•";
      color: ${theme.colors.primary.coral};
      font-size: ${theme.typography.fontSize.xl};
    }
  }
`;

export const Investors: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const whyInvestReasons = [
    {
      title: "Mercado em Expansão",
      text: "Apps voltados à espiritualidade, saúde mental, e apoio à mulher têm alto engajamento e crescimento."
    },
    {
      title: "Baixa Concorrência",
      text: "Poucas soluções com foco em espiritualidade + maternidade."
    },
    {
      title: "Impacto Social",
      text: "O Davida tem impacto direto no bem-estar de mulheres em vulnerabilidade emocional."
    },
    {
      title: "Escalabilidade",
      text: "Modelo adaptável para outras regiões e temáticas."
    }
  ];

  const investmentTable = [
    { category: "Desenvolvimento e Produto", value: "R$ 65.000" },
    { category: "Infraestrutura e Operações", value: "R$ 10.000" },
    { category: "Marketing e Estratégia Go-to-Market", value: "R$ 15.000" },
    { category: "Jurídico, Conformidade e Suporte", value: "R$ 3.000" },
    { category: "Expansão Comercial e Parcerias", value: "R$ 5.000" }
  ];

  const investmentTypes = [
    {
      icon: "💎",
      title: "Investidor Anjo",
      description: "Investidores individuais ou grupos que buscam participação no negócio com alto potencial de retorno e exclusividade no segmento.",
      range: "A partir de R$ 50.000",
      benefits: [
        "Participação societária",
        "Mentoria estratégica",
        "Prioridade em rodadas futuras",
        "Relatórios exclusivos mensais",
        "Exclusividade no segmento por período definido",
        "Presença premium no app com 'Powered by [Marca]'",
        "Destaque na tela inicial do aplicativo",
        "Participação em decisões estratégicas do produto"
      ]
    },
    {
      icon: "🏢",
      title: "Patrocinador Institucional",
      description: "Empresas e marcas que desejam associação premium com propósito e impacto social.",
      range: "R$ 10.000/mês",
      benefits: [
        "Presença premium no app",
        "Conteúdo co-branded",
        "Eventos exclusivos",
        "Relatórios de impacto"
      ]
    },
    {
      icon: "🤝",
      title: "Parceiro Estratégico",
      description: "Organizações que desejam criar sinergias e valor compartilhado.",
      range: "Projetos customizados",
      benefits: [
        "Integração de serviços",
        "Co-criação de features",
        "Marketing conjunto",
        "Dados segmentados"
      ]
    }
  ];

  const sponsorshipOpportunities = [
    {
      icon: "🏢",
      title: "Patrocinador Institucional",
      description: "Associe sua marca ao propósito do Davida e alcance milhares de mulheres.",
      highlights: ["Visibilidade Premium", "Impacto Social", "Engajamento Direto"],
      benefits: [
        "Presença destacada no app",
        "Conteúdo co-branded",
        "Eventos exclusivos",
        "Relatórios de impacto",
        "Campanhas personalizadas"
      ]
    },
    {
      icon: "⚡",
      title: "Patrocinador de Funcionalidade",
      description: "Patrocine recursos específicos do app e conecte-se com usuárias de forma relevante.",
      highlights: ["Feature Branding", "Integração Nativa", "Métricas Dedicadas"],
      benefits: [
        "Naming rights da funcionalidade",
        "Interface personalizada",
        "Analytics exclusivos",
        "Feedback direto das usuárias",
        "Desenvolvimento conjunto"
      ]
    },
    {
      icon: "📱",
      title: "Patrocinador de Conteúdo",
      description: "Crie conteúdo valioso e relevante para nossa comunidade.",
      highlights: ["Branded Content", "Autoridade", "Alcance Orgânico"],
      benefits: [
        "Séries de conteúdo exclusivo",
        "Trilhas de conteúdo patrocinadas",
        "Podcasts temáticos",
        "Lives com especialistas",
        "Distribuição multiplataforma"
      ]
    }
  ];

  const partnershipModels = [
    {
      icon: "🎯",
      title: "Branded Content",
      features: [
        "Séries de conteúdo exclusivo",
        "Devocionais patrocinados",
        "Podcasts temáticos",
        "Lives com especialistas"
      ]
    },
    {
      icon: "⭐",
      title: "Espaços Premium",
      features: [
        "Áreas exclusivas no app",
        "Grupos moderados especiais",
        "Trilhas personalizadas",
        "Eventos VIP"
      ]
    },
    {
      icon: "📱",
      title: "Integração Digital",
      features: [
        "API para serviços",
        "SSO com plataforma parceira",
        "Checkout integrado",
        "Dashboard exclusivo"
      ]
    },
    {
      icon: "📊",
      title: "Analytics & Insights",
      features: [
        "Relatórios customizados",
        "Pesquisas exclusivas",
        "Dados comportamentais",
        "Métricas de engajamento"
      ]
    }
  ];

  const userTypes = [
    {
      icon: "🌱",
      title: "Tentantes",
      description: "Trilhas de oração, espiritualidade e saúde emocional"
    },
    {
      icon: "🤰",
      title: "Gestantes",
      description: "Rede de apoio, autoestima, escuta ativa e sororidade"
    },
    {
      icon: "👶",
      title: "Pós-parto",
      description: "Rede de apoio, autoestima, escuta ativa e sororidade"
    }
  ];

  return (
    <Section>
      <Helmet>
        <title>Investidores - Davida</title>
        <meta name="description" content="Seja um investidor ou patrocinador do Davida e faça parte de um ecossistema de acolhimento feminino que transforma vidas." />
      </Helmet>

      <Container>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {content.heroTitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {content.heroSubtitle}
            </motion.p>
            <ButtonGroup>
              <PrimaryButton href={content.ctaButtonAppLink}>
                {content.ctaButtonApp}
              </PrimaryButton>
              <SecondaryButton href={content.ctaButtonSponsorLink}>
                {content.ctaButtonSponsor}
              </SecondaryButton>
            </ButtonGroup>
          </HeroContent>
          <HeroIllustration>
            <motion.div className="logo-container">
              <motion.div
                className="oval-mask"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.img
                className="logo-image"
                src="/images/davida-logo-with-illustration.png"
                alt="Logo Davida com ilustração de mulher grávida"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
            </motion.div>
          </HeroIllustration>
        </HeroSection>

        <Title>Invista em um propósito transformador</Title>
        <Subtitle>
          O Davida é um aplicativo mobile que oferece suporte integral às mulheres em suas jornadas de vida, 
          com foco especial em espiritualidade, saúde mental, gestacional, física e emocional. 
          Promovemos acolhimento, autoconhecimento e conexão entre usuárias.
        </Subtitle>

        <ProblemSolutionGrid>
          <Card>
            <WhyInvestTitle>O Problema</WhyInvestTitle>
            <WhyInvestText>
              Muitas mulheres enfrentam solidão e desamparo emocional durante a jornada da maternidade 
              e espiritualidade. Faltam plataformas acessíveis, confiáveis e seguras que ofereçam rede 
              de apoio holística com escuta, acolhimento e orientação especializada.
            </WhyInvestText>
            </Card>

          <Card>
            <WhyInvestTitle>Nossa Solução</WhyInvestTitle>
            <List>
              <li>Rede de apoio com grupos temáticos e chats (tentantes, gestantes, pós-parto)</li>
              <li>Conteúdo guiado por espiritualidade feminina (vídeos, áudios, textos)</li>
              <li>Espaços de interação com especialistas</li>
              <li>Ferramentas de autoconhecimento: diário emocional, trilhas meditativas</li>
            </List>
          </Card>
        </ProblemSolutionGrid>

        <MetricsCard>
          <WhyInvestTitle>Potencial de Mercado</WhyInvestTitle>
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-value">32.5M</div>
              <div className="metric-label">Mulheres em idade fértil no Brasil</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">2.7M</div>
              <div className="metric-label">Nascimentos por ano no Brasil</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">78%</div>
              <div className="metric-label">Mulheres buscam apoio emocional online</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">R$ 8.2B</div>
              <div className="metric-label">Mercado de apps de bem-estar no Brasil</div>
            </div>
          </div>
        </MetricsCard>

        <AudienceSection>
          <WhyInvestTitle>Público-Alvo</WhyInvestTitle>
          <div>
            <h4>Perfil</h4>
            <p>Mulheres entre 20 e 45 anos</p>
          </div>
          <div>
            <h4>Momento de Vida</h4>
            <p>Tentantes, gestantes e no pós-parto</p>
          </div>
          <div>
            <h4>Interesses</h4>
            <p>Espiritualidade, terapias integrativas e redes de apoio emocional</p>
          </div>
          <div>
            <h4>Localização Inicial</h4>
            <p>MG e PB, com foco em interiorização e populações vulneráveis</p>
          </div>
        </AudienceSection>

        <CompetitiveCard>
          <WhyInvestTitle>Vantagens Competitivas</WhyInvestTitle>
          <div className="advantage-grid">
            <div className="advantage-item">
              <h4>Mercado Inexplorado</h4>
              <List>
                <li>Nicho específico sem concorrentes diretos</li>
                <li>Primeira plataforma integrando espiritualidade e maternidade</li>
                <li>Potencial de liderança de mercado</li>
              </List>
            </div>
            <div className="advantage-item">
              <h4>Tecnologia Proprietária</h4>
              <List>
                <li>IA para personalização de conteúdo</li>
                <li>Algoritmo de matching para grupos</li>
                <li>Analytics avançado de engajamento</li>
              </List>
            </div>
            <div className="advantage-item">
              <h4>Modelo Escalável</h4>
              <List>
                <li>Baixo custo de aquisição de usuária</li>
                <li>Alto potencial de viralização</li>
                <li>Infraestrutura cloud-native</li>
              </List>
            </div>
            <div className="advantage-item">
              <h4>Monetização Diversificada</h4>
              <List>
                <li>Múltiplos fluxos de receita</li>
                <li>Alto potencial de lifetime value</li>
                <li>Oportunidades de cross-selling</li>
              </List>
            </div>
          </div>
        </CompetitiveCard>

        <Card>
          <WhyInvestTitle>Modelo de Negócio</WhyInvestTitle>
          <List>
            <li>Acesso freemium (básico gratuito + conteúdos e interações premium)</li>
            <li>Patrocínios e parcerias institucionais</li>
            <li>Venda de conteúdo exclusivo, mentorias e workshops</li>
            <li>Integração futura com fintechs de saúde e assistência</li>
          </List>
            </Card>

        <Card>
          <WhyInvestTitle>Projeção de Investimento Inicial — MVP (Minas Gerais + Paraíba)</WhyInvestTitle>
          <WhyInvestText>
            Nosso plano contempla o desenvolvimento e lançamento do MVP em duas regiões estratégicas: 
            Minas Gerais e Paraíba. A estimativa de investimento inicial cobre todas as áreas essenciais 
            para o sucesso do produto nas fases de concepção, validação e tração inicial.
          </WhyInvestText>
          
        <Table>
          <thead>
            <tr>
                <Th>Categoria</Th>
                <Th>Estimativa (R$)</Th>
            </tr>
          </thead>
          <tbody>
              {investmentTable.map(item => (
                <tr key={item.category}>
                  <Td>{item.category}</Td>
                  <Td>{item.value}</Td>
              </tr>
            ))}
              <tr>
                <Td><strong>Total Estimado</strong></Td>
                <Td><strong>R$ 98.000</strong></Td>
              </tr>
          </tbody>
        </Table>

          <WhyInvestTitle style={{ marginTop: theme.spacing['2xl'] }}>Escopo do MVP (90 dias)</WhyInvestTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: theme.spacing.xl }}>
            <div>
              <h4 style={{ color: theme.colors.primary.coral, marginBottom: theme.spacing.md }}>Funcionalidades Principais</h4>
              <List>
                <li>Login e Home personalizados</li>
                <li>2 Chats (Geral e Gestacional)</li>
                <li>Perfil do Usuário</li>
                <li>Busca e Agendamento</li>
                <li>Lista de Locais Parceiros</li>
                <li>Integração com Especialistas</li>
              </List>
            </div>
            <div>
              <h4 style={{ color: theme.colors.primary.coral, marginBottom: theme.spacing.md }}>Stack Tecnológico</h4>
              <TechStack>
                <span>React Native (App)</span>
                <span>Python Django (Backend)</span>
                <span>PostgreSQL (DB)</span>
                <span>Google Cloud / Firebase</span>
              </TechStack>
            </div>
          </div>
        </Card>

        <ProjectionCard>
          <WhyInvestTitle>Projeções de Crescimento</WhyInvestTitle>
          <div className="projection-grid">
            <div className="year-projection">
              <div className="year-label">Ano 1</div>
              <List className="projection-list">
                <li>50.000 usuárias ativas</li>
                <li>15% taxa de conversão premium</li>
                <li>8 parcerias institucionais</li>
                <li>Presença em 5 estados</li>
                <li>ROI projetado: 22%</li>
              </List>
            </div>
            <div className="year-projection">
              <div className="year-label">Ano 2</div>
              <List className="projection-list">
                <li>200.000 usuárias ativas</li>
                <li>20% taxa de conversão premium</li>
                <li>20 parcerias institucionais</li>
                <li>Presença nacional</li>
                <li>ROI projetado: 45%</li>
              </List>
            </div>
            <div className="year-projection">
              <div className="year-label">Ano 3</div>
              <List className="projection-list">
                <li>500.000 usuárias ativas</li>
                <li>25% taxa de conversão premium</li>
                <li>50 parcerias institucionais</li>
                <li>Expansão internacional</li>
                <li>ROI projetado: 85%</li>
              </List>
            </div>
          </div>
        </ProjectionCard>

        <TeamCard>
          <WhyInvestTitle>Equipe de Prospecção Ativa</WhyInvestTitle>
          <div className="team-grid">
            <div className="team-group">
              <h4>Prospecção (Hunter/BDR)</h4>
              <List>
                <li>Identificação de leads qualificados</li>
                <li>Primeiro contato com potenciais parceiros</li>
                <li>Apresentação inicial do Davida</li>
                <li>Qualificação de oportunidades</li>
              </List>
            </div>
            <div className="team-group">
              <h4>Relacionamento (Closer/CS)</h4>
              <List>
                <li>Negociação com leads qualificados</li>
                <li>Fechamento de parcerias</li>
                <li>Gestão do relacionamento</li>
                <li>Acompanhamento de resultados</li>
              </List>
            </div>
          </div>
          <div className="team-meta">
            <strong>Meta de Crescimento:</strong> Expansão gradativa da equipe para 6 profissionais durante o MVP, 
            garantindo cobertura completa do ciclo de vendas e relacionamento com parceiros.
          </div>
        </TeamCard>

        <ImpactSection>
          <h3>Impacto Social</h3>
          <div className="impact-grid">
            <div className="impact-item">
              <h4>Saúde Mental</h4>
              <p>Redução de ansiedade e depressão materna</p>
            </div>
            <div className="impact-item">
              <h4>Espiritualidade</h4>
              <p>Acesso à espiritualidade e rede de apoio</p>
            </div>
            <div className="impact-item">
              <h4>Acolhimento</h4>
              <p>Conexão com especialistas e acolhimento de qualidade</p>
            </div>
          </div>
        </ImpactSection>

        <Grid>
          {sponsorshipOpportunities.map((opportunity) => (
            <SponsorshipOpportunitiesCard
              key={opportunity.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="opportunity-header">
                <span className="opportunity-icon">{opportunity.icon}</span>
                <h3 className="opportunity-title">{opportunity.title}</h3>
              </div>
              <p className="opportunity-description">{opportunity.description}</p>
              <div>
                {opportunity.highlights.map((highlight, index) => (
                  <span key={index} className="highlight-tag">{highlight}</span>
                ))}
              </div>
              <List>
                {opportunity.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </List>
            </SponsorshipOpportunitiesCard>
          ))}
        </Grid>

        <MarketingSection>
          <h3>Estratégias de Marketing</h3>
          
          <h4>Instagram</h4>
          <List>
            <li>Séries semanais de Reels: "1 minuto de acolhimento"</li>
            <li>Devocionais e versículos comentados com influenciadoras cristãs</li>
            <li>Stories com enquetes e caixinhas sobre maternidade e espiritualidade</li>
            <li>Destaques com: Tentantes | Gestantes | Emoções | Meditações | Apoio</li>
            <li>Collabs com marcas de cosméticos, bem-estar e clínicas</li>
          </List>

          <h4>TikTok</h4>
          <List>
            <li>Conteúdo emocional: relatos reais com música e legenda empática</li>
            <li>Tendências remixadas com foco em gravidez e autoestima</li>
            <li>Dicas de autocuidado espiritual (rotinas da manhã com oração, journaling)</li>
            <li>Lives com especialistas e influenciadoras</li>
            <li>Hashtags: #MaternidadeComFé #MãesDePropósito #JornadaDavida</li>
          </List>
        </MarketingSection>

        <InvestmentTypesCard>
          <WhyInvestTitle>Tipos de Investimento</WhyInvestTitle>
          <div className="types-grid">
            {investmentTypes.map((type) => (
              <div key={type.title} className="type-item">
                <div className="type-header">
                  <span className="type-icon">{type.icon}</span>
                  <h3 className="type-title">{type.title}</h3>
                </div>
                <p>{type.description}</p>
                <div className="investment-range">{type.range}</div>
                <List>
                  {type.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </List>
              </div>
            ))}
          </div>
        </InvestmentTypesCard>

        <PartnershipModelsCard>
          <WhyInvestTitle>Modelos de Parceria</WhyInvestTitle>
          <div className="models-grid">
            {partnershipModels.map((model) => (
              <div key={model.title} className="model-item">
                <div className="model-icon">{model.icon}</div>
                <h3 className="model-title">{model.title}</h3>
                <List>
                  {model.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </List>
              </div>
            ))}
          </div>
        </PartnershipModelsCard>

        <BenefitsHighlightCard>
          <WhyInvestTitle>Benefícios Exclusivos</WhyInvestTitle>
          <div className="benefits-container">
            <div className="benefit-group">
              <h3 className="benefit-title">
                <span className="benefit-icon">📈</span>
                Retorno Financeiro
              </h3>
              <List>
                <li>Participação em mercado em expansão</li>
                <li>Modelo de receita recorrente</li>
                <li>Múltiplos fluxos de monetização</li>
                <li>Potencial de valorização acelerada</li>
              </List>
            </div>
            <div className="benefit-group">
              <h3 className="benefit-title">
                <span className="benefit-icon">💝</span>
                Impacto Social
              </h3>
              <List>
                <li>Transformação de vidas</li>
                <li>Fortalecimento comunitário</li>
                <li>Apoio à saúde mental</li>
                <li>ESG na prática</li>
              </List>
            </div>
          </div>
        </BenefitsHighlightCard>

        <Form onSubmit={handleSubmit}>
          <FormTitle>Quero fazer parte desta transformação</FormTitle>
          <FormGrid>
            <FormGroup>
              <Label>Nome</Label>
              <Input type="text" required />
            </FormGroup>
            <FormGroup>
              <Label>Empresa</Label>
              <Input type="text" required />
            </FormGroup>
            <FormGroup>
              <Label>E-mail</Label>
              <Input type="email" required />
            </FormGroup>
            <FormGroup>
              <Label>Telefone</Label>
              <Input type="tel" required />
            </FormGroup>
            <FormGroup>
              <Label>Tipo de Investimento</Label>
              <Select required>
                <option value="">Selecione...</option>
                <option value="institucional">Patrocinador Institucional</option>
                <option value="funcionalidade">Patrocinador de Funcionalidade</option>
                <option value="conteudo">Patrocinador de Conteúdo</option>
                <option value="anjo">Investidor Anjo / Seed</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Valor de Investimento Pretendido</Label>
              <Select required>
                <option value="">Selecione...</option>
                <option value="1500-3000">R$ 1.500 - R$ 3.000</option>
                <option value="5000-10000">R$ 5.000 - R$ 10.000</option>
                <option value="10000-plus">Acima de R$ 10.000</option>
                <option value="50000-plus">Acima de R$ 50.000 (Investidor Anjo)</option>
              </Select>
            </FormGroup>
            <FormGroup style={{ gridColumn: '1 / -1' }}>
              <Label>Mensagem</Label>
              <TextArea required placeholder="Conte-nos sobre seu interesse em investir no Davida..." />
            </FormGroup>
          </FormGrid>
          <SubmitButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Quero fazer parte
          </SubmitButton>
        </Form>

        <UserTypesSection>
          <UserTypesTitle>
            Para Mulheres que Buscam Apoio com Propósito
          </UserTypesTitle>
          <UserTypesGrid>
            {userTypes.map((type, index) => (
              <UserTypeCard
                key={type.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="header">
                  <span className="icon">{type.icon}</span>
                  <h3 className="title">{type.title}</h3>
                </div>
                <p className="description">{type.description}</p>
              </UserTypeCard>
            ))}
          </UserTypesGrid>
        </UserTypesSection>

        <PartnershipSection>
          <PartnershipContent>
            <h2>Seja Parceiro</h2>
            <h3>Alie sua marca a um propósito que acolhe vidas</h3>
            
            <BenefitsList>
              <li>Alcance segmentado (mulheres entre 22-45 anos, em MG, PB e Brasil)</li>
              <li>Visibilidade em ambiente emocional positivo</li>
              <li>Presença em áreas temáticas, conteúdos patrocinados e marketplace de serviços</li>
            </BenefitsList>

            <ButtonGroup>
              <PrimaryButton href="#contato">
                Quero ser Parceiro
              </PrimaryButton>
            </ButtonGroup>
          </PartnershipContent>

          <PartnershipIllustration>
            <motion.svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <path
                d="M200 50
                   C 150 50, 100 100, 100 150
                   C 100 200, 150 250, 200 250
                   C 250 250, 300 200, 300 150
                   C 300 100, 250 50, 200 50"
                fill="#FFE4D9"
              />
              <path
                d="M150 150
                   C 150 125, 175 100, 200 100
                   C 225 100, 250 125, 250 150
                   C 250 175, 225 200, 200 200
                   C 175 200, 150 175, 150 150"
                fill="#E86C4F"
                fillOpacity="0.1"
              />
              <path
                d="M175 150 L 225 150"
                stroke="#E86C4F"
                strokeWidth="2"
              />
              <path
                d="M200 125 L 200 175"
                stroke="#E86C4F"
                strokeWidth="2"
              />
            </motion.svg>
          </PartnershipIllustration>
        </PartnershipSection>
      </Container>
    </Section>
  );
}; 