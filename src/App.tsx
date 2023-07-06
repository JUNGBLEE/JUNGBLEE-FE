import { Router } from "./router";
import { GlobalStyle } from "./style/globalStyle";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./style/globalTheme";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      staleTime: 5000,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={baseTheme}>
          <ChakraProvider>
            <GlobalStyle />
            <Router />
            <Toaster />
          </ChakraProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
