import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCountries } from '../../store/country/reducer';

import Navbar from '../../components/Navbar';
import { Container, ContentContainer } from './styles';
import CountryItem from '../../components/CountryItem';

function Dashboard() {
  // reducer
  const { countries } = useSelector(state => state.country);
  console.log(countries);

  // actions
  const dispatch = useDispatch();
  const getAllCountriesAsync = useCallback(() => dispatch(getAllCountries()), [
    dispatch,
  ]);

  // functions
  useEffect(() => {
    getAllCountriesAsync();
  }, [getAllCountriesAsync]);
  return (
    <Container>
      <Navbar />
      <ContentContainer>
        {countries.map(country => (
          <CountryItem country={country} />
        ))}
      </ContentContainer>
    </Container>
  );
}

export default Dashboard;
