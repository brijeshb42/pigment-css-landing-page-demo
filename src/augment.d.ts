import type {} from "@pigment-css/react/theme";
import type { ExtendTheme } from "@pigment-css/react/theme";
import { Breakpoints } from "@mui/system";

declare module "@pigment-css/react/theme" {
  export interface ThemeArgs {
    theme: ExtendTheme<{
      colorScheme: "light" | "dark";
      tokens: {
        typography: {
          h1: {
            fontSize: string;
          };
        };
      };
    }> & {
      breakpoints: Breakpoints;
    };
  }
}
