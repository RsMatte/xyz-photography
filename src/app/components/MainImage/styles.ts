import styled from 'styled-components';

export const Container = styled.div`
  left: 50%;
  overflow: hidden;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const StrokedTitle = styled.h2`
  color: transparent;
  font-family: Tungsten;
  font-size: 220px;
  font-weight: 400;
  left: 50%;
  letter-spacing: 0.04em;
  line-height: 176px;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  transform: translate(-50%, -50%);
  top: 50%;
  -webkit-text-stroke: 1px white;
  width: 900px;
`;

export const FilledTitle = styled.span`
  color: white;
  font-family: Tungsten;
  font-size: 220px;
  font-weight: 400;
  left: 50%;
  letter-spacing: 0.04em;
  line-height: 176px;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
`;

export const Image = styled.img`
  border: 1px solid black;
  border-radius: 10px;
  height: 680px;
  width: 512px;
`;
