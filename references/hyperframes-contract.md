# Composition Contract

Use composition output only when explicitly requested.

Composition output should include:

- `dist/composition/index.html`
- slide elements with stable scene identifiers
- an embedded slideshow manifest
- the same scene identifiers as `scripts/slides.json`
- optional audio references when narration/audio exists

Do not generate composition output in quick-html mode.
