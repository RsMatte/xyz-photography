import { Image } from './styles';
import { RightImageProps } from './types';

const RightImage = ({ data }: { data: RightImageProps }) => (
  <>
    <Image src={data.imageSrc} alt="alt" />
  </>
);

export default RightImage;
