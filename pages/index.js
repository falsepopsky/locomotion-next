import Meta from '../components/meta/Meta';
import Player from '../components/Player';
import Navigation from '../components/NavigationBar';
import ContainerGuide from '../components/ContainerGuide';
import { Main } from '../components/Styles';

export default function Home() {
  return (
    <>
      <Meta />
      <Navigation />
      <Main>
        <Player />
        <ContainerGuide />
      </Main>
    </>
  );
}
