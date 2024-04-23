import { styled } from "@/lib/styled";

export const Button = styled.button<{
  color: "primary";
  variant: "outlined" | "contained";
  size: "medium" | "large";
}>(({ theme }) => ({
  all: "unset",
  userSelect: "none",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  borderRadius: "999px",
  transition: "all 80ms ease-in",
  variants: [
    {
      props: { size: "medium" },
      style: {
        height: theme.spacing(4),
        paddingInline: theme.spacing(1.2),
      },
    },
    {
      props: { size: "large" },
      style: {
        height: theme.spacing(5),
        paddingInline: theme.spacing(1.5),
      },
    },
    {
      props: { variant: "outlined" },
      style: {
        border: `1px solid ${theme.vars.palette.divider}`,
        "&:hover": {
          backgroundColor: theme.vars.palette.grey[50],
          borderColor: theme.vars.palette.divider,
        },
        ...theme.applyStyles("dark", {
          color: theme.vars.palette.grey[200],
          "&:hover": {
            backgroundColor: theme.vars.palette.grey[800],
          },
        }),
      },
    },
    {
      props: { variant: "contained" },
      style: {
        backgroundColor: theme.vars.palette.primary.main,
        backgroundImage:
          "linear-gradient(to bottom, hsla(210, 100%, 60%, 0.8), hsl(210, 100%, 40%))",
        color: theme.vars.palette.grey[50],
        "&:hover": {
          backgroundColor: theme.vars.palette.primary.dark,
          backgroundImage: "none",
        },
      },
    },
  ],
  ...theme.typography.button,
}));
