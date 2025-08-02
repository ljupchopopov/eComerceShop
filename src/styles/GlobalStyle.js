// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  @media screen and (max-width: 768px) {
    html, body {
      max-width: 430px;
      overflow-x: hidden;
      margin: 0 auto;
    }
  }
`;

export default GlobalStyle;
