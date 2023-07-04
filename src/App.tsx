import { Router } from "./router";
import { GlobalStyle } from "./style/globalStyle";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./style/globalTheme";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <ChakraProvider>
          <GlobalStyle />
          <Router />
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
