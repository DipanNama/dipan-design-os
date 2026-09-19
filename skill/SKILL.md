---
name: dipan-design-os
description: Design and review Dipan Nama's product interfaces, landing pages, and design systems. Use for any new web product, major page, UI component system, visual redesign, or interface quality audit for Dipan.
---

# Dipan Design OS

Build interfaces that are clear first, coherent second, credible third, and delightful only where delight improves understanding. Dipan prefers minimalist modern product work: type-led hierarchy, real product proof, restrained color, strong mobile composition, distinct page identities, and motion with a reason.

Read the references needed for the task:
- `references/taste-and-direction.md` for personal defaults, visual judgment and originality.
- `references/foundations.md` for tokens, type, color, spacing, depth and icons.
- `references/page-construction.md` for landing pages, imagery, ratios and section rhythm.
- `references/components-and-states.md` for shadcn/ui, component architecture and states.
- `references/motion-and-interaction.md` for animation and micro-interactions.
- `references/accessibility-responsive-qa.md` for accessibility, mobile and release checks.

## Decision order

1. **Product truth:** user, job, pain, promise, proof and next action.
2. **Information architecture:** what must be understood, in what order.
3. **Visual hierarchy:** one focal idea per viewport and section.
4. **Evidence:** real interface, result, workflow or artifact for each claim that needs proof.
5. **Interaction:** states, feedback, recovery and keyboard behavior.
6. **Motion:** only when it explains change, preserves continuity or confirms input.
7. **Polish:** optical alignment, crops, type wrapping, framing and texture.

Do not start from a template's appearance. Start from the product's information, then choose a fitting page grammar.

## Dipan's non-negotiables

- Fully responsive is a hard requirement. Mobile restructures content; it does not merely shrink desktop.
- Use actual finished imagery for product proof. Do not substitute HTML/CSS scenes that only look like screenshots.
- Never repeat an image reference or duplicate image bytes on the same page.
- Never place a coded imitation beside, above or below a real image representing the same idea.
- Give each section a specific role and composition. Do not repeat one card template down the page.
- Use bento locally when simultaneous comparison helps. Never turn bento into the whole page grammar.
- Prefer one accent, restrained surfaces, quiet borders and generous negative space.
- Preserve a page's identity. A coherent collection is not a collection of clones.
- Verify real rendered pixels on desktop and mobile before calling the work done.
- Do not treat passing tests as visual acceptance.

## Default build stack

For new web products, prefer Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui open-code components, semantic tokens and a private GitHub repository. Use Motion for React only when CSS transitions or keyframes cannot express the required state continuity cleanly. Use local or self-hosted variable fonts where practical. Keep the dependency surface small.

## Page workflow

### 1. Write the brief

Record:
- primary user and their current situation;
- the one sentence promise;
- three proof points at most;
- desired next action;
- objections and trust needs;
- actual assets available;
- tone and product category;
- required states and breakpoints.

If the product cannot supply proof yet, design an honest artifact or workflow diagram. Do not invent customer evidence or metrics.

### 2. Choose a visual thesis

Write one sentence joining mood and mechanism, such as:
- "Quiet editorial shell around precise product evidence."
- "Dark developer surface with one luminous operational signal."
- "Warm maker page using hand-drawn art and plain commerce."

Every strong decision should support this sentence. If two competing theses remain, choose before building.

### 3. Establish foundations

Define semantic tokens before page components. Start with surface, foreground, muted foreground, border, accent, danger, success, focus and overlay. Define type roles rather than arbitrary sizes. Define a spacing rhythm and container policy. Set radius and shadow budgets.

### 4. Plan section rhythm

Give every section a job: promise, orientation, proof, explanation, comparison, trust, objection handling or action. Alternate density and composition. A common sequence is:

1. type-led promise;
2. one large product overview;
3. sparse principles or outcomes;
4. focused landscape proof;
5. portrait/editorial interruption or local comparison;
6. trust or updates;
7. quiet final action.

This is a starting point, not a mandatory template.

### 5. Build components with complete states

For each interactive component cover default, hover, focus-visible, pressed, selected/open, loading, empty, error, success and disabled where applicable. Verify names, labels, keyboard sequence, hit areas and recovery paths. A beautiful default state is not a finished component.

### 6. Add motion last

State the purpose of every animation. Use exact properties, short durations and interruptible transitions. Do not animate high-frequency keyboard actions. Respect reduced motion. If removing animation harms neither understanding nor feedback, remove it.

### 7. Verify

Render desktop and mobile. Inspect actual pixels for hierarchy, wrapping, crop, spacing, radius, borders, overflow, focus and contrast. Test narrow and wide content, zoom, keyboard, reduced motion, loading, empty and error states. Run the checklist in `references/accessibility-responsive-qa.md`.

## Originality rule

Research can supply grammar, not identity. It is acceptable to learn that a strong page uses a type-led hero, a framed product proof and an alternating split. It is not acceptable to reproduce another product's distinctive composition, copy, illustration, brand motif or sequence with cosmetic substitutions.

For each borrowed pattern, write:
- what problem it solves;
- why it fits this product;
- how the implementation changes for this product's content;
- what distinctive source traits must not be copied.

## Reference research protocol

Treat galleries as discovery indexes, not as licenses or default design direction. Start with a specific interface job, sample at least five examples of that job, and inspect at least three live destinations when access allows. Record the durable pattern separately from the current visual treatment. Classify each source as primary product, open-code component, free asset, template, gallery, practitioner guidance or commercial reference.

Use the supplied collections, including F Resources, Falak Gala bookmarks, Ibelick's list, Lapa Ninja, Landingfolio, Land-book, CSS Design Awards, Recent Design, Curated Design, One Page Love, Landing Love, Notioly, LaunchVideo, Jakub Krehel, Aceternity UI and MotionSites, as lead sources. Verify every artifact's current terms. Commercial products may inform process or taste but are not free dependencies. A free test pack does not make a paid collection free.

Watch for trend-heavy defaults: giant grotesk headlines, pill controls, dark neutral canvases, electric gradients, noise, floating browser frames, monospace metadata, 3D objects and scroll spectacle. Keep one only when it expresses the product thesis and remains usable without decoration or motion.

## Output standard

A finished design handoff includes:
- visual thesis and audience/job statement;
- token set and type roles;
- page or flow map;
- component state inventory;
- image role/ratio plan;
- motion intent and reduced-motion behavior;
- desktop/mobile rendered proof;
- accessibility and visual QA results;
- source and license notes for external assets.
