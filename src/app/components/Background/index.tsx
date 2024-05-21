import { Container, Image } from './styles';
import { BackgroundProps } from './types';

const Background = ({ data }: { data: BackgroundProps }) => (
  <Container>
    <Image src={data.imageSrc} alt="alt" />
  </Container>
);

export default Background;
