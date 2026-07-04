# Understanding Demo Generator

A content-understanding ChatGPT Skill for generating teaching-oriented HTML explainer decks from notes, documents, concept materials, reports, technical docs, and existing HTML slides.

It is designed to work like a small presentation director: first reconstruct the source material into a coherent lesson, then write a continuous slide manuscript, then design each page as an independent DOM/CSS visual composition.

## What it does

This skill turns source material into full-screen local HTML decks with:

- first-principles reconstruction
- input type and audience intake
- continuous manuscript writing before visual layout
- slide-level content depth control
- topic-specific visual style systems
- page-specific DOM and CSS composition
- dark-grid visual systems with accent colors and module background glow
- subtitle, narration, and TTS alignment rules
- compact fit budgeting to avoid oversized or overflowing slides
- optional narration, TTS queue, audio playback, and HyperFrames-compatible output

## Core design principle

The skill does **not** generate decks by filling a generic card template.

Correct flow:

```text
source material
-> first-principles reconstruction
-> coherent teaching manuscript
-> page-by-page narrative transitions
-> topic style system selection
-> independent page DOM/CSS composition
-> standalone HTML deck
```

Avoid:

```text
generic .module + layoutType + repeated card grid
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

## Quick start

Install the skill into your Codex / ChatGPT skills directory:

```text
~/.codex/skills/understanding-demo-generator/
```

Then ask for a teaching deck from source material, for example:

```text
Use understanding-demo-generator to turn these notes into a dark-grid explainer HTML deck.
```

For narration or video workflows, request them explicitly:

```text
Use understanding-demo-generator. Generate a narrated HyperFrames deck with MiMo / Xiaomi TTS.
```

## Modes

The default output is a standalone dark-grid HTML explainer deck. Narration, TTS, or HyperFrames output is generated only when explicitly requested.

| Mode | When to use | Main outputs |
| --- | --- | --- |
| `quick-html` | Default mode for notes, markdown, articles, reports, product docs, concept materials, or restyling an existing HTML deck. | `scripts/first-principles.md`, `scripts/deck.md`, `scripts/slides.json`, `dist/index.html` |
| `narrated-html` | Use when the request mentions narration, TTS, MiMo / Xiaomi TTS, voice-over, audio, or subtitles tied to speech. | quick-html outputs plus `scripts/narration.json`, `scripts/tts/slide-XX.txt`, optional `dist/audio/` |
| `hyperframes` | Use when the request mentions HyperFrames, composition output, slideshow manifest, or video rendering workflow. | narrated-html outputs plus `dist/composition/index.html` |

## Supported input types

The skill works best for explanation-heavy material where the deck needs to teach a concept, not just decorate headings:

- Markdown notes, Obsidian notes, course notes, and rough outlines
- articles, reports, and research summaries
- academic/theory material and paper-style explanations
- architecture and system design documents
- engineering implementation docs and framework notes
- product demos, solution briefs, and pitch material
- strategy or executive briefing material
- interview-learning and exam-prep material
- existing HTML decks that need to be rewritten visually

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

Each generated project should define a top-level `topicStyleSystem` in `scripts/slides.json`:

```json
{
  "topicStyleSystem": {
    "domain": "architecture",
    "visualLanguage": "blueprint topology with layered system map",
    "paletteLogic": "cyan/blue for flow, amber for risk gates",
    "compositionBias": ["layered-stack", "topology-graph", "interface-map"],
    "avoid": ["generic card grid", "sales-like cards"],
    "reason": "The source explains system structure and data flow."
  }
}
```

## Manuscript and narrative continuity

The deck should read as one continuous lesson:

- each slide connects to the previous slide
- each slide sets up the next slide
- `speakerText` contains transition logic, not just repeated on-slide text
- the flow should be clear: premise -> mechanism -> decomposition -> example -> boundary -> practice -> conclusion

Each content slide should include a `narrative` object:

```json
{
  "narrative": {
    "fromPrevious": "Bridge from the previous slide.",
    "currentPoint": "The core point of this slide.",
    "toNext": "Setup for the next slide."
  }
}
```

## Narration, subtitles, and TTS

When narration is enabled, keep these fields aligned:

- `speakerText` is the full voice manuscript.
- `subtitle` is the short bottom-bar version of the same idea.
- `scripts/narration.json.slides[n].subtitle` must match `scripts/slides.json.slides[n].subtitle` exactly.
- `scripts/tts/slide-XX.txt` must contain the exact full `speakerText`, not the shortened subtitle.
- Audio playback state must be driven by real media events (`play`, `pause`, `ended`).
- The final slide must stop after its audio ends; it should not loop back to slide 1 unless the user asks for looping.

Prepare a TTS queue from a generated project with:

```bash
python scripts/prepare_tts_queue.py <project-dir>
```

## Examples

See `examples/` for generated 8-slide narrated demos with MiMo TTS audio, covering technical framework explanation, product demo, research review, and executive briefing content. The examples intentionally use different visual systems: blueprint diagrams, product journey screens, paper/evidence layouts, and executive radar briefings.

## Output contract

A completed project should contain:

```text
scripts/
  first-principles.md
  deck.md
  slides.json
  narration.json          # narrated-html / hyperframes only
  tts/slide-XX.txt        # narrated-html / hyperframes only
dist/
  index.html
  composition/index.html  # hyperframes only
  audio/                  # optional generated audio files
```

The deck HTML is standalone by default: embedded CSS, embedded JavaScript, no remote HTTP dependencies unless explicitly requested.

## Visual and playback quality rules

The generated `dist/index.html` should satisfy these baseline checks:

- full-screen deck canvas with no visible outer frame, border, or preview shadow
- background and slide root fill the viewport
- first slide is a centered cover / theme page
- content pages use page-specific DOM and CSS, not a generic card template
- domain style affects composition, not only accent color
- major visual modules fit above the subtitle and control area
- core modules use accent-driven background glow where appropriate
- bottom subtitle bar, progress bar, page switcher, keyboard navigation, and desktop dots are present
- play / pause button label and visual state match the actual audio state when audio exists
- HyperFrames composition output embeds a slideshow manifest when hyperframes mode is used

## Validation

Run the validator before shipping an output:

```bash
python scripts/validate_demo_contract.py <project-dir> --mode quick-html
python scripts/validate_demo_contract.py <project-dir> --mode narrated-html
python scripts/validate_demo_contract.py <project-dir> --mode hyperframes
```

Use the mode that matches the requested output. Stricter modes include checks for narration files, TTS alignment, audio playback rules, and HyperFrames composition output.

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
- `references/topic-style-systems.md` - choose domain-specific visual language.
- `references/page-composition-first.md` - design each slide as a semantic composition.
- `references/subtitle-narration-continuity.md` - keep subtitles, manuscripts, and TTS aligned.
- `references/html-playback.md` - playback controls, final-slide stop behavior, and visual chrome.
- `references/slide-fit-budget.md` - keep visual modules inside the available slide area.
- `references/visual-style-dark-grid.md` - dark-grid canvas, accent, glow, and module-light rules.

## Notes

This repository contains the editable skill source. Package it as `skill.zip` before uploading it as a ChatGPT Skill.
