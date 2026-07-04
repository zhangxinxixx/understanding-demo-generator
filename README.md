# Understanding Demo Generator

A content-understanding ChatGPT Skill for generating teaching-oriented HTML explainer decks from notes, documents, concept materials, reports, technical docs, and existing HTML slides.

It is designed to work like a small presentation director: first reconstruct the source material into a coherent lesson, then write a continuous slide manuscript, then design each page as an independent DOM/CSS visual composition.

## What it does

This skill turns source material into full-screen local HTML decks with:

- first-principles reconstruction
- input type and audience intake
- continuous manuscript writing before visual layout
- slide-level content depth and content density control
- topic-specific visual style systems
- page-specific DOM and CSS composition
- dark-grid visual systems with accent colors and module background glow
- subtitle, narration, and TTS alignment rules
- compact fit budgeting to avoid oversized or overflowing slides
- optional narration, TTS queue, audio playback, and HyperFrames-compatible output

## Core design principle

The skill does **not** generate decks by filling a generic card template, and it does **not** treat a page as finished when it only has a title and a few labels.

Correct flow:

```text
source material
-> first-principles reconstruction
-> coherent teaching manuscript
-> page-by-page narrative transitions
-> content density and information architecture plan
-> topic style system selection
-> independent page DOM/CSS composition
-> standalone HTML deck
```

Avoid:

```text
generic .module + layoutType + repeated card grid
sparse page = title + 3 labels + decorative glow
```

`layoutType` may exist in `slides.json` as a planning hint, but the final HTML should use page-specific semantic structures, for example:

```text
.tool-gateway-map
.memory-layer-stack
.risk-crack-board
.decision-axis-field
.react-orbit
.evidence-radar
.theorem-proof-rail
.architecture-topology
```

## Default behavior: no audio by default

By default, the skill runs in `quick-html` mode. It should generate the HTML deck and the text fields needed for narration, but it should **not** generate TTS queue files, MP3 files, or audio playback assets unless the user explicitly asks for them.

Default output:

```text
scripts/first-principles.md
scripts/deck.md
scripts/slides.json
dist/index.html
```

In default mode, `slides.json` may still include:

```text
subtitle      # short bottom-bar subtitle text
speakerText   # full manuscript text for possible future narration
narrative     # fromPrevious / currentPoint / toNext continuity fields
```

But these are text planning fields only. They do not imply audio generation.

## Content density rule

The first generated version must not be too thin or scattered. Every normal content slide should include:

- one central claim;
- 3-6 visible semantic units;
- one explicit relationship layer, such as sequence, dependency, proof path, axis, scenario tree, route, or data flow;
- at least one support element, such as example, boundary, failure mode, evidence point, implication, or decision rule;
- a `speakerText` explanation that connects the visible pieces instead of repeating labels.

Each content slide should define these `visualPlan` fields:

```json
{
  "informationArchitecture": "central claim, visible units, and relationships",
  "contentDensity": "visible unit count, support element, and density level",
  "coherenceLinks": "how this slide connects previous/current/next ideas"
}
```

Use `references/content-density-continuity.md` to avoid sparse first drafts and scattered pages.

## Topic style systems

Different subjects should use different visual languages. The skill should not solve style variation by only changing colors.

| Domain | Visual language | Preferred composition patterns | Avoid |
| --- | --- | --- | --- |
| `academic` | paper-lab, theorem board, evidence margin | theorem proof rail, equation decomposition, argument tree, citation rail, literature matrix | sales cards, excessive neon, generic three-card summaries |
| `architecture` | blueprint, topology graph, layered system | layered stack, gateway map, interface contract map, pipeline, state machine, dependency graph | card rows pretending to be architecture |
| `engineering` | terminal-lab, build pipeline, debug path | implementation route, build-test-deploy lane, validation gates, failure x-ray, annotated code block | abstract diagrams without operational steps |
| `research` | analyst board, evidence radar, variable map | thesis-evidence-risk board, scenario tree, trigger/failure table, confidence ladder | decorative nodes without evidence relation |
| `product` | user journey, value bridge, funnel | problem-solution bridge, before/after split, feature-to-value matrix, workflow storyboard | academic proof layout for product pitch |
| `strategy` | executive radar, decision board | decision matrix, priority heatmap, risk/return axis, roadmap bands | playful labels, excessive glow, no decision implication |
| `interview-learning` | Q&A board, pitfall map, answer template | comparison grid, mistake board, follow-up tree, memory hook ladder | vague diagrams without answer structure |
| `concept-learning` | dark-grid explainer, concept orbit | mechanism chain, analogy split, route map, takeaway constellation | repeated generic card grids |

## Narration, subtitles, and TTS

When narration is enabled, keep these fields aligned:

- `speakerText` is the full voice manuscript.
- `subtitle` is the short bottom-bar version of the same idea.
- `scripts/narration.json.slides[n].subtitle` must match `scripts/slides.json.slides[n].subtitle` exactly.
- `scripts/tts/slide-XX.txt` must contain the exact full `speakerText`, not the shortened subtitle.

Prepare a TTS queue only in narrated mode:

```bash
python scripts/prepare_tts_queue.py <project-dir>
```

## Validation

Run the validator before shipping an output:

```bash
python scripts/validate_demo_contract.py <project-dir> --mode quick-html
python scripts/validate_demo_contract.py <project-dir> --mode narrated-html
python scripts/validate_demo_contract.py <project-dir> --mode hyperframes
```

## Current repository status

This repository currently contains the editable skill source, references, and validation / TTS queue scripts.

The repository does **not** currently include generated demo examples, MiMo audio, or binary release assets. If examples are needed, generate them from the skill source and commit only the source-friendly files, or publish large binary audio assets via GitHub Releases / Git LFS.

## Repository structure

```text
SKILL.md
agents/
references/
scripts/
assets/
evals/
```

## Key references

- `references/input-intake.md` - classify source material and audience.
- `references/content-density-continuity.md` - avoid sparse first drafts and scattered pages.
- `references/topic-style-systems.md` - choose domain-specific visual language.
- `references/page-composition-first.md` - design each slide as a semantic composition.
- `references/subtitle-narration-continuity.md` - keep subtitles, manuscripts, and TTS aligned.
- `references/html-playback.md` - playback controls, final-slide stop behavior, and visual chrome.
- `references/slide-fit-budget.md` - keep visual modules inside the available slide area.
- `references/visual-style-dark-grid.md` - dark-grid canvas, accent, glow, and module-light rules.

## Notes

This repository contains the editable skill source. Package it as `skill.zip` before uploading it as a ChatGPT Skill.
