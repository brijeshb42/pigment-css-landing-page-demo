import Link from "next/link";
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="change-a-variant/pigment-css">Pigment CSS</Link>
        </li>
        <li>
          <Link href="change-a-variant/styled-components">
            Styled Components
          </Link>
        </li>
        <li>
          <Link href="change-a-variant/emotion">Emotion</Link>
        </li>
      </ul>
    </div>
  );
}
