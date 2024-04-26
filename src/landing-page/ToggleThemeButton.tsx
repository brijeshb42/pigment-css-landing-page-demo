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
      <Button
        id="toggle-theme"
        type="submit"
        variant="plain"
        size="medium"
        sx={{ width: 32 }}
        title="Toggle Theme"
      >
        {currentTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </Button>
      <script
        dangerouslySetInnerHTML={{
          __html: `
  const btn = document.getElementById('toggle-theme');
  const currentTheme = ${JSON.stringify(currentTheme)};
  btn.addEventListener('click', () => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(currentTheme === 'light' ?  'dark' : 'light');
  });
`,
        }}
      />
    </form>
  );
}
