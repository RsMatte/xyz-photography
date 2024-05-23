import useSlide from '@/app/hooks/useSlide';

import { Title } from './styles';
import MainImage from '../MainImage';
import Background from '../Background';
import SideImage from '../SideImage';
import Details from '../Details';
import Slider from '../Slider';
import Cursor from '../Cursor';

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
      <Background image={currentData.image} id={currentData.id} />
      <MainImage data={currentData} />
      <Slider screenId={currentData.id} screenCount={screenCount} />
      <SideImage
        image={previousScreenData.image}
        id={`previous-img-${previousScreenData.id}`}
        onClick={handlePrevious}
        position="left"
      />
      <SideImage
        image={nextScreenData.image}
        id={`next-img-${nextScreenData.id}`}
        onClick={handleNext}
        position="right"
      />
      <Details data={currentData} />
      <Cursor screenId={currentData.id} screenCount={screenCount} />
    </>
  );
};

export default Main;
