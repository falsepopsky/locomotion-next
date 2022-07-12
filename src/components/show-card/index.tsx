import Image from 'next/image';
import type { ShowCardProps } from '../../interfaces';
import { CardImage, CardInfo, ContainerCard, SinopsisContainer, Text, TimerContainer, Title } from './styles';
import { Timer } from './svg';

const ShowCard = ({ name, image, sinopsis, starts, ends }: ShowCardProps) => {
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
            {starts} - {ends}
          </Text>
        </TimerContainer>
      </CardInfo>
    </ContainerCard>
  );
};

export default ShowCard;
