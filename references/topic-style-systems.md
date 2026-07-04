# Topic Style Systems

Choose the visual language from the material domain. The deck must not use the same card-and-grid look for academic, architecture, engineering, product, research, strategy, and interview-learning content.

## Core rule

Before page design, classify the domain and assign `topicStyleSystem`:

```json
{
  "domain": "academic | architecture | engineering | research | product | strategy | interview-learning | concept-learning",
  "visualLanguage": "...",
  "paletteLogic": "...",
  "compositionBias": ["..."],
  "avoid": ["..."],
  "reason": "..."
}
```

Do not solve domain differences by only changing accent colors. The domain must affect composition metaphors, DOM class names, density, typography rhythm, marker language, glow intensity, and diagram vocabulary.

## Academic / paper / theory

Use paper-lab, theorem-board, evidence margin, citation rail, equation strip, hypothesis-to-proof path.

Preferred compositions: theorem proof rail, equation decomposition, argument tree, claim-evidence-warrant map, literature matrix, timeline of ideas, concept lattice, experiment pipeline.

Avoid sales-like cards, excessive neon, generic three-card summaries, and KPI dashboards unless the source is empirical data.

## Architecture / system design

Use blueprint, node graph, layered system, gateway map, pipeline, swimlane, topology diagram.

Preferred compositions: layered stack, hub-spoke topology, dataflow pipeline, request-response loop, state machine, interface contract map, dependency graph, control plane vs data plane split.

Avoid pure bullet cards, unrelated decorative icons, horizontal card rows pretending to be architecture, and oversized glass panels that hide topology.

## Engineering practice / implementation

Use terminal-lab, build pipeline, checklist rail, error boundary, debug path, commit route.

Preferred compositions: implementation route, build-test-deploy lane, config-to-runtime map, debugging decision tree, failure mode x-ray, validation gates, annotated code block.

Avoid abstract diagrams without operational steps and card grids with no sequence.

## Research / report / macro or business analysis

Use analyst board, evidence radar, variable map, scenario tree, risk board.

Preferred compositions: thesis-evidence-risk, variable dependency map, scenario tree, radar grid, trigger/failure table, timeline with inflection points, confidence ladder.

Avoid flashy courseware style, generic product cards, unsupported certainty, and decorative nodes without evidence relationship.

## Product / solution / pitch

Use product journey, pain-to-value bridge, funnel, before/after, feature map, user workflow.

Preferred compositions: problem-solution bridge, user journey map, feature-to-value matrix, before/after split, adoption funnel, workflow storyboard, outcome proof board.

Avoid academic proof layout and all slides as marketing cards.

## Strategy / executive briefing

Use executive radar, decision board, options matrix, priority map, risk/return axis.

Preferred compositions: conclusion-first frame, decision matrix, option tradeoff axis, priority heatmap, risk register board, roadmap bands, action owner table.

Avoid dense technical topology, playful labels, excessive motion or glow, and slides without decision implication.

## Interview-learning / exam prep

Use question-answer board, pitfall map, comparison grid, memory hook, whiteboard route.

Preferred compositions: definition-example-pitfall-answer template, comparison matrix, common mistakes board, implementation checklist, interviewer follow-up tree, memory hook ladder.

Avoid beautiful but vague diagrams, long theory without answer structure, and excessive glow.

## Concept-learning / general explainer

Use dark-grid explainer, concept orbit, mechanism chain, analogy board, route map.

Preferred compositions: concept orbit, mechanism chain, analogy split, decomposition board, route map, takeaway constellation.

## Cross-slide style rhythm

A deck should have a coherent style family, but each page must still be independently composed:

- cover: domain-themed hero composition
- early pages: premise and primitive concept style
- middle pages: mechanism, architecture, or evidence style
- later pages: boundary, failure, practice, or scenario style
- closing: synthesis, checklist, or takeaway style
