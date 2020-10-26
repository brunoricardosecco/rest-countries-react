import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Container, ItemContainer, ContentContainer } from './styles';

function NavbarItem({ children, lastItem, onClick }) {
  return (
    <ItemContainer onClick={onClick} lastItem={lastItem}>
      {children}
    </ItemContainer>
  );
}

function Navbar() {
  // history
  const history = useHistory();
  const location = useLocation();

  return (
    <Container>
      <ContentContainer>
        {location.pathname !== '/dashboard' && (
          <NavbarItem onClick={() => history.push('/dashboard')}>
            Dashboard
          </NavbarItem>
        )}
        <NavbarItem
          onClick={() => history.push(`${location.pathname}/signup-region`)}
        >
          Cadastro região
        </NavbarItem>
        <NavbarItem
          onClick={() => history.push(`${location.pathname}/signup-country`)}
        >
          Cadastro de país
        </NavbarItem>
        <NavbarItem onClick={() => console.log('sair')} lastItem>
          Sair
        </NavbarItem>
      </ContentContainer>
    </Container>
  );
}

export default Navbar;
