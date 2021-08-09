import styled from 'styled-components';

export const Main = styled.main`
  height: ${({ page }) => (page ? page : 'calc(100vh - 54px)')};
`;

export const PlayerContainer = styled.section`
  position: relative;
  width: 100%;
  height: calc(-54px + 65vh);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const GuideContainer = styled.section`
  height: 35vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const RegularSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
`;
