import { Container, Dot, DotContainer, Index } from './styles';
import { SliderProps } from './types';

const Slider = ({ screenId, screenCount }: SliderProps) => {
  return (
    <Container>
      <Index>
        {screenId} OF {screenCount}
      </Index>
      <DotContainer>
        {Array.from({ length: screenCount }).map((_, index) => (
          <Dot key={`${index}`} $isActive={index + 1 === screenId} />
        ))}
      </DotContainer>
    </Container>
  );
};

export default Slider;
