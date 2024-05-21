import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: 100vh;
  overflow: hidden;
  place-items: center;
  position: absolute;
  width: 100vw;
`;

export const Image = styled.img`
  filter: blur(40px);
  height: 110%;
  max-width: none;
  width: 110%;
`;
