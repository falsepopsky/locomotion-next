import React from 'react';
import ReactPlayer from 'react-player/lazy';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: calc(-54px + 65vh);
`;

const Hello = () => {
  return <h1>Loading</h1>;
};

const Player = () => {
  return (
    <Wrapper>
      <ReactPlayer
        url="http://51.222.85.85:81/hls/loco/index.m3u8"
        controls={true}
        fallback={<Hello />}
        light={true}
        width="100%"
        height="100%"
      />
    </Wrapper>
  );
};
export default Player;
