import React from 'react';

import { Container, FormContainer, Title } from './styles';

function SignIn() {
  return (
    <Container>
      <FormContainer>
        <Title>REST</Title>
        <form>
          <h1>Faça seu login</h1>
        </form>
      </FormContainer>
    </Container>
  );
}

export default SignIn;
