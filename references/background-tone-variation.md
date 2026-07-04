# Background Tone Variation

The deck may keep a polished technical or explainer identity, but it must not make every theme a full-black or near-black canvas. Different domains need visibly different background tone, brightness range, texture, and spatial atmosphere.

## Core rule

Do not use one universal all-dark background for every domain. A domain theme must specify:

```json
{
  "backgroundTone": "paper-dark | blueprint-navy | terminal-black | analyst-slate | product-warm | executive-charcoal | whiteboard-dim | concept-deep",
  "backgroundBrightness": "low | medium-low | medium",
  "backgroundTexture": "...",
  "backgroundGeometry": "...",
  "lightSurfaces": "..."
}
```

The background may still be dark enough for a premium deck, but the visible surface cannot always be `#05070b` plus the same grid and radial glow.

## Required visible variation

At least four background dimensions must change between domains:

1. base tone: black, navy, slate, brown-black, paper-gray, dim whiteboard, etc.;
2. brightness: some themes may be medium-low instead of fully black;
3. texture: paper grain, blueprint coordinate grid, terminal scanline, analyst ledger ruling, journey arc, executive matte surface;
4. geometry: proof margins, topology grid, command rail, radar rings, journey bands, decision quadrants;
5. surface shape: cards, plates, rails, boards, lanes, maps, chips, tables, not always rounded dark cards;
6. glow: none/low/medium/high and different placement;
7. empty-space treatment: margins, rails, canvas zones, map fields, whiteboard zones.

## Domain background tone presets

Academic:
- backgroundTone: `paper-dark`
- base may be deep indigo, ink blue, or muted charcoal paper, not pure black;
- use faint paper grain, theorem ruling, margin notes, equation ghosts;
- surfaces should feel like proof boards, citation rails, equation strips.

Architecture:
- backgroundTone: `blueprint-navy`
- use blueprint navy / cyan coordinate grid / bus lines / port dots;
- surfaces should feel like topology plates, layers, gateways, interface lanes.

Engineering:
- backgroundTone: `terminal-black`
- black can be used here, but must include scanlines, command rails, log strips, validation gates;
- surfaces should feel like terminal panels, pipelines, debug branches.

Research:
- backgroundTone: `analyst-slate`
- use slate / graphite / blue-gray board, not full black;
- include radar rings, ledger/table ruling, scenario tree field, confidence bands.

Product:
- backgroundTone: `product-warm`
- use warm graphite, dark brown-black, muted navy-warm gradients;
- include journey arcs, value bridge glow, before-after surface zones, outcome chips.

Strategy:
- backgroundTone: `executive-charcoal`
- matte charcoal / dark gray / subtle board surface;
- avoid heavy neon; use decision quadrants, heatmap cells, roadmap bands.

Interview-learning:
- backgroundTone: `whiteboard-dim`
- may use a dim off-white, chalkboard, or muted slate board rather than black;
- include Q&A lanes, pitfall stamps, memory-hook ladders, handwritten-like separators.

Concept-learning:
- backgroundTone: `concept-deep`
- deep dark grid is acceptable, but still vary page backgrounds using orbit fields, mechanism chains, route zones, or analogy splits.

## HTML implementation rule

Use CSS variables per theme:

```css
.theme-academic {
  --bg-base: #111827;
  --bg-surface: rgba(229, 231, 235, .06);
  --bg-texture: paper-grain;
}

.theme-research {
  --bg-base: #151a22;
  --bg-surface: rgba(148, 163, 184, .08);
}
```

And use domain selectors to create different overlays:

```css
.theme-academic .slide::before { /* paper ruling + margin line */ }
.theme-architecture .slide::before { /* blueprint grid + bus lines */ }
.theme-research .slide::before { /* radar rings + ledger grid */ }
.theme-product .slide::before { /* journey arcs + value bridge field */ }
.theme-interview .slide::before { /* dim whiteboard/chalkboard field */ }
```

A generated HTML file fails if every theme is effectively the same near-black background with only accent-color changes.

## Quick visual self-check

Take screenshots of two theme examples. They should be distinguishable even if all text is blurred. If the only visible difference is color tint, the background system is too weak.
