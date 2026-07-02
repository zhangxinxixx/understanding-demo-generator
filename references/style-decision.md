# Style Decision

Choose a style family from the content. Do not mechanically copy any sample file.

## Style families

- `compact-dark-grid`: default AI learning deck, balanced and compact.
- `blueprint-system`: architecture, workflows, system maps, Agent engineering.
- `executive-radar`: reports, strategies, macro/business analysis, lower saturation.
- `neon-lab`: experiments, Agent loops, Reflection, AI mechanisms.
- `warm-risk`: risk, failure modes, constraints, safety, trade-offs.
- `minimal-evidence`: research notes, evidence chains, dense analysis.

## Required decision record

Add to `slides.json`:

```json
"styleProfile": {
  "styleFamily": "blueprint-system",
  "styleFamilyReason": "The material is about system architecture and workflow orchestration.",
  "borrowedElements": ["grid", "thin connectors", "compact nodes"],
  "avoidedElements": ["copying exact layout", "same chip order"]
}
```

## Anti-overfitting rule

Style samples are vocabulary references, not layout blueprints. Borrow color logic, density, markers, glow intensity, and component vocabulary. Do not copy exact composition, exact text placement, exact node counts, or exact colors slide by slide.
