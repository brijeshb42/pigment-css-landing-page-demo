/*
 * @license MIT License
 * Copyright (c) 2021-present, Pedro Duarte.
 * Copyright (c) 2015-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from 'react';
import { styled } from '@pigment-css/react';
import { TestRunner } from '../TestRunner';
import { interpolatePurples, interpolateBuPu, interpolateRdPu } from 'd3-scale-chromatic';

const View = styled('div')({
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

const Dot: any = styled(View)<{ x: number; y: number; size: number }>({
  position: 'absolute',
  cursor: 'pointer',
  width: '0',
  height: '0',
  borderColor: 'transparent',
  borderStyle: 'solid',
  borderTopWidth: '0',
  transform: 'translate(50%, 50%)',
  marginLeft: (props) => `${props.x}px`,
  marginTop: (props) => `${props.y}px`,
  borderRightWidth: (props) => `${props.size / 2}px`,
  borderBottomWidth: (props) => `${props.size / 2}px`,
  borderLeftWidth: (props) => `${props.size / 2}px`,
});

const targetSize = 10;

function SierpinskiTriangle({ testIndex, x = 0, y = 0, depth = 0, s: _s = 200 }) {
  let s = _s;

  if (Dot) {
    if (s <= targetSize) {
      let fn;
      switch (depth) {
        case 1:
          fn = interpolatePurples;
          break;
        case 2:
          fn = interpolateBuPu;
          break;
        case 3:
        default:
          fn = interpolateRdPu;
      }

      // introduce randomness to ensure that repeated runs don't produce the same colors
      const color = fn((testIndex * Math.random()) / 20);
      return (
        <Dot
          size={targetSize}
          x={x - targetSize / 2}
          y={y - targetSize / 2}
          style={{
            borderBottomColor: color,
          }}
        />
      );
    }

    s /= 2;

    return (
      <React.Fragment>
        <SierpinskiTriangle depth={1} testIndex={testIndex} s={s} x={x} y={y - s / 2} />
        <SierpinskiTriangle depth={2} testIndex={testIndex} s={s} x={x - s} y={y + s / 2} />
        <SierpinskiTriangle depth={3} testIndex={testIndex} s={s} x={x + s} y={y + s / 2} />
      </React.Fragment>
    );
  } else {
    return <span style={{ color: 'white' }}>No implementation available</span>;
  }
}

const PigmentTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={SierpinskiTriangle as any} />;
};

export default PigmentTest;
