import { styled } from "@/lib/styled";

export const Input = styled.input(({ theme }) => ({
  all: "unset",
  position: "relative",
  borderRadius: "999px",
  height: theme.spacing(5),
  maxHeight: theme.spacing(5),
  paddingInline: theme.spacing(1.5),
  border: `1px solid ${theme.vars.palette.divider}`,
  transition: "all 80ms ease-in",
  fontSize: "1rem",
  backgroundColor: theme.vars.palette.grey[50],
  "&:hover": {
    backgroundColor: theme.vars.palette.grey[100],
  },
  "&:focus": {
    outlineOffset: 2,
    borderColor: (theme.vars || theme).palette.primary.main,
    outline: `3px solid ${theme.vars.palette.primary.main}`,
  },
  ...theme.applyStyles("dark", {
    backgroundColor: theme.vars.palette.grey[900],
    "&:hover": {
      backgroundColor: theme.vars.palette.grey[800],
    },
    "&:focus": {
      borderColor: (theme.vars || theme).palette.primary.main,
      outlineColor: (theme.vars || theme).palette.primary.main,
    },
  }),
}));
