import Image from 'next/image';
import { ContainerCard, CardImage, CardInfo, Title, SinopsisContainer, Text, TimerContainer } from './ShowCard.styles';
import { Timer } from '../svgs/Svgs';

const ShowCard = ({ name, image, sinopsis, start, ending }) => {
  return (
    <ContainerCard>
      <CardImage>
        <Image className='img-banner' alt={name} src={'/banners/' + image} layout='fill' objectFit='fill' />
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
