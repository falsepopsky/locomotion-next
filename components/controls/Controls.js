import styled from 'styled-components';
import { Pause, Play, VolumeSound, Fullscreen } from './../svgs/Svgs';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const ControlsContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 54px;
`;

const ControlsWrapper = styled.div`
  height: 100%;
  margin: 0;
  padding: 0 2vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  opacity: 0;

  :hover {
    opacity: 1;
  }
`;

const BtnControl = styled.button`
  margin: 0;
  padding: 4px;
  width: auto;
  min-width: 28px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  border-radius: 0.4rem;

  &:hover {
    background: hsla(0, 0%, 100%, 0.2);
  }
`;

const Controls = ({
  handleFullscreen,
  handlePlay,
  volumeControl,
  handleVolume,
  handleMuted,
  player,
}) => {
  return (
    <ControlsContainer>
      <ControlsWrapper>
        <BtnControl onClick={handlePlay}>
          {player ? <Pause /> : <Play />}
        </BtnControl>

        <BtnControl onClick={handleMuted}>
          <VolumeSound />
        </BtnControl>
        <div style={{ width: '100px', margin: '0 10px' }}>
          <Slider
            min={0}
            max={100}
            value={volumeControl * 100}
            onChange={handleVolume}
          />
        </div>
        <BtnControl onClick={handleFullscreen}>
          <Fullscreen />
        </BtnControl>
      </ControlsWrapper>
    </ControlsContainer>
  );
};

export default Controls;
