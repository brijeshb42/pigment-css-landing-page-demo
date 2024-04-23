import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/lib/styled";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
}
