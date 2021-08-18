import Meta from '../components/meta/Meta';
import Navigation from '../components/navbar/NavBar';
import { Main, Wrapper } from '../components/ui/Styles';
import Footer from '../components/footer/Footer';
import { Bar } from '../components/loader/Bar';

const AboutSEO = {
  title: 'About',
  description: 'About Locomotion TV Sample',
};

export default function About() {
  return (
    <>
      <Meta title={AboutSEO.title} description={AboutSEO.description} />
      <Navigation />
      <Main page>
        <Wrapper>
          <Bar />
        </Wrapper>
      </Main>
      <Footer />
    </>
  );
}
