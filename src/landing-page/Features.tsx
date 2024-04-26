"use client";

import Box from "@pigment-css/react/Box";
import { css, styled } from "@/lib/styled";
import { Container } from "./components/Container";
import { Typography } from "./components/Typography";
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
  height: "auto",
  padding: theme.spacing(2),
  flexDirection: "column",
  alignItems: "start",
  gap: theme.spacing(0.5),
  borderRadius: theme.vars.shape.borderRadius,
  variants: [
    {
      props: {
        isSelected: true,
      },
      style: {
        borderColor: theme.vars.palette.primary.light,
        backgroundColor: "hsla(210, 100%, 80%, 0.2)",
        ...theme.applyStyles("dark", {
          backgroundColor: "hsla(210, 100%, 15%, 0.5)",
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
        alignItems: "stretch",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 2, sm: 6 },
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
          An overview of the key features of the product. For example, you could
          list the number of features, their types or benefits, and add-ons.
        </Typography>
        <Stack sx={{ gap: 2 }}>
          {items.map((item, index) => (
            <FeatureCard
              isSelected={selectedIndex === index}
              variant="outlined"
              size="large"
              key={item.title}
              onClick={() => setSelectedIndex(index)}
            >
              <Typography fontWeight="medium" variant="body2" color="primary">
                {item.title}
              </Typography>
              <Typography variant="body2" color="secondary">
                {item.description}
              </Typography>
              <div>
                <Link color="primary" href="/">
                  Learn more
                </Link>
              </div>
            </FeatureCard>
          ))}
        </Stack>
      </Box>
      <Card className={rowItem}>
        <Box
          sx={{
            m: "auto",
            height: { xs: 300, sm: 500 },
            width: "100%",
            alignSelf: "center",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          style={{
            backgroundImage: isDarkMode
              ? items[selectedIndex].imageDark
              : items[selectedIndex].imageLight,
          }}
        />
      </Card>
    </Container>
  );
}
