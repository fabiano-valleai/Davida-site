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

export const TermsOfUse: React.FC = () => {
  return (
    <Section>
      <Container>
        <Title>Termos de Uso</Title>
        <Content>
          <p>
            Bem-vinda ao Davida! Ao usar nosso aplicativo, você concorda com estes termos de uso.
            Leia-os cuidadosamente antes de começar a usar nossos serviços.
          </p>

          <h2>Uso do Serviço</h2>
          <p>
            O Davida é uma plataforma de suporte para mulheres durante a gravidez e maternidade.
            Nosso objetivo é fornecer informações, conexões e recursos para apoiar sua jornada.
          </p>

          <h2>Responsabilidades do Usuário</h2>
          <p>
            Como usuária do Davida, você concorda em:
          </p>
          <ul>
            <li>Fornecer informações verdadeiras e precisas</li>
            <li>Respeitar outros usuários e profissionais da plataforma</li>
            <li>Não compartilhar conteúdo inadequado ou ofensivo</li>
            <li>Manter a confidencialidade de sua conta</li>
            <li>Usar o app apenas para fins legais e apropriados</li>
          </ul>

          <h2>Limitações de Responsabilidade</h2>
          <p>
            O Davida fornece informações e conexões, mas não substitui o aconselhamento médico profissional.
            Sempre consulte profissionais de saúde qualificados para questões médicas específicas.
          </p>

          <h2>Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo do app Davida, incluindo textos, imagens, logos e software, é protegido
            por direitos autorais e outras leis de propriedade intelectual.
          </p>

          <h2>Modificações dos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer momento. As mudanças
            entrarão em vigor imediatamente após a publicação no app.
          </p>

          <h2>Rescisão</h2>
          <p>
            Podemos suspender ou encerrar sua conta a qualquer momento por violação destes termos
            ou por qualquer outro motivo a nosso critério.
          </p>

          <h2>Contato</h2>
          <p>
            Se você tiver dúvidas sobre estes termos, entre em contato conosco através do WhatsApp:
            +55 31 98262-9406
          </p>
        </Content>
      </Container>
    </Section>
  );
}; 