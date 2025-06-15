import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

const Section = styled.section`
  padding: ${theme.spacing['2xl']} ${theme.spacing.xl};
  background: white;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['4xl']};
  color: ${theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${theme.spacing['2xl']};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, ${theme.colors.primary.peach} 0%, ${theme.colors.primary.rose} 100%);
  border-radius: ${theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.lg};
  font-size: 32px;
  color: white;
`;

const FeatureTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const FeatureDescription = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.md};
  color: ${theme.colors.text.secondary};

  &:before {
    content: "•";
    color: ${theme.colors.primary.coral};
    margin-right: ${theme.spacing.sm};
  }
`;

const features = [
  {
    icon: "👥",
    title: "Grupos Moderados",
    description: "Comunidades seguras e acolhedoras para cada fase da sua jornada.",
    items: [
      "Divisão por fase e cidade",
      "Moderação profissional",
      "Temas específicos",
      "Ambiente seguro e acolhedor"
    ]
  },
  {
    icon: "🙏",
    title: "Trilhas Espirituais",
    description: "Conteúdo guiado para fortalecer sua fé e bem-estar emocional.",
    items: [
      "Devocionais diários",
      "Meditações guiadas",
      "Áudios de apoio",
      "Práticas de gratidão"
    ]
  },
  {
    icon: "📅",
    title: "Calendário Especial",
    description: "Acompanhamento personalizado da sua jornada materna.",
    items: [
      "Lembretes carinhosos",
      "Eventos especiais",
      "Datas importantes",
      "Marcos da jornada"
    ]
  },
  {
    icon: "✨",
    title: "Jornada de Oração",
    description: "Fortaleça sua conexão espiritual com desafios diários.",
    items: [
      "Desafios diários",
      "Recompensas espirituais",
      "Progresso pessoal",
      "Comunidade orante"
    ]
  },
  {
    icon: "💝",
    title: "Rede de Apoio",
    description: "Conecte-se com outras mulheres em jornadas semelhantes.",
    items: [
      "Grupos por afinidade",
      "Compartilhamento de experiências",
      "Suporte mútuo",
      "Amizades verdadeiras"
    ]
  },
  {
    icon: "📱",
    title: "Experiência Personalizada",
    description: "Conteúdo adaptado à sua fase e necessidades específicas.",
    items: [
      "Perfil personalizado",
      "Recomendações relevantes",
      "Progresso individual",
      "Metas adaptativas"
    ]
  }
];

export const AppFeatures: React.FC = () => {
  return (
    <Section>
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Funcionalidades do App
        </Title>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <FeatureList>
                {feature.items.map((item, itemIndex) => (
                  <FeatureListItem key={itemIndex}>{item}</FeatureListItem>
                ))}
              </FeatureList>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </Section>
  );
}; 