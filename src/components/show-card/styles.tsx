import styled from 'styled-components';

type TextProps = {
  sinopsis?: boolean;
};

export const ContainerCard = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 0 2vw;
  gap: 0 1em;
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
  padding-left: 2vw;
  background: #0d0d0d;
  border-radius: 12px;
  overflow: hidden;
  overflow-wrap: break-word;
  transition: all 0.5s ease-out;

  &:hover {
    box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 15px;
  }

  @media (prefers-color-scheme: light) {
    background: #fff;
  }
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: 400;

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

export const Text = styled.p<TextProps>`
  padding-right: ${({ sinopsis }) => sinopsis && '2vw'};
  font-weight: 300;
  font-size: ${({ sinopsis }) => (sinopsis ? '16px' : '14px')};
  user-select: ${({ sinopsis }) => (sinopsis ? 'auto' : 'none')};

  @media (min-width: 576px) {
    font-size: 1rem;
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
  gap: 0 1em;

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

  @media (prefers-color-scheme: light) {
    background: #eaeaea;
  }
`;
