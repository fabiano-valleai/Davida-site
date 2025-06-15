import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const HeaderContainer = styled.header`
  background-color: ${theme.colors.secondary.white};
  padding: ${theme.spacing.md} ${theme.spacing['2xl']};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-family: ${theme.typography.fontFamily.script};
  font-size: ${theme.typography.fontSize['3xl']};
  color: ${theme.colors.primary.coral};
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
`;

const NavLink = styled(Link)`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.base};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.primary.coral};
  }
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Davida</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}; 