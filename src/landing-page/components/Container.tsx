import { styled } from "@/lib/styled";

export const Container = styled.div(({ theme }) => ({
  boxSizing: "border-box",
  maxWidth: 1200,
  width: "100%",
  margin: "0 auto",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(1.5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(12),
    gap: theme.spacing(4),
  },
}));
