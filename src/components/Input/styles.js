import styled, { css } from 'styled-components';

import { colors } from '../../constants';

export const CustomInput = styled.input`
  background: #232129;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  margin-bottom: 8px;
  color: ${colors.white};
  border: 2px solid #232129;
  ${props =>
    props.error &&
    css`
      border: 2px solid ${colors.red};
    `};
`;
