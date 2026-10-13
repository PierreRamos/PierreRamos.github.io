# Portfolio Site - Local Agent Rules

Static portfolio for a Unity programmer, published from `docs/` at https://pierreramos.github.io.
Own public repo: `PierreRamos/PierreRamos.github.io` (nested in the monorepo, ignored there). Pushes are run by the user.

## Context Ledgers
- Portfolio Site Ledger: `.agents/ledgers/portfolio_site_ledger.md`

## Domain Skills
- `domain-web-design`: layout, CSS tokens, accessibility.
- `domain-git-workflow`: Git operations, commits, or branch updates.

## Key Paths
- Content source: `work-spaces/job-hunt/inputs/career_profile.md` (git-ignored there). Read it; never copy private
  fields (phone, pay floors, Gmail details) into this repo, which is public.
- Resume source: `work-spaces/job-hunt/outputs/resume/<date>/Ramos_PierreCarlo_Resume.html`.
- Styles `docs/css/style.css` (tokens on `:root`, light theme on `[data-theme="light"]`); behaviour `docs/js/main.js`.
- Preview: `.claude/launch.json` (`portfolio-site`, port 8765).

## Rules (hard)
- Studio work is credits only: title, studio, role. No screenshots, footage, feature details or unreleased titles.
- No phone number on any page or in `docs/assets/Ramos_PierreCarlo_Resume.pdf`. Rebuild that PDF from a copy of the
  resume with the phone line removed (headless Edge `--print-to-pdf`), then check it is 1 page with no `+63`.
- Write only facts from the career profile, the resume or the user. Unknown details stay out; ask instead.
- The sidebar is duplicated in all eight pages; a sidebar change touches every page.
- Screenshot filenames are listed in `README.md`; keep it in sync when slots change.
