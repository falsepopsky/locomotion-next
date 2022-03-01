import dynamic from 'next/dynamic';
import Meta from '../components/meta/Meta';
import Player from '../components/player/Player';
import Navigation from '../components/navbar/NavBar';
import { Main, GuideContainer } from '../components/ui/Styles';

const ContainerGuide = dynamic(() => import('../components/guide/Guide'));

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
