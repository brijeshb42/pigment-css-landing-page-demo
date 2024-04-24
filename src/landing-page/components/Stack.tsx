import { styled } from "@/lib/styled";

export const Stack = styled("div")<{ direction?: "row" | "column" }>(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    variants: [
      {
        props: {
          direction: "row",
        },
        style: {
          flexDirection: "row",
        },
      },
    ],
  })
);
