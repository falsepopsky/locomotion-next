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
    background: black;
    color: #fafafa;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    scrollbar-color: #73ffca #255348;
  }
`;

const theme = {
  colors: {
    primary: '#fafafa',
  },
  font: {
    family: {
      primary: 'Poppins',
      secondary: 'Segoe UI',
    },
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
