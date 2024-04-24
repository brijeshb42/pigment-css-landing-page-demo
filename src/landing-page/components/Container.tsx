import { styled } from "@/lib/styled";

export const Container = styled.div(({ theme }) => ({
  width: "100%",
  marginLeft: "auto",
  boxSizing: "border-box",
  marginRight: "auto",
  display: "block",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  maxWidth: 1200,
}));
