import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  paddimg: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: "Exo 2", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${theme.colors.primary};
  color: ${theme.colors["static-white"]};
  cursor: default;
  min-width: 320px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

a {
  text-decoration: none;
  font-size: 18px;
}

section {
  padding: 30px 0;
}

textarea {
  resize: none;
}

ul {
  list-style: none;
}

button {
  background: none;
  border: none;
}

p{
  font-size: 18px;
}

`;
