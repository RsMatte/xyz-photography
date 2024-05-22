import styled from 'styled-components';

export const Container = styled.div`
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  transform: translate(
    calc(var(--cursor-x) - 50%),
    calc(var(--cursor-y) - 50%)
  );
  z-index: 2;
`;

export const OuterCircle = styled.div`
  transform: rotate(-90deg);

  & circle {
    stroke: white;
    transition: all 0.3s ease-in-out;
  }
`;

export const InnerCircle = styled.div`
  background-color: white;
  border-radius: 50%;
  height: 4px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
`;
