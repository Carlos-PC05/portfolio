---
name: Carlos Parra Camacho — Portfolio
description: A Spanish matchday sheet as a personal engineering portfolio — pitch, team sheet, and substitution board.
colors:
  pitch: "#0A5C34"
  pitch-deep: "#074526"
  chalk: "#F4F6F1"
  chalk-dim: "#B8D4C2"
  board-black: "#0B0F0C"
  board-amber: "#FFB020"
  ink: "#0B0F0C"
  ink-soft: "#4A5B50"
  rule: "#C9D4CB"
typography:
  kit:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(7rem, 32vw, 26rem)"
    fontWeight: 900
    lineHeight: 0.78
    letterSpacing: "-0.045em"
    fontVariation: "'wdth' 118"
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 110"
  kit-name:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.8rem, 6.5vw, 4.6rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.1em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 3.4vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 105"
  numeral:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4rem)"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 118"
  sheet:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.35rem, 2.6vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 85"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1rem, 1.9vw, 1.4rem)"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "normal"
    fontVariation: "'wdth' 92"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 75"
rounded:
  none: "0"
spacing:
  hair: "4px"
  tight: "8px"
  snug: "16px"
  base: "24px"
  loose: "48px"
  section: "clamp(72px, 12vh, 144px)"
components:
  button-primary:
    backgroundColor: "{colors.board-amber}"
    textColor: "{colors.board-black}"
    rounded: "{rounded.none}"
    padding: "20px 40px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.board-black}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    rounded: "{rounded.none}"
    padding: "18px 38px"
  sheet-row:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "24px 0"
  board:
    backgroundColor: "{colors.board-black}"
    textColor: "{colors.board-amber}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
---

# Design System: Carlos Parra Camacho — Portfolio

## Overview

**Creative North Star: "Matchday"**

The site is a Spanish club's matchday apparatus, rebuilt as a personal engineering record.
It is not a football *theme* applied to a portfolio; it is a portfolio that borrows the
information design football already perfected. A squad sheet is the most scannable
document in sport — numbered, positioned, tabular, readable at a glance from the stands —
and that is exactly what a recruiter with sixty seconds needs. The metaphor and the
usability argument are the same argument.

Three materials carry the entire system, and each has one job. The **pitch** is drenched
saturated green with mown stripes and chalk line markings; it holds display moments, the
name, the number, and the breathing room between sections. The **sheet** is chalk-white
printed paper laid on that pitch; it is where dense, factual, legible content lives —
the squad, the season record, the stacks. The **board** is the fourth official's
substitution board, near-black with amber LEDs; it carries state and action only —
availability, language, and the call to contact.

The scene forced the light: a recruiter on a phone in a bright office between meetings,
a client on a laptop by a window at midday. This is a daylight surface. It deliberately
refuses the near-black-plus-neon look that the engineer-portfolio category ships by
default, and equally refuses the cream-paper-and-serif editorial rendition that is the
predictable opposite.

**Key Characteristics:**
- Drenched color: green owns the page, it is not an accent on neutral.
- Zero corner radius anywhere. The only curves in the system are real pitch geometry.
- One typeface across the whole site, worked hard across its width and weight axes.
- Tables and rules, not card grids.
- Numbers are enormous and structural, never decorative.

## Colors

A drenched, floodlit, saturated palette taken from a daylight pitch, a printed team
sheet, and an amber LED board.

### Primary
- **Pitch Green** (`#0A5C34`): The ground of the site. Full-bleed, not a section
  background. Every display moment, the hero, the section breaks, and the close sit on it.
- **Mown Green** (`#074526`): The alternate stripe, and the only other green. Used solely
  as a wide `repeating-linear-gradient` band running across the pitch, never as a fill in
  its own right. It is texture, not a second color.

**The Darker Stripe Rule.** The mown stripe is *darker* than the base pitch, never
lighter. Chalk and Chalk Dim sit on both bands, so a lighter stripe would silently drop
secondary text below 4.5:1 on every other band. Darkening it means the striping can be
made genuinely visible without costing a single contrast check.

