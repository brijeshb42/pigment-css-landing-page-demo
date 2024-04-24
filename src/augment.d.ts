import type { ExtendTheme } from "@pigment-css/react/theme";
import type { ThemeArgs } from "@pigment-css/react/theme";
import type { Breakpoints, Shape } from "@mui/system";
import type { CSSObject } from "@emotion/css";

interface CustomTheme {
  typography: {
    h1: CSSObject;
    h2: CSSObject;
    h4: CSSObject;
    h6: CSSObject;
    subtitle2: CSSObject;
    button: CSSObject;
    caption: CSSObject;
    body1: CSSObject;
    fontFamily: string;
    pxToRem(pixels: number): string;
  };
  zIndex: {
    appBar: number;
  };
  palette: {
    divider: string;
    text: {
      secondary: string;
      primary: string;
      primaryChannel: string;
    };
    background: {
      lvl1: string;
      lvl2: string;
    };
    primary: {
      main: string;
      contrastText: string;
      light: string;
      dark: string;
    };
    info: {
      light: string;
      mainChannel: string;
      main: string;
    };
    action: {
      hoverOpacity: string | number;
      selected: string;
    };
    common: {
      white: string;
    };
    grey: {
      50: string;
      100: string;
      200: string;
      300: string;
      "300Channel": string;
      700: string;
      800: string;
      900: string;
    };
  };
  breakpoints: Breakpoints;
  mixins: Recors<string, CSSObject>;
  shape: Shape;
}

declare module "@pigment-css/react/theme" {
  export interface ThemeArgs {
    theme: ExtendTheme<{
      colorScheme: "light" | "dark";
      tokens: CustomTheme;
    }> & {
      breakpoints: Breakpoints;
    };
  }
}

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {
    vars: CustomTheme;
    applyStyles: (
      colorScheme: string,
      style: CSSObject
    ) => Record<string, CSSObject>;
    spacing: (space: number) => number | string;
  }
}
