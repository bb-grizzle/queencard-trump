import Theme from "./theme";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${reset};

  html{
    
  }
  body{
    background-color: ${Theme.color.bg};
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
  }

  a{
    color: inherit;
    text-decoration:none;
  }
  
`;

export default GlobalStyles;
