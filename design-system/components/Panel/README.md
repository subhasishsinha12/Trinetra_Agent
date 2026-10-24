# Panel

Panel is the titled `surface` container for each working area: Event intake, Engine verdict, Human gate, Audit ledger.

**Consumer provides**
- `title`: panel name. Use `level={2}` for a sub-panel inside a panel (`h2` instead of `h1`).
- `eyebrow` (optional): which eye owns it (`EYE III · VIVEKA`), coloured by `tone` (`perceive`, `measure` or `discern`).
- `description` (optional): one line in `ink-muted`.
- `actions` (optional): at most two Buttons, top right. "Load a sample" belongs here.
- `children`: content, stacked `space-5` apart.

**Don't** nest panels more than one level, or give a panel a shadow.
