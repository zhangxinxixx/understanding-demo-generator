#!/usr/bin/env python3
"""Lightweight validator for understanding-demo-generator projects."""

import argparse
import json
import re
from pathlib import Path

VALID_MODES = {"quick-html", "narrated-html", "hyperframes"}


def load_json(path: Path):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        raise ValueError(f"Invalid JSON in {path}: {exc}") from exc


def check_file(path: Path, errors, label=None):
    if not path.exists():
        errors.append(f"Missing {label or path}")


def validate_slides(project: Path, errors):
    path = project / "scripts" / "slides.json"
    if not path.exists():
        return [], []
    data = load_json(path)
    slides = data.get("slides", [])
    if not isinstance(slides, list) or not slides:
        errors.append("slides.json must contain a non-empty slides array")
        return [], []

    scene_ids = []
    layout_types = []
    for index, slide in enumerate(slides, start=1):
        sid = slide.get("id")
        if not sid:
            errors.append(f"slide {index} is missing id")
        else:
            scene_ids.append(sid)
        layout = slide.get("layoutType")
        if not layout:
            errors.append(f"slide {index} is missing layoutType")
        else:
            layout_types.append(layout)
        if not slide.get("accent"):
            errors.append(f"slide {index} is missing accent")
        if index == 1 and layout not in {"cover-centered", "cover-triad"}:
            errors.append("first slide must use cover-centered or cover-triad")
        if index > 1:
            if not slide.get("semanticFit"):
                errors.append(f"slide {index} is missing semanticFit")
            visual_plan = slide.get("visualPlan", {}) or {}
            if not visual_plan.get("accentUsage"):
                errors.append(f"slide {index} visualPlan is missing accentUsage")
            if not visual_plan.get("backgroundGlow"):
                errors.append(f"slide {index} visualPlan is missing backgroundGlow")
            depth_moves = visual_plan.get("depthMoves", [])
            if isinstance(depth_moves, list) and len(depth_moves) < 2 and index != len(slides):
                errors.append(f"slide {index} should include at least two depthMoves")

    for a, b in zip(layout_types, layout_types[1:]):
        if a == b and a not in {"quote-focus", "takeaway-list"}:
            errors.append(f"adjacent slides reuse layoutType: {a}")

    if len(slides) >= 8 and len(set(layout_types)) < 6:
        errors.append("8-12 slide decks should use at least 6 distinct layout types")

    return slides, scene_ids


def validate_index(project: Path, scene_ids, errors):
    path = project / "dist" / "index.html"
    if not path.exists():
        return
    html = path.read_text(encoding="utf-8", errors="replace")
    required = ["deck", "slide", "subtitle", "progress", "page-switch"]
    for token in required:
        if token not in html:
            errors.append(f"dist/index.html should contain {token}")
    if "radial-gradient" not in html:
        errors.append("dist/index.html should include radial-gradient glow")
    if "var(--accent)" not in html:
        errors.append("dist/index.html should use var(--accent)")
    if not re.search(r"visual-zone|glow-zone|module-glow", html):
        errors.append("dist/index.html should include module background glow zones")
    if not re.search(r"glow-card|glow-node|glow-panel", html):
        errors.append("dist/index.html should include glow module surfaces")
    if re.search(r"\.stage\s*\{[^}]*height\s*:\s*(?:6[0-9]{2}|[7-9][0-9]{2})px", html, re.I | re.S):
        errors.append("stage appears too large; avoid large fixed-height stage cards")
    deck_shell_match = re.search(r"\.deck-shell\s*\{(?P<body>[^}]*)\}", html, re.I | re.S)
    if deck_shell_match:
        body = deck_shell_match.group("body")
        if re.search(r"border\s*:\s*(?!0\b|none\b)[^;]+", body, re.I):
            errors.append("deck-shell should not have an obvious outer border unless requested")
        if re.search(r"box-shadow\s*:\s*(?!none\b)[^;]+", body, re.I):
            errors.append("deck-shell should not have an obvious outer shadow unless requested")
    if "voice.addEventListener(\"ended\"" in html and "index < slides.length - 1" not in html:
        errors.append("audio ended handler should stop on the final slide instead of always looping")
    if "#audio" in html and not all(token in html for token in ["addEventListener(\"play\"", "addEventListener(\"pause\"", "addEventListener(\"ended\""]):
        errors.append("audio play/pause button state should be driven by play/pause/ended media events")
    for sid in scene_ids:
        if sid not in html:
            errors.append(f"scene id missing from HTML: {sid}")


def validate_narration(project: Path, slides, errors):
    path = project / "scripts" / "narration.json"
    check_file(path, errors, "scripts/narration.json")
    if not path.exists():
        return
    data = load_json(path)
    narration_slides = data.get("slides", [])
    if len(narration_slides) != len(slides):
        errors.append("narration slide count does not match slides.json")
    tts_dir = project / "scripts" / "tts"
    if not tts_dir.exists():
        errors.append("missing scripts/tts directory")
    for index, slide in enumerate(slides, start=1):
        speaker_text = (slide.get("speakerText") or "").strip()
        if not speaker_text:
            errors.append(f"slide {index} is missing speakerText for narration")
            continue
        if index <= len(narration_slides):
            narration_text = (narration_slides[index - 1].get("text") or "").strip()
            if narration_text and narration_text != speaker_text:
                errors.append(f"narration text does not match speakerText for slide {index}")
        tts_file = tts_dir / f"slide-{index:02d}.txt"
        if tts_file.exists():
            tts_text = tts_file.read_text(encoding="utf-8", errors="replace").strip()
            if tts_text != speaker_text:
                errors.append(f"TTS text does not match speakerText for slide {index}")
        else:
            errors.append(f"missing TTS file for slide {index}: {tts_file}")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("project_dir")
    parser.add_argument("--mode", choices=sorted(VALID_MODES), default="quick-html")
    args = parser.parse_args()
    project = Path(args.project_dir)
    errors = []

    for required in [
        project / "scripts" / "first-principles.md",
        project / "scripts" / "deck.md",
        project / "scripts" / "slides.json",
        project / "dist" / "index.html",
    ]:
        check_file(required, errors)

    slides, scene_ids = validate_slides(project, errors)
    validate_index(project, scene_ids, errors)
    if args.mode in {"narrated-html", "hyperframes"}:
        validate_narration(project, slides, errors)
    if args.mode == "hyperframes" and not (project / "dist" / "composition" / "index.html").exists():
        errors.append("missing dist/composition/index.html")

    if errors:
        print("Validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1
    print(f"Demo contract is valid for mode: {args.mode}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
