# Field

Field wraps one control with its label, hint or error, and wires `id` and `aria-describedby` automatically.

**Consumer provides**
- `label`: a noun phrase. Put the unit after a comma ("Insurance received, ₹").
- `children`: exactly one Input, Select or Textarea.
- `hint` (optional): a short qualifier ("treated as data").
- `error` (optional): replaces the hint, turns the control border `fail` and prefixes ✕.
- `required`: adds a `fail` asterisk.
- `span={2}`: takes the full width of a Fieldset grid.
