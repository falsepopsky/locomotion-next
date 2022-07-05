import styled from 'styled-components';

type MainProps = {
  page?: boolean;
  colorFondo?: boolean;
};

export const Main = styled.main<MainProps>`
  height: ${({ page }) => (page ? 'auto' : 'calc(100vh - 54px)')};
  background-color: ${({ colorFondo }) => colorFondo && 'red'};
`;

export const PlayerContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(-54px + 65vh);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: #0d0d0d;
`;

export const GuideContainer = styled.section`
  height: 35vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 4vw;
`;

export const StyledH2 = styled.h2`
  margin: 2.5em 0 0;
  padding: 0;
  align-self: center;
  text-align: center;
  font-weight: 400;
  min-width: min-content;
  max-width: max-content;

  &::selection {
    text-shadow: none;
    color: rgb(11, 11, 11);
    background: rgb(214, 214, 214) none repeat scroll 0% 0%;
  }
`;

export const StyledP = styled.p`
  margin: 16px 0;
  padding: 0;
  font-weight: 300;

  &::selection {
    text-shadow: none;
    color: rgb(11, 11, 11);
    background: rgb(214, 214, 214) none repeat scroll 0% 0%;
  }
`;