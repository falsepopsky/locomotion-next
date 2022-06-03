import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import screenfull from 'screenfull';

// Components
import { Spinner } from './../loader/LoaderStyles';
import { PlayerContainer } from '../ui/Styles';
import Controls from './../controls/Controls';
import { PlayButton } from './../svgs/Svgs';

const DynamicReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
const mediaStream = process.env.NEXT_PUBLIC_LOCOMOTION_STREAM;

const Player = () => {
  const [isFullScreen, SetIsFullScreen] = useState(false);

  const [playerProps, SetPlayerProps] = useState({
    volume: 0.7,
    playing: false,
    muted: false,
  });

  const containerPlayer = useRef(null);

  const handleClickFullscreen = () => {
    if (isFullScreen) {
      SetIsFullScreen(false);
      screenfull.exit(containerPlayer.current);
    } else {
      SetIsFullScreen(true);
      screenfull.request(containerPlayer.current);
    }
  };

  const handleClickPlayPause = () => {
    SetPlayerProps({
      ...playerProps,
      playing: !playerProps.playing ? true : false,
    });
  };

  const handleVolumeChange = (vol) => {
    SetPlayerProps({ ...playerProps, volume: parseFloat(vol / 100) });
  };

  const handleToggleMuted = () => {
    SetPlayerProps({
      ...playerProps,
      muted: !playerProps.muted ? true : false,
    });
  };

  return (
    <PlayerContainer ref={containerPlayer}>
      <DynamicReactPlayer
        url={mediaStream}
        controls={false}
        fallback={<Spinner />}
        light={true}
        width='100%'
        height='100%'
        muted={playerProps.muted}
        playing={playerProps.playing}
        playIcon={<PlayButton />}
        volume={playerProps.volume}
      />
      <Controls
        handleScreen={handleClickFullscreen}
        handleFS={isFullScreen}
        handlePlay={handleClickPlayPause}
        handleMuted={handleToggleMuted}
        volumeControl={playerProps.volume}
        handleVolume={handleVolumeChange}
        isPlaying={playerProps.playing}
      />
    </PlayerContainer>
  );
};

export default Player;
