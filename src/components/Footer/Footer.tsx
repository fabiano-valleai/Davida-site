import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const FooterContainer = styled.footer`
  background: ${theme.colors.primary.peach};
  padding: ${theme.spacing.xl} 0;
  color: white;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};

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
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: ${theme.typography.fontSize.base};
  opacity: 0.9;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xl} ${theme.spacing.xl} 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: ${theme.spacing.xl};
  font-size: ${theme.typography.fontSize.sm};
  opacity: 0.8;
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Davida</h3>
          <FooterLinks>
            <FooterLink to="/sobre">Sobre nós</FooterLink>
            <FooterLink to="/contato">Contato</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Comunidade</h3>
          <FooterLinks>
            <FooterLink to="/para-mulheres">Para Mulheres</FooterLink>
            <FooterLink to="/seja-parceiro">Seja Parceiro</FooterLink>
            <FooterLink to="/investidores">Investidores</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Legal</h3>
          <FooterLinks>
            <FooterLink to="/privacidade">Política de Privacidade</FooterLink>
            <FooterLink to="/termos">Termos de Uso</FooterLink>
            <FooterLink to="/cookies">Política de Cookies</FooterLink>
          </FooterLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>© {new Date().getFullYear()} Davida. Todos os direitos reservados.</p>
      </FooterBottom>
    </FooterContainer>
  );
}; 