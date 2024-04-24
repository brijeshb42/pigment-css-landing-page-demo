import Box from "@pigment-css/react/Box";
import { Container } from "./components/Container";
import { Card } from "./components/Card";
import { css } from "@/lib/styled";
import { Divider } from "./components/Divider";
import { Button } from "./components/Button";

type Tier = {
  title: string;
  price: string;
  description: string[];
  buttonText: string;
  buttonVariant: string;
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
        sx={({ theme }) => ({
          mb: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          width: "100%",
          color: title === "Professional" ? "grey.100" : undefined,
        })}
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
                py: "2px",
                px: 1,
                color: (theme.vars || theme).palette.text.primary,
                borderRadius: 16,
                whiteSpace: "nowrap",
                borderColor: "hsla(220, 60%, 99%, 0.3)",
                backgroundColor: "hsla(220, 60%, 99%, 0.1)",
                "& .MuiChip-label": {
                  color: "hsl(0, 0%, 16.470588235294116%)",
                },
                "& .MuiChip-icon": {
                  color: "primary.light",
                },
              })}
            >
              {subheader}
            </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          color: title === "Professional" ? "grey.50" : undefined,
        }}
      >
        <Box
          sx={({ theme }) => ({
            ...theme.typography.h2,
            color: title !== "Professional" ? "text.primary" : undefined,
          })}
        >
          ${price}
        </Box>
        <Box
          sx={({ theme }) => ({
            ...theme.typography.h6,
          })}
        >
          &nbsp; per month
        </Box>
      </Box>
      <Divider
        sx={{
          my: 2,
          opacity: 0.8,
          borderColor: "divider",
        }}
      />
      {description.map((line) => (
        <Box
          key={line}
          sx={{
            py: 1,
            display: "flex",
            gap: 1.5,
            alignItems: "center",
          }}
        >
          <CheckCircleRoundedIcon
            fill={
              title === "Professional"
                ? "var(--palette-primary-light)"
                : "var(--palette-primary-main)"
            }
          />
          <Box
            component={"span"}
            sx={({ theme }) => ({
              ...theme.typography.subtitle2,
              color: title === "Professional" ? "grey.50" : undefined,
            })}
          >
            {line}
          </Box>
        </Box>
      ))}
      <Button
        size="large"
        fullWidth
        variant={buttonVariant as "outlined" | "contained"}
        sx={{
          borderRadius: "12px",
        }}
      >
        {buttonText}
      </Button>
    </Card>
  );
}

export function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Box
          component="h2"
          sx={({ theme }) => ({
            ...theme.typography.h4,
            color: theme.vars.palette.text.primary,
          })}
        >
          Pricing
        </Box>
        <Box
          as="p"
          sx={({ theme }) => ({
            ...theme.typography.body1,
            color: theme.vars.palette.text.secondary,
          })}
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. <br />
          It&apos;s built with default Material UI components with little
          customization.
        </Box>
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
