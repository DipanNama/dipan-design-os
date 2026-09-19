# Motion and micro-interaction

## Decide whether to animate

Ask in order:
1. Is the action high-frequency or keyboard initiated? Prefer no motion or near-instant feedback.
2. What does motion explain: spatial continuity, state, hierarchy, feedback or a process?
3. Does it improve understanding or perceived responsiveness?
4. Can CSS express it cleanly?
5. What is the reduced-motion equivalent?

If there is no clear purpose, do not animate.

## Timing and curves

Small direct feedback should feel immediate, often around 100-180ms. Menus, popovers and compact enter/exit transitions often fit 150-240ms. Larger layout changes may use 220-400ms or a tuned spring. These are starting ranges, not constants.

Use ease-out for entrances and direct response, ease-in for exits that leave the user's focus, and ease-in-out for elements already on screen moving between states. Springs suit interruptible physical movement and gesture release. Avoid visible bounce in serious product workflows unless the product voice supports it.

## CSS vs Motion

Use CSS transitions for hover, press, focus, color, opacity and simple transform changes. Name exact properties; never use `transition: all`.

Use keyframes for self-contained sequences that run once. Use Motion for React for coordinated enter/exit, layout change, shared identity with `layoutId`, gestures, interruption and state-driven orchestration.

Animate transform and opacity by default. Layout animation libraries can project size/position through transforms, but verify text, borders and nested transforms visually.

## Micro-interaction anatomy

A strong micro-interaction has:
- trigger;
- rule;
- feedback;
- resulting state;
- interruption/cancellation path;
- recovery when it fails.

Examples:
- button: press response, pending state, result, retry;
- toggle: immediate state, accessible name, persistence result;
- tabs: active identity, panel relationship, keyboard movement;
- toast: result, relevant action, timed/dismissible behavior;
- drag: pickup, constraints, target, commit, cancel.

## Reduced motion

Respect the user's operating-system preference. Preserve necessary state information while removing large transforms, parallax, autoplay and decorative loops. Opacity or immediate updates are often safer. Never make progress or completion understandable only through animation.

## Performance

Do not animate expensive properties without evidence. Avoid permanent `will-change`; apply it only to properties about to change. Keep observers and scroll handlers bounded. Pause off-screen loops and background media. Test low-power mobile hardware and interruption, not just ideal desktop playback.
