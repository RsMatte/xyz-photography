import { motion } from 'framer-motion';
import styled from 'styled-components';

import { BREAKPOINTS } from '@/app/utils/breakpoints';

export const Container = styled(motion.button)`
  background: transparent;
  border: 1px solid black;
  border-radius: 10px;
  display: grid;
  height: 330px;
  overflow: hidden;
  place-items: center;
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

export const Image = styled(motion.img)`
  height: calc(100% + 2px);
  width: calc(100% + 2px);
`;
