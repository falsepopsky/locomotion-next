import Meta from '../components/meta/Meta';
import Navigation from '../components/navbar/NavBar';
import { Main } from '../components/Styles';

const AboutSEO = {
  title: 'About',
  description: 'About Locomotion TV Sample',
};

export default function About() {
  return (
    <>
      <Meta title={AboutSEO.title} description={AboutSEO.description} />
      <Navigation />
      <Main>
        <p>pagina de about</p>
      </Main>
    </>
  );
}
