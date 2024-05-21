import { Container, Image, FilledTitle, StrokedTitle } from './styles';
import { MainImageProps } from './types';

const MainImage = ({ data }: { data: MainImageProps }) => {
  const { title, image } = data;

  return (
    <>
      <StrokedTitle>{title}</StrokedTitle>
      <Container>
        <FilledTitle>{title}</FilledTitle>
        <Image src={image.src} alt={image.alt} />
      </Container>
    </>
  );
};

export default MainImage;
