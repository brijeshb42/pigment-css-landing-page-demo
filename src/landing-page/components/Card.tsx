import { styled } from "@/lib/styled";

export const Card = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  padding: theme.spacing(2),
  color: theme.vars.palette.text.primary,
  backgroundColor: theme.vars.palette.background.lvl1,
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: theme.vars.shape.borderRadius,
  transition: "all 100ms ease",
}));
