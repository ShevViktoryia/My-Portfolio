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
  min-width: 360px;
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
  padding: 80px 0;
}

textarea {
  resize: none;
}

ul {
  list-style: none;
  padding: 0;
}

button {
  background: none;
  border: none;
}

p{
  font-size: 18px;
}

h1 {
  font-size: calc((100vw - 360px) / (1920 - 360) * (60 - 18) + 18px);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.2;
}

h2 {
  font-size: calc((100vw - 360px) / (1920 - 360) * (60 - 18) + 18px);
  font-weight: 600;
  line-height: 1.3;
}

h3{
  font-size: calc((100vw - 360px) / (1920 - 360) * (60 - 18) + 18px);
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
`;
