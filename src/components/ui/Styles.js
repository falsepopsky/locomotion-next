import styled from 'styled-components';

export const Main = styled.main`
  height: ${({ page }) => (page ? 'auto' : 'calc(100vh - 54px)')};
`;

export const PlayerContainer = styled.section`
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
  padding: 0 5vw;
`;

export const StyledH2 = styled.h2`
  margin: 2.5em 0 0;
  padding: 0;
  text-align: center;
  font-weight: 400;
`;
