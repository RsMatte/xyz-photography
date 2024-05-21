import { Container, Dot, DotContainer, Index } from './styles';
import { SliderProps } from './types';

const Slider = ({ data }: { data: SliderProps }) => {
  return (
    <Container>
      <Index>1 OF 5</Index>
      <DotContainer>
        <Dot $isActive />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </DotContainer>
    </Container>
  );
};

export default Slider;
