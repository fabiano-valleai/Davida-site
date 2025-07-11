import { css } from '@emotion/react';
import { theme } from './theme';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Great+Vibes&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    font-family: ${theme.typography.fontFamily.body};
    background: linear-gradient(135deg, ${theme.colors.secondary.cream} 0%, ${theme.colors.primary.peach} 60%, ${theme.colors.primary.rose} 100%);
    color: ${theme.colors.text.primary};
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`; 