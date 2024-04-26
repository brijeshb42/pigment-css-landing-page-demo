"use client";

import * as React from "react";
import { css } from "@/lib/styled";
import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB, Metric } from "web-vitals";
import { Typography } from "./Typography";

const perfClass = css({
  position: "fixed",
  bottom: 10,
  right: 0,
  padding: 2,
  border: "1px solid var(--palette-divider)",
  width: 200,
  height: 100,
  overflow: "auto",
  backgroundColor: "var(--palette-background-plain)",
});

const cellClass = css({
  textAlign: "left",
  border: "1px solid ",
});

export default function Perf() {
  const [showPerf, setShowPerf] = React.useState(false);
  const [metrices, setMetrices] = React.useState<Metric[]>([]);

  React.useEffect(() => {
    onCLS((metric) => {
      console.log("cls", metric);
      setMetrices((m) => m.concat(metric));
    });
    onFID((metric) => {
      setMetrices((m) => m.concat(metric));
      console.log("fid", metric);
    });
    onLCP((metric) => {
      setMetrices((m) => m.concat(metric));
      console.log("lcp", metric);
    });
    onFCP((metric) => {
      console.log("fcp", metric);
      setMetrices((m) => m.concat(metric));
    });
    onINP((metric) => {
      console.log("inp", metric);
      setMetrices((m) => m.concat(metric));
    });
    onTTFB((metric) => {
      console.log("ttfb", metric);
      setMetrices((m) => m.concat(metric));
    });
  }, []);

  return (
    <div className={perfClass}>
      <table className={css({ width: "100%", borderCollapse: "collapse" })}>
        <thead className={css({ position: "sticky" })}>
          <tr>
            <th className={cellClass}>
              <Typography variant="caption">Name</Typography>
            </th>
            <th className={cellClass}>
              <Typography variant="caption">Value</Typography>
            </th>
            <th className={cellClass}>
              <Typography variant="caption">Rating</Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {metrices.map((metric) => (
            <tr>
              <td className={cellClass}>{metric.name}</td>
              <td className={cellClass}>{metric.value.toFixed(3)}</td>
              <td className={cellClass}>{metric.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
