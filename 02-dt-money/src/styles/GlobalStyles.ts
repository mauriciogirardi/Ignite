import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #faf2f5;
    --shape: #ffffff;
    --red: #e52e4d;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --green: #47cc95;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
  }

  body, input, textarea, button {
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;

  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;
