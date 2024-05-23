import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100vw;
`;

export const Image = styled.img`
  bottom: 125px;
  filter: blur(70px);
  height: calc(100% + 250px);
  object-fit: cover;
  position: relative;
  right: 125px;
  width: calc(100% + 250px);
`;
