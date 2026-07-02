# Slide Contract

`slides.json` is the source of truth for rendering.

## Top-level fields

```json
{
  "mode": "quick-html",
  "audienceProfile": {
    "target": "learning",
    "density": "standard",
    "tone": "teaching"
  },
  "contentDepth": "level-3-mechanism",
  "styleProfile": {
    "styleFamily": "compact-dark-grid",
    "styleFamilyReason": "...",
    "borrowedElements": [],
    "avoidedElements": []
  },
  "slides": []
}
```

## Slide fields

```json
{
  "id": "scene-03",
  "kicker": "CORE IDEA",
  "title": "Agent 的核心不是回答，而是受控行动",
  "lead": "...",
  "layoutType": "formula-strip",
  "accent": "#93c5fd",
  "semanticFit": "Why this layout fits the page script.",
  "contentBudget": {
    "pointCount": 4,
    "fitStrategy": "compact-matrix"
  },
  "visualPlan": {
    "structure": "...",
    "depthMoves": ["mechanism", "contrast"],
    "accentUsage": "Highlight the key claim and connectors.",
    "backgroundGlow": "Use visual-zone behind the module and glow-card for nodes.",
    "symbols": ["CORE", "Δ", "01"]
  },
  "onSlideText": [],
  "speakerText": "..."
}
```

## Required per-slide rules

- `layoutType` is required.
- `accent` is required.
- `semanticFit` is required.
- `visualPlan.accentUsage` is required.
- `visualPlan.backgroundGlow` is required for content slides.
- `visualPlan.depthMoves` should include at least two depth types except cover and closing pages.
- `contentBudget.fitStrategy` is required when the page has more than 4 points.
