import styled from 'styled-components';

type MainProps = {
  page?: boolean;
};

type BoxProps = {
  img?: boolean;
};

const Main = styled.main<MainProps>`
  height: ${({ page }) => (page ? 'auto' : 'calc(100vh - 54px)')};
`;

const PlayerContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(-54px + 65vh);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: #0d0d0d;

  @media (prefers-color-scheme: light) {
    background: #fff;
  }
`;

const GuideContainer = styled.section`
  height: 35vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 4vw;
`;

const BoxSection = styled.section<BoxProps>`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  margin: ${({ img }) => img && '6vh 0 2vh'};
  padding: ${({ img }) => (img ? null : '2vh 0')};
  height: ${({ img }) => img && '200px'};
  gap: 2em 0;

  @media (prefers-color-scheme: light) {
    filter: ${({ img }) => img && 'drop-shadow(0 0.1rem 0.20rem rgb(26, 26, 26))'};
  }
`;

const HeaderMax = styled.h2`
  margin: 2em 0 1.5em;
  align-self: center;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  min-width: min-content;
  max-width: max-content;
`;

const HeaderMin = styled.h3`
  max-width: max-content;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 0.024em;
  background-image: linear-gradient(-45deg, #ffc796 0%, #ff6b95 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media (prefers-color-scheme: light) {
    background-image: linear-gradient(-45deg, #2575fc 0%, #6a11cb 100%);
  }
`;

const Paragraph = styled.p`
  margin: 0 0 1.1em;
  font-weight: 400;
`;

const Ol = styled.ol`
  list-style-type: disc;
  list-style-position: inside;
  list-style-image: none;
`;

export { Main, PlayerContainer, GuideContainer, Wrapper, Ol, Paragraph, HeaderMin, HeaderMax, BoxSection };
