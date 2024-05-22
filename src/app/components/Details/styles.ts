import { BREAKPOINTS } from '@/app/utils/breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
  bottom: 93px;
  display: flex;
  flex-direction: column;
  font-family: Helvetica;
  font-size: 10px;
  grid-gap: 16px;
  letter-spacing: 0.08em;
  line-height: 12px;
  position: fixed;
  right: 155px;
  text-transform: uppercase;
  width: 109px;

  ${BREAKPOINTS.large} {
    bottom: 40px;
    right: 30px;
  }
`;

export const Info = styled.div`
  color: white;
  text-align: left;
`;

export const DateContainer = styled.span`
  color: white;
  text-align: right;
`;

export const Cta = styled.button`
  background-color: white;
  border-radius: 24px;
  color: #202020;
  font-family: Helvetica;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 8px 0;
  text-transform: uppercase;
`;
