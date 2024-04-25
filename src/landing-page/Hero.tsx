import Box from "@pigment-css/react/Box";
import { css, styled } from "@/lib/styled";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Link } from "./components/Link";
import { Typography } from "./components/Typography";

export const visuallyHidden = css({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});

const HeroWrapper = styled.section(({ theme }) => ({
  margin: "0 auto",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: `radial-gradient(ellipse 100% 70% at 50% -20%, ${theme.vars.palette.primary.light}, transparent)`,
  backgroundRepeat: "no-repeat",
  ...theme.applyStyles("dark", {
    backgroundImage: `radial-gradient(ellipse 100% 70% at 50% -20%, ${theme.vars.palette.primary.dark}, transparent)`,
  }),
}));

export function Hero() {
  return (
    <HeroWrapper
      id="hero"
      sx={{
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Box
        sx={{
          p: 4,
          width: { xs: "100%", sm: "50%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2.5,
        }}
      >
        <Typography
          variant="h1"
          color="primary"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          The&nbsp;
          <Box
            as="span"
            sx={({ theme }) => ({
              fontSize: "inherit",
              color: theme.vars.palette.primary.main,
              ...theme.applyStyles("dark", {
                color: theme.vars.palette.primary.light,
              }),
            })}
          >
            best&nbsp;product
          </Box>
          &nbsp;release
        </Typography>
        <Typography
          variant="body1"
          color="secondary"
          sx={{ maxWidth: 750, textAlign: { sm: "left", md: "center" } }}
        >
          Explore our cutting-edge dashboard, delivering high-quality solutions
          tailored to your needs. Elevate your experience with top-tier features
          and services.
        </Typography>
        <Box
          as="form"
          action="#"
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: 1,
          }}
        >
          <Box
            as="label"
            htmlFor="email-hero"
            className={visuallyHidden}
            sx={{
              display: "block",
              transformOrigin: "top left",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%",
            }}
          >
            Email
          </Box>
          <Input
            id="email-hero"
            autoComplete="off"
            aria-label="Enter your email address"
            placeholder="Your email address"
          />
          <Button size="large" variant="contained" type="button">
            Start now
          </Button>
        </Box>
        <Typography
          variant="caption"
          color="secondary"
          fontWeight="regular"
          sx={{ maxWidth: 750 }}
        >
          By clicking &quot;Start now&quot; you agree to our&nbsp;
          <Link href="#">Terms & Conditions</Link>.
        </Typography>
      </Box>
    </HeroWrapper>
  );
}
