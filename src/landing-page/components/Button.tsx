import { styled } from "@/lib/styled";

export const Button = styled("button", {
  shouldForwardProp(propName) {
    return !["color", "variant", "size", "fullWidth"].includes(propName);
  },
})<{
  color?: "primary";
  variant: "plain" | "outlined" | "contained";
  size: "medium" | "large";
  fullWidth?: boolean;
}>(({ theme }) => ({
  all: "unset",
  userSelect: "none",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  transition: "all 80ms ease-in",
  "&:focus-visible": {
    outline: `3px solid ${theme.vars.palette.primary.main}`,
    outlineOffset: 2,
  },
  variants: [
    ...(["primary", "info"] as const).map((colorPaletteKey) => ({
      props: {
        color: colorPaletteKey,
      },
      style: {
        color: theme.vars.palette[colorPaletteKey].main,
      },
    })),
    {
      props: { size: "medium" },
      style: {
        height: theme.spacing(4),
        padding: theme.spacing(1.2),
      },
    },
    {
      props: { size: "large" },
      style: {
        height: theme.spacing(5),
        padding: theme.spacing(1.5),
      },
    },
    {
      props: { variant: "outlined" },
      style: {
        border: "1px solid",
        borderColor: theme.vars.palette.divider,
        color: theme.vars.palette.primary.dark,
        "&:hover": {
          backgroundColor: theme.vars.palette.grey[100],
          borderColor: theme.vars.palette.grey[400],
        },
        ...theme.applyStyles("dark", {
          color: theme.vars.palette.primary.light,
          borderColor: theme.vars.palette.grey[800],
          "&:hover": {
            backgroundColor: theme.vars.palette.grey[800],
            borderColor: theme.vars.palette.grey[600],
          },
        }),
      },
    },
    {
      props: { variant: "plain" },
      style: {
        color: theme.vars.palette.primary.dark,
        "&:hover": {
          backgroundColor: theme.vars.palette.grey[50],
        },
        ...theme.applyStyles("dark", {
          color: theme.vars.palette.primary.light,
          "&:hover": {
            backgroundColor: theme.vars.palette.grey[800],
          },
        }),
      },
    },
    {
      props: { variant: "contained" },
      style: {
        color: theme.vars.palette.grey[50],
        backgroundColor: theme.vars.palette.primary.main,
        backgroundImage:
          "linear-gradient(to bottom, hsla(210, 100%, 60%, 0.8), hsl(210, 100%, 40%))",
        "&:hover": {
          backgroundColor: theme.vars.palette.primary.dark,
          backgroundImage: "none",
        },
      },
    },
    {
      props: { fullWidth: true },
      style: {
        width: "100%",
      },
    },
  ],
  ...theme.typography.button,
}));
