import { createGlobalStyle } from "styled-components";

export const colors = {
  white: "#ffffff",

  black: "#000000",

  error: "#FF0000",

  green: "#35694F",
  greenLight100: "#E3F9EE",
  greenLight200: "#55A37C",
  greenDark: "#0A2819",

  boxShadow: "0px 4px 4px 0px #00000040",
  boxShadowHeader: "0px 6px 4px 0px #00000010",

  bgColor: "#f7fdfa",

  circlesColor: "#c0d9cd",
};

export const GlobalStyles = createGlobalStyle`  
  body {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    margin: 0;
    background-color: ${colors.bgColor};
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    outline: none;
  }

  a,
  button,
  input,
  label,
  select,
  textarea {
    outline: 0;
  }

  a {
    text-decoration: none;
    color: ${colors.black};
  }

  button {
    font-family: Roboto, sans-serif;
    cursor: pointer;
    border: 0;
    outline: 0;
    background: none;
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  h1 {
    margin: 0;
  }
`;
