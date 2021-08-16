import { useState, useEffect } from 'react';

// Components
import Meta from '../components/meta/Meta';
import Navigation from '../components/navbar/NavBar';
import { Main } from '../components/ui/Styles';
import Footer from '../components/footer/Footer';

const AboutSEO = {
  title: 'About',
  description: 'About Locomotion TV Sample',
};

export default function About(props) {
  const [loaded, setLoaded] = useState(false);
  const { pageTransitionReadyToEnter } = props;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      pageTransitionReadyToEnter();
      setLoaded(true);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [pageTransitionReadyToEnter]);

  if (!loaded) return null;

  return (
    <>
      <Meta title={AboutSEO.title} description={AboutSEO.description} />
      <Navigation />
      <Main page={'auto'}>
        <p>pagina de about</p>
      </Main>
      <Footer />
    </>
  );
}

About.defaultProps = {
  pageTransitionReadyToEnter: () => {},
};
About.pageTransitionDelayEnter = true;
