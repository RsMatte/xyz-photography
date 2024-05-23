import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { BREAKPOINTS } from '@/app/utils/breakpoints';

const TitleStyle = css`
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

  ${BREAKPOINTS.large} {
    font-size: 165px;
    line-height: 132px;
    width: 675px;
  }

  ${BREAKPOINTS.medium} {
    font-size: 124px;
    line-height: 99px;
    width: 506px;
  }

  ${BREAKPOINTS.small} {
    font-size: 93px;
    line-height: 74px;
    width: auto;
  }
`;

export const Container = styled.div`
  display: grid;
  overflow: hidden;
  place-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

export const ImageContainer = styled(motion.div)`
  overflow: hidden;
  position: absolute;
`;

export const StrokedTitle = styled(motion.h2)`
  color: transparent;
  -webkit-text-stroke: 1px white;

  ${TitleStyle}
`;

export const FilledTitle = styled.span`
  color: white;

  ${TitleStyle}
`;

export const Image = styled.img`
  border: 1px solid black;
  border-radius: 10px;
  height: 680px;
  min-width: 215px;
  width: 512px;

  ${BREAKPOINTS.large} {
    height: 510px;
    width: 384px;
  }

  ${BREAKPOINTS.medium} {
    height: 383px;
    width: 287px;
  }

  ${BREAKPOINTS.small} {
    height: 287px;
    width: 215px;
  }
`;
