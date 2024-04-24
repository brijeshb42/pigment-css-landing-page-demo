import { styled } from "@/lib/styled";

export const Typography = styled("p")<{
  color?: "primary" | "secondary" | "disabled";
  fontWeight?: "regular" | "medium" | "semibold" | "bold";
  gutterBottom?: boolean;
  variant?: string;
}>(({ theme }) => ({
  variants: [
    ...Object.keys(theme.typography)
      .filter((item) => {
        const value = theme.typography[item];
        return typeof value === "object" && Object.keys(value).length > 0;
      })
      .map((key) => ({
        props: {
          variant: key,
        },
        style: theme.typography[key],
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
    ...(["regular", "medium", "bold", "semibold"] as const).map((weight) => ({
      props: {
        fontWeight: weight,
      },
      style: {
        fontWeight: theme.vars.typography[`fontWeight${weight}`],
      },
    })),
  ],
}));
