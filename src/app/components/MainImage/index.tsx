import { AnimatePresence } from 'framer-motion';

import { MainImageParams, StrokedTitleParams } from '@/app/utils/animations';
import {
  Container,
  Image,
  FilledTitle,
  StrokedTitle,
  ImageContainer,
} from './styles';
import { MainImageProps } from './types';

const MainImage = ({ data }: { data: MainImageProps }) => {
  const { title, image, id } = data;

  return (
    <Container>
      <AnimatePresence>
        <StrokedTitle
          key={`stroked-title-${id}`}
          initial={StrokedTitleParams.initial}
          animate={StrokedTitleParams.animate}
          exit={StrokedTitleParams.exit}
        >
          {title}
        </StrokedTitle>
      </AnimatePresence>
      <AnimatePresence>
        <ImageContainer
          key={`main-img-${id}`}
          initial={MainImageParams.initial}
          animate={MainImageParams.animate}
          exit={MainImageParams.exit}
        >
          <FilledTitle>{title}</FilledTitle>
          <Image src={`${image.src}@2x.jpg`} alt={image.alt} />
        </ImageContainer>
      </AnimatePresence>
    </Container>
  );
};

export default MainImage;
