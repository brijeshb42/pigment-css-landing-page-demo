import { styled } from "@/lib/styled";

export const Typography = styled("p", {
  shouldForwardProp(propName) {
    return !["as", "color", "fontWeight", "gutterBottom", "variant"].includes(
      propName
    );
  },
})<{
  color?: "primary" | "secondary" | "disabled";
  fontWeight?: "regular" | "medium" | "semibold" | "bold";
  gutterBottom?: boolean;
  variant?: string;
}>(({ theme }) => ({
  variants: [
    ...Object.keys(theme.typography)
      .filter((item) => {
        const value = theme.typography[item as keyof typeof theme.typography];
        return typeof value === "object" && Object.keys(value).length > 0;
      })
      .map((key) => ({
        props: {
          variant: key,
        },
        // @ts-expect-error
        style: theme.vars.typography[key],
      })),
    {
      props: {
        gutterBottom: true,
      },
      style: {
        marginBottom: "0.35em",
      },
    },
    ...(["primary", "secondary", "disabled"] as const).map((color) => ({
      props: {
        color: color,
      },
      style: {
        color: theme.vars.palette.text[color],
      },
    })),
    ...(
      [
        { propKey: "regular", themeKey: "fontWeightRegular" },
        { propKey: "medium", themeKey: "fontWeightMedium" },
        { propKey: "semibold", themeKey: "fontWeightSemiBold" },
        { propKey: "bold", themeKey: "fontWeightBold" },
      ] as const
    ).map(({ propKey, themeKey }) => ({
      props: {
        fontWeight: propKey,
      },
      style: {
        fontWeight: theme.typography[themeKey],
      },
    })),
  ],
}));
