import React from "react";
import { styled } from "@pigment-css/react";

import { TestComponentProps, TestRunner } from "../TestRunner";
import { Tree } from "../utils/Tree";

export const Test = ({ testIndex }: TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler

  const getColor = (color: number) => {
    switch (color) {
      case 0:
        return "#14171A";
      case 1:
        return "#AAB8C2";
      case 2:
        return "#E6ECF0";
      case 3:
        return "#FFAD1F";
      case 4:
        return "#F45D22";
      case 5:
        return "#E0245E";
      default:
        return "transparent";
    }
  };

  const View = styled("div")({
    alignItems: "stretch",
    borderWidth: "0",
    borderStyle: "solid",
    boxSizing: "border-box",
    display: "flex",
    flexBasis: "auto",
    flexDirection: "column",
    flexShrink: 0,
    margin: "0",
    padding: "0",
    position: "relative",
    minHeight: "0",
    minWidth: "0",
  });

  const Box = styled(View)<{
    color: number;
    layout?: "row" | "column";
    outer?: boolean;
    fixed?: boolean;
  }>({
    alignSelf: "flex-start",
    backgroundColor: (props) => getColor(props.color as number),
    variants: [
      {
        props: {
          layout: "row",
        },
        style: {
          flexDirection: "row",
        },
      },
      {
        props: {
          layout: "column",
        },
        style: {
          flexDirection: "column",
        },
      },
      {
        props: {
          outer: true,
        },
        style: {
          padding: 4,
        },
      },
      {
        props: {
          fixed: true,
        },
        style: {
          height: 6,
          width: 6,
        },
      },
    ],
  });

  return <Tree breadth={6} depth={3} id={0} wrap={2} box={Box} />;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={Test} />;
};

export default StitchesTest;
