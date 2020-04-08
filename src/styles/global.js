import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
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
