#!/usr/bin/env python3
import json
import sys
from pathlib import Path


def normalize_text(value: str) -> str:
    return "\n".join(line.rstrip() for line in str(value).strip().splitlines()).strip()


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: prepare_tts_queue.py <project-dir>", file=sys.stderr)
        return 2

    project = Path(sys.argv[1]).resolve()
    slides_path = project / "scripts" / "slides.json"
    if not slides_path.exists():
        print(f"Missing {slides_path}", file=sys.stderr)
        return 1

    data = json.loads(slides_path.read_text(encoding="utf-8-sig"))
    slides = data.get("slides")
    if not isinstance(slides, list) or not slides:
        print("slides.json must contain a non-empty slides array", file=sys.stderr)
        return 1

    tts_dir = project / "scripts" / "tts"
    tts_dir.mkdir(parents=True, exist_ok=True)
    audio_dir = project / "dist" / "audio"
    audio_dir.mkdir(parents=True, exist_ok=True)

    narration = {"slides": []}
    for index, slide in enumerate(slides, start=1):
        scene_id = slide.get("sceneId") or slide.get("id")
        subtitle = normalize_text(slide.get("subtitle", ""))
        speaker_text = normalize_text(slide.get("speakerText", ""))
        if not scene_id:
            print(f"Slide {index} is missing sceneId", file=sys.stderr)
            return 1
        if not subtitle:
            print(f"Slide {index} ({scene_id}) is missing subtitle", file=sys.stderr)
            return 1
        if not speaker_text:
            print(f"Slide {index} ({scene_id}) is missing speakerText", file=sys.stderr)
            return 1
        try:
            duration_sec = float(slide.get("durationSec", 15))
        except (TypeError, ValueError):
            print(f"Slide {index} ({scene_id}) has invalid durationSec", file=sys.stderr)
            return 1
        if duration_sec <= 0:
            print(f"Slide {index} ({scene_id}) durationSec must be positive", file=sys.stderr)
            return 1

        stem = f"slide-{index:02d}"
        # TTS text must be the full voice manuscript, not the short subtitle.
        (tts_dir / f"{stem}.txt").write_text(speaker_text + "\n", encoding="utf-8")
        narration["slides"].append(
            {
                "sceneId": scene_id,
                "audio": f"../audio/{stem}.mp3",
                "durationMs": int(duration_sec * 1000),
                # Keep subtitle exactly aligned with slides.json for bottom-bar display.
                "subtitle": subtitle,
                "ttsText": f"scripts/tts/{stem}.txt",
            }
        )

    out_path = project / "scripts" / "narration.json"
    out_path.write_text(json.dumps(narration, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(slides)} TTS files and {out_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
