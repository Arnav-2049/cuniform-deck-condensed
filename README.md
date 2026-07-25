# Cuniform — Condensed Pitch Deck (8 pages)

A tightened, 8-page investor cut of the full [**extensive deck**](https://github.com/Arnav-2049/cuniform-deck-extensive)
(15 slides). Same framework, fonts, and branding — fewer slides, one clean fundraising narrative.

> **Status: SCAFFOLD.** The framework and structure are in place; each of the 8 slides
> currently renders a labeled placeholder (`<Stub>`). The next step is to build out the
> real designed layouts, condensing content from the extensive deck.

## The 8 pages (standard investor cut)

| # | Slide | Condensed from (extensive deck) |
|---|-------|---------------------------------|
| 01 | **Cover** | 01 Cover |
| 02 | **Problem** | 02 Thesis + 03 Industry + 04 Rework Loop |
| 03 | **Solution** | 06 Solution / Product |
| 04 | **Why Now** | 05 Validation + 07 Why Now |
| 05 | **Market** | 09 Market |
| 06 | **Traction** | 11 Design Partners |
| 07 | **Team** | 12 Team |
| 08 | **The Ask** | 14 The Ask + close |

## Run it

```bash
python3 -m http.server 5174
```

Then open **`Cuniform Pitch — Condensed.html`** (1920×1080; use browser fullscreen /
zoom-to-fit). Arrow keys / space navigate between slides.

## Structure

```
Cuniform Pitch — Condensed.html   Entry point — loads the framework + slides, mounts 8 slides
styles.css                        Shared deck styles (copied from extensive deck)
deck-stage.js                     <deck-stage> custom element: scaling, nav, slidechange events
src/
  primitives.jsx                  Shared: Slide, ChromeBottom, Counter, SplitChars, hooks
  slides-condensed.jsx            The 8 condensed slides  ← build these out
assets/                           Wordmark, logomark, product shot, fonts
```

## Editing the slides

Each slide is a component in `src/slides-condensed.jsx`, wrapped in the shared `<Slide>`
primitive and registered in the `window.CONDENSED_SLIDES` array (that array controls order
and count). Replace the `<Stub …>` body of a slide with its real layout. The extensive
deck's `src/slides-*.jsx` are the reference for full designed versions.
