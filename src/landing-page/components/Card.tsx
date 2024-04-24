import { styled } from "@/lib/styled";

export const Card = styled("div")(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  color: (theme.vars || theme).palette.text.primary,
  transition: "all 100ms ease",
  border: `1px solid ${(theme.vars || theme).palette.divider}`,
}));
