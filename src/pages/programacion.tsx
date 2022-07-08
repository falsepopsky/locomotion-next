import Meta from 'component/head';
import Navigation from 'component/navbar';
import { HeaderMax, Main, Wrapper } from 'component/ui';
import Motion from 'component/ui/motion';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Week = dynamic(() => import('component/week'));
const Footer = dynamic(() => import('component/footer'));

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
          <HeaderMax>Programación semanal</HeaderMax>
          <Week />
        </Wrapper>
      </Main>
      <Footer />
    </Motion>
  );
};

export default Programacion;
