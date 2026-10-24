# LedgerTable

LedgerTable is the append-only audit ledger: one row per version, newest last.

**Consumer provides** `columns` (`{key, label, mono?, align?}`; hashes and IDs `mono`, amounts `align: 'end'`), `rows`, and `empty`. The empty text must say what creates the first row ("Record a decision at the human gate to create version 1"). Never offer edit or delete on a row. A correction is a new version.
