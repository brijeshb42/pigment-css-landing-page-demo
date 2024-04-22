import { createRequire } from "module";
import { withPigment, extendTheme } from "@pigment-css/nextjs-plugin";
import { createBreakpoints } from "@mui/system";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const darkModePalette = {
  primary: {
    light: "hsl(210, 100%, 65%)",
    main: "hsl(210, 98%, 48%)",
    dark: "hsl(210, 100%, 16%)",
    contrastText: "hsl(210, 100%, 97%)",
  },
  info: {
    light: "hsl(210, 98%, 42%)",
    main: "hsl(210, 100%, 35%)",
    dark: "hsl(210, 100%, 21%)",
    contrastText: "hsl(210, 100%, 65%)",
  },
  warning: {
    light: "hsl(45, 90%, 40%)",
    main: "hsl(45, 90%, 35%)",
    dark: "hsl(45, 94%, 20%)",
    contrastText: "#fff",
  },
  error: {
    light: "hsl(0, 90%, 40%)",
    main: "hsl(0, 90%, 30%)",
    dark: "hsl(0, 94%, 20%)",
    contrastText: "#fff",
  },
  success: {
    light: "hsl(120, 44%, 53%)",
    main: "hsl(120, 59%, 30%)",
    dark: "hsl(120, 75%, 16%)",
    contrastText: "#fff",
  },
  grey: {
    50: "hsl(220, 60%, 99%)",
    100: "hsl(220, 35%, 94%)",
    200: "hsl(220, 35%, 88%)",
    300: "hsl(220, 25%, 80%)",
    "300Channel": "220, 25%, 80%",
    400: "hsl(220, 20%, 65%)",
    500: "hsl(220, 20%, 42%)",
    600: "hsl(220, 25%, 35%)",
    700: "hsl(220, 25%, 25%)",
    800: "hsl(220, 25%, 10%)",
    900: "hsl(220, 30%, 5%)",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  divider: "hsla(220, 25%, 35%, 0.3)",
  background: {
    default: "hsl(220, 30%, 3%)",
    paper: "hsl(220, 30%, 5%)",
  },
  text: {
    primary: "hsl(0, 0%, 100%)",
    secondary: "hsl(220, 20%, 65%)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)",
  },
  action: {
    selected: "hsla(210, 100%, 16%, 0.2)",
    active: "#fff",
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
  common: {
    black: "#000",
    white: "#fff",
  },
  secondary: {
    main: "#ce93d8",
    light: "#f3e5f5",
    dark: "#ab47bc",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
};

const lightModePalette = {
  primary: {
    light: "hsl(210, 100%, 80%)",
    main: "hsl(210, 98%, 42%)",
    dark: "hsl(210, 100%, 16%)",
    contrastText: "hsl(210, 100%, 97%)",
  },
  info: {
    light: "hsl(210, 100%, 90%)",
    main: "hsl(210, 100%, 65%)",
    dark: "hsl(210, 98%, 55%)",
    contrastText: "hsl(220, 60%, 99%)",
  },
  warning: {
    light: "hsl(45, 90%, 65%)",
    main: "hsl(45, 90%, 40%)",
    dark: "hsl(45, 95%, 16%)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  error: {
    light: "hsl(0, 90%, 65%)",
    main: "hsl(0, 90%, 40%)",
    dark: "hsl(0, 95%, 16%)",
    contrastText: "#fff",
  },
  success: {
    light: "hsl(120, 61%, 77%)",
    main: "hsl(120, 44%, 53%)",
    dark: "hsl(120, 84%, 10%)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  grey: {
    50: "hsl(220, 60%, 99%)",
    100: "hsl(220, 35%, 94%)",
    200: "hsl(220, 35%, 88%)",
    300: "hsl(220, 25%, 80%)",
    400: "hsl(220, 20%, 65%)",
    500: "hsl(220, 20%, 42%)",
    600: "hsl(220, 25%, 35%)",
    700: "hsl(220, 25%, 25%)",
    800: "hsl(220, 25%, 10%)",
    900: "hsl(220, 30%, 5%)",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  divider: "hsla(220, 25%, 80%, 0.5)",
  background: {
    default: "hsl(0, 0%, 100%)",
    paper: "hsl(220, 35%, 94%)",
  },
  text: {
    primary: "hsl(220, 25%, 10%)",
    secondary: "hsl(220, 25%, 35%)",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  action: {
    selected: "hsla(210, 100%, 80%, 0.2)",
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
  common: {
    black: "#000",
    white: "#fff",
  },
  secondary: {
    main: "#9c27b0",
    light: "#ba68c8",
    dark: "#7b1fa2",
    contrastText: "#fff",
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
};

const theme = extendTheme({
  colorSchemes: {
    dark: { palette: darkModePalette },
    light: {
      palette: lightModePalette,
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily:
      '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontFamilyCode: 'Menlo,Consolas,"Droid Sans Mono",monospace',
    fontFamilyTagline:
      '"General Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontFamilySystem:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontWeightSemiBold: 600,
    fontWeightExtraBold: 800,
    h1: {
      fontFamily:
        '"General Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontSize: "clamp(2.5rem, 1.125rem + 3.5vw, 3.5em)",
      fontWeight: 600,
      lineHeight: 1.1142857142857143,
      letterSpacing: -0.2,
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    h2: {
      fontFamily:
        '"General Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontSize: "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",
      fontWeight: 600,
      lineHeight: 1.2222222222222223,
      letterSpacing: -0.2,
      color: "hsl(215, 15%, 92%)",
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    h3: {
      fontFamily:
        '"General Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontSize: "2.25rem",
      lineHeight: 1.2222222222222223,
      letterSpacing: 0.2,
      fontWeight: 400,
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    h4: {
      fontFamily:
        '"General Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontSize: "1.875rem",
      lineHeight: 1.5,
      letterSpacing: 0.2,
      fontWeight: 400,
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    h5: {
      fontSize: "1.5rem",
      lineHeight: 1.5,
      letterSpacing: 0.1,
      color: "hsl(210, 100%, 70%)",
      fontFamily:
        '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontWeight: 400,
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    h6: {
      fontSize: "1.25rem",
      lineHeight: 1.5,
      fontFamily:
        '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontWeight: 500,
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    button: {
      textTransform: "initial",
      fontWeight: 700,
      letterSpacing: 0,
      fontFamily:
        '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontSize: "0.875rem",
      lineHeight: 1.75,
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    subtitle1: {
      fontSize: "1.125rem",
      lineHeight: 1.3333333333333333,
      letterSpacing: 0,
      fontWeight: 500,
      fontFamily:
        '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: 0,
      fontFamily:
        '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontWeight: 400,
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      letterSpacing: 0,
      fontFamily:
        '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontWeight: 400,
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    caption: {
      display: "inline-block",
      fontSize: "0.75rem",
      lineHeight: 1.5,
      letterSpacing: 0,
      fontWeight: 700,
      fontFamily:
        '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    allVariants: {
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    subtitle2: {
      fontFamily:
        '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    overline: {
      fontFamily:
        '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      textTransform: "uppercase",
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit",
    },
    pxToRem(val) {
      return `${val / 16}rem`;
    },
  },
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
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  breakpoints: createBreakpoints({}),
  shouldSkipGeneratingVar(keys) {
    return ["breakpoints", "mixins", "transitions"].includes(keys[0]);
  },
  getColorSchemeSelector(scheme) {
    if (scheme === "dark") {
      return "@media (prefers-color-scheme: dark)";
    }
    return ":root";
  },
  spacing(space) {
    return space * 8;
  },
});

const require = createRequire(import.meta.url);

/** @type {import('@pigment-css/nextjs-plugin').PigmentOptions} */
const pigmentConfig = {
  theme,
  displayName: true,
  tagResolver(source, tag) {
    if (source === "@/lib/styled") {
      return require.resolve(`@pigment-css/react/exports/${tag}`);
    }
    return null;
  },
};

export default withPigment(nextConfig, pigmentConfig);
