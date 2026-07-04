# Topic Style Systems

Choose the visual language from the material domain. The deck must not use the same card-and-grid look for academic, architecture, engineering, product, research, strategy, and interview-learning content.

## Core rule

Before page design, classify the domain and assign `topicStyleSystem`.

```json
{
  "domain": "academic | architecture | engineering | research | product | strategy | interview-learning | concept-learning",
  "visualLanguage": "...",
  "paletteLogic": "...",
  "backgroundSystem": "...",
  "surfaceLanguage": "...",
  "lineLanguage": "...",
  "textureLanguage": "...",
  "glowLanguage": "...",
  "compositionBias": ["..."],
  "avoid": ["..."],
  "reason": "..."
}
```

Do not solve domain differences by only changing accent colors. The domain must affect background system, composition metaphors, DOM class names, information density, typography rhythm, marker language, connector style, texture, glow intensity, and diagram vocabulary.

## Hard background variation rule

Different domains must not share one identical `.slide::before` / `.slide::after` background treatment. They may share a dark base, but each domain needs different overlay geometry, texture, glow behavior, and module surface language.

The generated HTML must include a domain theme class on the deck root or body:

```html
<body class="theme-architecture">
```

or

```html
<div class="deck theme-research">
```

The CSS must include domain-specific background selectors:

```css
.theme-architecture .slide::before { /* blueprint grid, bus lines, topology glow */ }
.theme-academic .slide::before { /* theorem grid, paper ruling, equation ghosts */ }
.theme-research .slide::before { /* analyst board, radar rings, scenario ruling */ }
.theme-product .slide::before { /* journey arcs, value bridge glow */ }
```

If two domains only differ by title and accent color, the output fails.

## Academic / paper / theory

Use for papers, concepts, models, theoretical notes, math-heavy explanations, literature reviews, or study notes.

Visual language:
- paper-lab, theorem-board, evidence margin, citation rail, equation strip, hypothesis-to-proof path
- quiet dark-paper canvas, faint theorem grid or notebook ruling, equation ghosts, margin marks
- lower glow intensity, restrained violet/blue accents, more whitespace

Background system:
- `.theme-academic`
- `.paper-lab-bg`
- `.proof-rail`
- `.equation-band`
- `.citation-margin`
- `.argument-tree`

Preferred compositions:
- theorem proof rail
- equation decomposition
- argument tree
- claim-evidence-warrant map
- literature matrix
- concept lattice
- experiment pipeline

Avoid:
- sales-like cards
- too much neon
- generic three-card summaries
- dashboard KPI blocks unless the source is empirical data

## Architecture / system design

Use for system architecture, Agent architecture, software frameworks, cloud/data platforms, RAG systems, backend workflows, and integration design.

Visual language:
- blueprint, node graph, layered system, gateway map, pipeline, swimlane, topology diagram
- coordinate ticks, ports, buses, state layers, protocol labels, orthogonal connectors
- cyan/blue/violet edge glow concentrated on nodes and dataflow lanes

Background system:
- `.theme-architecture`
- `.blueprint-bg`
- `.topology-canvas`
- `.system-layers`
- `.gateway-map`
- `.interface-bus`
- `.port-node`

Preferred compositions:
- layered stack
- hub-spoke topology
- dataflow pipeline
- request-response loop
- state machine
- interface contract map
- dependency graph
- control plane vs data plane split

Avoid:
- pure bullet cards
- unrelated decorative icons
- horizontal card row pretending to be architecture
- oversized glass panels that hide topology

## Engineering practice / implementation

Use for tutorials, code practice, framework development, DevOps, MLOps, evaluation workflows, or implementation guides.

Visual language:
- terminal-lab, build pipeline, checklist rail, error boundary, debug path, commit route
- scanlines, console panels, command rails, log strips, validation gates
- green/cyan for passing states, amber/rose for warnings and failures

Background system:
- `.theme-engineering`
- `.terminal-lab-bg`
- `.command-rail`
- `.build-pipeline`
- `.debug-path`
- `.validation-gate`
- `.error-boundary`

Preferred compositions:
- implementation route
- build-test-deploy lane
- config-to-runtime map
- debugging decision tree
- failure mode x-ray
- checklist with validation gates
- code block plus visual annotation

Avoid:
- abstract decorative diagrams without operational steps
- too many cards with no sequence
- hiding commands or critical constraints in tiny text