### Secondary
- **Board Amber** (`#FFB020`): The substitution board's LED. Reserved for availability
  status, the primary action, and the active language. Nothing else.

### Neutral
- **Chalk** (`#F4F6F1`): Line markings on the pitch, all display type on green, and the
  paper of the team sheet. 7.4:1 on Pitch Green.
- **Chalk Dim** (`#B8D4C2`): Secondary text on green — a desaturated tint of the ground
  itself, never a gray. 5.1:1 on Pitch Green.
- **Board Black** (`#0B0F0C`): The board's face, and the ink on the team sheet. 10.6:1
  under Board Amber.
- **Ink Soft** (`#4A5B50`): Secondary text on the white sheet — again a tint of the
  system's green, not neutral gray.
- **Rule** (`#C9D4CB`): Hairline rules between team-sheet rows. 1px, full width, never
  colored, never thicker.

### Named Rules

**The Amber Reserve Rule.** Board Amber appears only where a decision or a state lives:
OPEN TO WORK, the active language, and the contact action. If amber appears on something
the visitor cannot act on or be informed by, it is decoration and comes out.

**The No Gray Rule.** There is no neutral gray in this system. Every dimmed text value is
a tint pulled from the ground it sits on. On green, secondary text is Chalk Dim; on paper,
it is Ink Soft.

**The Chalk Alpha Rule.** Pitch line markings are Chalk at 45–60% alpha and 2–3px, drawn
as SVG geometry. They are markings, not UI borders, and must never be mistaken for one.

## Typography

**Display Font:** Archivo Variable (fallback: Helvetica Neue, Arial, sans-serif)
**Body Font:** Archivo Variable
**Label Font:** Archivo Variable

One family, four widths. A real club runs one typeface across the shirt, the programme,
and the scoreboard, and varies it by width and weight rather than by mixing faces. Archivo
carries a `wdth` axis from 62 to 125 and a `wght` axis from 100 to 900, which is the whole
system: kit numerals live wide and black, team-sheet rows live condensed, body lives
normal.

**Character:** Industrial, signage-derived, high-confidence. It reads as public lettering
— the kind painted on a stand or printed on a fixture list — rather than as a UI font.

### Hierarchy

Nine steps, each with exactly one job. Every step is a CSS custom property
(`--fs-kit` … `--fs-label`); no literal `font-size` appears anywhere in the stylesheet.

- **Kit** (900, `clamp(7rem, 32vw, 26rem)`, 0.78, `wdth 118`): The shirt number. Appears
  once per page.
- **Kit Name** (900, `clamp(1.8rem, 6.5vw, 4.6rem)`, 1.0, `0.1em` tracking, `wdth 118`):
  The surname above the number. Tracked out the way names are printed across a shirt back.
- **Display** (800, `clamp(2.25rem, 6vw, 4.75rem)`, 0.92, `wdth 110`): Section titles.
  Uppercase.
- **Headline** (800, `clamp(1.5rem, 3.4vw, 2.5rem)`, 1.05, `wdth 105`): The full name in
  the hero. The one step between Display and Sheet.
- **Numeral** (900, `clamp(2.5rem, 6vw, 4rem)`, 0.82, `wdth 118`): Squad numbers in the
  team sheet. Kit typography scaled down to table size — that repetition is what makes
  the list read as a squad rather than as a numbered list.
- **Sheet** (600, `clamp(1.35rem, 2.6vw, 2rem)`, 1.15, `wdth 85`): Project titles. The
  condensed width is what makes a long title fit one line on a phone.
- **Lead** (`clamp(1.1rem, 1.9vw, 1.4rem)`): The site's "slightly louder than body"
  voice. One size, three renditions, each tuned to its container: hero thesis
  (600 / `wdth 92` / 1.35), season role and range name (700 / `wdth 88–90` / 1.1–1.2),
  off-pitch list (600 / `wdth 88` / 1.3). The *size* is the step; weight and width flex.
- **Body** (400, 1rem, 1.6, `wdth 100`): Prose. Measure capped at 68ch. The hero role
  line runs Body size at `wdth 90` — it is a sentence, not a label, so it stays sentence
  case rather than becoming tracked caps.
