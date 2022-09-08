import { createGlobalStyle, keyframes } from 'styled-components';

const nprogressSpinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const GlobalStyle = createGlobalStyle`
  ::selection {
    text-shadow: none;
    color: #0b0b0b;
    background: #d6d6d6;
  }

  html {
    scrollbar-color: #fff #0b0b0b;
    scrollbar-width: thin;
  }

  *,
  ::after,
  ::before {
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
    background: #161616;
    color: #d9d9d9;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    overflow-y: auto;
    
    @media (prefers-color-scheme: light) {
      background: #f4f4f4;
      color: #262626;
    }
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
    opacity: 1;
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
    animation: ${nprogressSpinner} 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  .transition-page {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    min-height: calc(100vh - 54px);
  }
`;

export default GlobalStyle;
