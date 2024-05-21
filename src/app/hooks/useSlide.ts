import { useState, useEffect, useCallback } from 'react';

import pageData from '@/app/utils/data';

const screenCount = pageData.screens.length;
const firstScreen = 0;
const lastScreen = screenCount - 1;

const useSlide = () => {
  const { screens } = pageData;
  const [currentScreen, setCurrentScreen] = useState(firstScreen);

  const isInFirstScreen = currentScreen === firstScreen;
  const isInLastScreen = currentScreen === lastScreen;

  const previousScreen = isInFirstScreen ? lastScreen : currentScreen - 1;
  const nextScreen = isInLastScreen ? firstScreen : currentScreen + 1;

  const handlePrevious = useCallback(
    () => setCurrentScreen(previousScreen),
    [previousScreen],
  );
  const handleNext = useCallback(
    () => setCurrentScreen(nextScreen),
    [nextScreen],
  );

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      else if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleNext, handlePrevious]);

  return {
    currentData: screens[currentScreen],
    previousScreenData: screens[previousScreen],
    nextScreenData: screens[nextScreen],
    screenCount,
    handlePrevious,
    handleNext,
  };
};

export default useSlide;
