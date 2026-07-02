# Revision Workflow

Use this when the user gives feedback on a generated deck or HTML file.

## Classify the feedback

- `content`: too shallow, wrong emphasis, missing examples, weak logic
- `layout`: too repetitive, too horizontal, too vertical, poor fit
- `visual`: no glow, too flat, too dashboard-like, lacks symbols or tags
- `color`: wrong accent, too bright, too dull, inconsistent palette
- `scale`: too large, too small, spacing wrong, title oversized
- `interaction`: navigation, subtitles, keyboard, playback, progress
- `style-family`: wrong style direction or overfit to a template

## Update rule

1. Preserve what the user approved.
2. Modify only the affected layer unless the user asks for a full rewrite.
3. Keep the existing slide order unless structure is the problem.
4. Re-run fit and quality checks.

## Common fixes

- too large: reduce h1/h2, card padding, node size, and stage spacing
- too shallow: add mechanism, contrast, boundary, and example
- too flat: add visual-zone background glow and glow-card surfaces
- too repetitive: change layout types and introduce marker layers
- too much vertical content: convert to matrix, bands, hub-spoke, or split pages
