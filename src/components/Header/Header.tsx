import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../../styles/theme';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: ${theme.typography.fontFamily.script};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.primary.coral};
  text-decoration: none;
  font-weight: bold;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.primary.coral};
  cursor: pointer;
  padding: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.lg}) {
    display: block;
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.lg}) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.95);
    padding: ${theme.spacing.lg};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  color: ${theme.colors.text.primary};
  text-decoration: none;
  font-size: ${theme.typography.fontSize.base};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.full};
  transition: all 0.2s;

  &:hover {
    color: ${theme.colors.primary.coral};
    background: rgba(255, 192, 203, 0.1);
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing.md};
    text-align: center;
  }
`;

const DownloadButton = styled(motion.button)`
  background: ${theme.colors.primary.coral};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.full};
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  font-size: ${theme.typography.fontSize.base};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${theme.colors.primary.peach};
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    width: 100%;
    margin-top: ${theme.spacing.md};
  }
`;

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Davida</Logo>
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/para-mulheres">Para Mulheres</NavLink>
          <NavLink to="/funcionalidades">Funcionalidades do App</NavLink>
          <NavLink to="/comunidade">Comunidade</NavLink>
          <NavLink to="/parceiros">Seja Parceiro</NavLink>
          <NavLink to="/contato">Contato</NavLink>
          <Link to="/download" style={{ textDecoration: 'none' }}>
            <DownloadButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Baixar App
            </DownloadButton>
          </Link>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}; 