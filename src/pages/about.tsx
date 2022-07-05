import Footer from 'component/footer';
import Meta from 'component/head';
import Information from 'component/information';
import Navigation from 'component/navbar';
import { Main, Wrapper } from 'component/ui';
import Motion from 'component/ui/motion';
import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <Motion>
      <Meta title={'Acerca de Locomotion TV'} description={'Todo lo relacionado a Locomotion TV en NEXT JS'} />
      <Navigation />
      <Main page>
        <Wrapper>
          <Information />
        </Wrapper>
      </Main>
      <Footer />
    </Motion>
  );
};

export default About;
