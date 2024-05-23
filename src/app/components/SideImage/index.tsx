import { AnimatePresence } from 'framer-motion';

import { SideImageParams } from '@/app/utils/animations';
import { Container, Image } from './styles';
import { SideImageProps } from './types';

const SideImage = ({ image, id, position, onClick }: SideImageProps) => (
  <AnimatePresence>
    <Container
      key={id}
      onClick={onClick}
      $position={position}
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

export default SideImage;
