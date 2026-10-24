# ScoreMeter

ScoreMeter shows the weighted data-quality score against its materiality bands.

**Consumer provides** `value` and `max` (default 100), and optionally `bands` (`{upTo, tone, label}` in ascending order; default Low ≤50 `fail`, Medium ≤75 `warn`, High `pass`) and a `children` note naming what is missing. The band badge carries the word and glyph, and the track shows band boundaries as ticks.
