import styled from 'styled-components';
import { shade } from 'polished';

import { colors } from '../../constants';

export const CustomButton = styled.button`
  border-radius: 8px;
  border: 0;
  padding: 16px 0;
  width: 100%;
  background: ${colors.primaryBlue};
  color: ${colors.white};
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, colors.primaryBlue)};
  }
`;
