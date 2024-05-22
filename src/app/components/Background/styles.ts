import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100vw;
`;

export const Image = styled.img`
  bottom: 75px;
  filter: blur(70px);
  height: calc(100% + 150px);
  max-width: none;
  object-fit: cover;
  position: relative;
  right: 75px;
  width: calc(100% + 150px);
`;
