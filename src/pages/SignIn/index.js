import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FiLogIn } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

import { login } from '../../store/auth/reducer';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, FormContainer, Title } from './styles';

function SignIn() {
  // history
  const history = useHistory();
  // actions
  const dispatch = useDispatch();
  const loginAsync = useCallback(values => dispatch(login(values)), [dispatch]);

  // functions
  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit = data => {
    loginAsync({ ...data, history });
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
        <Link to="/signup">
          <FiLogIn />
          Fazer cadastro
        </Link>
      </FormContainer>
    </Container>
  );
}

export default SignIn;
