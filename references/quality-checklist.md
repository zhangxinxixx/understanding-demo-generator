# Quality Checklist

Run this before delivery.

## Content

- Cover presents the topic centrally.
- Every content slide has a judgment-style title.
- Content slides are not just concept lists.
- Each content slide includes at least two of: mechanism, contrast, example, boundary, failure point, practical implication.
- Speaker text or subtitle carries explanation that does not fit on slide.

## Layout

- Each slide has a layout type.
- Adjacent content slides do not reuse the same layout type.
- The deck uses at least 6 layout types when it has 8-12 slides.
- The deck is not mostly left-title/right-content.
- The deck is not mostly horizontal rows.
- No slide uses a long vertical stack that overflows.

## Visual

- Dark grid background exists.
- Global radial glow exists.
- Core modules use accent-driven background glow.
- Title or content uses semantic accent highlights.
- Tags, symbols, numbers, or relation labels appear where helpful.
- The design does not mechanically copy one sample template.

## Fit

- Titles are not oversized.
- Cards and nodes are compact enough for 16:9.
- Information density is readable.
- No important content is hidden below the fold.
- The primary visual module does not extend below its parent visual area.
- Subtitles and lower-right controls do not overlap.
- The whole deck canvas is not wrapped in an obvious preview border or shadow unless requested.

## Interaction

- Navigation dots exist.
- Page switcher exists.
- Bottom subtitle exists.
- Progress bar exists.
- Left/right keyboard navigation works.
- If audio exists, play/pause state follows real media events.
- If audio exists, the final slide stops after its audio ends instead of looping.
- If autoplay is requested, the deck attempts it and still provides a clear click-to-start fallback for browser autoplay blocking.

## Narration

- `speakerText` reads as a connected lesson across slides.
- `scripts/tts/slide-XX.txt` matches the corresponding `speakerText`.
- `narration.json` text matches the corresponding `speakerText`.
- Bottom subtitles summarize the same idea as the spoken script and do not drift into a different claim.
