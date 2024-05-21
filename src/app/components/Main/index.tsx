import useSlide from '@/app/hooks/useSlide';

import MainImage from '../MainImage';
import { Title } from './styles';
import Background from '../Background';
import LeftImage from '../LeftImage';
import RightImage from '../RightImage';
import Details from '../Details';
import Slider from '../Slider';

const Main = () => {
  const {
    currentData,
    previousScreenData,
    nextScreenData,
    screenCount,
    handlePrevious,
    handleNext,
  } = useSlide();

  return (
    <>
      <Title>XYZ Photography</Title>
      <Background image={currentData.image} />
      <MainImage data={currentData} />
      <Slider screenId={currentData.id} screenCount={screenCount} />
      <LeftImage image={previousScreenData.image} onClick={handlePrevious} />
      <RightImage image={nextScreenData.image} onClick={handleNext} />
      <Details data={currentData} />
    </>
  );
};

export default Main;
