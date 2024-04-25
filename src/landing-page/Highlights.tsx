import Box from "@pigment-css/react/Box";
import { styled } from "@/lib/styled";
import { Container } from "@/landing-page/components/Container";
import { Typography } from "@/landing-page/components/Typography";
import { Stack } from "./components/Stack";
import {
  AutoFixHighRoundedIcon,
  ConstructionRoundedIcon,
  QueryStatsRoundedIcon,
  SettingsRoundedIcon,
  SupportAgentRoundedIcon,
  ThumbsupAltRoundedIcon,
} from "./components/Icons";

const items = [
  {
    icon: SettingsRoundedIcon,
    title: "Adaptable performance",
    description:
      "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.",
  },
  {
    icon: ConstructionRoundedIcon,
    title: "Built to last",
    description:
      "Experience unmatched durability that goes above and beyond with lasting investment.",
  },
  {
    icon: ThumbsupAltRoundedIcon,
    title: "Great user experience",
    description:
      "Integrate our product into your routine with an intuitive and easy-to-use interface.",
  },
  {
    icon: AutoFixHighRoundedIcon,
    title: "Innovative functionality",
    description:
      "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
  },
  {
    icon: SupportAgentRoundedIcon,
    title: "Reliable support",
    description:
      "Count on our responsive customer support, offering assistance that goes beyond the purchase.",
  },
  {
    icon: QueryStatsRoundedIcon,
    title: "Precision in every detail",
    description:
      "Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.",
  },
];

const Card = styled.div(({ theme }) => ({
  padding: theme.spacing(2),
  position: "relative",
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  borderRadius: theme.vars.shape.borderRadius,
  backgroundColor: theme.vars.palette.background.lvl2,
  border: `1px solid ${theme.vars.palette.divider}`,
  ...theme.applyStyles("dark", {}),
}));

export function Highlights() {
  return (
    <Container id="highlights">
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography as="h2" variant="h4">
          Highlights
        </Typography>
        <Typography variant="body1" color="secondary">
          Explore why our product stands out: adaptability, durability,
          user-friendly design, and innovation. Enjoy reliable customer support
          and precision in every detail.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 2,
        }}
      >
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title}>
              <Stack
                direction="column"
                sx={{
                  height: "100%",
                  justifyContent: "space-between",
                  padding: 1,
                }}
              >
                <Stack sx={{ gap: 0.5 }}>
                  {Icon ? (
                    <Box sx={{ pb: 1 }}>
                      <Icon
                        height={24}
                        width={24}
                        style={{ fill: "var(--palette-text-primary)" }}
                      />
                    </Box>
                  ) : null}
                  <Typography variant="body1" color="primary">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    {item.description}
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
}
