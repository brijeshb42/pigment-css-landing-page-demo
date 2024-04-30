import Link from "next/link";
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="change-css-prop/pigment-css">Pigment CSS</Link>
        </li>
        <li>
          <Link href="change-css-prop/styled-components">
            Styled Components
          </Link>
        </li>
        <li>
          <Link href="change-css-prop/emotion">Emotion</Link>
        </li>
        <li>
          <Link href="change-css-prop/baseline">Baseline</Link>
        </li>
      </ul>
    </div>
  );
}
