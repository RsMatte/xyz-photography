import { Image } from './styles';
import { RightImageProps } from './types';

const RightImage = ({ image, onClick }: RightImageProps) => (
  <button onClick={onClick}>
    <Image src={`${image.src}.jpg`} alt={image.alt} />
  </button>
);

export default RightImage;
