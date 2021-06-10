import { useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Spinner } from './../loader/LoaderStyles';
import { PlayButton } from './../svgs/Svgs';

const mediaStreamUrl = 'http://51.222.85.85:81/hls/loco/index.m3u8';

const Player = () => {
  return (
    <>
      <ReactPlayer
        url={mediaStreamUrl}
        controls={true}
        fallback={<Spinner />}
        light={true}
        width="100%"
        height="100%"
        playIcon={<PlayButton />}
        config={{
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
        }}
      />
      <div style={{ position: 'absolute', bottom: 0, width: '100%' }}></div>
    </>
  );
};
export default Player;
