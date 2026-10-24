# Textarea

Textarea holds multi-line free text: the event description and the override reason.

Event descriptions are untrusted input. Label them with the hint "treated as data" and never render their content as markup. The override reason is mandatory: mark it `required`, and keep the Override button disabled until it has text.
