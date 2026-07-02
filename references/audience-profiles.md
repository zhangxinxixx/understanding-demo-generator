# Audience Profiles

Choose an audience profile before planning slide depth and style.

## Profiles

### learning
Use for self-study and concept understanding. Emphasize primitives, mechanisms, examples, and memory hooks.

### technical-sharing
Use for engineering talks and framework explanations. Emphasize architecture, data/state flow, interfaces, trade-offs, and failure modes.

### executive-briefing
Use for strategy, business, or decision reports. Emphasize thesis, evidence, options, risks, and actions. Use lower saturation and higher information density.

### product-demo
Use for product or solution presentations. Emphasize problem, user flow, value, proof, and implementation route.

### research-review
Use for literature, market, policy, or technical research. Emphasize question, evidence chain, assumptions, uncertainty, and conclusion.

### interview-prep
Use for explaining a topic for job interviews. Emphasize concise definitions, comparison, implementation steps, pitfalls, and examples.

## Output fields

Set in `slides.json`:

```json
"audienceProfile": {
  "target": "learning",
  "density": "standard",
  "tone": "teaching"
}
```
