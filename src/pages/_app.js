import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { PageTransition } from 'next-page-transitions';
import { darkTheme } from '../theme/loco';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const GlobalStyle = createGlobalStyle`
  html {
    scrollbar-color: #fff #0b0b0b;
    scrollbar-width: thin;
  }

  *, ::after, ::before {
  box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }
  
  ::-webkit-scrollbar-track {
    background: #0b0b0b;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 0;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #ffffffc7;
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
  .page-transition-enter-done {
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
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
    color: ${({ theme }) => theme.colors.links};
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </ThemeProvider>
    </>
  );
}
