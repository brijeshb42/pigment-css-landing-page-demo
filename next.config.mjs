import { withPigment, extendTheme } from "@pigment-css/nextjs-plugin";
import { createBreakpoints } from "@mui/system";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const theme = extendTheme({
  colorSchemes: {
    light: {},
  },
  typography: {
    h1: {
      fontSize: "1.6rem",
    },
  },
  breakpoints: createBreakpoints({}),
  shouldSkipGeneratingVar(keys) {
    return keys[0] === "breakpoints";
  },
});

/** @type {import('@pigment-css/nextjs-plugin').PigmentOptions} */
const pigmentConfig = {
  theme,
};

export default withPigment(nextConfig, pigmentConfig);
