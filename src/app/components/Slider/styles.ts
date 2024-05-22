import styled from 'styled-components';

import { BREAKPOINTS } from '@/app/utils/breakpoints';
import { DotProps } from './types';

export const Container = styled.div`
  align-items: center;
  display: flex;
  grid-gap: 24px;
  left: 50%;
  position: fixed;
  top: calc(50% + 180px);
  transform: translate(-50%, -50%);

  ${BREAKPOINTS.medium} {
    top: calc(50% + 120px);
  }
`;

export const Index = styled.span`
  color: white;
  font-family: Helvetica;
  font-size: 10px;
  letter-spacing: 0.08em;
`;

export const DotContainer = styled.div`
  display: flex;
  grid-gap: 8px;
`;

export const Dot = styled.div<DotProps>`
  background-color: ${(props) => (props.$isActive ? 'white' : 'transparent')};
  border: 1px solid white;
  border-radius: 2px;
  height: 8px;
  text-align: right;
  width: 5px;
`;
