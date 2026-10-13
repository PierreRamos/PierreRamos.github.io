# Portfolio Site Ledger

## 2026-10-13: First build
- Built in `work-spaces/job-hunt`, then moved here as its own project. Layout B (sticky sidebar), dark default with
  a saved light toggle, Inter font, teal accent. Pages: home, about, resume, contact, and one per project
  (Reprise, Pixel Punch, Smoothie Splash, thesis).
- Project copy uses the user's notes plus the GitHub README drafts in `work-spaces/job-hunt/outputs/github/10-12-26/`.
  Pixel Punch and the Smoothie Splash rebuild are back in development; update their pages as they progress.
- Published from `docs/` so agent files are not served. GitHub Pages source must be set to `main` + `/docs`.
- Open: screenshots (Figma exports), thesis details (team, what MCTS adjusted, results), repo creation and first
  push, then link the site from the resume, GitHub, LinkedIn, Upwork and OnlineJobs.ph.

## 2026-10-13: Live, and a redesign direction
- Repo pushed; Pages serves `main` + `/docs` (needed one manual rebuild after switching the folder).
- User found the first build too plain and "AI-like". References: nahiyan.codes, mijobello.com; wants black, white
  and grays, with at most a pinch of colour.
- Three home-page directions in `outputs/design-directions/10-13-26/` (A terminal dither, B ruled grid, C paper
  index). User picked **B** (ruled grid, huge tight Archivo type, light/dark toggle), with A and C close behind.
- Applied B to all eight pages: Archivo, ruled frame, sticky top bar replaces the sidebar, dark default with saved
  light toggle. Inner pages are rows of `.block` (label left, `.body` right). Screenshots render grayscale and
  regain colour on hover; missing ones get a cursor-reactive dither with scanlines (`main.js`). The pixel "R" mark
  on the home page is a placeholder until the user has a logo.
- Thesis page rewritten from the manuscript (`work-spaces/job-hunt/inputs/GD4_ThesisManuscript.pdf`): game is
  *Blitzkrieg*, team of 4, MCTS picks each section's enemy composition, 54 testers, 59.3% preferred DDA.
  Screenshots `thesis-cover/1/2.png` come from its figures 10.0, 10.7 and 10.9 (PDF pages 77, 81, 83).
- Thesis year is **2022** (manuscript title page is the source of truth). Blitzkrieg art: user and Nymphel Jhoy M.
  Rafanan; all animation by the user. User also built the enemy AI logic, level design and most player mechanics
  (movement, shooting). `docs/assets/Ramos_PierreCarlo_Resume.pdf` and the job-hunt resume source
  still say 2023 until the source is updated and the PDF rebuilt.
- Footer is just the copyright. User wants no "how it was built" line: no hand-built claim and no AI mention.
- Backdrop dither in the side margins (vignette, `.backdrop` canvas in `main.js`); panel is solid. Removed the
  "credits only" footnote; home "Studio" tile is now "Shipped credits: 2" (keep Mega Cat out of headline facts).
- Credit research (Oct 2026): God of War: Sons of Sparta, PS5, 12 Feb 2026, Sony Interactive Entertainment with
  Santa Monica Studio. The 2026 Backyard Baseball is titled just "Backyard Baseball" (Playground Productions),
  9 Jul 2026 on Windows/macOS, consoles announced. Mega Cat also did Backyard Baseball '97 and '01 remasters.
  The site's "Backyard Baseball 2026" title needs the user's confirmation. No MobyGames credit page found for the user.
- Credits now show official store art (PlayStation og:image, Steam capsule) as `credit-*.jpg`, with year, platform
  and © line; God of War links its MobyGames credits page. Title is "Backyard Baseball (2026)". MCS handbook bans
  discussing projects online, so the resume page dropped the map-tile loading bullet. The resume PDF and the
  job-hunt resume source still carry that bullet, the old title and the 2023 thesis year: fix the source, rebuild.
- Screenshots from the user's old Figma portfolio (public prototype; originals in git-ignored `inputs/figma/`, all
  own work, no MCS). Stills upscaled with nearest-neighbour; gameplay GIFs converted to animated WebP
  (`pixel-punch-cover.webp`, `thesis-3.webp`). The forest gameplay is Pixel Punch; the dark arena
  with meters is Reprise (user corrected an early mix-up). Reprise cover is its logo card. Still empty: `reprise-2.png`, `pixel-punch-2.png`. Sources are low-res
  (300-600 px); higher-res captures from the games would look better.
