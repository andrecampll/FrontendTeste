import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  @media (max-width: 576px) {
    html {
      p {
        font-size: 1rem !important;
      }

      h1 {
        font-size: 2rem !important;
      }

      h2 {
        font-size: 0.76em !important;
      }

    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 54%;
    }
  }

  body {
    font: 400 14px Nunito Sans, sans-serif;
    background: #0a0a0a;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font: 400 18px Nunito Sans, sans-serif;
    border: 0;
  }

  span {
    text-decoration: underline;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
