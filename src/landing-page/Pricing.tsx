import Box from "@pigment-css/react/Box";
import { css } from "@/lib/styled";
import { Container } from "./components/Container";
import { Card } from "./components/Card";
import { Divider } from "./components/Divider";
import { Button } from "./components/Button";
import { Typography } from "./components/Typography";
import { Chip } from "./components/Chip";
import { Sparkles, CheckCircleRoundedIcon } from "./components/Icons";

type Tier = {
  title: string;
  price: string;
  description: string[];
  buttonText: string;
  buttonVariant: "outlined" | "contained";
  subheader?: string;
};

const tiers: Tier[] = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Professional",
    subheader: "Recommended",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
      "Dedicated team",
      "Best deals",
    ],
    buttonText: "Start now",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

function TierCard({
  title,
  subheader,
  price,
  description,
  buttonVariant,
  buttonText,
}: Tier) {
  return (
    <Card
      className={`${css(({ theme }) => ({
        padding: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        flexShrink: 0,
        gap: theme.spacing(2),
        backgroundColor: theme.vars.palette.background.plain,
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      }))} ${
        title === "Professional" &&
        css(({ theme }) => ({
          border: "none",
          boxShadow: "0 8px 12px hsla(210, 100%, 42%, 0.2)",
          background: `radial-gradient(circle at 50% 0%, ${theme.vars.palette.primary.main}, hsl(210, 100%, 15%))`,
          ...theme.applyStyles("dark", {
            boxShadow: "0 8px 12px hsla(210, 1000%, 10%, 0.8)",
          }),
        }))
      }`}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          as="h3"
          variant="h6"
          sx={{ color: title === "Professional" && "#FFF" }}
        >
          {title}
        </Typography>
        {title === "Professional" && (
          <Chip>
            <Sparkles />
            {subheader}
          </Chip>
        )}
      </Box>
      <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
        <Typography
          variant="h2"
          color="primary"
          sx={{ color: title === "Professional" && "white" }}
        >
          ${price}
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          sx={{ color: title === "Professional" && "white" }}
        >
          per month
        </Typography>
      </Box>
      <Divider sx={{ opacity: title === "Professional" ? 0.5 : 1 }} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {description.map((line) => (
          <Box
            key={line}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <CheckCircleRoundedIcon
              fill={
                title === "Professional"
                  ? "#FFF"
                  : "var(--palette-primary-main)"
              }
            />
            <Typography
              variant="body2"
              sx={{ color: title === "Professional" && "white" }}
            >
              {line}
            </Typography>
          </Box>
        ))}
      </Box>
      <Button size="large" variant={buttonVariant} color="primary" fullWidth>
        {buttonText}
      </Button>
    </Card>
  );
}

export function Pricing() {
  return (
    <Container id="pricing">
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
          mb: { xs: 3, sm: 2 },
        }}
      >
        <Typography as="h2" variant="h4">
          Available plans
        </Typography>
        <Typography variant="body1" color="secondary">
          Quickly build an effective pricing table for your potential customers
          with this layout.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {tiers.map((tier) => (
          <TierCard key={tier.title} {...tier} />
        ))}
      </Box>
    </Container>
  );
}
