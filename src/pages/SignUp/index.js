import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { signUp } from '../../store/auth/reducer';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, FormContainer, Title } from './styles';

function SignUp() {
  // history
  const history = useHistory();
  // actions
  const dispatch = useDispatch();
  const signUpAsync = useCallback(values => dispatch(signUp(values)), [
    dispatch,
  ]);

  // functions
  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit = data => {
    signUpAsync({ ...data, history });
  };

  return (
    <Container>
      <FormContainer>
        <Title>REST Countries</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Faça seu cadastro</h1>

          <Input
            name="name"
            placeholder="Nome"
            ref={register({
              required: {
                value: true,
                message: 'Campo obrigatório',
              },
            })}
            errors={!!errors.name}
          />

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

          <Button type="submit">Cadastrar</Button>
        </form>
        <Link to="/">
          <FiArrowLeft />
          Voltar ao login
        </Link>
      </FormContainer>
    </Container>
  );
}

export default SignUp;
