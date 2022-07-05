import Image from 'next/image';
import { CardImage, CardInfo, ContainerCard, SinopsisContainer, Text, TimerContainer, Title } from './styles';
import { Timer } from './svg';

type ShowCardProps = {
  name: string;
  image: string;
  sinopsis: string;
  start: string;
  ending: string;
};

const ShowCard = ({ name, image, sinopsis, start, ending }: ShowCardProps) => {
  return (
    <ContainerCard>
      <CardImage>
        <Image
          className='img-banner'
          alt={name}
          src={'/banners/' + image}
          layout='fill'
          objectFit='fill'
          loading='lazy'
        />
      </CardImage>
      <CardInfo>
        <Title>{name}</Title>
        <SinopsisContainer>
          <Text sinopsis>{sinopsis}</Text>
        </SinopsisContainer>
        <TimerContainer>
          <Timer />
          <Text>
            {start} - {ending}
          </Text>
        </TimerContainer>
      </CardInfo>
    </ContainerCard>
  );
};

export default ShowCard;
