import { Image } from './styles';
import { LeftImageProps } from './types';

const LeftImage = ({ image, onClick }: LeftImageProps) => (
  <button onClick={onClick}>
    <Image src={`${image.src}.jpg`} alt={image.alt} />
  </button>
);

export default LeftImage;
