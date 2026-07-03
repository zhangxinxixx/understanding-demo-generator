# Slide Fit Budget

Use compact-balanced sizing by default. The goal is to fit a 16:9 screen without oversized typography, long vertical stacks, or crowded horizontal rows.

## Default budget

- title: 1 line preferred, 2 lines maximum
- lead: 1-2 lines
- major visual module: 1 per slide
- information points: 3-6 per slide
- point text: 12-24 Chinese characters preferred
- tags/symbols: 2-6 per slide

## When content exceeds budget

If there are more than 6 points, do one of:
- group into a 2x2 or 3x2 matrix
- convert to hub-spoke
- convert to grouped bands
- create a diagonal route
- split into two slides

## Avoid

- long vertical lists that overflow
- one row with too many boxes
- every slide using the same horizontal flow
- large fixed-height stage cards
- huge border-radius dashboard cards
- primary visual modules taller than their available visual zone
- bottom nodes or route panels that visually spill into the subtitle/control area
- decision diagrams built from loose absolute-positioned nodes when a grid or grouped band would be more stable

## Preferred compact patterns

- `compact-matrix`
- `hub-spoke`
- `split-band`
- `diagonal-route`
- `loop-ring`
- `two-column-xray`
- `constellation`

## Fit verification

After generating HTML, sample desktop viewports and measure key rectangles:

- active slide canvas
- major visual module
- subtitle bar
- lower-right controls

The visual module must be fully contained above the subtitle bar. If it is not, reduce the module height, convert the layout to rows/bands, or split the content.
