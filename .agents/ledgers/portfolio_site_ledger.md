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
