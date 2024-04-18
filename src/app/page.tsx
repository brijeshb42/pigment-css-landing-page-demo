import { css } from "@pigment-css/react";

export default function Home() {
  return (
    <main>
      <div>
        <p>
          Get started by editing&nbsp;
          <code
            className={css(({ theme }) => ({
              fontWeight: 700,
              fontSize: theme.vars.typography.h1.fontSize,
            }))}
          >
            src/app/page.tsx
          </code>
        </p>
      </div>
    </main>
  );
}
