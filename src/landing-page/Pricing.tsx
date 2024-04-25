import Box from "@pigment-css/react/Box";
import { css } from "@/lib/styled";
import { Container } from "./components/Container";
import { Card } from "./components/Card";
import { Divider } from "./components/Divider";
import { Button } from "./components/Button";
import { Typography } from "./components/Typography";

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

function CheckCircleRoundedIcon(props: any) {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M9.29 16.29 5.7 12.7a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0" />
    </svg>
  );
}

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
        padding: 32,
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        flexShrink: 0,
        gap: 4,
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down("sm")]: {
          width: "85%",
        },
      }))} ${
        title === "Professional"
          ? css(({ theme }) => ({
              border: "none",
              boxShadow: "0 8px 12px hsla(210, 98%, 42%, 0.2)",
              background:
                "radial-gradient(circle at 50% 0%, hsl(210, 98%, 35%), hsl(210, 100%, 16%))",
              ...theme.applyStyles("dark", {
                boxShadow: "0 8px 12px hsla(0, 0%, 0%, 0.8)",
              }),
            }))
          : ""
      }`}
    >
      <Box
        sx={{
          mb: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          width: "100%",
          color: title === "Professional" ? "grey.100" : undefined,
        }}
      >
        <Box
          component="h3"
          sx={({ theme }) => ({
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            ...theme.typography.h6,
          })}
        >
          {title}
          {title === "Professional" && (
            <Box
              as="span"
              sx={({ theme }) => ({
                maxWidth: "100%",
                fontFamily: theme.typography.fontFamily,
                fontSize: theme.typography.pxToRem(13),
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                p: "2px 8px",
                borderRadius: 16,
                gap: 1,
                whiteSpace: "nowrap",
                borderColor: "hsla(220, 60%, 99%, 0.3)",
                backgroundColor: "hsla(220, 60%, 99%, 0.1)",
                ...theme.applyStyles("dark", {
                  color: (theme.vars || theme).palette.text.primary,
                }),
              })}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width={18}
                height={18}
                data-testid="AutoAwesomeIcon"
                className={css({
                  fill: "var(--palette-common-white)",
                })}
              >
                <path d="m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z" />
              </svg>
              <span>{subheader}</span>
            </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          color: title === "Professional" ? "white" : "primary",
        }}
      >
        <Typography
          variant="h2"
          color="primary"
          className={
            title === "Professional"
              ? css(({ theme }) => ({ color: theme.vars.palette.common.white }))
              : undefined
          }
        >
          ${price}
        </Typography>
        <Typography variant="h6">&nbsp; per month</Typography>
      </Box>
      <Divider />
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
                ? "var(--palette-primary-light)"
                : "var(--palette-primary-main)"
            }
          />
          <Typography
            variant="body2"
            sx={{ color: title === "Professional" ? "white" : undefined }}
          >
            {line}
          </Typography>
        </Box>
      ))}
      <Box sx={{ mt: 2 }}>
        <Button size="large" variant={buttonVariant} color="primary" fullWidth>
          {buttonText}
        </Button>
      </Box>
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
        }}
      >
        <Typography as="h2" variant="h4">
          Pricing
        </Typography>
        <Typography variant="body1" color="secondary">
          Quickly build an effective pricing table for your potential customers
          with this layout. <br />
          It&apos;s built with default Material UI components with little
          customization.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: 4,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          paddingInline: {
            xs: 2,
            sm: 0,
          },
        }}
      >
        {tiers.map((tier) => (
          <TierCard key={tier.title} {...tier} />
        ))}
      </Box>
    </Container>
  );
}
