import { useEffect, useState } from "react";

const themes = ["retro", "garden"] as const;
type Theme = (typeof themes)[number];

function ThemeSelector() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("portfolio-theme") as Theme) || "retro";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-sm gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        Theme
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-50 w-40 p-2 shadow-lg border border-base-300">
        {themes.map((t) => (
          <li key={t}>
            <button
              className={theme === t ? "active" : ""}
              onClick={() => setTheme(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThemeSelector;
