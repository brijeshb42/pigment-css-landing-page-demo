import { Button } from "./components/Button";
import { cookies } from "next/headers";
import { LightModeIcon, DarkModeIcon } from "./components/Icons";

export function ToggleThemeButton() {
  const currentTheme = cookies().get("theme")?.value || "dark";

  async function toggleTheme() {
    "use server";
    const theme = cookies().get("theme")?.value || "dark";
    if (theme === "light") {
      cookies().delete("theme");
    } else {
      cookies().set("theme", "light");
    }
  }

  return (
    <form action={toggleTheme}>
      <Button type="submit" variant="plain" size="medium" sx={{ width: 32 }}>
        {currentTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </Button>
    </form>
  );
}
