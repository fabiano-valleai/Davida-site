import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const Section = styled.section`
  padding: ${theme.spacing['2xl']} ${theme.spacing.xl};
  background: linear-gradient(135deg, ${theme.colors.primary.peach} 0%, ${theme.colors.primary.rose} 100%);
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: ${theme.spacing['2xl']};
`;

export const Title = styled.h1`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['4xl']};
  color: white;
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

export const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.xl};
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing['2xl']};
  line-height: 1.6;
`;

export const Text = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
`; 