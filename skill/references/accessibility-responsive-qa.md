# Accessibility, responsive behavior and QA

## Working baseline

Use semantic HTML and native controls first. Meet WCAG 2.2 AA as the working baseline, then improve beyond it where practical.

Verify:
- landmarks and heading order;
- accessible names and label relationships;
- keyboard access and logical focus order;
- visible focus with enough area and contrast;
- text and non-text contrast;
- target size or spacing (WCAG 2.2 minimum is 24x24 CSS px with defined exceptions; prefer larger touch targets, commonly 44px, where layout allows);
- no color-only meaning;
- zoom/reflow and text spacing;
- motion controls and reduced-motion behavior;
- errors that identify the problem and recovery;
- captions/transcripts for meaningful media.

## Responsive composition

Design mobile first enough to establish priority, then use wider space for context rather than extra decoration. At each breakpoint decide:
- what remains;
- what reorders;
- what re-crops;
- what becomes progressive disclosure;
- what can disappear without losing meaning.

Avoid breakpoint proliferation. Let content and container constraints determine changes. Use fluid type and spacing carefully with `clamp()`, then cap extremes. Use container queries for reusable components that live in different widths.

## Image QA

- correct intrinsic dimensions;
- no layout shift;
- responsive source sizes;
- meaningful alt text or empty alt for decoration;
- crop remains useful at each breakpoint;
- no unreadable UI inside the image;
- no duplicate reference or duplicate bytes on the page;
- appropriate modern format and compression;
- lazy load below-the-fold media, not the primary hero proof when it harms LCP.

## Visual QA matrix

Render and inspect:
- narrow mobile, standard mobile, tablet, standard desktop, wide desktop;
- light/dark themes if supported;
- 200% zoom and increased text size;
- shortest and longest realistic copy;
- loading, empty, error and success states;
- keyboard focus sequence;
- reduced motion;
- slow image/network conditions.

Inspect actual pixels for clipping, crop, overlap, baseline, optical alignment, border/radius mismatch, muddy contrast and density rhythm.

## Release gates

Do not call the interface finished until:
- the product claim and next action are clear;
- real proof supports important claims;
- all component states exist;
- desktop and mobile renders have been inspected;
- keyboard, focus and reduced motion have been tested;
- assets and licenses are recorded;
- no placeholder-like visual remains;
- no real/coded duplicate scene exists;
- performance and error recovery are acceptable;
- the user-visible artifact, not only CI, has been checked.
