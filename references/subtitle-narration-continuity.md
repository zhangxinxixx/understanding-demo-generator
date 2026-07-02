# Subtitle and Narration Continuity

Subtitles and voice scripts are two views of the same spoken lesson.

## Core rule

For every slide:

- `subtitle` is the short bottom-screen version of the narration.
- `speakerText` is the full voice script.
- `scripts/narration.json.slides[n].subtitle` must match `scripts/slides.json.slides[n].subtitle` exactly.
- `scripts/tts/slide-XX.txt` must match `scripts/slides.json.slides[n].speakerText` exactly after trimming whitespace.
- The subtitle must summarize the same idea as the first or central sentence of `speakerText`; it must not introduce a different claim.

## Continuous narrative rule

The voice script must read as one continuous lesson, not independent captions.

Each `speakerText` should contain:

1. a bridge from the previous slide, except on the cover;
2. the current slide's explanation;
3. a setup for the next slide, except on the closing slide.

Use transition language naturally. Examples:

- `上一页我们先确定了问题，现在看它为什么会发生。`
- `理解这个机制之后，下一步要拆开它的执行链路。`
- `到这里我们已经知道边界，最后把它收束成一套实践检查表。`

## Subtitle length

Subtitles should be concise enough for the bottom subtitle bar:

- Chinese: usually 18-42 characters.
- English: usually 8-18 words.
- Avoid full paragraphs.
- Avoid subtitles that are only labels such as `定义`, `机制`, or `总结`.

## Narration length

Narration may be longer than subtitles but should stay focused:

- Typical slide: 60-150 Chinese characters.
- Dense mechanism page: up to 220 Chinese characters.
- Put detailed explanation in `speakerText`, not on-slide cards.

## Required fields

Each slide in `slides.json` should include:

```json
{
  "subtitle": "屏幕底部字幕，短句。",
  "speakerText": "完整口播文稿，需要承接上一页并引出下一页。",
  "narrative": {
    "fromPrevious": "承接上一页的句子或意图。",
    "currentPoint": "本页要讲清楚的核心。",
    "toNext": "引出下一页的句子或意图。"
  }
}
```

The `narrative` object is mandatory for content slides and recommended for cover/closing slides.

## HTML rendering rule

The subtitle bar in `dist/index.html` must read from each slide's `subtitle`, not from headline, lead, or a truncated `speakerText` fallback, except during temporary prototyping.

## TTS rule

TTS files should contain only the exact full voice script from `speakerText`. Do not put the short subtitle in the TTS file unless the subtitle and speaker text are intentionally identical.