## Research / report / macro or business analysis

Use for research reports, market analysis, policy analysis, strategy memos, macro trading reports, business reviews, and evidence-driven analysis.

Visual language:
- analyst board, evidence wall, variable map, scenario tree, risk board
- table ruling, radar rings, confidence bands, trigger/failure cells, timeline ticks
- restrained glow; blue for base case, amber for caution, rose for risk, green for upside

Background system:
- `.theme-research`
- `.analyst-board-bg`
- `.evidence-wall`
- `.variable-map`
- `.scenario-tree`
- `.trigger-table`
- `.confidence-ladder`

Preferred compositions:
- thesis-evidence-risk layout
- variable dependency map
- scenario tree
- radar grid
- trigger/failure table
- timeline plus inflection points
- confidence ladder
- signal dashboard with narrative notes

Avoid:
- flashy courseware style
- generic product cards
- unsupported certainty
- decorative nodes without evidence relationship

## Product / solution / pitch

Use for product demos, solution decks, feature explanations, user journey, GTM, and value proposition.

Visual language:
- product journey, pain-to-value bridge, funnel, before/after, feature map, user workflow
- journey arcs, value bridge slabs, before/after fields, outcome proof chips
- warmer directional glow around the value path

Background system:
- `.theme-product`
- `.product-journey-bg`
- `.value-bridge`
- `.pain-solution-path`
- `.feature-value-map`
- `.outcome-proof`
- `.before-after-field`

Preferred compositions:
- problem-solution bridge
- user journey map
- feature-to-value matrix
- before/after split
- adoption funnel
- workflow storyboard
- outcome proof board

Avoid:
- academic proof layout
- architecture topology unless required
- all slides as marketing cards

## Strategy / executive briefing

Use for leadership summaries, decision memos, roadmap, planning, risk review, and investment logic.

Visual language:
- executive briefing board, decision board, options matrix, priority map, risk/return axis
- low-noise background with subtle quadrants, heatmap cells, priority bands, roadmap lanes
- minimal glow; crisp hierarchy and whitespace matter more

Background system:
- `.theme-strategy`
- `.executive-board-bg`
- `.decision-matrix`
- `.priority-heatmap`
- `.roadmap-bands`
- `.risk-return-axis`
- `.option-board`

Preferred compositions:
- conclusion-first frame
- decision matrix
- option tradeoff axis
- priority heatmap
- risk register board
- roadmap bands
- action owner table

Avoid:
- dense technical topology
- playful labels
- excessive motion or glow
- slides without decision implication

## Interview-learning / exam prep

Use for job interview prep, concept review, flashcard-like explanations, and exam-oriented learning.

Visual language:
- question-answer board, pitfall map, comparison grid, memory hook, whiteboard route
- answer lanes, pitfall stamps, follow-up branches, memory hooks
- light glow; answer clarity beats visual decoration

Background system:
- `.theme-interview`
- `.qa-board-bg`
- `.answer-template`
- `.pitfall-map`
- `.followup-tree`
- `.memory-hook-ladder`
- `.mistake-stamp`

Preferred compositions:
- definition -> example -> pitfall -> answer template
- comparison matrix
- common mistakes board
- implementation checklist
- interviewer follow-up tree
- memory hook ladder

Avoid:
- beautiful but vague diagrams
- long theory without answer structure
- too much decorative glow

## Concept-learning / general explainer

Use for broad explanatory decks not tied to a specialized domain.

Visual language:
- dark-grid explainer, concept orbit, mechanism chain, analogy board, route map
- balanced glow and visual variety

Background system:
- `.theme-concept`
- `.concept-orbit-bg`
- `.mechanism-chain`
- `.analogy-split`
- `.route-map-field`
- `.takeaway-constellation`

Preferred compositions:
- concept orbit
- mechanism chain
- analogy split
- decomposition board
- route map
- takeaway constellation

Avoid:
- one-size-fits-all card deck
- repeating the same grid page

## Visual difference checklist

Before delivery, compare slides from two different domains. They should differ in at least five dimensions:

1. background overlay geometry
2. module surface shape
3. connector / line language
4. icon / marker language
5. information density
6. glow color and intensity
7. layout rhythm
8. semantic DOM class vocabulary

If the only visible difference is accent color or title text, the output fails the topic style system.
