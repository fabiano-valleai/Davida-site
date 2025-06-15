import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

const Section = styled.section`
  padding: ${theme.spacing['2xl']} ${theme.spacing.xl};
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
  font-size: ${theme.typography.fontSize['4xl']};
  color: white;
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.xl};
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing['2xl']};
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['2xl']};
  align-items: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const AppPreview = styled.div`
  position: relative;
  text-align: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    order: 2;
  }
`;

const AppImage = styled.div`
  width: 300px;
  height: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .preview-placeholder {
    font-size: 100px;
    color: #ccc;
    z-index: 1;
  }
`;

const DownloadSection = styled.div`
  @media (max-width: ${theme.breakpoints.lg}) {
    order: 1;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: ${theme.spacing['2xl']};
`;

const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.lg};
  padding: ${theme.spacing.lg};
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.borderRadius.lg};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${theme.colors.primary.coral};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize['2xl']};
  color: white;
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xs};
`;

const FeatureDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
`;

const StoreButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const StoreButton = styled(motion.a)`
  display: flex;
  align-items: center;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.borderRadius.full};
  text-decoration: none;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.lg};
  transition: transform 0.2s;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
  }

  svg {
    width: 24px;
    height: 24px;
    margin-right: ${theme.spacing.md};
    path {
      fill: currentColor;
    }
  }

  span {
    margin-left: ${theme.spacing.md};
  }
`;

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface DownloadContent {
  title: string;
  subtitle: string;
  appPreviewImage: string;
  features: Feature[];
  appStoreLink: string;
  playStoreLink: string;
}

const defaultContent: DownloadContent = {
  title: "Baixe o Davida",
  subtitle: "Comece sua jornada de autoconhecimento e bem-estar. Baixe agora e experimente gratuitamente por 7 dias.",
  appPreviewImage: "/app-preview.png",
  features: [
    {
      icon: "🎯",
      title: "Conteúdo Personalizado",
      description: "Receba recomendações e conteúdos adaptados à sua fase atual."
    },
    {
      icon: "👥",
      title: "Comunidade Ativa",
      description: "Conecte-se com outras mulheres e compartilhe experiências."
    },
    {
      icon: "🧘‍♀️",
      title: "Bem-estar Integral",
      description: "Acesse meditações, exercícios e práticas para seu autocuidado."
    },
    {
      icon: "👩‍⚕️",
      title: "Suporte Profissional",
      description: "Consulte especialistas certificados em nossa rede."
    }
  ],
  appStoreLink: "https://apps.apple.com/app/davida",
  playStoreLink: "https://play.google.com/store/apps/davida"
};

export const Download: React.FC = () => {
  const [content, setContent] = useState<DownloadContent>(defaultContent);
  const [previewError, setPreviewError] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('downloadContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const handleImageError = () => {
    setPreviewError(true);
  };

  return (
    <Section id="download">
      <Container>
        <Title>{content.title}</Title>
        <Subtitle>{content.subtitle}</Subtitle>

        <Grid>
          <AppPreview>
            <AppImage>
              {content.appPreviewImage && !previewError ? (
                <img 
                  src={content.appPreviewImage} 
                  alt="Preview do App" 
                  onError={handleImageError}
                />
              ) : (
                <div className="preview-placeholder">📱</div>
              )}
            </AppImage>
          </AppPreview>

          <DownloadSection>
            <FeaturesList>
              {content.features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureContent>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureContent>
                </FeatureItem>
              ))}
            </FeaturesList>

            <StoreButtons>
              <StoreButton
                href={content.appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/apple-logo.svg" alt="Apple Logo" />
                <span>App Store</span>
              </StoreButton>
              <StoreButton
                href={content.playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/google-play-logo.svg" alt="Google Play Logo" />
                <span>Play Store</span>
              </StoreButton>
            </StoreButtons>
          </DownloadSection>
        </Grid>
      </Container>
    </Section>
  );
}; 