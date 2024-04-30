import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { theme } from '../utils/stitches-react.config';

const Test = ({ testIndex }: TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler
  const testTheme = theme('test-theme', {
    space: {
      1: `${testIndex}px`,
    },
  });

  return (
    <div className={testTheme} style={{ marginTop: 'var(--space-1)' }}>
      testing
    </div>
  );
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;