- **Label** (700, 0.75rem, `0.14em` tracking, uppercase, `wdth 75`): Positions, dates,
  stack chips, board legends, nav, and the crest.

### Named Rules

**The Kit Numeral Rule.** The shirt number overrides the usual display ceiling. It is set
to the viewport, not to a type scale, and clipping it at the edge is correct — a number on
a shirt back is cropped by the shoulders. It is the one place in the system where type is
architecture.

**The One Family Rule.** No second typeface, ever. If something needs to feel different,
change `wdth` before reaching for another font. Monospace in particular is banned; it is
the costume this category wears to look technical, and Archivo condensed does the job of
tabular data better.

## Layout

A single `min(1240px, 92vw)` container (`.wrap`) with the pitch full-bleed beyond it.
There is no universal column grid; each region declares the grid its content needs, and
all four are two-column-or-stacked rather than a shared twelve-track system:
hero `1.05fr 1fr` at ≥900px, squad row `auto 1fr` at ≥560px, season row `180px 1fr` at
≥760px, profile `1.4fr 1fr` at ≥860px, range band `repeat(3, 1fr)` at ≥700px.

The chalk markings are drawn as an SVG layer sized to the viewport, independent of the
content grid, so they behave like a real pitch under the content rather than like a
decorative border around it.

Rhythm is `--space-section` (`clamp(72px, 12vh, 144px)`) between movements, `48px` between
groups, `16px` inside a group. More space sits above a heading than below it, always at
roughly a 2:1 ratio.

The pitch alternates with the sheet down the page to pace the scroll: drenched green
display → dense white tabular passage → green again. A dense passage always earns a quiet
one. The page ends anchored on the board, not on the sheet.

Responsive behavior: below 560px the squad row drops its number column and stacks in
document order — number, position, title, description, stack chips, repository link —
so a long project title gets the full measure instead of ~300px. It stacks; it never
becomes a card. The kit numeral scales on `vw` and is expected to crop at the viewport
edge. Below 720px the pitch markings drop the penalty area, leaving the touchline,
halfway line, centre circle and centre spot. The hero never reorders on small screens:
name, role, thesis and the board come first, and the numeral closes the section.

## Elevation & Depth

The system is materially flat and uses no ambient shadows. Depth comes from **material
stacking**: the white sheet is a physical object resting on the pitch, so it casts one
real, directional shadow, and nothing else in the system casts anything.

### Shadow Vocabulary
- **Sheet Lift** (`box-shadow: 0 18px 40px -12px rgba(4, 30, 16, 0.45)`): The single
  permitted shadow. Applied only to the white sheet panels where they sit on green. It has
  a real y-offset and a soft blur because it is a sheet of paper in daylight.

### Named Rules

**The One Shadow Rule.** Exactly one shadow token exists and it belongs to one component.
Buttons, rows, tags, and the board are flat. A glow, a zero-offset halo, or a shadow on
anything other than a sheet panel is a defect.

## Shapes

Zero radius, universally. Pitch markings, sheet edges, board edges, buttons, and stack
tags are all square. The form language is rectilinear because every real object in this
world — the sheet, the board, the penalty box, the six-yard box — is drawn with straight
lines and right angles.

### Named Rules

**The Only Curve Rule.** Every curve in the system is real pitch geometry drawn in the
SVG markings layer: the centre circle, the penalty arc, the centre spot and the penalty
spot. Outside that layer there is no rounded shape, no `border-radius`, and no pill
anywhere — `* { border-radius: 0 }` enforces it globally.

## Components

### Buttons
- **Shape:** Perfectly square (0 radius).
- **Primary:** Board Amber fill, Board Black text, Label typography, `20px 40px` padding.
  This is the contact action and it appears on the board.
- **Hover / Focus:** Fill swaps to Chalk with Board Black text over 140ms. Focus-visible
  adds a 3px Chalk outline offset 3px. No transform, no lift.
