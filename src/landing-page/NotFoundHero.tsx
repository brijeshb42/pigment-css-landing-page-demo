import Box from "@pigment-css/react/Box";
import { styled } from "@/lib/styled";
import { Typography } from "./components/Typography";

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

export function NotFoundHero() {
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
          variant="body1"
          color="secondary"
          sx={{ maxWidth: 750, textAlign: "center" }}
        >
          The page you were looking for doesn't exist.
        </Typography>
      </Box>
    </HeroWrapper>
  );
}
