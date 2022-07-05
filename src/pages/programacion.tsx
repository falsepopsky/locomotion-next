import Footer from 'component/footer';
import Meta from 'component/head';
import Navigation from 'component/navbar';
import { Main, StyledH2, Wrapper } from 'component/ui';
import Motion from 'component/ui/motion';

import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Week = dynamic(() => import('component/week/Week'));

const Programacion: NextPage = () => {
  return (
    <Motion>
      <Meta
        title={'Programacion semanal'}
        keywords={'Horarios, Programacion, Locomotion, Anime, TV, TV Online, Gratis, 90s'}
        description={'Programación semanal de Locomotion TV'}
      />
      <Navigation />
      <Main page>
        <Wrapper>
          <StyledH2>Programación semanal</StyledH2>
          <Week />
        </Wrapper>
      </Main>
      <Footer />
    </Motion>
  );
};

export default Programacion;
