# Design Brief — AskSpark Landing Page

**Theme:** Light mode | **Primary Font:** Bricolage Grotesque | **Body Font:** Figtree | **Accent Usage:** CTAs, highlights, gradient text | **Layout:** Card-based, editorial, clean grid | **Aesthetic:** Premium modern SaaS (Notion/Stripe style), warm, approachable, confidence-building

---

## Palette (OKLCH)

| Token            | L    | C    | H   | Usage                          |
| :--------------- | :--- | :--- | :-- | :----------------------------- |
| background       | 0.98 | 0.00 | 265 | Page background               |
| foreground       | 0.15 | 0.03 | 265 | Body text, primary text color  |
| primary          | 0.55 | 0.22 | 265 | Buttons, links, accents        |
| accent           | 0.78 | 0.12 | 280 | Highlights, badges, emphasis   |
| card             | 0.99 | 0.00 | 265 | Glass cards, elevated surfaces |
| muted            | 0.94 | 0.02 | 265 | Disabled states, subtle text   |
| destructive      | 0.58 | 0.25 | 27  | Alerts, error states           |

---

## Gradients

| Gradient       | Definition                                                      | Use                  |
| :------------- | :-------------------------------------------------------------- | :------------------- |
| bg             | `oklch(0.95 0.03 230) → oklch(0.92 0.05 260) → oklch(0.88 0.07 290)` | Full page background |
| primary        | `oklch(0.55 0.22 265) → oklch(0.48 0.24 285)`                   | CTA buttons, accents |
| text           | `oklch(0.55 0.22 265) → oklch(0.55 0.22 310)`                   | Gradient text effect |

---

## Structural Zones

| Zone      | Treatment                                              | Elevation  |
| :-------- | :----------------------------------------------------- | :--------- |
| Navbar    | Glass nav (`glass-nav`), 0.85 opacity, blur 20px     | Elevated   |
| Hero      | Full-width gradient bg, glassmorphism cards            | Floating   |
| Sections  | Alternating white card bg and subtle muted bg          | Layered    |
| CTA areas | Gradient-primary buttons, full width or inline         | Prominent  |
| Footer    | Muted bg, border-top, same treatment as header        | Grounded   |

---

## Spacing & Rhythm

- **Horizontal:** 24px—32px section padding, 16px—20px card padding, 12px—16px internal card spacing
- **Vertical:** 64px—96px between major sections, 32px between cards, 24px between heading + body
- **Type scale:** H1 48px–56px (display), H2 32px–40px (section heads), H3 20px–24px (card titles), body 14px–16px

---

## Components & Patterns

- **Buttons:** `rounded-full`, gradient-primary for CTAs, muted bg for secondary, smooth hover scale (transform -4px)
- **Cards:** `glass-card` with `warm-shadow`, 20px border-radius, hover elevate + shadow deepens
- **Badges:** Float animation (4s infinite), staggered delay, subtle glow via shadow
- **Icons:** lucide-react, 20px–24px sizing, primary color, paired with text
- **Form inputs:** Light bg, border-border, focus ring-primary

---

## Motion & Animation

| Animation    | Duration | Easing       | Usage                              |
| :----------- | :------- | :----------- | :--------------------------------- |
| float        | 4s       | ease-in-out  | Floating badges, continuous        |
| fade-up      | 0.6s     | ease-out     | Section entry, staggered           |
| fade-in      | 0.4s     | ease-out     | Element visibility                 |
| scale-hover  | 0.2s     | ease         | Card/button interactions           |

---

## Shadows

- **warm-shadow:** `0 4px 24px rgba(99,102,241,0.08), 0 1px 4px rgba(99,102,241,0.05)` — subtle, default
- **warm-shadow-lg:** `0 8px 40px rgba(99,102,241,0.14), 0 2px 8px rgba(99,102,241,0.08)` — elevated hover
- **warm-shadow-xl:** `0 16px 60px rgba(99,102,241,0.18), 0 4px 12px rgba(99,102,241,0.1)` — modal/overlay

---

## Signature Details

1. **Animated floating badges** in hero (Ask, Get Answers, Build Confidence) with staggered float animation
2. **Glassmorphic cards** throughout with blur backdrop and white border — premium, modern feel
3. **Gradient hero background** (blue → purple → indigo) creates depth and visual interest
4. **Soft shadows** (not harsh) reinforce elevation and premium aesthetic
5. **Bold Bricolage Grotesque headings** paired with clean Figtree body — strong hierarchy
6. **Ample whitespace** between sections maintains breathability and focus

---

## Constraints

- ✓ Mobile-first responsive (`sm:`, `md:`, `lg:` breakpoints)
- ✓ No custom colors — use OKLCH tokens only
- ✓ No animation without purpose — all motion supports usability and delight
- ✓ Glass cards keep consistent 20px blur, 0.72–0.85 opacity
- ✓ Minimum contrast AA+ across light/dark (not using dark mode here)
