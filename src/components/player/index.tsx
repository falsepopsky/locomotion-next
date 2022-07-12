import dynamic from 'next/dynamic';
import { Spinner } from '../spinner';
import { PlayerContainer } from '../ui';
import { PlayButton } from './svg';

const DynamicReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const Player = () => {
  return (
    <PlayerContainer>
      <DynamicReactPlayer
        url={process.env.NEXT_PUBLIC_LOCOMOTION_STREAM}
        fallback={<Spinner />}
        light={true}
        width='100%'
        height='100%'
        playIcon={<PlayButton />}
        controls={true}
      />
    </PlayerContainer>
  );
};

export default Player;
