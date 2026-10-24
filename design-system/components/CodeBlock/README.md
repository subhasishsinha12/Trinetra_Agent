# CodeBlock

CodeBlock renders verbatim machine output, typically the Rule 16 output, in `mono` on `surface-sunken`.

**Consumer provides** the text as `children` and an optional `caption`. It scrolls horizontally rather than wrapping, so the field alignment survives. Never syntax-colour it: the output is a record, not code to read for style.
