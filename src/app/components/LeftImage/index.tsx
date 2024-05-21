import { Image } from './styles';
import { LeftImageProps } from './types';

const LeftImage = ({ data }: { data: LeftImageProps }) => (
  <>
    <Image src={data.imageSrc} alt="alt" />
  </>
);

export default LeftImage;
