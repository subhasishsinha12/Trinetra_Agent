# Button

Button triggers an action. Text is a verb phrase in sentence case: "Record decision", "Load a sample".

**Variants**
- `primary` (`brand`): the one action a panel exists for. At most one per panel.
- `secondary` (default): every other action.
- `quiet`: low-emphasis inline actions ("Clear form").
- `danger` (`fail`): Override at the human gate only. It stays disabled until a reason is entered.

`size="sm"` is for panel headers. Pass any native button prop. `type` defaults to `button`.
