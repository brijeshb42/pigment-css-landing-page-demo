import { styled } from "@/lib/styled";

export const Card = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  padding: theme.spacing(2),
  color: (theme.vars || theme).palette.text.primary,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  border: `1px solid ${(theme.vars || theme).palette.divider}`,
  borderRadius: (theme.vars || theme).shape.borderRadius,
  transition: "all 100ms ease",
}));
