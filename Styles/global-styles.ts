import Theme from "./theme";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${reset};

  body{
    background-color: ${Theme.color.bg};
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
  }

  a{
    color: inherit;
  }
  
`;

export default GlobalStyles;
