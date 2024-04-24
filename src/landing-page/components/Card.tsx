import { styled } from "@/lib/styled";

export const Card = styled("div")(({ theme }) => ({
  color: (theme.vars || theme).palette.text.primary,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  border: `1px solid ${(theme.vars || theme).palette.divider}`,
  transition: "all 100ms ease",
}));
