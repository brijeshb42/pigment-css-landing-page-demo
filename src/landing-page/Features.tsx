"use client";

import { css, styled } from "@/lib/styled";
import { Container } from "./components/Container";
import { Typography } from "./components/Typography";
import Box from "@pigment-css/react/Box";
import { Card } from "./components/Card";
import { Stack } from "./components/Stack";
import { Button } from "./components/Button";
import { useState } from "react";
import { Link } from "./components/Link";

const rowItem = css(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "50%",
  flexGrow: 1,
  alignItems: "stretch",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const items = [
  {
    title: "Dashboard",
    description:
      "This item could provide a snapshot of the most important metrics or data points related to the product.",
    imageLight:
      'url("/static/images/templates/templates-images/dash-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
  },
  {
    title: "Mobile integration",
    description:
      "This item could provide information about the mobile app version of the product.",
    imageLight:
      'url("/static/images/templates/templates-images/mobile-light.png")',
    imageDark:
      'url("/static/images/templates/templates-images/mobile-dark.png")',
  },
  {
    title: "Available on all platforms",
    description:
      "This item could let users know the product is available on all platforms, such as web, mobile, and desktop.",
    imageLight:
      'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark:
      'url("/static/images/templates/templates-images/devices-dark.png")',
  },
];

const FeatureCard = styled(Button, {
  shouldForwardProp(propName) {
    return propName !== "isSelected";
  },
})<{ isSelected?: boolean }>(({ theme }) => ({
  borderRadius: "12px",
  padding: 24,
  height: "auto",
  variants: [
    {
      props: {
        isSelected: true,
      },
      style: {
        borderColor: theme.vars.palette.primary.light,
        backgroundColor: "hsla(210, 100%, 80%, 0.2)",
        ...theme.applyStyles("dark", {
          backgroundColor: "hsla(210, 100%, 16%, 0.2)",
        }),
      },
    },
  ],
}));

export function Features({ isDarkMode }: { isDarkMode?: boolean }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Container
      id="features"
      sx={{
        gap: 6,
        alignItems: "stretch",
        flexDirection: { xs: "column", sm: "row" },
        py: { xs: 8, sm: 16 },
      }}
    >
      <Box className={rowItem}>
        <Typography as="h2" variant="h4" color="primary">
          Product features
        </Typography>
        <Typography
          variant="body1"
          color="secondary"
          sx={{ mb: { xs: 2, sm: 4 } }}
        >
          Provide a brief overview of the key features of the product. For
          example, you could list the number of features, their types or
          benefits, and add-ons.
        </Typography>
        <Stack sx={{ display: "flex", gap: 2 }}>
          {items.map((item, index) => (
            <FeatureCard
              isSelected={selectedIndex === index}
              variant="outlined"
              size="large"
              key={item.title}
              onClick={() => setSelectedIndex(index)}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                }}
              >
                <Typography variant="body1" color="primary">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="secondary">
                  {item.description}
                </Typography>
                <div>
                  <Link
                    color="primary"
                    href="//mui.com"
                    target="_blank"
                    // @ts-expect-error
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      "& > svg": { transition: "0.2s" },
                      "&:hover > svg": { transform: "translateX(2px)" },
                    }}
                  >
                    <span>Learn more</span>
                  </Link>
                </div>
              </Box>
            </FeatureCard>
          ))}
        </Stack>
      </Box>
      <Box
        className={`${rowItem} ${css(({ theme }) => ({
          border: "1px solid",
          borderColor: "hsl(220, 35%, 88%)",
          borderRadius: "var(--shape-borderRadius)",
          ...theme.applyStyles("dark", {
            borderColor: "hsla(220, 25%, 25%, 0.4)",
          }),
        }))}`}
      >
        <Card
          sx={{
            borderRadius: "var(--shape-borderRadius)",
            backgroundSize: "contain",
            m: "auto",
            width: 420,
            height: 500,
          }}
          style={{
            backgroundImage: isDarkMode
              ? items[selectedIndex].imageDark
              : items[selectedIndex].imageLight,
          }}
        />
      </Box>
    </Container>
  );
}
