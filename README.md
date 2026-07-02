# Understanding Demo Generator

A content-understanding ChatGPT Skill for generating dark-grid explainer HTML decks from notes, documents, concept materials, and existing HTML slides.

## What it does

This skill turns source material into teaching-oriented, full-screen HTML slide decks with:

- first-principles reconstruction
- audience and input-type intake
- slide-level content depth control
- layout selection based on page semantics
- dark-grid visual systems with accent colors and module background glow
- compact fit budgeting to avoid oversized or overflowing slides
- optional narration, TTS queue, and HyperFrames-compatible output

## Default mode

The default output is a standalone dark-grid HTML explainer deck. Narration, TTS, or HyperFrames output is generated only when explicitly requested.

## Structure

```text
SKILL.md
agents/
references/
scripts/
assets/
evals/
```

## Notes

This repository contains the editable skill source. Package it as `skill.zip` before uploading it as a ChatGPT Skill.
