import { Container, Cta, DateContainer, Info } from './styles';
import { DetailsProps } from './types';

const Details = ({ data }: { data: DetailsProps }) => {
  const { artist, client, date, url } = data;
  const handleClick = () => console.log(`navigate to ${url}`);

  return (
    <Container>
      <Info>
        <h2>{artist}</h2>
        <p>{client}</p>
      </Info>
      <DateContainer>{date}</DateContainer>
      <Cta onClick={handleClick}>Have a look</Cta>
    </Container>
  );
};

export default Details;
