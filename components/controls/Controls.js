import {
  ControlsContainer,
  ControlsWrapper,
  BtnControl,
} from './controls-styles';
import { Pause, Play, VolumeSound, Fullscreen, ExitFS } from './../svgs/Svgs';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Controls = ({
  handleScreen,
  handlePlay,
  volumeControl,
  handleVolume,
  handleMuted,
  isPlaying,
  handleFS,
}) => {
  return (
    <ControlsContainer>
      <ControlsWrapper>
        <BtnControl onClick={handlePlay}>
          {isPlaying ? <Pause /> : <Play />}
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
        <BtnControl onClick={handleScreen}>
          {handleFS ? <ExitFS /> : <Fullscreen />}
        </BtnControl>
      </ControlsWrapper>
    </ControlsContainer>
  );
};

export default Controls;
