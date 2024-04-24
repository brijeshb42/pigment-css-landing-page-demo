import { styled } from "@/lib/styled";
import { Typography } from "./Typography";
import React from "react";

const LinkRoot = styled(Typography)<React.HTMLProps<"a">>(({ theme }) => ({
  position: "relative",
  color: theme.vars.palette.primary.main,
  textDecoration: "none",
  "&::before": {
    content: '""',
    position: "absolute",
    width: 0,
    height: 1,
    bottom: 0,
    left: 0,
    backgroundColor: theme.vars.palette.primary.light,
    opacity: 0.7,
    transition: "width 0.3s ease, opacity 0.3s ease",
  },
  "&:hover": {
    "&::before": {
      width: "100%",
      opacity: 1,
    },
  },
  ...theme.applyStyles("dark", {
    color: theme.vars.palette.primary.light,
  }),
}));

type LinkProps = React.ComponentProps<typeof LinkRoot>;

export function Link(props: LinkProps) {
  // @ts-expect-error
  return <LinkRoot {...props} as="a" />;
}
