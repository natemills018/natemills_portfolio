import { useEffect, useRef, useState } from "react";

const themes = ["retro", "garden"] as const;
type Theme = (typeof themes)[number];

function ThemeSelector() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("portfolio-theme") as Theme) || "retro";
  });
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  function focusItem(index: number) {
    const wrapped = (index + themes.length) % themes.length;
    itemRefs.current[wrapped]?.focus();
  }

  function handleTriggerKey(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => focusItem(0));
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  function handleItemKey(e: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusItem(index + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      focusItem(index - 1);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      containerRef.current?.querySelector<HTMLButtonElement>("[data-theme-trigger]")?.focus();
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  }

  function selectTheme(t: Theme) {
    setTheme(t);
    setOpen(false);
    containerRef.current?.querySelector<HTMLButtonElement>("[data-theme-trigger]")?.focus();
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        data-theme-trigger
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select theme"
        onClick={() => setOpen((o) => !o)}
        onKeyDown={handleTriggerKey}
        className="inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium bg-transparent text-base-content hover:bg-base-300 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-content"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        Theme
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Themes"
          className="absolute right-0 mt-2 w-40 z-50 rounded-lg bg-base-200 border border-base-300 shadow-lg p-1"
        >
          {themes.map((t, i) => (
            <li key={t} role="none">
              <button
                ref={(el) => { itemRefs.current[i] = el; }}
                type="button"
                role="option"
                aria-selected={theme === t}
                onClick={() => selectTheme(t)}
                onKeyDown={(e) => handleItemKey(e, i)}
                className={`w-full text-left rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-content ${
                  theme === t
                    ? "bg-base-300 text-base-content font-medium"
                    : "text-base-content hover:bg-base-300"
                }`}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ThemeSelector;
