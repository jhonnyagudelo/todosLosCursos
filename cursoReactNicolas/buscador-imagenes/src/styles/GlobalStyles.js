import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body  {
    margin:0;
    padding:0;
  };

  html {
    box-sizing:content-box;
  };
  html * {
    box-sizing:inherit;
  };

  header input {
  outline:none;
    border: solid 1px #eee;
    padding:10px 5px;
    border-radius:4px;
  }


`;

export { GlobalStyle };
