import Box from "@pigment-css/react/Box";
import { css, styled } from "@/lib/styled";

const visuallyHidden = css({
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

const Link = styled("a")(({ theme }) => ({
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

export function Hero() {
  return (
    <Box
      as="div"
      id="hero"
      className={css(({ theme }) => ({
        width: "100%",
        backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, ${theme.vars.palette.info.main}, transparent)`,
        backgroundRepeat: "no-repeat",
        ...theme.applyStyles("dark", {
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, ${theme.vars.palette.primary.dark}, transparent)`,
        }),
      }))}
    >
      {/* @ts-expect-error */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 1200,
          margin: "0 auto",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        {/* @ts-expect-error */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", sm: "70%" },
          }}
        >
          <Box
            as="h1"
            sx={({ theme }) => ({
              ...theme.typography.h1,
              display: "flex",
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
              margin: 0,
              flexDirection: { xs: "column", sm: "row" },
            })}
          >
            Our&nbsp;latest&nbsp;
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
              products
            </Box>
          </Box>
          {/* @ts-expect-error */}
          <Box
            as="p"
            sx={{
              color: "text.secondary",
              textAlign: "center",
              fontSize: 15,
              width: { sm: "100%", md: "80%" },
            }}
          >
            Explore our cutting-edge dashboard, delivering high-quality
            solutions tailored to your needs. Elevate your experience with
            top-tier features and services.
          </Box>
          {/* @ts-expect-error */}
          <Box
            as="form"
            action="#"
            sx={{
              display: "flex",
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
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
            <Box
              as="input"
              id="email-hero"
              autoComplete="off"
              aria-label="Enter your email address"
              placeholder="Your email address"
              sx={({ theme }) => ({
                fontSize: "1rem",
                position: "relative",
                borderRadius: theme.vars.shape.borderRadius,
                padding: "8.5px 14px",
                paddingInlineStart: "10px",
                border: "1px solid",
                borderColor: theme.vars.palette.grey[700],
                transition: "border-color 120ms ease-in",
                "&:focus": {
                  borderWidth: 1,
                  outlineOffset: 2,
                  borderColor: (theme.vars || theme).palette.primary.main,
                  outline: `3px solid ${theme.vars.palette.primary.main}`,
                },
                ...theme.applyStyles("dark", {
                  "&:focus": {
                    borderColor: (theme.vars || theme).palette.primary.main,
                    outlineColor: (theme.vars || theme).palette.primary.main,
                  },
                }),
              })}
            />
            <button
              type="button"
              className={css(({ theme }) => ({
                ...theme.typography.button,
                appearance: "none",
                cursor: "pointer",
                color: theme.vars.palette.common.white,
                backgroundColor: theme.vars.palette.info.main,
                backgroundImage:
                  "linear-gradient(to bottom, hsla(210, 98%, 48%, 0.8), hsl(210, 98%, 42%))",
                border: `1px solid ${theme.vars.palette.primary.light}`,
                borderRadius: theme.shape.borderRadius,
                padding: "6px 16px",
                minWidth: 64,
                height: "2.5rem",
                "&:hover": {
                  boxShadow: "none",
                },
                ...theme.applyStyles("dark", {
                  color: theme.vars.palette.text.primary,
                  boxShadow:
                    "inset 0 2px 0 hsla(210, 100%, 80%, 0.2), inset 0 -2px 0 hsla(210, 100%, 35%, 0.4)",
                  backgroundImage:
                    "linear-gradient(to bottom, hsla(210, 98%, 48%, 0.8), hsl(210, 98%, 42%))",
                }),
              }))}
            >
              Start now
            </button>
          </Box>

          <Box
            as="p"
            sx={({ theme }) => ({
              ...theme.typography.caption,
              margin: 0,
              fontWeight: 400,
              color: theme.vars.palette.text.secondary,
              textAlign: "center",
              ...theme.applyStyles("dark", {
                color: theme.vars.palette.text.primary,
              }),
            })}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#">Terms & Conditions</Link>.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
