# Foundations

## Semantic tokens

Name tokens by function, not appearance. Prefer `surface`, `surface-raised`, `text`, `text-muted`, `border`, `accent`, `focus`, `danger`, `success` over names such as `gray-900` in component APIs. Primitive scales can remain underneath.

Define at least:
- canvas, surface, raised and inset surfaces;
- primary, secondary and muted text;
- default, strong and interactive borders;
- accent foreground/background;
- danger, warning, success and info pairs;
- focus ring and overlay;
- radius, shadow, spacing, duration and easing scales.

Check every foreground/background pair. Dark mode is not color inversion; raised surfaces, borders, overlays and imagery often need separate tuning.

## Color

Use a neutral field and one accent by default. Additional semantic colors are for state, not decoration. Keep an accent budget: CTA, active state, key data and focus may use it; body text, every icon and every border should not.

Avoid pure black/white across large areas when a softened neutral improves comfort, but do not lower contrast to create sophistication. Separate surfaces first with luminance and border; add shadow only when depth matters.

## Typography

Start with roles:
- display;
- page title;
- section title;
- body/lead;
- body;
- label;
- caption;
- code/data.

Use a modular but optically adjusted scale. Keep body copy near 45-75 characters per line, with 60-75 for long reading. Use `text-wrap: balance` on short headings and `text-wrap: pretty` on descriptions. Do not balance long-form paragraphs.

Use tabular numerals for changing values, tables, prices, timers and aligned data. Preserve readable line height: compact display, moderate headings, generous body. Tight negative tracking belongs mainly to large display type.

Good free defaults:
- **Inter:** neutral and highly functional for product UI.
- **Geist:** compact, technical and suited to modern developer/product work.
- **Plus Jakarta Sans:** friendlier geometry for consumer or marketing surfaces.
- **Manrope:** open geometric character where a warmer voice is needed.

Prefer one family plus a mono over unnecessary pairings. Use variable fonts and WOFF2, subset when practical, and verify licensing from the official source.

## Spacing and layout

Use a 4px primitive grid, then a restrained semantic scale. Repetition matters more than mathematical purity. Common component gaps can follow 4/8/12/16/24/32; page rhythm can extend through 48/64/96/128.

Define:
- narrow reading measure;
- standard content container;
- wide product-proof container;
- full-bleed exception;
- mobile side padding;
- section spacing by density.

Align optically. Icons with uneven visual mass and curved letterforms may need small corrections. Do not hide poor alignment behind larger gaps.

## Radius, borders and depth

Use one small, one medium and one large radius family. Nested radii should be concentric: inner radius follows outer radius minus inset, then optical correction.

Borders establish edge; shadows establish elevation. Do not apply both at full strength. Use a subtle inset image outline when imagery merges into the surrounding surface. Reserve glow for a meaningful luminous signal, not generic dark-mode polish.

## Icons

Choose one primary family per product. Recommended free sources:
- Lucide for neutral product UI and shadcn compatibility;
- Phosphor for more weight and personality options;
- Tabler for a large consistent outline set;
- Radix Icons for compact controls;
- Remix Icon for broad product/brand-adjacent coverage.

Match stroke weight and optical size to surrounding type. Icons supplement labels; they do not replace unfamiliar actions. Provide accessible names for icon-only controls and hide decorative icons from assistive technology.
