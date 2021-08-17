import Meta from '../components/meta/Meta';
import Navigation from '../components/navbar/NavBar';
import { Main, Wrapper, StyledH2 } from '../components/ui/Styles';
import Week from '../components/week/Week';

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
        <Wrapper page>
          <StyledH2>Programación semanal</StyledH2>

          <Week />
        </Wrapper>
      </Main>
    </>
  );
}
