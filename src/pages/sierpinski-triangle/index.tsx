import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="sierpinski-triangle/pigment-css">Pigment CSS</Link>
        </li>
        <li>
          <Link href="sierpinski-triangle/styled-components">
            Styled components
          </Link>
        </li>
        <li>
          <Link href="sierpinski-triangle/emotion">Emotion</Link>
        </li>
      </ul>
    </div>
  );
}
