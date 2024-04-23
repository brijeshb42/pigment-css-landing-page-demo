import { createRequire } from "module";
import { withPigment, extendTheme } from "@pigment-css/nextjs-plugin";
import { createBreakpoints } from "@mui/system";

const isEmotion = process.env.EMOTION === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EMOTION: isEmotion ? "1" : "0",
  },
};

const greyPalette = {
  50: "hsl(220, 60%, 97%)",
  100: "hsl(220, 35%, 93%)",
  200: "hsl(220, 35%, 88%)",
  300: "hsl(220, 25%, 82%)",
  400: "hsl(220, 20%, 76%)",
  500: "hsl(220, 20%, 64%)",
  600: "hsl(220, 25%, 44%)",
  700: "hsl(220, 25%, 32%)",
  800: "hsl(220, 25%, 16%)",
  900: "hsl(220, 30%, 8%)",
};

const darkModeColorTokens = {
  primary: {
    light: "hsl(210, 100%, 65%)",
    main: "hsl(210, 100%, 45%)",
    dark: "hsl(210, 100%, 35%)",
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
  grey: greyPalette,
  divider: "hsla(220, 25%, 35%, 0.3)",
  background: {
    lvl1: "hsl(220, 30%, 3%, 0.8)",
    lvl2: "hsl(220, 30%, 5%, 0.8)",
  },
  text: {
    primary: "hsl(220, 100%, 100%)",
    secondary: "hsl(220, 20%, 85%)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)",
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

const lightModeColorTokens = {
  primary: {
    light: "hsl(210, 100%, 65%)",
    main: "hsl(210, 100%, 45%)",
    dark: "hsl(210, 100%, 35%)",
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
  grey: greyPalette,
  divider: "hsla(220, 25%, 80%, 0.8)",
  background: {
    lvl1: "hsl(220, 30%, 97%, 0.8)",
    lvl2: "hsl(220, 30%, 94%, 0.8)",
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
    dark: { palette: darkModeColorTokens },
    light: {
      palette: lightModeColorTokens,
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    pxToRem(val) {
      return `${val / 16}rem`;
    },
    fontFamilyCode: 'Menlo,Consolas,"Droid Sans Mono",monospace',
    allVariants: {
      scrollMarginTop: "calc(116px + 32px)",
    },
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: "clamp(2.5rem, 1.125rem + 3.5vw, 3.5em)",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: -0.2,
    },
    h2: {
      fontFamily:
        '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontSize: "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",
      fontWeight: 600,
      lineHeight: 1.2222222222222223,
      letterSpacing: -0.2,
      color: "hsl(215, 15%, 92%)",
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    h3: {
      fontFamily:
        '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontSize: "2.25rem",
      lineHeight: 1.2222222222222223,
      letterSpacing: 0.2,
      fontWeight: 400,
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    h4: {
      fontFamily:
        '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
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
        '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontWeight: 400,
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    h6: {
      fontSize: "1.25rem",
      lineHeight: 1.5,
      fontFamily:
        '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontWeight: 500,
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    button: {
      textTransform: "initial",
      fontWeight: 500,
      fontSize: "0.875rem",
      letterSpacing: 0,
      lineHeight: 1.75,
    },
    subtitle1: {
      fontSize: "1.125rem",
      lineHeight: 1.3333333333333333,
      letterSpacing: 0,
      fontWeight: 500,
      fontFamily:
        '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      letterSpacing: 0,
      fontFamily:
        '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
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
        '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    subtitle2: {
      fontFamily:
        '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      scrollMarginTop: "calc(var(--MuiDocs-header-height) + 32px)",
    },
    overline: {
      fontFamily:
        '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
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
  },
  mixins: {
    // toolbar: {
    //   minHeight: 56,
    //   "@media (min-width:0px)": {
    //     "@media (orientation: landscape)": {
    //       minHeight: 48,
    //     },
    //   },
    //   "@media (min-width:600px)": {
    //     minHeight: 64,
    //   },
    // },
  },
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

// This doesn't work yet
const exp = isEmotion ? nextConfig : withPigment(nextConfig, pigmentConfig);

export default exp;
