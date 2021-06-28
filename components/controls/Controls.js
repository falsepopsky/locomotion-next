import styled from 'styled-components';
import { Pause, Play, VolumeSound, Fullscreen } from './../svgs/Svgs';

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

  :hover {
    background: hsla(0, 0%, 100%, 0.2);
  }
`;

const InputVolume = styled.input`
  background: transparent;
  height: 25px;
  -webkit-appearance: none;
  margin: 0 10px;
  width: 100px;

  :focus {
    outline: none;
  }
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animation: 0.2s;
    box-shadow: none;
    background: #24e3a4;
    border-radius: 2px;
    border: none;
  }
  ::-webkit-slider-thumb {
    box-shadow: none;
    border: none;
    height: 14px;
    width: 14px;
    border-radius: 25px;
    background: #f2f2f2;
    cursor: pointer;
  }
  :focus::-webkit-slider-runnable-track {
    background: #2497e3;
  }
  ::-moz-range-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animation: 0.2s;
    box-shadow: none;
    background: #24e3a4;
    border-radius: 2px;
    border: none;
  }
  ::-moz-range-thumb {
    box-shadow: none;
    border: none;
    height: 14px;
    width: 14px;
    border-radius: 25px;
    background: #f2f2f2;
    cursor: pointer;
  }
  ::-ms-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  ::-ms-fill-lower {
    background: #2497e3;
    border: 0px solid #000000;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #000000;
  }
  ::-ms-fill-upper {
    background: #2497e3;
    border: 0px solid #000000;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #000000;
  }
  ::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #2497e3;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #a1d0ff;
    cursor: pointer;
  }
  :focus::-ms-fill-lower {
    background: #2497e3;
  }
  ::focus::-ms-fill-upper {
    background: #2497e3;
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
        <InputVolume
          type="range"
          min={0}
          max={1}
          step="any"
          value={volumeControl}
          onChange={handleVolume}
        />
        <BtnControl onClick={handleFullscreen}>
          <Fullscreen />
        </BtnControl>
      </ControlsWrapper>
    </ControlsContainer>
  );
};

export default Controls;
