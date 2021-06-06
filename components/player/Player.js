import ReactPlayer from 'react-player/lazy';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: calc(-54px + 65vh);
`;

const Hello = () => {
  return <h1>Loading</h1>;
};

const mediaStreamUrl = 'http://51.222.85.85:81/hls/loco/index.m3u8';

const Player = () => {
  return (
    <Wrapper>
      <ReactPlayer
        url={mediaStreamUrl}
        controls={true}
        fallback={<Hello />}
        light={true}
        width="100%"
        height="100%"
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
    </Wrapper>
  );
};
export default Player;
