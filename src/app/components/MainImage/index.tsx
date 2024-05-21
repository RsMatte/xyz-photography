import { Container, Image, FilledTitle, StrokedTitle } from './styles';
import { MainImageProps } from './types';

const MainImage = ({ data }: { data: MainImageProps }) => (
  <>
    <StrokedTitle>{data.title}</StrokedTitle>
    <Container>
      <FilledTitle>{data.title}</FilledTitle>
      <Image src={data.imageSrc} alt="alt" />
    </Container>
  </>
);

export default MainImage;
