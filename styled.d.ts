import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      links: string;
      title: string;
      sinopsis: string;
      time: string;
    };
  }
}
