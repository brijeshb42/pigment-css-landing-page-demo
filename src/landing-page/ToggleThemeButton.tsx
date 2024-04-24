import { Button } from "./components/Button";
import { cookies } from "next/headers";
import { LightModeIcon } from "./components/LightModeIcon";
import { DarkModeIcon } from "./components/DarkModeIcon";

export function ToggleThemeButton() {
  const currentTheme = cookies().get("theme")?.value || "light";

  async function toggleTheme() {
    "use server";
    const theme = cookies().get("theme")?.value || "light";
    cookies().set("theme", theme === "light" ? "dark" : "light");
  }

  return (
    <form action={toggleTheme}>
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        size="medium"
        // @ts-expect-error
        sx={{
          display: "flex",
          width: 32,
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          border: "none",
          borderRadius: "999px",
        }}
      >
        {currentTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </Button>
    </form>
  );
}