- **Ghost:** Transparent with a 2px Chalk border, Chalk text. Used for secondary links
  (GitHub, LinkedIn) on green. Hover fills Chalk with Pitch Green text.

### Chips (stack tags)
- **Style:** 1px Ink Soft border on transparent, Ink Soft text at Label size, `6px 10px`
  padding, square. Chips only ever appear inside a sheet; there is no on-green variant,
  and adding one would need its own contrast check.
- **State:** Static. Stack tags are facts, not filters, and must never look interactive.

### Sheet (containers)
- **Corner Style:** Square.
- **Background:** Chalk.
- **Shadow Strategy:** Sheet Lift, and only here.
- **Border:** None. The shadow and the color change carry the edge.
- **Internal Padding:** `clamp(24px, 5vw, 64px)`.

### Navigation
- Uppercase Label typography in Chalk, laid horizontally along the top of the pitch with
  no background. Hover raises a 2px Chalk underline. It wraps rather than collapsing —
  never a hamburger, because four destinations fit at 360px. There is deliberately no
  active/current state: the page is a single scroll and a scroll-spy would be the only
  client-side JavaScript on the site.
- Above it sits the **spine**, a full-bleed Board Black strip of Label-size facts
  separated by 1px dividers. It is the programme's masthead and carries verified facts
  only.

### Substitution Board (signature component)
Near-black panel, amber legend, square. It holds three things and nothing else: the
availability status with a slow-pulsing amber square, the EN/ES language control, and the
contact action. Its type is Label, tracked wide, uppercase. It is the only component with
an animated state, and the pulse is a 2.4s opacity cycle that stops entirely under
`prefers-reduced-motion`.

### Team Sheet Row (signature component)
Squad number in Kit-derived numerals at `wdth 118`, then — in the content column —
position label, title, description, stack chips, and the repository link. Rows are
separated by 1px Rule hairlines with no vertical borders. Hovering a row shifts its
background to a 4% green tint and slides the number 4px right: the motion a name gets
when it is read off a list.

**The Honest Row Rule.** A row whose project has a public repository shows a Pitch Green
text link naming its action ("View repository ↗", underlined, filling green on hover).
A row without one shows the plain sentence "No public repository" in Ink Soft — never a
disabled-looking control, and never silence. Two of the four projects have no public
repo, and saying so is the honesty the whole product rests on. This label is a truth
requirement, not a style choice; it does not get removed for tidiness.

### Range Band (signature component)
A full-bleed pitch band between the hero and the squad, ruled top and bottom with 2px
chalk. Three cells, divided by 1px chalk hairlines, each pairing a Numeral-size count
with a discipline name and the word "project(s)". The counts are the real number of
projects in each discipline. It exists because PRODUCT's third principle asks the
structure to *show* range rather than assert it — this is the one place the site argues
with layout instead of a sentence.

## Do's and Don'ts

### Do:
- **Do** let green own the page. It should cover well over half of any given viewport.
- **Do** tint every secondary text color from its own ground (Chalk Dim on green, Ink Soft
  on paper).
- **Do** draw the pitch markings as SVG geometry sized to the viewport, at 45–60% Chalk
  alpha.
- **Do** keep all four squad numbers, both language states, and the availability status
  legible at 360px wide.
- **Do** vary `wdth` on Archivo before considering any other typographic move.
- **Do** run exactly one orchestrated motion moment per page load — the chalk markings
  drawing on — and make its `prefers-reduced-motion` state the already-drawn markings.

### Don't:
- **Don't** use `border-radius` anywhere. The Only Curve Rule leaves no exceptions.
- **Don't** turn the squad or season into a grid of equal cards. They are tables; the
  tabular structure is the whole reason this world was chosen.
- **Don't** introduce a monospace face, a gradient, a glass panel, or a glow.
- **Don't** attach numeric ratings, percentages, accuracy figures, or star scores to any
  project or skill. The world invites FIFA-style attribute cards and the product record
  contains no such data; inventing one would be a factual failure, not a style choice.
- **Don't** add a second shadow token or apply Sheet Lift to anything but a sheet panel.
- **Don't** let amber appear on anything that is not a state or an action.
