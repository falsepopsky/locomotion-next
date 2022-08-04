import Meta from 'component/head';
import Information from 'component/information';
import { Main, Wrapper } from 'component/ui';
import Motion from 'component/ui/motion';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('component/footer'));
const Faq = dynamic(() => import('component/faq'));

export default function About() {
  return (
    <Motion>
      <Meta title={'Acerca de Locomotion TV'} description={'Todo lo relacionado a Locomotion TV en NEXT JS'} />
      <Main page>
        <Wrapper>
          <Information />
          <Faq />
        </Wrapper>
      </Main>
      <Footer />
    </Motion>
  );
}
