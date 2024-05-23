import { AnimatePresence } from 'framer-motion';

import { BackgroundImageParams } from '@/app/utils/animations';
import { Container, Image } from './styles';
import { BackgroundProps } from './types';

const Background = ({ image, id }: BackgroundProps) => (
  <AnimatePresence>
    <Container
      key={`background-img-${id}`}
      initial={BackgroundImageParams.initial}
      animate={BackgroundImageParams.animate}
      exit={BackgroundImageParams.exit}
    >
      <Image src={`${image.src}.jpg`} alt={image.alt} />
    </Container>
  </AnimatePresence>
);

export default Background;
