# Understanding Demo Generator

A content-understanding ChatGPT Skill for generating dark-grid explainer HTML decks from notes, documents, concept materials, and existing HTML slides.

It is designed for teaching-oriented presentations: the skill first reconstructs the source material into a coherent lesson, then turns that lesson into a full-screen local HTML deck with page-specific visual compositions, subtitles, navigation, and optional narration / HyperFrames output.

## What it does

This skill turns source material into teaching-oriented, full-screen HTML slide decks with:

- first-principles reconstruction
- audience and input-type intake
- continuous manuscript writing before visual layout
- slide-level content depth control
- page-specific layout design based on slide meaning
- dark-grid visual systems with accent colors and module background glow
- compact fit budgeting to avoid oversized or overflowing slides
- optional narration, TTS queue, audio playback, and HyperFrames-compatible output

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

## Narration, subtitles, and TTS

When narration is enabled, keep these fields aligned:

- `speakerText` is the full voice manuscript.
- `subtitle` is the short bottom-bar version of the same idea.
- `scripts/narration.json.slides[n].subtitle` must match `scripts/slides.json.slides[n].subtitle`.
- `scripts/tts/slide-XX.txt` must contain the exact full `speakerText`, not the shortened subtitle.
- Audio playback state must be driven by real media events (`play`, `pause`, `ended`).
- The final slide must stop after its audio ends; it should not loop back to slide 1 unless the user asks for looping.

Prepare a TTS queue from a generated project with:

```bash
python scripts/prepare_tts_queue.py <project-dir>
```

## Visual and playback quality rules

The generated `dist/index.html` should satisfy these baseline checks:

- full-screen deck canvas with no visible outer frame, border, or preview shadow
- background and slide root fill the viewport
- first slide is a centered cover / theme page
- content pages use page-specific DOM and CSS, not a generic card template
- major visual modules fit above the subtitle and control area
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

Use the mode that matches the requested output. The stricter modes include checks for narration files, TTS alignment, audio playback rules, and HyperFrames composition output.

## Structure

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
- `references/page-composition-first.md` - design each slide as a semantic composition.
- `references/subtitle-narration-continuity.md` - keep subtitles, manuscripts, and TTS aligned.
- `references/html-playback.md` - playback controls, final-slide stop behavior, and visual chrome.
- `references/slide-fit-budget.md` - keep visual modules inside the available slide area.

## Notes

This repository contains the editable skill source. Package it as `skill.zip` before uploading it as a ChatGPT Skill.
