import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0 !important;
    margin: 0 !important;
  }
  * {
    box-sizing: border-box;
  }
    :root, input { font-family: "Inter", sans-serif; }
    @supports (font-variation-settings: normal) {
      :root { font-family: "InterVar", sans-serif; font-optical-sizing: auto; 
      }
    }
`;
