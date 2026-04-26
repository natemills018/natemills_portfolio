# Portfolio Improvement Plan

A prioritized punch list for `natemills_portfolio`. Items are ordered by impact-per-effort, not by where they appear in the codebase.

---

## Highest impact (do these first)

### 1. SEO + social share metadata
`index.html` currently has only a `<title>`. When the URL is shared on LinkedIn, X, Slack, or iMessage, it unfurls as a blank box.

**What to add to `index.html`:**
- `<meta name="description">` — one sentence about who you are and what you build
- `<meta name="author">`, canonical `<link rel="canonical">`
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- Twitter card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- A 1200×630 PNG OG image in `public/og-image.png`

**Why it matters:** the single biggest unlock for a portfolio that gets shared. Costs 30 minutes once, pays off forever.

### 2. Render or delete `SkillsSection`
`src/Components/SkillsSection.tsx` exists with full Frontend / Backend / Tools data but is never imported in `App.tsx`.

**Decision:** either mount it between Projects and About, or delete the file. Dead code drifts.

### 3. Strengthen the bio
Current bio: *"software developer focused on creating impactful software solutions."* This is generic and tells the reader nothing.

**Replace with 2–3 concrete sentences covering:**
- What you specialize in (languages, domains, problem types)
- What you're currently building or learning
- What kind of work or collaboration you're open to

Recruiters and peers scan this in ~5 seconds — make it specific.

### 4. Project depth
Three projects with one-paragraph descriptions reads like a README list. For each project, add:
- The problem it solves and who it's for
- Your role and the constraints you worked under
- 1–2 technical decisions you're proud of (or got wrong)
- A screenshot or short GIF
- Live demo link if available

Even one true case-study writeup differentiates you from 90% of dev portfolios.

---

## Medium impact

### 5. Real contact path
Only external links exist today. Add either:
- A `mailto:` with a prefilled subject (zero infra, instant), or
- A simple form using **Formspree**, **Resend**, or **Web3Forms** (no backend required)

### 6. Accessibility pass
- Alt text on all images and the avatar
- ARIA labels on icon-only buttons (theme switcher, social icons)
- A "skip to main content" link for keyboard users
- Verify color contrast across both themes (the `retro` palette can fail WCAG AA on muted text)
- Confirm focus rings are visible on every interactive element

### 7. Lightweight analytics
You can't improve what you don't measure. Pick one:
- **Plausible** (paid, privacy-friendly, ~1KB)
- **Vercel Analytics** (free if hosted on Vercel)
- **Umami** (self-hosted, free)

Even just knowing which project gets clicked tells you what to invest in.

### 8. Smooth section navigation
The sticky sidebar is the perfect place for an anchor nav (Projects / Skills / About). Right now visitors scroll blindly. Add `scroll-behavior: smooth` and `id` anchors on each section.

---

## Polish

### 9. Subtle scroll-in animations
Add Framer Motion `whileInView` fades on project cards and section headers. Pairs well with the existing pixel-art / float aesthetic without making the site feel busy.

### 10. Favicon set + web manifest
A polished favicon (light + dark + apple-touch) and a `manifest.json` makes the site feel intentional in browser tabs and when added to a phone home screen.

### 11. Image optimization
- Use `loading="lazy"` on below-the-fold images
- Serve `.webp` or `.avif` for project thumbnails
- Set explicit `width`/`height` to prevent layout shift

### 12. Fix `vite.config.ts`
Minor syntax oddity flagged in the survey — worth a glance and a clean-up commit.

### 13. Consider removing DaisyUI
See `daisyui-removal.md` for the full plan. Short version: more design control, a smaller bundle, and a portfolio that looks like *yours* rather than a DaisyUI demo.

---

## Main tradeoff

The pixel-art DaisyUI aesthetic is fun and memorable, but right now it's doing all the heavy lifting while the **content is thin**. Deeper project writeups + a real bio will move the needle more than any visual addition.

**Suggested first pass:** items #1 (SEO/OG), #2 (skills decision), and #3 (bio). All small, all visible, all done in an afternoon.
