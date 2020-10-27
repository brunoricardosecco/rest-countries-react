import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { logout } from '../../store/auth/reducer';

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

  // actions
  const dispatch = useDispatch();
  const logoutAsync = useCallback(value => dispatch(logout(value)), [dispatch]);

  return (
    <Container>
      <ContentContainer>
        {location.pathname !== '/dashboard' && (
          <NavbarItem onClick={() => history.push('/dashboard')}>
            Dashboard
          </NavbarItem>
        )}
        <NavbarItem onClick={() => history.push(`/dashboard/signup-region`)}>
          Cadastro região
        </NavbarItem>
        <NavbarItem onClick={() => history.push(`/dashboard/signup-country`)}>
          Cadastro de país
        </NavbarItem>
        <NavbarItem onClick={() => logoutAsync(history)} lastItem>
          Sair
        </NavbarItem>
      </ContentContainer>
    </Container>
  );
}

export default Navbar;
