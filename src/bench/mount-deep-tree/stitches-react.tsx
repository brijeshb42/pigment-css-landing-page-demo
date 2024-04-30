import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Tree } from '../utils/Tree';
import { styled } from '../utils/stitches-react.config';

export const Test = ({ testIndex }: TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler

  const View = styled('div', {
    alignItems: 'stretch',
    borderWidth: '0',
    borderStyle: 'solid',
    boxSizing: 'border-box',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexShrink: 0,
    margin: '0',
    padding: '0',
    position: 'relative',
    minHeight: '0',
    minWidth: '0',
  });

  const Box = styled(View, {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',

    variants: {
      color: {
        0: {
          backgroundColor: '#14171A',
        },
        1: {
          backgroundColor: '#AAB8C2',
        },
        2: {
          backgroundColor: '#E6ECF0',
        },
        3: {
          backgroundColor: '#FFAD1F',
        },
        4: {
          backgroundColor: '#F45D22',
        },
        5: {
          backgroundColor: '#E0245E',
        },
      },
      layout: {
        column: {
          flexDirection: 'column',
        },
        row: {
          flexDirection: 'row',
        },
      },
      outer: {
        true: {
          padding: '4px',
        },
      },
      fixed: {
        true: {
          width: '6px',
          height: '6px',
        },
      },
    },
  });

  return <Tree breadth={2} depth={7} id={0} wrap={1} box={Box} />;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={Test} />;
};

export default StitchesTest;
