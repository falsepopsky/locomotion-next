import { useRef, useState } from 'react';
import { findDOMNode } from 'react-dom';
import ReactPlayer from 'react-player/lazy';
import { Spinner } from './../loader/LoaderStyles';
import Controls from './../controls/Controls';
import { PlayButton } from './../svgs/Svgs';
import screenfull from 'screenfull';

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
  const reactPlayer = useRef();

  const [playerProps, SetPlayerProps] = useState({
    volume: 0.7,
    playing: false,
    muted: false,
  });

  const handleClickFullscreen = () => {
    screenfull.request(findDOMNode(reactPlayer.current));
  };

  const handleClickPlayPause = () => {
    if (!playerProps.playing) {
      SetPlayerProps({ ...playerProps, playing: true });
    } else {
      SetPlayerProps({ ...playerProps, playing: false });
    }
  };

  const handleVolumeChange = (e) => {
    SetPlayerProps({ ...playerProps, volume: parseFloat(e.target.value) });
  };

  const handleClickToggleMuted = () => {
    if (!playerProps.muted) {
      SetPlayerProps({ ...playerProps, muted: true });
    } else {
      SetPlayerProps({ ...playerProps, muted: false });
    }
  };

  return (
    <>
      <ReactPlayer
        ref={reactPlayer}
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
        handleFullscreen={handleClickFullscreen}
        handlePlay={handleClickPlayPause}
        handleMuted={handleClickToggleMuted}
        volumeControl={playerProps.volume}
        handleVolume={handleVolumeChange}
        player={playerProps.playing}
      />
    </>
  );
};

export default Player;
