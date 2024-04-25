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
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <SitemarkIcon />
            <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
              Join the newsletter
            </Typography>
            <Typography variant="body2" color="secondary" sx={{ mb: 2 }}>
              Subscribe for weekly updates. No spams ever!
            </Typography>
            <Stack direction="row" sx={{ gap: 1, alignItems: "end" }}>
              <Stack direction="column" sx={{}}>
                <Typography
                  as="label"
                  htmlFor="email-newsletter"
                  variant="body2"
                  color="secondary"
                  sx={{ mb: 0.5 }}
                >
                  Your email:
                </Typography>
                <Input
                  id="email-newsletter"
                  autoComplete="off"
                  aria-label="Enter your email address"
                  placeholder="Your email address"
                />
              </Stack>
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
          <Typography variant="body1" fontWeight="medium">
            Product
          </Typography>
          <Link variant="h1" href="#">
            Features
          </Link>
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
      <Divider />
      <Box
        sx={{
          pt: 4,
          width: "100%",
          display: "flex",
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
