import Meta from '../components/meta/Meta';
import Navigation from '../components/navbar/NavBar';
import { Main } from '../components/Styles';
import { useState, useEffect } from 'react';

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
      <Main>
        <p>pagina de about</p>
      </Main>
    </>
  );
}

About.defaultProps = {
  pageTransitionReadyToEnter: () => {},
};
About.pageTransitionDelayEnter = true;
