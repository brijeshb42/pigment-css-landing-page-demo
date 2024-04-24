import Box from "@pigment-css/react/Box";
import { styled } from "@/lib/styled";
import { Button } from "./components/Button";
import { Sitemark } from "./Sitemark";
import { ToggleThemeButton } from "./ToggleThemeButton";

const HeaderWrapper = styled.header(({ theme }) => ({
  boxSizing: "border-box", // Prevent padding issue with the Modal and fixed positioned AppBar.
  width: "100%",
  padding: theme.spacing(3),
  position: "fixed",
  top: 0,
  zIndex: theme.zIndex.appBar,
  display: "flex",
  "@media print": {
    // Prevent the app bar to be visible on each printed page.
    position: "absolute",
  },
}));

const Toolbar = styled.nav(({ theme }) => ({
  maxWidth: 1200,
  width: "100%",
  margin: "auto",
  padding: theme.spacing(2),
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "999px",
  backgroundColor: theme.vars.palette.background.lvl2,
  border: `1px solid ${theme.vars.palette.divider}`,
  backdropFilter: "blur(24px)",
  boxShadow: "0 8px 24px hsla(210, 100%, 80%, 0.1)",
  ...theme.applyStyles("dark", {
    boxShadow: "0 8px 24px hsla(210, 100%, 25%, 0.1)",
  }),
}));

const NavItem = styled.a(({ theme }) => ({
  cursor: "pointer",
  height: theme.spacing(4),
  paddingInline: theme.spacing(1.2),
  display: "inline-flex",
  alignItems: "center",
  borderRadius: "999px",
  border: "1px solid transparent",
  color: theme.vars.palette.grey[700],
  transition: "all 80ms ease-in",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: theme.vars.palette.grey[50],
    borderColor: theme.vars.palette.divider,
  },
  ...theme.applyStyles("dark", {
    color: theme.vars.palette.grey[200],
    "&:hover": {
      backgroundColor: theme.vars.palette.grey[800],
    },
  }),
  ...theme.typography.button,
}));

export function Header() {
  return (
    <HeaderWrapper>
      <Toolbar>
        <Box
          as="div"
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Sitemark />
          <Box as="nav" sx={{ display: { xs: "none", md: "flex" } }}>
            <NavItem href="#features">Features</NavItem>
            <NavItem href="#testimonials">Testimonials</NavItem>
            <NavItem href="#highlights">Highlights</NavItem>
            <NavItem href="#pricing">Pricing</NavItem>
            <NavItem href="#faq">FAQ</NavItem>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 0.5,
          }}
        >
          <ToggleThemeButton />
          <Button color="primary" variant="outlined" size="medium">
            Sign in
          </Button>
          <Button color="primary" variant="contained" size="medium">
            Sign up
          </Button>
        </Box>
      </Toolbar>
    </HeaderWrapper>
  );
}
