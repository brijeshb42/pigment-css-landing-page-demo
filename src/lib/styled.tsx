import { css as baseCss } from "@emotion/css";
import { Theme } from "@emotion/react";
import { createBreakpoints } from "@mui/system";

type BaseCssArg = Parameters<typeof baseCss>;
type CssArg =
  | BaseCssArg[number]
  | ((themeArgs: { theme: Theme }) => BaseCssArg[number]);

const baseTheme: Theme["vars"] = {
  typography: {
    h1: {
      fontSize: "1.6rem",
      fontWeight: 700,
    },
    h2: {},
    h4: {},
    h6: {},
    button: {
      textTransform: "initial",
      fontWeight: 700,
      letterSpacing: 0,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    caption: {},
    body1: {},
    subtitle2: {},
    fontFamily: "",
    pxToRem(pixels) {
      return `${pixels / 16}rem`;
    },
  },
  palette: {
    divider: "",
    text: {
      secondary: "",
      primary: "",
      primaryChannel: "",
    },
    background: {
      lvl1: "",
      lvl2: "",
    },
    primary: {
      dark: "",
      main: "",
      contrastText: "",
      light: "",
    },
    info: {
      light: "",
      main: "rgba(48, 58, 80, 0.3)",
      mainChannel: "rgba(48, 58, 80, 0.3)",
    },
    action: {
      selected: "",
      hoverOpacity: 0.08,
    },
    grey: {
      50: "",
      100: "",
      200: "",
      300: "",
      "300Channel": "",
      700: "",
      800: "",
      900: "",
    },
    common: {
      white: "",
    },
  },
  zIndex: {
    appBar: 1000,
  },
  breakpoints: createBreakpoints({}),
  mixins: {
    toolbar: {
      minHeight: 56,
      "@media (min-width:0px)": {
        "@media (orientation: landscape)": {
          minHeight: 48,
        },
      },
      "@media (min-width:600px)": {
        minHeight: 64,
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
};

export const theme: Theme = {
  vars: baseTheme,
  ...baseTheme,
  applyStyles(scheme, obj) {
    return {
      [`@media (prefers-color-scheme: ${scheme})`]: obj,
    };
  },
  spacing(space) {
    return space * 8;
  },
};

export function css(...args: CssArg[]) {
  const newArgs = args.map((arg) =>
    typeof arg === "function" ? arg({ theme }) : arg
  );
  return baseCss(...newArgs);
}
export { styled, keyframes } from "@pigment-css/react";
