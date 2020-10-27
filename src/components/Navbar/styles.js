import styled, { css } from 'styled-components';

import { colors, metrics } from '../../constants';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #2e3944;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: ${metrics.containerWidth};
`;

export const ItemContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  border: 0;
  color: ${colors.white};
  background-color: transparent;

  :before {
    content: '';
    width: 1px;
    height: 24px;
    background-color: ${colors.white};
    align-self: center;
    margin: 0 15px;
  }

  :hover {
    color: ${colors.primaryBlue};
  }

  ${props =>
    props.lastItem &&
    css`
      :after {
        content: '';
        width: 1px;
        height: 24px;
        background-color: white;
        align-self: center;
        margin: 0 15px;
      }
    `}
`;
