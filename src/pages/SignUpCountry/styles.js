import styled from 'styled-components';
import { shade } from 'polished';

import { colors } from '../../constants';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: stretch;
  place-content: center;
`;

export const FormContainer = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  place-content: center;
  align-items: center;

  form {
    margin: 40px 0;
    width: 256px;
    text-align: center;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 1.5em;
    }
  }

  > a {
    color: ${colors.primaryBlue};
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, colors.primaryBlue)};
    }
  }
`;

export const Title = styled.h1`
  font-size: 3em;
`;
