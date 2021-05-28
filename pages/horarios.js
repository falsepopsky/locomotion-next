import Meta from '../components/meta/Meta';
import Navigation from '../components/NavigationBar';
import { Main } from '../components/Styles';

export default function Horarios() {
  return (
    <>
      <Meta
        title={'Horarios'}
        keywords={'Horarios, Locomotion, Anime, TV, TV Online, Gratis, 90s'}
        description={'Programación semanal de Locomotion TV'}
      />
      <Navigation />
      <Main>
        <p>pagina de horarios</p>
      </Main>
    </>
  );
}
