import useCustomCursor from '@/app/hooks/useCustomCursor';
import { Container, InnerCircle, OuterCircle } from './styles';
import { CursorProps } from './types';

const Cursor = ({ screenId, screenCount }: CursorProps) => {
  const { circleSize, circleRadius, innerRadius, circleLength, arcLength } =
    useCustomCursor({ screenId, screenCount });

  return (
    <Container>
      <OuterCircle>
        <svg
          fill="none"
          width={circleSize}
          height={circleSize}
          viewBox={`0 0 ${circleSize} ${circleSize}`}
        >
          <circle
            cx={circleRadius}
            cy={circleRadius}
            r={innerRadius}
            opacity="0.1"
          />
          <circle
            cx={circleRadius}
            cy={circleRadius}
            r={innerRadius}
            strokeDasharray={`${arcLength} ${circleLength}`}
            strokeDashoffset={0}
          />
        </svg>
      </OuterCircle>
      <InnerCircle />
    </Container>
  );
};

export default Cursor;
