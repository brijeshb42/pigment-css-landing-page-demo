import Box from "@pigment-css/react/Box";
import { Container } from "./components/Container";
import SitemarkIcon from "./components/SiteMarkIcon";
import { Typography } from "./components/Typography";
import { Stack } from "./components/Stack";
import { visuallyHidden } from "./Hero";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Link } from "./components/Link";
import { styled } from "@/lib/styled";

const WrappedLink = styled(Link)(({ theme }) => ({
  color: theme.vars.palette.text.secondary,
}));

export function Footer() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <SitemarkIcon />
            <Typography
              variant="body2"
              gutterBottom
              sx={{ mt: 2, fontWeight: 600 }}
            >
              Join the newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              Subscribe for weekly updates. No spams ever!
            </Typography>
            <Stack direction="row" sx={{ gap: 1, alignItems: "center" }}>
              <Box
                as="label"
                htmlFor="email-newsletter"
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
                id="email-newsletter"
                autoComplete="off"
                aria-label="Enter your email address"
                placeholder="Your email address"
              />
              <Button variant="contained" color="primary" size="large">
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight="medium">
            Product
          </Typography>
          <WrappedLink variant="body2" href="#">
            Features
          </WrappedLink>
          <WrappedLink variant="body2" href="#">
            Testimonials
          </WrappedLink>
          <WrappedLink variant="body2" href="#">
            Highlights
          </WrappedLink>
          <WrappedLink variant="body2" href="#">
            Pricing
          </WrappedLink>
          <WrappedLink variant="body2" href="#">
            FAQs
          </WrappedLink>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight="medium">
            Company
          </Typography>
          <WrappedLink variant="body2" href="#">
            About us
          </WrappedLink>
          <WrappedLink variant="body2" href="#">
            Careers
          </WrappedLink>
          <WrappedLink variant="body2" href="#">
            Press
          </WrappedLink>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "500" }}>
            Legal
          </Typography>
          <WrappedLink href="#">Terms</WrappedLink>
          <WrappedLink href="#">Privacy</WrappedLink>
          <WrappedLink href="#">Contact</WrappedLink>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <WrappedLink color="text.secondary" variant="body1" href="#">
            Privacy Policy
          </WrappedLink>
          <Typography sx={{ mx: 0.5, opacity: 0.5 }}>&nbsp;•&nbsp;</Typography>
          <WrappedLink color="text.secondary" variant="body1" href="#">
            Terms of Service
          </WrappedLink>
        </Box>
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
          {"Copyright © "}
          <Link href="https://mui.com/">Sitemark&nbsp;</Link>
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </Container>
  );
}
