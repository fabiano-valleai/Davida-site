import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { theme } from '../../styles/theme';

const Section = styled.section`
  padding: ${theme.spacing['2xl']} ${theme.spacing.xl};
  padding-top: calc(${theme.spacing['2xl']} + 80px);
  background: linear-gradient(135deg, ${theme.colors.primary.peach} 0%, ${theme.colors.primary.coral} 100%);
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['4xl']};
  color: white;
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

const Subtitle = styled.h2`
  font-family: ${theme.typography.fontFamily.body};
  font-size: ${theme.typography.fontSize.xl};
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing['2xl']};
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing['2xl']};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.div`
  font-size: ${theme.typography.fontSize['4xl']};
  margin-bottom: ${theme.spacing.md};
  text-align: center;
`;

const FeatureTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const FeatureDescription = styled.p`
  font-family: ${theme.typography.fontFamily.body};
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.lg};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: auto;
`;

const FeatureListItem = styled.li`
  font-family: ${theme.typography.fontFamily.body};
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};

  &:before {
    content: "•";
    color: ${theme.colors.primary.coral};
    font-size: 1.5em;
  }
`;

const ComingSoonBadge = styled.span`
  background: ${theme.colors.primary.coral};
  color: white;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.typography.fontSize.sm};
  margin-left: ${theme.spacing.sm};
`;

export const AppFeatures: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: '👥',
      title: 'Grupos Moderados',
      description: 'Encontre acolhimento em grupos específicos para cada fase da sua jornada',
      items: [
        'Grupos por fase de vida',
        'Moderação especializada',
        'Temas específicos',
        'Encontros por cidade'
      ]
    },
    {
      icon: '🙏',
      title: 'Trilhas Espirituais',
      description: 'Fortaleça sua fé com conteúdo personalizado e guiado',
      items: [
        'Devocionais diários',
        'Meditações guiadas',
        'Áudios de apoio',
        'Conteúdo bíblico'
      ]
    },
    {
      icon: '📅',
      title: 'Calendário Especial',
      description: 'Acompanhe sua jornada com lembretes carinhosos e datas importantes',
      items: [
        'Lembretes de oração',
        'Eventos especiais',
        'Datas comemorativas',
        'Notificações personalizadas'
      ]
    },
    {
      icon: '✨',
      title: 'Jornada de Oração',
      description: 'Participe de desafios espirituais e fortaleça sua caminhada na fé',
      items: [
        'Desafios diários',
        'Recompensas espirituais',
        'Progresso da jornada',
        'Comunidade orante'
      ]
    },
    {
      icon: '💝',
      title: 'Rede de Apoio',
      description: 'Conecte-se com outras mulheres que compartilham sua jornada',
      items: [
        'Mentoria espiritual',
        'Grupos de apoio',
        'Compartilhamento de experiências',
        'Suporte emocional'
      ]
    },
    {
      icon: '🤖',
      title: 'Chat com IA Empática',
      description: 'Suporte personalizado com tecnologia e cuidado humano',
      items: [
        'Respostas personalizadas',
        'Moderadoras treinadas',
        'Disponível 24/7',
        'Apoio especializado'
      ],
      comingSoon: true
    }
  ];

  return (
    <Section>
      <Helmet>
        <title>Funcionalidades do App | Davida - Apoio com Propósito</title>
        <meta name="description" content="Conheça as funcionalidades do Davida: grupos moderados, trilhas espirituais, calendário especial e muito mais para sua jornada de fé e propósito." />
        <meta name="keywords" content="app cristão, grupos moderados, trilhas espirituais, calendário especial, jornada de oração, rede de apoio, apoio feminino cristão" />
        <meta property="og:title" content="Funcionalidades do App | Davida" />
        <meta property="og:description" content="Descubra como o Davida pode te apoiar com grupos moderados, trilhas espirituais, calendário especial e muito mais." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://davida.app/funcionalidades" />
      </Helmet>

      <Container>
        <Title>Funcionalidades do App</Title>
        <Subtitle>
          Ferramentas pensadas com carinho para acompanhar cada momento da sua jornada de fé e propósito
        </Subtitle>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>
                {feature.title}
                {feature.comingSoon && <ComingSoonBadge>Em breve</ComingSoonBadge>}
              </FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <FeatureList>
                {feature.items.map((item, i) => (
                  <FeatureListItem key={i}>{item}</FeatureListItem>
                ))}
              </FeatureList>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </Section>
  );
}; 