import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 0.5vh 2vw;
  margin-bottom: 6px;
`;

export const CardImage = styled.div`
  min-width: 102px;
  max-width: 102px;
  min-height: 156px;
  max-height: 156px;
  position: relative;

  .img-banner {
    border-radius: 6px;
    pointer-events: none;
    user-select: none;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  width: 100%;
  min-height: 156px;
  max-height: 156px;
  margin-left: 1vw;
  padding-left: 2vw;
  background: #0d0d0d;
  border-radius: 12px;
  overflow: hidden;
  overflow-wrap: break-word;
  transition: all 0.5s ease-out;

  &:hover {
    box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 15px;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: #f5f5f5;

  &::selection {
    text-shadow: none;
    background: #aaffec;
    color: black;
  }

  @media (min-width: 576px) {
    font-size: 24px;
  }
`;

export const SinopsisContainer = styled.div`
  overflow: hidden;
  height: 50px;
  scrollbar-width: thin;

  &:hover {
    overflow: hidden auto;
  }
`;

export const Text = styled.p`
  padding-right: ${({ sinopsis }) => (sinopsis ? '2vw' : null)};
  margin: ${({ sinopsis }) => (sinopsis ? '0 1px 0 0' : '0 0 0 1vw')};
  color: ${({ sinopsis }) => (sinopsis ? '#bdbdbd' : '#ecfafc')};
  font-weight: ${(props) => (props.sinopsis ? '300' : '400')};
  font-size: ${(props) => (props.sinopsis ? '16px' : '14px')};
  user-select: ${(props) => (props.sinopsis ? 'auto' : 'none')};
  letter-spacing: ${(props) => (props.sinopsis ? '-1px;' : 'normal')};

  &::selection {
    text-shadow: none;
    background: #aaffec;
    color: black;
  }

  @media (min-width: 576px) {
    font-size: ${(props) => (props.sinopsis ? '18px' : '16px')};
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: max-content;
  background: #181818;
  border-radius: 6px;
  padding: 2px 10px;

  .timer-svg {
    width: 14px;
    height: 14px;
  }

  @media (min-width: 576px) {
    .timer-svg {
      width: 20px;
      height: 20px;
    }
  }
`;
