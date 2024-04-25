import { styled } from "@/lib/styled";

export const Chip = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  padding: "2px 12px 2px 8px",
  maxWidth: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 16,
  gap: theme.spacing(1),
  whiteSpace: "nowrap",
  borderColor: "hsla(220, 60%, 99%, 0.3)",
  backgroundColor: "hsla(220, 60%, 99%, 0.1)",
  color: "#FFF",
  ...theme.typography.button,
}));
