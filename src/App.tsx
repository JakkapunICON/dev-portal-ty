import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ConfigProvider } from "antd";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { themeObject } from "src/styles/themes/themeVariables";

import GlobalStyle from "src/styles/GlobalStyle";
import Routes from "./routers";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HelmetProvider>
        <ConfigProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ConfigProvider>
      </HelmetProvider>
    </>
  );
};

export default App;
