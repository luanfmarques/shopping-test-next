import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    text-decoration: none;
    box-sizing: inherit;
    font-family: "Open Sans", sans-serif;
  }

`;
