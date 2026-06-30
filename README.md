# Constant Quest Outfitters — concept site (built by Aoraki Creations)

A full multi-page concept website built for the outreach hook with **Constant Quest Outfitters**
(Nick Trizano, Cody WY; the Thorofare elk/fish/pack operation). Evan reached Nick by phone; Nick said
he redid his current site about two years ago but is fine receiving a demo by text. This build is meant
to clearly beat his current dated WordPress site, especially on a phone.

**Status:** Built and verified locally on 2026-06-30. NOT deployed (publishing is always-ask).
Every page carries `<meta name="robots" content="noindex, nofollow">` and a small "concept site by
Aoraki Creations, not affiliated or live" badge.

## What it is
9 pages, shared chrome, one stylesheet, vanilla JS. No build step, no dependencies.
- `index.html` — Home (cinematic hero, stat band, the three offerings, camp + ranch features, gallery teaser, CTA)
- `hunting.html` — Elk hunts: 4 hunt-type cards (Archery, Rifle Bugle, Rifle, Sheep) with real dates/ratios, 90% opportunity stat, camp life, license process, what's included
- `fishing.html` — Fly fishing the South Fork: species, waters, ways to fish, the all-inclusive package
- `pack-trips.html` — Summer pack trips: Progressive, Family, Wolf & Grizzly, Custom; what's provided; wildlife
- `ranch.html` — WYO Wild Horse Ranch: overview, 1916 homestead history, amenities, basecamp role, weddings & retreats
- `about.html` — The outfit: Nick Trizano, the crew (Nate Cumin, Star Whitt, guides), the country
- `gallery.html` — Filterable masonry gallery (42 photos) with lightbox
- `faq.html` — Real FAQ accordion + the nonresident elk license process
- `contact.html` — Contact info, booking steps, a demo inquiry form, and a Google map of the lodge
- `styles.css` / `main.js` — shared design system and interactions

## Design
Cinematic, editorial outfitter look: Fraunces (display) + Archivo (UI), a warm wilderness palette
(pine green, bone, saddle rust, brass), full-bleed photography, sticky transparent-to-solid header,
scroll-reveal animations, hover states, lightbox, mobile hamburger nav. Fully responsive; verified at
375px and desktop with zero horizontal overflow on every page.

## Content + photos = 100% theirs
- All copy is built from facts scraped from cqoutfitters.com (the scrape lives in `scrape/`). Source of
  truth for every fact is `scrape/BUILD-KIT.md`.
- All 264 of their real photos were downloaded and optimized to web size (originals 232MB -> 106MB in `assets/`).
- Honesty held: no invented prices (hunt prices are NOT published, so the site shows only their real
  deposits $1,500 / $1,000 / $500 and the real license fees $1,950 / $14 / $52). No fabricated
  testimonials, scores, or guarantees; the published "90% opportunity rate" is used as-is. Feature photos
  were vision-verified before captioning; rotated/unusable files were excluded; the wedding photo is used
  only in the ranch's weddings section; the ambiguous wolf/coyote photo appears only in the gallery,
  captioned "a canid," never asserted as a wolf. Zero em or en dashes anywhere (house style).

## View locally
`.claude/launch.json` has `constant-quest` (port 8198), serving this folder. Open http://localhost:8198/.

## Deploy when Evan greenlights (so Nick can open a link on his phone)
Same GitHub Pages flow as past builds (account `Buckeyebait`). The site is static and already noindexed.
1. Copy the deploy files (the 9 `.html`, `styles.css`, `main.js`, and `assets/`) into a clean repo dir.
2. `git init`, commit, push to a public repo, enable Pages.
3. Share the Pages URL with Evan to text to Nick.
(Publishing is always-ask, so this step waits on Evan's go.)

## Real business facts used (reference)
Nick Trizano, Constant Quest Outfitters, 598 Hunter Creek Rd, Cody WY 82414. (914) 557-5754,
ntrizano@constantquest.com. Wyoming Outfitter License #BG-173. Camp 26 miles deep on the Thorofare River.
Full detail in `scrape/BUILD-KIT.md`.
