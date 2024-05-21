import { Container, Image } from './styles';
import { BackgroundProps } from './types';

const Background = ({ image }: BackgroundProps) => (
  <Container>
    <Image src={image.src} alt={image.alt} />
  </Container>
);

export default Background;
