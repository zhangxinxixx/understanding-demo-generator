# HTML Playback

Standalone HTML decks should include:

- `.deck` root
- one `.slide` per page
- active slide switching
- bottom subtitle bar
- progress bar
- right-side navigation dots on desktop
- lower-right page switcher
- left/right keyboard navigation
- optional play button for auto-advance

Do not rely on remote scripts or remote fonts by default. Keep CSS and JavaScript embedded in `dist/index.html`.

## Audio and playback controls

When audio exists, the deck must treat the `<audio>` element as the source of truth.

- The play/pause button label and active style must be updated from real media events: `play`, `pause`, and `ended`.
- Do not flip the button state only inside a click handler; media can pause, fail, end, or be blocked by autoplay policy.
- On slide navigation, if the deck is currently playing, load and play the new slide audio. If the user manually paused, keep it paused.
- On audio `ended`, advance only when the current slide is not the final slide.
- On the final slide, audio `ended` must stop and leave the deck on the final slide. Do not wrap to slide 1 unless the user explicitly asks for looping.
- Browser autoplay for audible local files is often blocked. Attempt autoplay if requested, but provide a click-to-start fallback on the play button and/or slide canvas.
- A muted autoplay fallback is acceptable only as a startup assist; do not leave narration muted after the user expects audible playback.

## Visual chrome

The final user-facing HTML should feel like a full-slide experience, not a framed screenshot preview.

- Do not add an obvious border, box shadow, or framed card around the whole deck canvas unless the user asks for a framed preview.
- Internal hairlines are fine for content modules, subtitle separators, and controls.
- Keep lower-right controls outside the subtitle text flow or reserve enough right padding so controls never cover subtitles.
