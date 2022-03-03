import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress'; /* 
import 'nprogress/nprogress.css'; */
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

  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: #b4b4b4;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #29d, 0 0 5px #29d;
    opacity: 1.0;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: solid 2px transparent;
    border-top-color: #29d;
    border-left-color: #29d;
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`;

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
