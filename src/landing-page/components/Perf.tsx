"use client";

import * as React from "react";
import { css, styled } from "@/lib/styled";
import {
  onCLS,
  onFCP,
  onFID,
  onINP,
  onLCP,
  onTTFB,
  type Metric,
} from "web-vitals";

const perfClass = css({
  position: "fixed",
  bottom: 10,
  right: 0,
  padding: 2,
  border: "1px solid var(--palette-divider)",
  maxWidth: 400,
  minHeight: 100,
  maxHeight: 400,
  overflow: "auto",
  backgroundColor: "var(--palette-background-plain)",
});

const Tr = styled.tr`
  color: inherit;
  display: table-row;
  vertical-align: middle;
  outline: 0px;
`;

const Tcell = styled.th(({ theme }) => ({
  ...theme.vars.typography.body1,
  padding: 1,
  fontFamily: "monospace",
  textAlign: "center",
  borderBottom: `1px solid ${theme.vars.palette.divider}`,
}));

const STATIC_DATA = [
  {
    name: "First Load JS",
    value: "102 kB",
  },
  {
    name: "HTML Size",
    value: "15.0 kB",
  },
  {
    name: "CSS File Size",
    value: "6.6 kB",
  },
];

export default function Perf() {
  const [metrices, setMetrices] = React.useState<Metric[]>([]);

  React.useEffect(() => {
    onCLS((metric) => {
      setMetrices((m) => m.concat(metric));
    });
    onFID((metric) => {
      setMetrices((m) => m.concat(metric));
    });
    onLCP((metric) => {
      setMetrices((m) => m.concat(metric));
    });
    onFCP((metric) => {
      setMetrices((m) => m.concat(metric));
    });
    onINP((metric) => {
      setMetrices((m) => m.concat(metric));
    });
    onTTFB((metric) => {
      setMetrices((m) => m.concat(metric));
    });
  }, []);

  return (
    <div className={perfClass}>
      <table
        className={css({
          width: "100%",
          borderCollapse: "collapse",
          display: "table",
          borderSpacing: 0,
        })}
      >
        <thead>
          <Tr>
            <Tcell>
              <strong>Name</strong>
            </Tcell>
            <Tcell>
              <strong>Value</strong>
            </Tcell>
            <Tcell>
              <strong>Rating</strong>
            </Tcell>
          </Tr>
        </thead>
        <tbody>
          {STATIC_DATA.map((metric, index) => (
            <Tr key={index}>
              <Tcell as="td">{metric.name}</Tcell>
              <Tcell as="td">{metric.value}</Tcell>
              <Tcell as="td">-</Tcell>
            </Tr>
          ))}
          {metrices.map((metric, index) => (
            <Tr key={index}>
              <Tcell as="td">{metric.name}</Tcell>
              <Tcell as="td">{metric.value.toFixed(3)}</Tcell>
              <Tcell as="td">{metric.rating}</Tcell>
            </Tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
