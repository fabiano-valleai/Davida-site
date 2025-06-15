import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const Section = styled.section`
  padding: ${theme.spacing['2xl']} ${theme.spacing.xl};
  padding-top: calc(${theme.spacing['2xl']} + 80px);
  background: white;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['4xl']};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xl};
`;

const Content = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.8;

  h2 {
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize['2xl']};
    color: ${theme.colors.text.primary};
    margin: ${theme.spacing.xl} 0 ${theme.spacing.md};
  }

  p {
    margin-bottom: ${theme.spacing.lg};
  }

  ul {
    margin-bottom: ${theme.spacing.lg};
    padding-left: ${theme.spacing.xl};
  }

  li {
    margin-bottom: ${theme.spacing.md};
  }
`;

export const PrivacyPolicy: React.FC = () => {
  return (
    <Section>
      <Container>
        <Title>Política de Privacidade</Title>
        <Content>
          <p>
            A sua privacidade é importante para nós. É política do Davida respeitar a sua privacidade
            em relação a qualquer informação sua que possamos coletar em nosso app e outros sites que possuímos e operamos.
          </p>

          <h2>Informações que coletamos</h2>
          <p>
            Coletamos informações quando você se registra em nosso app, realiza um cadastro e interage
            com outros recursos do aplicativo. As informações coletadas incluem:
          </p>
          <ul>
            <li>Nome e informações de contato</li>
            <li>Informações demográficas</li>
            <li>Dados sobre sua gravidez e saúde</li>
            <li>Interações com outros usuários</li>
          </ul>

          <h2>Como usamos suas informações</h2>
          <p>
            Utilizamos as informações que coletamos para:
          </p>
          <ul>
            <li>Personalizar sua experiência</li>
            <li>Melhorar nosso app</li>
            <li>Enviar emails periódicos</li>
            <li>Fornecer suporte adequado</li>
          </ul>

          <h2>Proteção de Informações</h2>
          <p>
            Implementamos uma variedade de medidas de segurança para manter a segurança de suas
            informações pessoais. Utilizamos criptografia de ponta para proteger informações sensíveis
            transmitidas online.
          </p>

          <h2>Compartilhamento de Informações</h2>
          <p>
            Não vendemos, comercializamos ou transferimos para terceiros suas informações pessoais
            identificáveis. Isso não inclui terceiros confiáveis que nos ajudam a operar nosso app,
            desde que concordem em manter essas informações confidenciais.
          </p>

          <h2>Consentimento</h2>
          <p>
            Ao usar nosso app, você concorda com nossa política de privacidade.
          </p>
        </Content>
      </Container>
    </Section>
  );
}; 