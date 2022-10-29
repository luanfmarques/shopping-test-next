import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/globals";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import CartContextProvider from "contexts/Cart-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </CartContextProvider>
    </>
  );
}
