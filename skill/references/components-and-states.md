# Components and states

## shadcn/ui model

shadcn/ui is open code and a distribution model, not a finished visual identity. Copying the defaults unchanged across an entire product produces familiarity but not product fit. Use its accessible primitives and composition, then define Dipan's tokens, density, radius, typography, states and page grammar.

Build in layers:
1. semantic tokens;
2. accessible primitives;
3. product components;
4. compositions and workflows;
5. pages.

Do not add a registry component before reading its source, dependencies, keyboard model, reduced-motion behavior and license.

## State inventory

Cover applicable states:
- default;
- hover;
- focus-visible;
- pressed;
- active/selected/open;
- loading/pending;
- empty;
- error;
- success;
- disabled;
- read-only;
- destructive confirmation.

State changes need more than color where meaning is important. Preserve layout where possible. Disabled controls must explain why when the reason is not obvious; do not use disabled styling to hide an available recovery action.

## Forms

Use persistent labels. Place help before error when both exist; errors should name the issue and recovery. Keep entered data after failure. Match input type and autocomplete. Mark required/optional consistently. Validate at the point where the user can act, not on every keystroke by default.

## Navigation and overlays

Keyboard order follows reading order. Focus moves into modal dialogs and returns to the trigger. Escape closes dismissible overlays. Popovers, tooltips and menus are not interchangeable. A tooltip cannot hold essential interactive content.

## Feedback

Use inline feedback for local state, toast for non-blocking global confirmation, dialog for consequential decisions and progress for work that takes time. Optimistic UI needs an undo or clear failure recovery when the action can fail.

## Registry research shortlist

Current official shadcn registry data lists hundreds of open registries. Shortlist by task rather than popularity:
- shadcn/ui blocks for application foundations;
- Kibo UI for accessible composed product components;
- Motion Primitives or Animate UI for controlled interaction patterns;
- Magic UI, Aceternity, KokonutUI or Spectrum UI for selective marketing moments;
- React Aria for complex accessible behavior when Radix/shadcn coverage is insufficient;
- specialized registries for maps, AI chat, editors or data workflows only when the project requires them.

Never combine several highly styled libraries without normalizing tokens, motion and API shape. The result should look like one product.
