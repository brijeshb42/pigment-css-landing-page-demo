import { cookies } from "next/headers";
import { css } from "@pigment-css/react";

import { Mail } from "@/components/mail/Mail";

export default function PigmentEntry() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

  return (
    <div
      className={css(({ theme }) => ({
        display: "none",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        [theme.breakpoints.up(768)]: {
          display: "flex",
        },
      }))}
    >
      <Mail
        accounts={[]}
        mails={[]}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
      />
    </div>
  );
}
