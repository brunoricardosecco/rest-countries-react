import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { addRegion } from '../../store/region/reducer';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, FormContainer } from './styles';

function SignUpRegion() {
  // actions
  const dispatch = useDispatch();
  const addRegionAsync = useCallback(values => dispatch(addRegion(values)), [
    dispatch,
  ]);

  // functions
  const { register, handleSubmit, errors, setValue } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const clearFields = () => {
    setValue('name', '');
  };

  const onSubmit = data => {
    addRegionAsync({ ...data, clearFields });
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
