import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, ${theme.colors.primary.peach} 0%, ${theme.colors.primary.rose} 100%);
  padding: ${theme.spacing['2xl']} ${theme.spacing.xl};
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${theme.spacing['2xl']};
  margin-bottom: ${theme.spacing['2xl']};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize.xl};
    margin-bottom: ${theme.spacing.lg};
    color: white;
  }

  p {
    font-size: ${theme.typography.fontSize.base};
    line-height: 1.6;
    margin-bottom: ${theme.spacing.md};
    color: rgba(255, 255, 255, 0.9);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: ${theme.spacing.sm};
  }

  a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-size: ${theme.typography.fontSize.base};
    transition: color 0.2s;

    &:hover {
      color: white;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  span {
    font-size: 18px;
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: ${theme.spacing.lg};
  text-align: center;
  font-size: ${theme.typography.fontSize.sm};
  color: rgba(255, 255, 255, 0.8);
`;

const Logo = styled.img`
  height: 60px;
  margin-bottom: ${theme.spacing.lg};
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <Logo src="/davidalogo.png" alt="Davida Logo" />
            <p>
              Apoiando mulheres em sua jornada de gravidez e maternidade com 
              informações, conexões e suporte espiritual.
            </p>
            <SocialLinks>
              <SocialLink
                href="https://instagram.com/davida"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span>📸</span>
              </SocialLink>
              <SocialLink
                href="https://tiktok.com/@davida"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span>🎵</span>
              </SocialLink>
              <SocialLink
                href="https://wa.me/5531982629406"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span>💬</span>
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Links Úteis</h3>
            <FooterLinks>
              <li><a href="/">Início</a></li>
              <li><a href="/para-mulheres">Para Mulheres</a></li>
              <li><a href="/download">Download</a></li>
              <li><a href="/contato">Contato</a></li>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>Legal</h3>
            <FooterLinks>
              <li><a href="/politica-privacidade">Política de Privacidade</a></li>
              <li><a href="/termos-uso">Termos de Uso</a></li>
            </FooterLinks>
            <p style={{ marginTop: 24 }}>
              <strong>Contato:</strong><br />
              WhatsApp: +55 31 98262-9406<br />
              Segunda a Sexta, 9h às 18h
            </p>
          </FooterSection>
        </FooterContent>

        <BottomBar>
          <p>&copy; 2024 Davida. Todos os direitos reservados.</p>
        </BottomBar>
      </Container>
    </FooterContainer>
  );
}; 