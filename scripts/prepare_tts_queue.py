#!/usr/bin/env python3
"""Prepare TTS text files from scripts/slides.json."""

import json
import sys
from pathlib import Path


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: prepare_tts_queue.py <project-dir>")
        return 2

    project = Path(sys.argv[1])
    slides_path = project / "scripts" / "slides.json"
    if not slides_path.exists():
        print(f"Missing {slides_path}")
        return 1

    data = json.loads(slides_path.read_text(encoding="utf-8"))
    slides = data.get("slides", [])
    tts_dir = project / "scripts" / "tts"
    tts_dir.mkdir(parents=True, exist_ok=True)

    narration = {"slides": []}
    for index, slide in enumerate(slides, start=1):
        scene_id = slide.get("id", f"scene-{index:02d}")
        text = slide.get("speakerText") or slide.get("subtitle") or slide.get("lead") or slide.get("title") or ""
        file_name = f"slide-{index:02d}.txt"
        (tts_dir / file_name).write_text(text.strip() + "\n", encoding="utf-8")
        narration["slides"].append({
            "sceneId": scene_id,
            "text": text.strip(),
            "ttsText": f"scripts/tts/{file_name}",
            "audio": f"audio/{scene_id}.wav",
        })

    (project / "scripts" / "narration.json").write_text(
        json.dumps(narration, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"Prepared {len(slides)} TTS files in {tts_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
