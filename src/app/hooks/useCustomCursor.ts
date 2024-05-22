import { useEffect } from 'react';

type UseCustomCursorProps = {
  screenId: number;
  screenCount: number;
};

const circleSize = 42;
const circleRadius = circleSize / 2;
const innerRadius = (circleSize - 2) / 2;
const circleLength = 2 * Math.PI * innerRadius;

const useCustomCursor = ({ screenId, screenCount }: UseCustomCursorProps) => {
  const arcLength = (circleLength / screenCount) * screenId;

  const onMouseMove = (e: MouseEvent) => {
    document.body.style.setProperty('--cursor-x', `${e.clientX}px`);
    document.body.style.setProperty('--cursor-y', `${e.clientY}px`);
  };

  useEffect(() => {
    if (window) window.addEventListener('mousemove', onMouseMove);
  }, []);

  return {
    circleSize,
    circleRadius,
    innerRadius,
    circleLength,
    arcLength,
  };
};

export default useCustomCursor;
