import Meta from '../components/meta/Meta';
import Navigation from '../components/navbar/NavBar';
import { Main, Wrapper } from '../components/ui/Styles';
import Legacy from '../components/legacy/Legacy';
import Footer from '../components/footer/Footer';

const AboutSEO = {
  title: 'Acerca de Locomotion TV',
  description: 'Acerca de Locomotion TV',
};

export default function About() {
  return (
    <>
      <Meta title={AboutSEO.title} description={AboutSEO.description} />
      <Navigation />
      <Main page>
        <Wrapper>
          <Legacy />
        </Wrapper>
      </Main>
      <Footer />
    </>
  );
}
