import React from 'react';
import ReactPlayer from 'react-player/lazy';

const Hello = () => {
  return <h1>Loading</h1>;
};

const Player = () => {
  return (
    <div>
      <ReactPlayer
        url="http://51.222.85.85:81/hls/loco/index.m3u8"
        controls={true}
        fallback={<Hello />}
        light={true}
      />
    </div>
  );
};
export default Player;
