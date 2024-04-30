import React from 'react';
import { styled } from '@pigment-css/react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { buttonStyles } from '../utils/buttonStyles';

const Button: any = styled('button')(buttonStyles);

const Test = ({ testIndex }: TestComponentProps) => {
  return (
    <Button
      sx={{
        // '--test-index': testIndex,
        padding: '20px',
      }}
      style={{
        backgroundColor: `hsl(${Math.floor(Math.random() * 360)} 80% 80%)`,
      }}
    >
      testing
    </Button>
  );
};

const PigmentTest = () => {
  return (
    <>
      <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />

      <div style={{ opacity: 0, pointerEvents: 'none' }}>
        <Button>we mount the button outside the test to make sure we're not clocking any mount time</Button>
      </div>
    </>
  );
};

export default PigmentTest;
