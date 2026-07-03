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
3. Classify input and audience using `references/input-intake.md` and `references/audience-profiles.md`.
4. Write `scripts/first-principles.md` before creating slides.
5. Rebuild the material into a coherent teaching spine with claims, mechanisms, contrasts, examples, failure points, and practical routes.
6. Create an 8-12 slide page plan unless the user requested another length. Each headline must express a judgment, not just a topic label.
7. Write `scripts/deck.md` as a continuous manuscript, not isolated page summaries.
8. Write `scripts/slides.json` using `references/slide-contract.md`.
9. Write complete page manuscripts and transitions before designing visuals.
10. Design each content page as an independent DOM/CSS composition using `references/page-composition-first.md`.
11. Force the cover to be a centered theme presentation page.
12. Apply slide fit budgeting from `references/slide-fit-budget.md`.
13. Choose style family and adaptation plan from `references/style-decision.md`.
14. If narration, subtitles, or audio are involved, apply `references/subtitle-narration-continuity.md` before writing HTML or TTS files.
15. Generate `dist/index.html` as a standalone local file with shared navigation/typography but page-specific content DOM and CSS.
16. Apply playback rules from `references/html-playback.md`.
17. If narrated mode: prepare TTS queue.
18. If HyperFrames mode: generate composition output and manifest.
19. Run validation and the final quality checklist.

Never start by copying source headings into slides. Never start by writing the final visual template. The first reasoning artifact after cleaning must be `scripts/first-principles.md`.

## Manuscript-first Requirement

The deck must read as one continuous lesson:

- each page connects to the previous page
- each page sets up the next page
- `speakerText` contains transition logic, not just repeated on-slide text
- the progression should be clear: premise -> mechanism -> decomposition -> example -> boundary -> practice -> conclusion

## Page-specific Visual Rewrite Requirement

Do not build content pages from a universal `.module`, `.card`, `.item`, or `.layoutType` renderer. `layoutType` is only a planning hint in `slides.json`; it is not a component factory.

For every content slide, define a `pageDesign` before writing HTML:

```text
Page thesis:
Teaching move:
Visual metaphor:
Composition sketch:
Primary DOM regions:
Unique CSS classes:
Accent and glow usage:
Fit strategy:
Transition from previous page:
Transition to next page:
```

The final HTML should show page-specific semantic structures such as `.tool-gateway-map`, `.memory-layer-stack`, `.risk-crack-board`, `.decision-axis-field`, `.react-orbit`, or similarly meaningful classes.

Shared classes are allowed for global typography, navigation, accent variables, glow utilities, and responsive helpers. The main content area of each slide must be authored as a page-specific DOM/CSS composition.

## Existing HTML Restyle Workflow

Use when the user provides an existing HTML deck and asks to make it look like the dark-grid Hyperframe-style reference.

1. Extract scenes, titles, subtitles, narration, and slide order.
2. Preserve the teaching sequence unless the user asks to restructure.
3. Rewrite shallow headings into stronger teaching claims.
4. Force the first page into a centered cover/thematic presentation layout.
5. Rewrite content pages with page-specific DOM/CSS compositions.
6. Replace repeated card grids with formula, route, xray, matrix, flow, loop, graph, decision, or takeaway compositions selected from page meaning.
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
Page thesis:
Teaching move:
Visual metaphor:
Layout type:
Composition sketch:
Primary DOM regions:
Unique CSS classes:
On-slide text:
Speaker text:
Transition from previous:
Transition to next:
```

### slides.json
Follow `references/slide-contract.md`. Keep slide text compact and put longer explanation in `speakerText`.

## Visual Rules

Consult:
- `references/visual-style-dark-grid.md`
- `references/composition-richness.md`
- `references/page-composition-first.md`
- `references/slide-fit-budget.md`
- `references/style-decision.md`
- `references/subtitle-narration-continuity.md` when subtitles, narration, or TTS exist
- `references/html-playback.md` when audio, auto-advance, or play/pause controls exist
- `assets/style-reference-template.html`
- `assets/style-samples/`

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
- if audio exists: play/pause button state must follow real media events
- if audio exists: the final slide stops after playback; it must not loop to the first slide unless the user asks for looping
- no obvious outer deck frame/border/shadow around the whole slide canvas unless the user asks for a framed preview
- compact-balanced sizing at 16:9 desktop size
- semantic color selection based on each page's role
- module background glow driven by the current accent
- page-specific content DOM and CSS, not generic `.module + layoutType` assembly

Use diagrams before generic cards. Avoid long paragraphs, dense lists, repeated identical layouts, landing-page sections, oversized modules, and vertical stacks that cannot fit in one viewport.

## Content Depth and Slide Fit

Default to `level-3-mechanism`: every content slide should include at least two of mechanism, contrast, example, boundary, failure, or implication.

If a page has too many points, group into a matrix, radial map, split band, x-ray, or route. If it still does not fit, split the page.

## Revision Policy

When the user asks to adjust an output, classify the feedback layer first: content depth, layout fit, visual style, scale, color, interaction, or output mode. Preserve accepted parts and modify only the affected layer unless the user requests a full rebuild.

## Validation

Use:

```bash
python scripts/validate_demo_contract.py <project-dir> --mode quick-html
python scripts/validate_demo_contract.py <project-dir> --mode narrated-html
python scripts/validate_demo_contract.py <project-dir> --mode hyperframes
```

Before final delivery, verify:
- first slide is a centered cover/theme page
- full manuscript is coherent and connected
- subtitles, `speakerText`, TTS text files, narration metadata, and audio intent are aligned according to `subtitle-narration-continuity.md`
- content slides have page-specific DOM/CSS compositions
- structured visuals use stable grid/flex alignment and do not rely on drifting absolute percentage positions for primary nodes
- generic `.module + layoutType` assembly is avoided
- slide fit budget is respected
- no primary visual module overflows below its parent or into the subtitle/control region
- accent highlights and background glow are present
- navigation, subtitle, page switcher, progress bar, audio play/pause state, and final-slide stop behavior work
