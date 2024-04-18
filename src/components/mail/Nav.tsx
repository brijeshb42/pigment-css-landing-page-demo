interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    // icon: LucideIcon;
    variant: "default" | "ghost";
  }[];
}

export function Nav({ isCollapsed }: NavProps) {
  <div data-collapsed={isCollapsed}></div>;
}
