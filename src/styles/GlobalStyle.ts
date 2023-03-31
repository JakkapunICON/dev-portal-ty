import { createGlobalStyle } from "styled-components";
import { resetCss } from "./resetCss";
import { lightThemeVariables, commonThemeVariables, BASE_COLORS } from "./themes/themeVariables";
export default createGlobalStyle`

  ${resetCss}

  [data-theme='light'],
  :root {
    ${lightThemeVariables}
  }

  
  :root {
    ${commonThemeVariables}
  } 
`;
