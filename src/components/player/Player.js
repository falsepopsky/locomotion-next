import { useState, useRef } from 'react';
import { findDOMNode } from 'react-dom';
import ReactPlayer from 'react-player/lazy';
import screenfull from 'screenfull';

// Components
import { Spinner } from './../loader/LoaderStyles';
import { PlayerContainer } from '../ui/Styles';
import Controls from './../controls/Controls';
import { PlayButton } from './../svgs/Svgs';

const mediaStreamUrl = 'http://51.222.85.85:81/hls/loco/index.m3u8';
const PHcookie = 'PHPSESSID=loh6rdeltt2klck5u35lpss9g7';
const configPlayer = {
  file: {
    forceHLS: true,
    hlsOptions: {
      xhrSetup: function (xhr, mediaStreamUrl) {
        xhr.open('GET', mediaStreamUrl);
        xhr.setRequestHeader('X-CustomHeader', 'Locomotion TV NEXT');
      },
    },
    hlsVersion: '1.0.5',
  },
};

const Player = () => {
  const [isFullScreen, SetIsFullScreen] = useState(false);

  const [playerProps, SetPlayerProps] = useState({
    volume: 0.7,
    playing: false,
    muted: false,
  });

  const containerPlayer = useRef();

  const handleClickFullscreen = () => {
    if (isFullScreen) {
      SetIsFullScreen(false);
      screenfull.exit(findDOMNode(containerPlayer.current));
    } else {
      SetIsFullScreen(true);
      screenfull.request(findDOMNode(containerPlayer.current));
    }
  };

  const handleClickPlayPause = () => {
    if (!playerProps.playing) {
      SetPlayerProps({ ...playerProps, playing: true });
    } else {
      SetPlayerProps({ ...playerProps, playing: false });
    }
  };

  const handleVolumeChange = (vol) => {
    SetPlayerProps({ ...playerProps, volume: parseFloat(vol / 100) });
  };

  const handleClickToggleMuted = () => {
    if (!playerProps.muted) {
      SetPlayerProps({ ...playerProps, muted: true });
    } else {
      SetPlayerProps({ ...playerProps, muted: false });
    }
  };

  return (
    <PlayerContainer ref={containerPlayer}>
      <ReactPlayer
        url={mediaStreamUrl}
        controls={false}
        fallback={<Spinner />}
        light={true}
        width="100%"
        height="100%"
        muted={playerProps.muted}
        playing={playerProps.playing}
        playIcon={<PlayButton />}
        config={configPlayer}
        volume={playerProps.volume}
      />
      <Controls
        handleScreen={handleClickFullscreen}
        handleFS={isFullScreen}
        handlePlay={handleClickPlayPause}
        handleMuted={handleClickToggleMuted}
        volumeControl={playerProps.volume}
        handleVolume={handleVolumeChange}
        isPlaying={playerProps.playing}
      />
    </PlayerContainer>
  );
};

export default Player;
