import Theme from "./theme";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import media from "./media";
import theme from "./theme";
import { fontFamily } from "./theme/fontFamily";

const GlobalStyles = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style:none;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 

  }
  html{
    ${() => theme.layout.hideScroll};
    background-color: ${theme.colorPalette.bw[900]};
  }

  body{
    ${fontFamily.noto_sans_kr};
    background-color: ${theme.colorPalette.sub.bg};
    position: relative;
    word-break: keep-all;
    font-weight: 400;
  }

img{
  vertical-align: top;
}
  a{
    color: inherit;
    text-decoration:none;
    list-style:none;
  }

  input, select{
    border:none;
    width: 100%;
    border-radius: 0px;
    font-size: inherit;
    outline:none;
    border: 0px;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    background-color: transparent;

    &::placeholder {
      color: ${theme.color.placeholder};
    }
  }



  textarea{
    border:none;
    width: 100%;
    font-size:inherit;
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
