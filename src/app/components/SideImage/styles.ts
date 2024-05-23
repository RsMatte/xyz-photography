import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { BREAKPOINTS } from '@/app/utils/breakpoints';
import { ContainerProps } from './types';

export const Container = styled(motion.button)<ContainerProps>`
  background: transparent;
  border: 1px solid black;
  border-radius: 10px;
  display: grid;
  height: 330px;
  overflow: hidden;
  place-items: center;
  position: fixed;
  width: 248px;

  ${(props) =>
    props.$position === 'right'
      ? css`
          right: 16px;
          top: 16px;
        `
      : css`
          bottom: 16px;
          left: 16px;
        `}

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
