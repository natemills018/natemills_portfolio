# DaisyUI Removal Plan

Plan for migrating `natemills_portfolio` off DaisyUI while keeping Tailwind CSS 4. DaisyUI is a thin convenience layer here — there are no complex components like modals, drawers, or dropdown menus with focus management. Removing it is straightforward.

---

## Why consider this

**Pros**
- **Smaller bundle** — DaisyUI ships every theme's CSS variables and every component class. Removing it cuts ~30–50KB of CSS you aren't using.
- **Design ownership** — the site stops looking like a DaisyUI demo and starts looking like *yours*. Important for a portfolio specifically.
- **No abstraction tax** — fewer "what does `bg-base-200` actually resolve to?" lookups when iterating on design.
- **Less churn on Tailwind upgrades** — DaisyUI sometimes lags Tailwind major versions.

**Cons**
- **You lose theme switching for free.** The retro/garden swap currently costs you one component (`ThemeSelector`) and one attribute. Rebuilding it manually is ~20 lines but it's still work.
- **Component classes are convenient.** `btn btn-primary` becomes `inline-flex items-center justify-center rounded-md px-4 py-2 …`. You'll either repeat utility chains or extract small React components.
- **Time cost** — realistically 2–4 hours for this codebase.

**Recommendation:** worth doing. The site is small, DaisyUI usage is shallow (mostly `btn`, `card`, `badge`, plus color tokens), and a portfolio benefits more from design distinctiveness than from speed of authoring.

---

## What's actually being used

From a grep of `src/`:

**Component classes**
- `btn`, `btn-primary`, `btn-ghost`, `btn-sm`
- `card`, `card-body`, `card-title`, `card-actions`
- `badge`, `badge-primary`, `badge-secondary`, `badge-outline`, `badge-sm`, `badge-lg`, `badge-success`, `badge-warning`, `badge-error`, `badge-info`
- `dropdown`, `dropdown-content`, `dropdown-end`
- `menu`, `footer`, `avatar`

**Semantic color tokens**
- `bg-base-100`, `bg-base-200`, `bg-base-300`, `bg-secondary`, `bg-warning-content`
- `text-base-content` (incl. `/50`, `/70`, `/80` opacity), `text-secondary-content`, `text-secondary-content/90`
- `border-base-300`, `border-secondary`

**Themes**
- `retro` and `garden`, switched via the `data-theme` attribute on `<html>` and persisted in `localStorage`

---

## Migration strategy

### Step 1 — Define your own design tokens
Replace DaisyUI's semantic colors with CSS variables you control. In your global CSS:

```css
:root {
  --color-bg: #f5f0e1;          /* was bg-base-100 */
  --color-surface: #e8e0c8;     /* was bg-base-200 */
  --color-surface-2: #d4c8a8;   /* was bg-base-300 */
  --color-text: #2a1f14;        /* was text-base-content */
  --color-accent: #c9756d;      /* was bg-secondary */
  --color-accent-text: #ffffff; /* was text-secondary-content */
  --color-border: #d4c8a8;
}

[data-theme="garden"] {
  --color-bg: #e9f5db;
  --color-surface: #cfe1b9;
  /* …etc */
}
```

Then wire them into Tailwind 4's `@theme` block so utilities like `bg-bg`, `text-text`, `bg-accent` work natively:

```css
@theme {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-text: var(--color-text);
  --color-accent: var(--color-accent);
  /* … */
}
```

This preserves theme switching without DaisyUI.

### Step 2 — Replace component classes with small React components
For each pattern that repeats more than twice, extract a component. Otherwise inline the utilities.

**`Button.tsx`** (replaces `btn btn-primary`, `btn btn-ghost`, `btn-sm`):

```tsx
type Props = { variant?: 'primary' | 'ghost'; size?: 'sm' | 'md' } & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = 'primary', size = 'md', className = '', ...rest }: Props) {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2';
  const sizes = { sm: 'px-3 py-1 text-sm', md: 'px-4 py-2' };
  const variants = {
    primary: 'bg-accent text-accent-text hover:opacity-90',
    ghost: 'bg-transparent text-text hover:bg-surface',
  };
  return <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest} />;
}
```

**`Card.tsx`** — replaces `card`, `card-body`, `card-title`, `card-actions`. Three small subcomponents or one component with slots.

**`Badge.tsx`** — replaces all the `badge-*` variants. Map color-name → utility classes.

### Step 3 — Replace the DaisyUI dropdown
The theme switcher uses `dropdown dropdown-end` + `dropdown-content`. DaisyUI handles open/close via CSS `:focus-within`. You have two options:

- **Stay headless:** keep the `:focus-within` trick — re-implement the same handful of classes with positioned absolute children. ~15 lines.
- **Use Radix UI's `DropdownMenu`** — proper keyboard nav and accessibility for free. Adds ~10KB but gets you a11y you'd otherwise have to write.

For one dropdown, the headless approach is fine.

### Step 4 — Theme switching without DaisyUI
DaisyUI watches `data-theme` on `<html>`. You can keep that exact mechanism — just point your CSS variables at it (see Step 1). The existing `ThemeSelector` component keeps working with no logic changes; only its styling needs updating.

### Step 5 — Remove the dependency
1. Strip the `@plugin "daisyui"` line from your CSS entry (or wherever it's loaded).
2. `npm uninstall daisyui`
3. Run `npm run build` and visually diff against the deployed site.
4. Delete any `theme-controller` class still floating around.

---

## Suggested order of execution

1. **Branch:** `git checkout -b chore/remove-daisyui`
2. Define design tokens in CSS (Step 1) — site still works because both DaisyUI and your tokens coexist.
3. Build `Button`, `Card`, `Badge` components and migrate **one** consumer at a time. Commit per component.
4. Migrate `ThemeSelector` last (it's the trickiest because of the dropdown).
5. Search for any remaining `btn-`, `card-`, `badge-`, `bg-base-`, `text-base-content`, etc. — `rg '\bbg-base-|btn-|card-|badge-' src/` should return zero matches before you proceed.
6. Remove the DaisyUI plugin and `npm uninstall`.
7. Visual QA across both themes, both light and dark system preferences, and at sm/md/lg breakpoints.
8. Merge.

---

## What you gain when this is done

- A bundle that's measurably smaller (run `npm run build` before/after — expect a meaningful drop in the CSS chunk).
- Full ownership of every visual choice on the site.
- A clear pathway to introduce a more distinctive visual identity (custom typography pairings, more deliberate spacing scale, bespoke micro-interactions) without fighting a framework.

---

## Alternative: keep DaisyUI but lean on it less

If 2–4 hours is too much right now, the lower-effort middle ground is:
- Keep DaisyUI for `btn` / `card` / `badge` only.
- Stop using `data-theme` switching — pick one custom theme via DaisyUI's theme config and tune the colors yourself.
- Override component classes in your own CSS where you want a different look.

You still get 80% of the design ownership without rebuilding components.
