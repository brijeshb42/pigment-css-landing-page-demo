import { styled } from "@/lib/styled";

export const Divider = styled.hr(({ theme }) => ({
  all: "unset",
  display: "flex",
  height: 1,
  backgroundColor: theme.vars.palette.divider,
}));
