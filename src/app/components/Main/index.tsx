import data from '@/app/utils/data';
import MainImage from '../MainImage';
import { Title } from './styles';
import Background from '../Background';
import LeftImage from '../LeftImage';
import RightImage from '../RightImage';
import Details from '../Details';
import Slider from '../Slider';

const Main = () => (
  <>
    <Title>{data.title}</Title>
    <Background data={data.screens[0]} />
    <MainImage data={data.screens[0]} />
    <Slider data={data.screens[0]} />
    <LeftImage data={data.screens[0]} />
    <RightImage data={data.screens[0]} />
    <Details data={data.screens[0]} />
  </>
);

export default Main;
