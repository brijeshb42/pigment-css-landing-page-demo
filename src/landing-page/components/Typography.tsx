import { styled } from "@/lib/styled";

export const Typography = styled("p")<{
  variant?: string;
  gutterBottom?: boolean;
  fontWeight?: "regular" | "medium" | "bold" | "semibold";
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
    ...(["regular", "medium", "bold", "semibold"] as const).map((weight) => ({
      props: {
        fontWeight: weight,
      },
      style: {
        fontWeight:
          theme.vars.typography[`fontWeight${weight[0]}${weight.slice(1)}`],
      },
    })),
  ],
}));
