import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCountries } from '../../store/country/reducer';

import Navbar from '../../components/Navbar';
import { Container } from './styles';

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
    </Container>
  );
}

export default Dashboard;
