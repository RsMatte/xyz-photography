import styled from 'styled-components';

import { BREAKPOINTS } from '@/app/utils/breakpoints';

export const Image = styled.img`
  border: 1px solid black;
  border-radius: 10px;
  height: 330px;
  position: fixed;
  right: 16px;
  top: 16px;
  width: 248px;

  ${BREAKPOINTS.large} {
    height: 248px;
    width: 186px;
  }

  ${BREAKPOINTS.medium} {
    height: 186px;
    width: 140px;
  }

  ${BREAKPOINTS.small} {
    height: 139px;
    width: 105px;
  }
`;
