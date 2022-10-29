import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import CartContextProvider from "contexts/Cart-provider";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { GlobalStyle } from "styles/globals";

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <CartContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </CartContextProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
