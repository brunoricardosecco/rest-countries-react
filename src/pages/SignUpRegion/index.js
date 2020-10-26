import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { signUp } from '../../store/auth/reducer';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, FormContainer } from './styles';

function SignUpRegion() {
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
    <>
      <Navbar />
      <Container>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Cadastre o nome da região</h1>

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
            <Button type="submit">Cadastrar</Button>
          </form>
        </FormContainer>
      </Container>
    </>
  );
}

export default SignUpRegion;
