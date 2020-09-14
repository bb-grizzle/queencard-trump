import Theme from "./theme";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${reset};

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style:none;
}

  body{
    position: relative;
    background-color: ${Theme.color.bg};
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    word-break: keep-all;
  }

  a{
    color: inherit;
    text-decoration:none;
    list-style:none;
  }

  input{
    border:none;
    border-radius: 0px;
    outline:none;
    border: 0px;
    -webkit-appearance: none;
   -webkit-border-radius: 0;

  }

  textarea{
    border:none;
    border-radius: none;
    outline:none;
    border: 0px;
    font-family: inherit;
    resize: none;
    -webkit-appearance: none;
   -webkit-border-radius: 0;
  }

  select, option{
    border: 0px;
    font-family: inherit;
    padding:0;
    margin:0;
    outline:none;
  }
  
`;

export default GlobalStyles;
