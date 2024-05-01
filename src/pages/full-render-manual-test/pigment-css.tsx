import { styled } from "@pigment-css/react";
import React from "react";

const Box: any = styled("div")({
  display: "inline-block",
  width: 100,
  height: 100,
  backgroundColor: "grey",
  textAlign: "center",
  lineHeight: 1,
  fontSize: 100,
});

export default function App() {
  return (
    <>
      <h1>Pigment CSS</h1>
      {Array(500)
        .fill(1)
        .map((_, i) => (
          <Box style={{ margin: i + "px" }} key={i}>
            {i}
          </Box>
        ))}
    </>
  );
}
