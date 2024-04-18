"use client";

import { css, styled } from "@pigment-css/react";
import * as React from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { AccountSwitcher } from "./AccountSwitcher";

interface Mail {
  id: string;
  name: string;
  email: string;
  subject: string;
  text: string;
  date: string;
  read: boolean;
  labels: string[];
}

interface MailProps {
  accounts: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
  mails: Mail[];
  defaultLayout?: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

const AccountDiv = styled("div")<{ isCollpsed?: boolean }>({
  display: "flex",
  height: 52,
  alignItems: "center",
  justifyContent: "center",
  variants: [
    {
      props: ({ isCollapsed }: any) => !isCollapsed,
      style: {
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
      },
    },
  ],
});

export function Mail({
  accounts,
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  return (
    <PanelGroup
      direction="horizontal"
      className={css({
        height: "100%",
        width: "100%",
        maxHeight: "800px",
        alignItems: "stretch",
        ["&[data-panel-group-direction=vertical"]: {
          flexDirection: "column",
        },
      })}
    >
      <Panel
        defaultSize={defaultLayout[0]}
        collapsedSize={navCollapsedSize}
        collapsible={true}
        minSize={15}
        maxSize={20}
        className={
          isCollapsed
            ? css({
                minWidth: 50,
                transitionProperty: "all",
                transitionDuration: "300ms",
                transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
              })
            : undefined
        }
        onCollapse={() => {
          setIsCollapsed(!isCollapsed);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            !isCollapsed
          )}`;
        }}
      >
        <AccountDiv>
          <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
        </AccountDiv>
      </Panel>
    </PanelGroup>
  );
}
