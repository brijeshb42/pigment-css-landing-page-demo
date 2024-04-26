import Box from "@pigment-css/react/Box";
import { styled } from "@/lib/styled";
import { Container } from "./components/Container";
import SitemarkIcon from "./components/SiteMarkIcon";
import { Typography } from "./components/Typography";
import { Stack } from "./components/Stack";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Link } from "./components/Link";
import { Divider } from "./components/Divider";

const WrappedLink = styled(Link)<{ variant?: string }>(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.vars.palette.text.secondary,
}));

export function Footer() {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            minWidth: { xs: "100%", sm: "60%" },
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <SitemarkIcon />
            <Typography
              variant="body2"
              fontWeight="semibold"
              sx={{ mt: 2, mb: 0.5 }}
            >
              Join the newsletter
            </Typography>
            <Typography variant="body2" color="secondary" sx={{ mb: 2 }}>
              Subscribe for weekly updates. No spams ever!
            </Typography>
            <Stack
              sx={{
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "start", sm: "end" },
                gap: 1,
              }}
            >
              <Stack
                direction="column"
                sx={{ width: { xs: "100%", sm: "fit-content" } }}
              >
                <Typography
                  as="label"
                  htmlFor="email-newsletter"
                  variant="body2"
                  color="secondary"
                  fontWeight="medium"
                  sx={{ mb: 0.5 }}
                >
                  Your email:
                </Typography>
                <Input
                  id="email-newsletter"
                  autoComplete="off"
                  aria-label="Enter your email address"
                  placeholder="Your email address"
                  sx={{ width: { xs: "100%", sm: "fit-content" } }}
                />
              </Stack>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ width: { xs: "100%", sm: "fit-content" } }}
              >
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
          <Typography variant="body2" fontWeight="semibold">
            Product
          </Typography>
          <WrappedLink fontWeight="medium" href="#">
            Features
          </WrappedLink>
          <WrappedLink fontWeight="medium" href="#">
            Testimonials
          </WrappedLink>
          <WrappedLink fontWeight="medium" href="#">
            Highlights
          </WrappedLink>
          <WrappedLink fontWeight="medium" href="#">
            Pricing
          </WrappedLink>
          <WrappedLink fontWeight="medium" href="#">
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
          <Typography variant="body2" fontWeight="semibold">
            Company
          </Typography>
          <WrappedLink fontWeight="medium" href="#">
            About us
          </WrappedLink>
          <WrappedLink fontWeight="medium" href="#">
            Careers
          </WrappedLink>
          <WrappedLink fontWeight="medium" href="#">
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
          <Typography variant="body2" fontWeight="semibold">
            Legal
          </Typography>
          <WrappedLink fontWeight="medium" href="#">
            Terms
          </WrappedLink>
          <WrappedLink fontWeight="medium" href="#">
            Privacy
          </WrappedLink>
          <WrappedLink fontWeight="medium" href="#">
            Contact
          </WrappedLink>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <WrappedLink color="text.secondary" variant="body2" href="#">
            Privacy Policy
          </WrappedLink>
          <Typography sx={{ mx: 0.5, opacity: 0.5 }}>•</Typography>
          <WrappedLink color="text.secondary" variant="body2" href="#">
            Terms of Service
          </WrappedLink>
        </Box>
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
          Copyright ©&nbsp;<Link href="https://mui.com/">Sitemark</Link>&nbsp;
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </Container>
  );
}
