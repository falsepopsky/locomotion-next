import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

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

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
    background: #1e2023;
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

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
