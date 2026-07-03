# Page Composition First

Generate pages as authored compositions, not as generic modules stitched together by `layoutType`.

## Core rule

Write the deck in this order:

1. Build a coherent full-deck script.
2. Write complete, connected page manuscripts.
3. Decide each page's teaching move and visual metaphor.
4. Design each page as its own DOM and CSS composition.
5. Only then implement HTML.

Do not start from a shared `.module` component library. Do not render slides by mapping `layoutType` to a generic card layout.

## Manuscript coherence

`deck.md` must read as a continuous lesson:

- Each slide should connect to the previous slide.
- Each slide should set up the next slide.
- Use transition sentences in `speakerText`.
- Avoid isolated slides that look like independent summary cards.
- The progression should be clear: premise -> mechanism -> decomposition -> example -> boundary -> practice -> conclusion.

## Independent page design

For every content slide, define a `pageDesign` before HTML implementation:

```text
Page thesis:
Teaching move:
Visual metaphor:
Composition sketch:
Primary DOM regions:
Unique CSS classes:
Accent and glow usage:
Fit strategy:
Transition from previous page:
Transition to next page:
```

The resulting HTML should use page-specific semantic classes such as:

- `.react-orbit`
- `.state-memory-layers`
- `.tool-gateway-map`
- `.failure-crack-board`
- `.workflow-vs-agent-field`

Avoid page bodies that are only:

- `.module`
- `.card`
- `.item`
- `.grid`
- `.layout-{type}`

Generic utility classes are acceptable for shared typography, navigation, accent colors, glow, and responsive behavior. The main content composition must be page-specific.

## DOM rule

A slide may still declare `layoutType` in `slides.json` for planning and validation, but HTML should not be a direct `layoutType` renderer. Treat `layoutType` as a planning hint, not a component factory.

For each slide, write custom DOM that matches the page script:

- Formula pages should have formula-specific DOM.
- Failure pages should have crack/risk/chain DOM.
- System pages should have node/gateway/edge DOM.
- Decision pages should have axis/criteria/outcome DOM.
- Route pages should have path/station/milestone DOM.

## CSS rule

Use shared CSS variables and shared interaction controls, but give major page compositions their own CSS sections.

Good:

```css
.react-orbit { ... }
.react-orbit .thought-node { ... }
.react-orbit .action-gate { ... }
.react-orbit .observation-ring { ... }
```

Avoid:

```css
.module { ... }
.module .title { ... }
.layout-flow-chain .module { ... }
```

## Alignment and overflow rule

Primary visual structures must be aligned by the layout system, not by fragile eyeballed offsets.

- Use CSS grid or flex tracks for matrices, state rings, decision boards, ladders, and comparison fields.
- Avoid positioning primary nodes with drifting absolute percentages such as `left: 30%; bottom: 5%` unless the geometry truly requires it and has been measured.
- If a diagram uses absolute positioning, define one stable coordinate system and verify each node's bounding box stays inside the visual module.
- The major visual module must fit inside its `.visual-zone` or equivalent parent. Its computed bottom must not extend into the subtitle or control area.
- Redesign crowded decision/axis pages into grouped rows, matrices, split bands, or route panels instead of letting a tall diagram spill downward.

## Quality checks

Before delivery, inspect the HTML:

- Does each page have a distinct semantic composition?
- Are page-specific class names visible in the DOM and CSS?
- Could a reader understand the page's idea from the visual structure alone?
- Does the narration form a continuous lesson?
- Did the implementation avoid generic `.module + layoutType` assembly?
- Are matrix, ring, route, and decision layouts grid-aligned rather than visually drifting?
- Does every primary visual module fit within its parent without overlapping subtitles or controls?
