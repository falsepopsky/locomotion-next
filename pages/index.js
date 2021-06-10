import Meta from '../components/meta/Meta';
import Player from '../components/player/Player';
import Navigation from '../components/navbar/NavBar';
import ContainerGuide from '../components/ContainerGuide';
import { Main, PlayerContainer, GuideContainer } from '../components/Styles';

export default function Home() {
  return (
    <>
      <Meta />
      <Navigation />
      <Main>
        <PlayerContainer>
          <Player />
        </PlayerContainer>
        <GuideContainer>
          <ContainerGuide />
        </GuideContainer>
      </Main>
    </>
  );
}
