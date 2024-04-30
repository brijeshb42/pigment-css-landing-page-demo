import Box from "@pigment-css/react/Box";
import { css, styled } from "@/lib/styled";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Link } from "./components/Link";
import { Typography } from "./components/Typography";
import { cookies } from "next/headers";

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
  backgroundImage: `radial-gradient(ellipse 100% 30% at 50% -20%, ${theme.vars.palette.primary.light}, transparent)`,
  backgroundRepeat: "no-repeat",
  ...theme.applyStyles("dark", {
    backgroundImage: `radial-gradient(ellipse 100% 40% at 50% -20%, ${theme.vars.palette.primary.dark}, transparent)`,
  }),
}));

const StyledImg = styled("img")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 280,
  marginTop: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 0 24px hsl(220, 100%, 95%)",
  border: `1px solid ${theme.vars.palette.divider}`,
  backgroundSize: "cover",
  objectFit: "cover",
  objectPosition: "left top",
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 24px hsl(220, 100%, 35%, 0.2)",
  }),
  [theme.breakpoints.up("sm")]: {
    height: 600,
    objectPosition: "top",
    marginTop: theme.spacing(10),
  },
}));

export function Hero() {
  const isDarkMode = (cookies().get("theme")?.value || "dark") === "dark";
  return (
    <HeroWrapper
      id="hero"
      sx={{
        pt: { xs: 12, sm: 20 },
        pb: { xs: 4, sm: 12 },
      }}
    >
      <Box
        sx={{
          boxSizing: "border-box",
          p: { xs: 2, sm: 4 },
          maxWidth: 1200,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 2, sm: 2.5 },
        }}
      >
        <Typography
          variant="h1"
          color="primary"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 0.5, sm: 1 },
          }}
        >
          The
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
          release
        </Typography>
        <Typography
          variant="body1"
          color="secondary"
          sx={{ maxWidth: 750, textAlign: "center" }}
        >
          Explore our cutting-edge dashboard, delivering high-quality solutions
          tailored to your needs. Elevate your experience with top-tier features
          and services.
        </Typography>
        <Box
          as="form"
          action="#"
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
            sx={{ width: { xs: "100%", sm: "fit-content" } }}
          />
          <Button
            type="button"
            size="large"
            variant="contained"
            sx={{ width: { xs: "100%", sm: "fit-content" } }}
          >
            Start now
          </Button>
        </Box>
        <Typography
          variant="caption"
          color="secondary"
          fontWeight="medium"
          sx={{ textAlign: "center" }}
        >
          By clicking &quot;Start now&quot; you agree to our&nbsp;
          <Link href="#">Terms & Conditions</Link>.
        </Typography>
        <picture>
          <source
            srcSet={
              isDarkMode
                ? "/static/images/templates/templates-images/hero-dark.webp"
                : "/static/images/templates/templates-images/hero-light.webp"
            }
            type="image/webp"
          />
          <StyledImg
            alt="Product UI"
            src={
              isDarkMode
                ? "/static/images/templates/templates-images/hero-dark.jpg"
                : "/static/images/templates/templates-images/hero-light.png"
            }
          />
        </picture>
      </Box>
    </HeroWrapper>
  );
}
