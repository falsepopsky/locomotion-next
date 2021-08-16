import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { PageTransition } from 'next-page-transitions';
import Loader from '../components/loader/Loader';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
  NProgress.configure({ showSpinner: false });
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
  box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: #255348;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #73ffca;
    border-radius: 0;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #73ffca;
  }

  .page-transition-enter {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  .page-transition-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity 300ms, transform 300ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0;
  }
  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 1;
    transition: opacity 400ms;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
    background: #0b0b0b;
    color: #fafafa;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    scrollbar-color: #fff #0b0b0b;
  }
`;

const theme = {
  dark: {
    'back-100': '#0b0b0b',
    'back-200': '#0d0d0d',
    'back-300': '#181818',
  },
  white: {
    'whi-100': '#f5f5f5',
    'whi-200': '#d9d9d9',
    'whi-300': '#ecfafc',
  },
};

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <PageTransition
          timeout={300}
          classNames="page-transition"
          loadingComponent={<Loader />}
          loadingDelay={500}
          loadingTimeout={0}
        >
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </ThemeProvider>
    </>
  );
}
