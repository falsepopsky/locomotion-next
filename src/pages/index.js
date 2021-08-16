import Meta from '../components/meta/Meta';
import Player from '../components/player/Player';
import Navigation from '../components/navbar/NavBar';
import ContainerGuide from '../components/guide/Guide';
import { Main, GuideContainer } from '../components/ui/Styles';

export default function Home() {
  return (
    <>
      <Meta />
      <Navigation />
      <Main>
        <Player />
        <GuideContainer>
          <ContainerGuide />
        </GuideContainer>
      </Main>
    </>
  );
}
