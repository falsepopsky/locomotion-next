import { useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Spinner } from './../loader/LoaderStyles';
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
  const reactPlayer = useRef();
  const [playing, SetPlaying] = useState(false);
  const [volume, SetVolume] = useState(0.7);

  const handlePlayPause = () => {
    SetPlaying(!playing);
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
        playing={playing}
        playIcon={<PlayButton />}
        config={configPlayer}
      />
      <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <button onClick={() => handlePlayPause()}>
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>
    </>
  );
};

export default Player;
