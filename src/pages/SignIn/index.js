import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, FormContainer, Title } from './styles';

function SignIn() {
  // functions
  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Container>
      <FormContainer>
        <Title>REST Countries</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Faça seu login</h1>

          <Input
            name="email"
            placeholder="E-mail"
            ref={register({
              required: {
                value: true,
                message: 'Campo obrigatório',
              },
            })}
            errors={!!errors.email}
          />

          <Input
            name="password"
            type="password"
            placeholder="Senha"
            ref={register({
              required: {
                value: true,
                message: 'Campo obrigatório',
              },
            })}
            errors={!!errors.password}
          />

          <Button type="submit">Entrar</Button>
        </form>
        <a href="signup">
          <FiLogIn />
          Fazer cadastro
        </a>
      </FormContainer>
    </Container>
  );
}

export default SignIn;
