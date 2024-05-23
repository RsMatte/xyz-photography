import { AnimatePresence } from 'framer-motion';

import { SideImageParams } from '@/app/utils/animations';
import { Container, Image } from './styles';
import { RightImageProps } from './types';

const RightImage = ({ image, id, onClick }: RightImageProps) => (
  <AnimatePresence>
    <Container
      onClick={onClick}
      key={id}
      initial={SideImageParams.initial}
      animate={SideImageParams.animate}
      exit={SideImageParams.exit}
    >
      <Image
        src={`${image.src}.jpg`}
        alt={image.alt}
        whileHover={SideImageParams.hover}
      />
    </Container>
  </AnimatePresence>
);

export default RightImage;
