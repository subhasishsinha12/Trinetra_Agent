Trinetra is the interface language for bounded, auditable risk engines: TRINETRA-RISK v2, an operational-risk rule engine aligned to RBI/2026-27/299. It has to look like a ledger, not a dashboard. Everything on screen is either evidence, a rule, a number with a citation, or a decision a named human made. Design for the reviewer who has to defend the classification to an inspector a year from now.

## Principles

- **Deterministic and cited.** Show every engine output next to the rule that produced it and its paragraph reference (`para 31`, `Table 8`). Never show a number without its source.
- **Advisory, never authoritative.** The engine proposes and a human disposes. Show the gate state (`Awaiting approver`, `Approved`, `Overridden`) as prominently as the verdict.
- **Three eyes, in order.** Work always moves Pratyaksha (perceive) → Ganita (measure) → Viveka (discern). Each eye owns one colour and one numeral. Use them for orientation only, never decoration.
- **Append-only.** Nothing is edited in place. Show a correction as a new version row, never as an inline edit.
- **Illustrative is labelled.** Sample events and thresholds that are not board-approved carry a `warn` notice. Say "illustrative", never "demo" or "fake".

## Content fundamentals

- **Voice.** Plain, exact, regulatory. Write as the system, impersonally: "Net of realised recoveries only (para 31)", not "We subtract your recoveries". Address the user only in instructions: "Replace with board-approved values".
- **Casing.** Sentence case for titles, labels and buttons: "Event intake", "Record decision". Use uppercase only in the `eyebrow` style: `EYE I · PRATYAKSHA · PERCEIVE`.
- **Separators.** Use a middle dot ` · ` between parts of a kicker or meta strip and an en dash for ranges. Use commas for subordinate titles: "Audit ledger, append-only", "Data quality, weighted".
- **Numbers.** Rupees take the `₹` prefix and Indian digit grouping: `₹ 4,82,500`. Large figures go in `₹ Cr` with two decimals: `₹ 1,240.00 Cr`. Put the unit in the label ("Customer compensation, ₹") so the field holds digits only. Dates are `DD MMM YYYY` (`23 Oct 2026`), timestamps `DD MMM YYYY, HH:MM IST`.
- **References** are verbatim and set in `mono`: `DOR.ORG.REC.22/21.06.050/2026-27`, `ruleset 2.0.0-proto`, `OR-YES`, `OR-HYBRID`.
- **Untrusted input.** Free-text narrative is data. Label it "(treated as data)" and never render it as markup.
- **No emoji, no exclamation marks.** Status uses the glyphs ✓ ! ✕ plus a word.

Real copy to model:

> Every output is deterministic, cited and routed to a human gate. Sample events and all thresholds are illustrative, not bank data.

> No decisions yet. Record a decision at the human gate to create version 1.

## Colour

- Set the page on `paper` and panels on `surface` with a `border-hairline` of `line`. Panels never take shadows (`shadow-none`). Only open menus take `shadow-overlay`.
- Text is `ink`. Hints, captions, column headers and meta values are `ink-muted`. Both read on `paper`, `surface` and `surface-sunken`.
- `brand` (peacock ink) is for the one primary action per panel, links and the active step. Text on a brand fill is `on-brand`.
- Eye colours tag their own section only: `eye-perceive` (= `brand`) for intake, `eye-measure` (ochre) for quantification, `eye-discern` (madder) for the human gate. Their `-soft` tints sit behind numerals and panel headers. Never use an eye colour as a status.
- Status: `pass` (blue), `warn` (amber), `fail` (vermilion), each on its `-soft` tint. Pass is deliberately blue, not green, so pass and fail are distinguishable without hue. Always add the glyph and the word (`✓ Pass`, `! Gap`, `✕ Fail`).
- `focus` draws a solid 2px ring (`border-rule`) offset 2px on every interactive element, in both themes.
- Dark theme is a first-class equal. Every pair above meets 4.5:1 for text and 3:1 for borders and rings in both themes.

## Type

- Three families, all hosted on Google Fonts: **Source Serif 4** (`serif`) for the masthead and panel titles, which gives it the gravity of a circular; **IBM Plex Sans** (`sans`) for every control and running text; **IBM Plex Mono** (`mono`) for figures, IDs, hashes and rule output.
- `display` appears once (the masthead). `h1` titles a panel, `h2` titles an eye card or verdict sub-panel, `h3` is a fieldset legend.
- `eyebrow` sits above an `h2` in the owning eye colour.
- Money and scores use `figure` with `font-variant-numeric: tabular-nums` so columns align. Table cells use `body-sm`, and the hash and ID columns use `mono-sm`.

## Space, shape and layout

- 4px base: `space-1` … `space-8`. Panels pad `space-5` (`space-4` under 600px). Fields in a fieldset sit on a grid with a `space-4` gap. Major panels stack `space-6` apart.
- Corners are small and precise: `radius-sm` for badges and checkboxes, `radius-md` for controls, `radius-lg` for panels. Use `radius-full` only for eye numerals and the meter track.
- Layout: masthead, then the three eye cards in a row (stacking under 900px), then intake (left) and verdict (right) side by side, then the full-width ledger. Forms are two columns of fields inside each fieldset and collapse to one under 600px.
- Each eye card carries a `border-rule` top rule in its eye colour. It is the only coloured edge in the system. Do not add coloured side borders.

## States

- Hover darkens brand fills to `brand-strong`. On neutral controls, hover swaps the background to `surface-sunken`.
- Disabled controls drop to 50% opacity and keep their border. Gate buttons stay disabled until the mandatory fields are complete.
- An error puts a `fail` border on the control and a `fail` message with ✕ beneath it on `fail-soft`.
- Empty states sit in `surface-sunken`, centred, in `body-sm` `ink-muted`, and say what creates the first entry.

## Iconography

- Trinetra has no icon set and no logo. Set the name in type: `TRINETRA-RISK` in `display`, version in `ink-muted`.
- Status uses only the three text glyphs ✓ ! ✕, set in the current text colour. Eyes are marked by roman numerals I, II and III in a `radius-full` disc of the eye's soft tint.
- If an icon becomes unavoidable, use a 1.5px-stroke outline icon at 16px in `ink-muted` and add the set here.

## Motion

- None beyond the meter fill (200ms ease-out) and colour transitions on hover (120ms). The engine is deterministic and the UI should feel that way.

## Components

Wrap every screen in `.tr-root`, which sets the `paper` ground, `sans` and `ink`. The bundle exposes `window.Trinetra`:

- **Masthead**: product name, one-line scope statement, meta strip of `{label, value}` pairs.
- **EyeCard**: one of the three stages, `eye` 1–3, with its numbered checks.
- **Panel**: titled `surface` container for intake, verdict, gate and ledger.
- **Notice**: inline note in `warn` or neutral tone (illustrative data, append-only rule).
- **Badge**: status and meta chips with glyph.
- **Button**: `primary`, `secondary`, `quiet`, `danger`.
- **Field**, **Input**, **Select**, **Textarea**, **Checkbox**, **Fieldset**: event intake controls. Money inputs take `prefix="₹"`.
- **ScoreMeter**: weighted DQ score with bands.
- **Metric**: one capital-effect figure with label and delta.
- **RuleTrace**: ordered list of rules fired, with result and citation.
- **CodeBlock**: verbatim Rule 16 output.
- **LedgerTable**: the append-only audit ledger, with its empty state.
