import Box from "@pigment-css/react/Box";

import { styled } from "@/lib/styled";
import { Sitemark } from "./Sitemark";

const HeaderEl = styled.header(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  boxSizing: "border-box", // Prevent padding issue with the Modal and fixed positioned AppBar.
  flexShrink: 0,
  position: "fixed",
  zIndex: theme.zIndex.appBar,
  top: 0,
  left: "auto",
  right: 0,
  backgroundColor: "transparent",
  "@media print": {
    // Prevent the app bar to be visible on each printed page.
    position: "absolute",
  },
  "--AppBar-background": theme.vars.palette.primary.main,
  "--AppBar-color": theme.vars.palette.primary.contrastText,
  marginTop: 16,
  backgroundImage: "none",

  alignItems: "center",
  justifyContent: "space-between",
  backdropFilter: "blur(24px)",
  maxHeight: 40,
}));

// @ts-expect-error
const Container = styled.div(() => ({
  display: "block",
  boxSizing: "border-box",
  width: "100%",
  marginInline: "auto",
  paddingInline: 16,
  "@media (min-width: 600px)": {
    paddingInline: 24,
  },
  "@media (min-width: 1200px)": {
    maxWidth: 1200,
  },
}));

const Toolbar = styled.div(
  ({ theme }) => ({
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "999px",
    backgroundColor: "hsla(220, 60%, 99%, 0.6)",
    backdropFilter: "blur(24px)",
    minHeight: 48,
    maxHeight: 40,
    border: "1px solid",
    paddingInline: theme.spacing(2),
    borderColor: theme.vars.palette.divider,
    boxShadow:
      "0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)",
    ...theme.applyStyles("dark", {
      backgroundColor: "hsla(220, 0%, 0%, 0.7)",
      boxShadow:
        "0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)",
    }),
    [theme.breakpoints.up("sm")]: {
      paddingInline: theme.spacing(3),
    },
  }),
  ({ theme }) => theme.mixins.toolbar
);

const NavItem = styled.a(
  ({ theme }) => theme.typography.button,
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    paddingInline: 8,
    fontWeight: 500,
    height: "2rem",
    cursor: "pointer",
    borderRadius: theme.vars.shape.borderRadius,
    color: theme.vars.palette.grey[700],
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: `hsla(${theme.vars.palette.grey["300Channel"]}, 0.3)`,
    },
    ...theme.applyStyles("dark", {
      color: theme.vars.palette.grey[200],
    }),
  })
);

const Button = styled("button", {})<{
  color: "primary";
  variant: "text" | "contained";
}>(
  ({ theme }) => theme.typography.button,
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    paddingInline: 8,
    fontWeight: 500,
    cursor: "pointer",
    borderRadius: theme.vars.shape.borderRadius,
    color: theme.vars.palette.grey[700],
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    ...theme.applyStyles("dark", {
      color: theme.vars.palette.grey[200],
    }),
  })
);

export function Header() {
  return (
    <HeaderEl>
      <Container>
        <Toolbar>
          {/* @ts-expect-error */}
          <Box
            as="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              px: 0,
            }}
          >
            <Sitemark />
            {/* @ts-expect-error */}
            <Box as="nav" sx={{ display: { xs: "none", md: "flex" } }}>
              <NavItem href="#features">Features</NavItem>
              <NavItem href="#testimonials">Testimonials</NavItem>
              <NavItem href="#highlights">Highlights</NavItem>
              <NavItem href="#pricing">Pricing</NavItem>
              <NavItem href="#faq">FAQ</NavItem>
            </Box>
          </Box>
          {/* @ts-expect-error */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <Button color="primary" variant="text">
              Sign in
            </Button>
            <Button color="primary" variant="contained">
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </HeaderEl>
  );
}
