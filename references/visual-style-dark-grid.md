# Dark Grid Visual Style

The baseline style is a technical learning deck, not a dashboard and not a generic landing page.

## Design DNA

- near-black blue background: #05070b or #0a0a0a
- subtle 60px grid texture
- global radial-gradient glow fields
- compact typography
- semantic accent colors
- hairline panels
- one clear visual composition per slide
- bottom subtitle bar
- progress bar
- right-side navigation dots
- lower-right page switcher

## Accent colors

- violet: abstraction, premise, chapter theme, conclusion
- blue/cyan: definition, evidence, information flow, system map
- green: implementation, route, validation, progress
- amber/orange: trade-off, risk, constraint, warning
- rose: critique, failure mode, misconception, correction

## Background glow rules

Core modules must have accent-driven background glow, not only colored text.

Use visual-zone or glow-zone around the main visual module. The zone background should use soft radial glow driven by the current accent. Module surfaces should use glow-card, glow-node, or glow-panel with subtle accent-tinted gradient, hairline border, and inner highlight.

## Do

- Use accent color on 1-3 title keywords.
- Use markers, tags, chips, relation labels, and symbols.
- Use composition-specific classes, not one generic card grid.
- Keep text compact and put explanation in subtitles or speaker text.

## Avoid

- black boxes with only colored text
- full-slide glass containers on every page
- over-bright neon everywhere
- repeated left-title/right-content layouts
- copying reference templates literally
