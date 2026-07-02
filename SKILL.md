---
name: understanding-demo-generator
description: generate content-understanding dark-grid html learning decks from notes, markdown, articles, reports, product docs, existing html decks, or concept materials. use when the user asks to create a hyperframe-style explainer, narrated html slideshow, first-principles teaching deck, ai course demo, or dark-grid interactive presentation with subtitles, navigation, and optional tts/hyperframes output. do not use for generic slide design unless the user wants content reconstruction or teaching-oriented explanation.
---

# Understanding Demo Generator

Create teaching-oriented, content-understanding HTML decks. Prefer a polished dark-grid explainer style: near-black background, subtle grid, radial glow, semantic accent colors, concise slide copy, bottom subtitles, navigation dots, page switcher, and progress bar.

Use the lightest mode that satisfies the request. Do not force narration, TTS, or HyperFrames unless the user asks for them.

## Mode Selection

### quick-html
Use by default for learning decks, course demos, concept explainers, restyled existing HTML, and Hyperframe-like dark-grid HTML.

Deliver:
- `scripts/first-principles.md`
- `scripts/deck.md`
- `scripts/slides.json`
- `dist/index.html`

### narrated-html
Use only when the user explicitly asks for narration, TTS, mimotts, voice-over, or audio.

Deliver quick-html files plus:
- `scripts/narration.json`
- `scripts/tts/slide-XX.txt`
- optional generated audio under `dist/audio/`

### hyperframes
Use only when the user explicitly asks for HyperFrames, composition, or video rendering workflow.

Deliver narrated-html files plus:
- `dist/composition/index.html`
- HyperFrames slideshow manifest embedded in composition HTML

## Default Workflow

1. Select mode: `quick-html`, `narrated-html`, or `hyperframes`.
2. Clean or extract source material.
3. Classify the input and audience. Consult `references/input-intake.md` and `references/audience-profiles.md`.
4. Write `scripts/first-principles.md` before creating slides.
5. Rebuild the material into a teaching spine with claims, mechanisms, contrasts, examples, failure points, and practical routes.
6. Create an 8-12 slide page plan unless the user requested another length.
7. Write `scripts/deck.md`.
8. Write `scripts/slides.json` using `references/slide-contract.md`.
9. Assign one visual strategy per slide by evaluating the page script, not by reusing a fixed two-column template.
10. Force the cover to be a centered theme presentation page.
11. Apply slide fit budgeting from `references/slide-fit-budget.md`.
12. Choose the style family and adaptation plan from `references/style-decision.md`.
13. Generate `dist/index.html` as a standalone local file.
14. If narrated mode: prepare TTS queue.
15. If HyperFrames mode: generate composition output and manifest.
16. Run validation and the final quality checklist.

## Existing HTML Restyle Workflow

Use when the user provides an existing HTML deck and asks to make it look like the dark-grid Hyperframe-style reference.

1. Extract scenes, titles, subtitles, narration, and slide order.
2. Preserve the teaching sequence unless the user asks to restructure.
3. Convert `.scene` / card-heavy pages into `.slide` / `.stage` pages.
4. Force the first page into a centered cover/thematic presentation layout.
5. Rebuild shallow headings into stronger teaching claims before restyling.
6. Replace repeated card grids with formula, route, xray, matrix, flow, loop, graph, decision, or takeaway layouts selected from page meaning.
7. Preserve or recreate navigation dots, bottom subtitle bar, progress bar, page switcher, keyboard controls, and optional play button.
8. Remove remote assets, CDNs, and web fonts unless the user explicitly allows them.
9. Deliver one standalone `dist/index.html` in quick-html mode unless narration or HyperFrames was requested.

## Required Reasoning Artifacts

### first-principles.md
Include input type, audience profile, thesis, primitive concepts, causal mechanism, hidden assumptions, failure points, examples, and what to emphasize or avoid.

### deck.md
Use this structure per page:

```markdown
## Slide 01
Kicker:
Headline:
Lead:
Visual type:
Layout type:
Visual plan:
Layout rationale:
On-slide text:
Speaker text:
Transition:
```

### slides.json
Follow `references/slide-contract.md`. Keep slide text compact and place longer explanation in `speakerText`.

## Cover and Content Layout Policy

### Cover page
- Make slide 1 a centered theme presentation page.
- Put the main topic in the visual center.
- Use a compact kicker, large centered title, one thesis sentence, and 2-4 chips/cards that expose the deck's main themes.
- Do not use the left-title/right-content layout on the cover.

### Content pages
- Use formula strips, x-ray stacks, flow chains, route maps, comparison slabs, reflection labs, decision axes, graph chains, matrices, timelines, loop diagrams, and takeaway lists.
- Evaluate the script's semantic shape before choosing the layout.
- Avoid repeating the same composition across adjacent slides.

## Visual Rules

Consult:
- `references/visual-style-dark-grid.md`
- `references/composition-richness.md`
- `references/slide-fit-budget.md`
- `references/style-decision.md`

Required baseline for `dist/index.html`:
- standalone HTML with embedded CSS and JS
- no remote HTTP(S) dependencies by default
- `.deck` root and one `.slide` per page
- each slide uses `--accent`
- bottom subtitle bar
- progress bar
- page switcher
- keyboard left/right navigation
- right-side navigation dots on desktop
- full-screen 16:9-friendly layout

## Content Depth Rules

Default to `level-3-mechanism`:
- Every content slide must include at least two of: mechanism, contrast, example, boundary, failure point, practical implication.
- Do not generate pages that only list concepts.
- Slide titles should express a judgment, not a topic label.

## Fit and Layout Rules

- Do not create long vertical stacks that overflow.
- If a slide has more than six information points, convert it to a matrix, grouped bands, hub-spoke, or split into two slides.
- Avoid decks where most pages are simple horizontal rows.
- Use compact-balanced sizing by default.
- Do not wrap every slide in a large glass-card container.

## Accent and Glow Rules

- Use the current page accent for 1-3 keywords in the title and for semantic markers, tags, connectors, and key nodes.
- Do not color whole paragraphs or every module.
- Core visual modules must have accent-driven background glow, not only colored text.
- Use `.visual-zone` / `.glow-zone` / `.module-glow` behind major modules.
- Use `.glow-card` / `.glow-node` / `.glow-panel` for subtle gradient module surfaces.

## Revision Workflow

When the user gives feedback on an existing output:
1. Classify the feedback: content, layout, visual, color, scale, fit, interaction, or style-family.
2. Preserve approved content and structure.
3. Modify only the affected layer unless the user asks for a full rewrite.
4. Revalidate after changes.

## Validation

Use:

```bash
python scripts/validate_demo_contract.py <project-dir> --mode quick-html
python scripts/validate_demo_contract.py <project-dir> --mode narrated-html
python scripts/validate_demo_contract.py <project-dir> --mode hyperframes
```

The validator should fail only on requirements relevant to the selected mode.
