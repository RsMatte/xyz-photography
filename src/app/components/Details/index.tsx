import { Container, Cta, DateContainer, Info } from './styles';
import { DetailsProps } from './types';

const Details = ({ data }: { data: DetailsProps }) => {
  const { artist, client, date } = data;

  return (
    <Container>
      <Info>
        <h2>{artist}</h2>
        <p>{client}</p>
      </Info>
      <DateContainer>{date}</DateContainer>
      <Cta>Have a look</Cta>
    </Container>
  );
};

export default Details;
