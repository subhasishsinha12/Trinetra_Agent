# RuleTrace

RuleTrace lists every rule the engine fired, in order, with its result and citation. It is the evidence behind the verdict.

**Consumer provides** `rules`: `{id, title, detail?, cite?, result, label?}`. `id` is the rule number in `mono` (`R04`). `result` is `pass`, `warn` or `fail`, and the badge word defaults to Pass, Gap or Fail. Show every rule, including passes. Never collapse the trace to failures only.
