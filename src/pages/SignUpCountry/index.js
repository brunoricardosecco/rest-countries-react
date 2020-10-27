import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import axios from 'axios';
import { getAllRegion } from '../../store/region/reducer';

import { addCountry } from '../../store/country/reducer';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { Container, FormContainer } from './styles';

function SignUpCountry() {
  // reducers
  const { regions } = useSelector(state => state.region);
  console.log(regions);

  // actions
  const dispatch = useDispatch();
  const addCountryAsync = useCallback(values => dispatch(addCountry(values)), [
    dispatch,
  ]);
  const getAllRegionAsync = useCallback(() => dispatch(getAllRegion()), [
    dispatch,
  ]);

  // functions
  const { register, handleSubmit, errors, setValue } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit = async data => {
    try {
      const image = new FormData();

      image.append('file', data.flag[0]);
      image.append('upload_preset', 'nbaubffe');

      const response = await axios.request({
        method: 'POST',
        url: 'https://api.cloudinary.com/v1_1/dqhvz3bk2/image/upload',
        data: image,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { url } = response.data;
      addCountryAsync({
        name: data.name,
        regionId: Number(data.region),
        population: Number(data.population),
        flag: url,
        clearFields,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const clearFields = () => {
    setValue('name', '');
    setValue('population', '');
    setValue('region', 'initialValue');
    setValue('flag', '');
  };

  useEffect(() => {
    getAllRegionAsync();
  }, [getAllRegionAsync]);

  return (
    <>
      <Navbar />
      <Container>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Cadastre o país</h1>

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
              name="population"
              placeholder="População"
              type="number"
              ref={register({
                required: {
                  value: true,
                  message: 'Campo obrigatório',
                },
              })}
              errors={!!errors.population}
            />
            <Select
              name="region"
              initialValue="initialValue"
              ref={register({
                required: {
                  value: true,
                  message: 'Campo obrigatório',
                },
                validate: value => value !== 'initialValue',
              })}
              errors={!!errors.region}
            >
              <option value="initialValue">Selecione a região</option>
              {regions.map(region => (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
            </Select>
            <Input
              type="file"
              name="flag"
              accept="image/*"
              ref={register({
                required: {
                  value: true,
                  message: 'Campo obrigatório',
                },
              })}
              errors={!!errors.flag}
            />
            <Button type="submit">Cadastrar</Button>
          </form>
        </FormContainer>
      </Container>
    </>
  );
}

export default SignUpCountry;
