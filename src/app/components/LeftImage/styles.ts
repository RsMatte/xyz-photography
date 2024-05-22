import styled from 'styled-components';

import { BREAKPOINTS } from '@/app/utils/breakpoints';

export const Image = styled.img`
  border: 1px solid black;
  border-radius: 10px;
  bottom: 16px;
  height: 330px;
  left: 16px;
  position: fixed;
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
