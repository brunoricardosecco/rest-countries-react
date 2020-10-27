import React from 'react';

import { Container, TextContainer } from './styles';

function CountryItem({ country }) {
  return (
    <Container>
      <div>
        <img src={country.flag} alt="flag" />
      </div>
      <TextContainer>
        <h1>{country.name}</h1>
        <div>
          <h4>Population:</h4>
          <p>{country.population}</p>
        </div>
        <div>
          <h4>Population:</h4>
          <p>{country.population}</p>
        </div>
        <div>
          <h4>Região:</h4>
          <p>{country.region.name}</p>
        </div>
      </TextContainer>
    </Container>
  );
}

export default CountryItem;
