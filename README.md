# Haitam — personal website redesign, v2

A standalone redesign of Haitam Laafar’s personal site, built with HTML, CSS, and a small amount of JavaScript. The introduction brings together language, education, research, and technology. Existing security work remains available as projects, rather than defining the whole site.

This independent version uses warm off-white, dark ink, and a quiet green accent. The landing page has a straightforward personal introduction, clear links, and a subtle contour-line background. It uses normal-scale typography and natural section heights, with no profile summary box. The rest of the site retains v1’s content and layout, with a matching green contact section. There is no photo or decorative star motif.

The preserved v1 is in `../portfolio-redesign/`. This folder has its own assets and documents; it does not depend on v1 to run. Final verification notes are in `FINAL_REVIEW.md`.

## Preview

Open `index.html` directly in a browser, or serve this directory:

```powershell
python -m http.server 4174 --bind 127.0.0.1
```

Then visit http://127.0.0.1:4174. No package installation or build step is needed. Email copying appears when the browser supports secure clipboard access; the email link always works.

## Files

- `index.html`: all text, education, credentials, contact links, and project links.
- `style.css`: responsive layout, colors, and typography.
- `landing-v2.css`: the v2 introduction, green accent, and responsive rules.
- `script.js`: mobile navigation, project filters, email copying, and section indicators.
- `assets/`: favicon, local typeface, and decorative contour-line SVG.
- `documents/`: independent copies of all five original PDF reports.

The Newsreader font was copied from the existing `portfolio v3/assets` directory. Report files were copied from the original portfolio root. There are no external font, script, or image dependencies. All page illustrations are SVG or CSS. Newsreader is licensed under the SIL Open Font License; see `assets/fonts/OFL.txt`.

All work is contained in this new directory. The original files and `portfolio pb` have not been edited. Nothing has been deployed.
