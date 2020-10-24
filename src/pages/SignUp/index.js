import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, FormContainer, Title } from './styles';

function SignUp() {
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
