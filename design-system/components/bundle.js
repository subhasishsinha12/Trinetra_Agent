/* @ds-bundle: {"format":4,"namespace":"Trinetra","components":[{"name":"Masthead"},{"name":"EyeCard"},{"name":"Panel"},{"name":"Notice"},{"name":"Badge"},{"name":"Button"},{"name":"Field"},{"name":"Input"},{"name":"Select"},{"name":"Textarea"},{"name":"Checkbox"},{"name":"Fieldset"},{"name":"ScoreMeter"},{"name":"Metric"},{"name":"RuleTrace"},{"name":"CodeBlock"},{"name":"LedgerTable"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  var uid = 0;
  function cx() {
    return Array.prototype.filter.call(arguments, Boolean).join(' ');
  }
  function rest(props, omit) {
    var o = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && omit.indexOf(k) < 0) o[k] = props[k];
    return o;
  }
  var GLYPH = { pass: '✓', warn: '!', fail: '✕' };
  var ROMAN = ['I', 'II', 'III'];
  var EYES = [
    { key: 'perceive', name: 'PRATYAKSHA', verb: 'PERCEIVE' },
    { key: 'measure', name: 'GANITA', verb: 'MEASURE' },
    { key: 'discern', name: 'VIVEKA', verb: 'DISCERN' }
  ];

  function Masthead(p) {
    return h('header', { className: cx('tr-masthead', p.className) },
      h('div', { className: 'tr-masthead-title' },
        h('h1', { className: 'display' }, p.title),
        p.version ? h('span', { className: 'tr-masthead-version' }, p.version) : null),
      p.children ? h('p', { className: 'body tr-masthead-scope' }, p.children) : null,
      p.meta && p.meta.length ? h('dl', { className: 'tr-meta' }, p.meta.map(function (m, i) {
        return h('div', { key: i, className: 'tr-meta-item' },
          h('dt', null, m.label), h('dd', null, m.value));
      })) : null);
  }

  function EyeCard(p) {
    var i = Math.max(1, Math.min(3, p.eye || 1)) - 1;
    var e = EYES[i];
    return h('section', { className: cx('tr-eye', 'tr-eye-' + e.key, p.className) },
      h('div', { className: 'tr-eye-head' },
        h('span', { className: 'tr-eye-num', 'aria-hidden': 'true' }, ROMAN[i]),
        h('p', { className: 'eyebrow tr-eye-kicker' }, 'EYE ' + ROMAN[i] + ' · ' + e.name + ' · ' + e.verb)),
      h('h2', { className: 'h2' }, p.title),
      p.steps && p.steps.length ? h('ol', { className: 'tr-eye-steps body-sm' }, p.steps.map(function (s, k) {
        return h('li', { key: k }, s);
      })) : null,
      p.children);
  }

  function Panel(p) {
    return h('section', { className: cx('tr-panel', p.tone ? 'tr-panel-' + p.tone : null, p.className) },
      (p.title || p.actions) ? h('div', { className: 'tr-panel-head' },
        h('div', null,
          p.eyebrow ? h('p', { className: 'eyebrow tr-panel-eyebrow' }, p.eyebrow) : null,
          p.title ? h(p.level === 2 ? 'h3' : 'h2', { className: p.level === 2 ? 'h2' : 'h1' }, p.title) : null,
          p.description ? h('p', { className: 'body-sm tr-muted' }, p.description) : null),
        p.actions ? h('div', { className: 'tr-panel-actions' }, p.actions) : null) : null,
      h('div', { className: 'tr-panel-body' }, p.children));
  }

  function Notice(p) {
    var tone = p.tone || 'neutral';
    return h('div', { className: cx('tr-notice', 'tr-notice-' + tone, 'body-sm', p.className), role: tone === 'neutral' ? 'note' : 'status' },
      tone !== 'neutral' ? h('span', { className: 'tr-glyph', 'aria-hidden': 'true' }, GLYPH[tone]) : null,
      h('div', null, p.title ? h('strong', null, p.title + ' ') : null, p.children));
  }

  function Badge(p) {
    var tone = p.tone || 'neutral';
    var glyph = p.glyph === false ? null : GLYPH[tone];
    return h('span', { className: cx('tr-badge', 'tr-badge-' + tone, p.mono ? 'tr-badge-mono' : null, p.className) },
      glyph ? h('span', { className: 'tr-glyph', 'aria-hidden': 'true' }, glyph) : null,
      p.children);
  }

  function Button(p) {
    var v = p.variant || 'secondary';
    return h('button', Object.assign({ type: 'button' }, rest(p, ['variant', 'className', 'size']), {
      className: cx('tr-btn', 'tr-btn-' + v, p.size === 'sm' ? 'tr-btn-sm' : null, p.className)
    }));
  }

  var FieldCtx = React.createContext(null);
  function Field(p) {
    var ref = React.useRef(null);
    if (!ref.current) ref.current = 'tr-f' + (++uid);
    var id = p.id || ref.current;
    var describedBy = p.error ? id + '-err' : (p.hint ? id + '-hint' : undefined);
    return h(FieldCtx.Provider, { value: { id: id, describedBy: describedBy, invalid: !!p.error } },
      h('div', { className: cx('tr-field', p.span === 2 ? 'tr-span-2' : null, p.className) },
        h('label', { className: 'label tr-field-label', htmlFor: id }, p.label,
          p.required ? h('span', { className: 'tr-req', 'aria-hidden': 'true' }, ' *') : null),
        p.children,
        p.error ? h('p', { id: id + '-err', className: 'tr-field-error body-sm' }, h('span', { 'aria-hidden': 'true' }, '✕ '), p.error)
          : p.hint ? h('p', { id: id + '-hint', className: 'tr-field-hint body-sm' }, p.hint) : null));
  }
  function ctrlProps(p, base) {
    var f = React.useContext(FieldCtx) || {};
    return Object.assign({}, rest(p, ['className', 'prefix', 'options', 'placeholderOption']), {
      id: p.id || f.id,
      'aria-describedby': f.describedBy,
      'aria-invalid': f.invalid || undefined,
      className: cx(base, p.className)
    });
  }
  function Input(p) {
    var el = h('input', Object.assign({ type: 'text' }, ctrlProps(p, cx('tr-control', p.type === 'number' || p.prefix ? 'tr-num' : null))));
    if (!p.prefix) return el;
    return h('div', { className: 'tr-affix' }, h('span', { className: 'tr-affix-text', 'aria-hidden': 'true' }, p.prefix), el);
  }
  function Select(p) {
    var opts = (p.options || []).map(function (o, i) {
      var v = typeof o === 'string' ? { value: o, label: o } : o;
      return h('option', { key: i, value: v.value }, v.label);
    });
    if (p.placeholderOption) opts.unshift(h('option', { key: '_', value: '' }, p.placeholderOption));
    return h('div', { className: 'tr-select' }, h('select', ctrlProps(p, 'tr-control'), opts.length ? opts : p.children));
  }
  function Textarea(p) {
    return h('textarea', Object.assign({ rows: 3 }, ctrlProps(p, 'tr-control tr-textarea')));
  }
  function Checkbox(p) {
    return h('label', { className: cx('tr-check', 'label', p.className) },
      h('input', Object.assign({ type: 'checkbox' }, rest(p, ['label', 'className', 'children']))),
      h('span', null, p.label || p.children));
  }
  function Fieldset(p) {
    return h('fieldset', { className: cx('tr-fieldset', p.className) },
      h('legend', { className: 'h3' }, p.legend),
      p.description ? h('p', { className: 'body-sm tr-muted tr-fieldset-desc' }, p.description) : null,
      h('div', { className: p.layout === 'checks' ? 'tr-checks' : 'tr-grid' }, p.children));
  }

  function ScoreMeter(p) {
    var max = p.max || 100;
    var v = Math.max(0, Math.min(max, p.value || 0));
    var bands = p.bands || [{ upTo: 50, tone: 'fail', label: 'Low' }, { upTo: 75, tone: 'warn', label: 'Medium' }, { upTo: max, tone: 'pass', label: 'High' }];
    var band = bands.filter(function (b) { return v <= b.upTo; })[0] || bands[bands.length - 1];
    var prev = 0;
    return h('div', { className: cx('tr-meter', p.className) },
      h('div', { className: 'tr-meter-head' },
        h('span', { className: 'label' }, p.label || 'Data quality, weighted'),
        h(Badge, { tone: band.tone }, band.label)),
      h('div', { className: 'tr-meter-value' },
        h('span', { className: 'figure' }, String(v)),
        h('span', { className: 'body-sm tr-muted' }, ' / ' + max)),
      h('div', { className: 'tr-meter-track', role: 'meter', 'aria-valuemin': 0, 'aria-valuemax': max, 'aria-valuenow': v, 'aria-label': p.label || 'Data quality score' },
        bands.map(function (b, i) {
          var left = prev / max * 100, w = (b.upTo - prev) / max * 100; prev = b.upTo;
          return h('span', { key: i, className: 'tr-meter-tick', style: { left: (left + w) + '%' } });
        }),
        h('span', { className: 'tr-meter-fill tr-fill-' + band.tone, style: { width: (v / max * 100) + '%' } })),
      p.children ? h('div', { className: 'body-sm tr-muted tr-meter-note' }, p.children) : null);
  }

  function Metric(p) {
    return h('div', { className: cx('tr-metric', p.className) },
      h('span', { className: 'label tr-muted' }, p.label),
      h('span', { className: 'figure' }, p.value),
      p.delta ? h('span', { className: cx('body-sm', p.deltaTone ? 'tr-tone-' + p.deltaTone : 'tr-muted') }, p.delta) : null,
      p.cite ? h('span', { className: 'mono-sm tr-muted' }, p.cite) : null);
  }

  function RuleTrace(p) {
    return h('ol', { className: cx('tr-trace', p.className) }, (p.rules || []).map(function (r, i) {
      return h('li', { key: i, className: 'tr-trace-row tr-trace-' + r.result },
        h('span', { className: 'mono tr-trace-id' }, r.id),
        h('span', { className: 'tr-trace-body' },
          h('span', { className: 'body-sm' }, r.title),
          r.detail ? h('span', { className: 'body-sm tr-muted' }, r.detail) : null),
        h('span', { className: 'tr-trace-end' },
          r.cite ? h('span', { className: 'mono-sm tr-muted' }, r.cite) : null,
          h(Badge, { tone: r.result }, r.label || { pass: 'Pass', warn: 'Gap', fail: 'Fail' }[r.result])));
    }));
  }

  function CodeBlock(p) {
    return h('figure', { className: cx('tr-code', p.className) },
      p.caption ? h('figcaption', { className: 'mono-sm tr-muted' }, p.caption) : null,
      h('pre', { className: 'mono' }, h('code', null, p.children)));
  }

  function LedgerTable(p) {
    var cols = p.columns || [];
    var rows = p.rows || [];
    return h('div', { className: cx('tr-table-wrap', p.className) },
      h('table', { className: 'tr-table body-sm' },
        p.caption ? h('caption', { className: 'body-sm tr-muted' }, p.caption) : null,
        h('thead', null, h('tr', null, cols.map(function (c, i) {
          return h('th', { key: i, scope: 'col', className: c.align === 'end' ? 'tr-end' : null }, c.label);
        }))),
        h('tbody', null, rows.length ? rows.map(function (r, ri) {
          return h('tr', { key: ri }, cols.map(function (c, ci) {
            return h('td', { key: ci, className: cx(c.mono ? 'mono-sm' : null, c.align === 'end' ? 'tr-end' : null) }, r[c.key]);
          }));
        }) : h('tr', null, h('td', { colSpan: cols.length || 1, className: 'tr-table-empty' }, p.empty || 'No entries yet.')))));
  }

  var api = { Masthead: Masthead, EyeCard: EyeCard, Panel: Panel, Notice: Notice, Badge: Badge, Button: Button, Field: Field, Input: Input, Select: Select, Textarea: Textarea, Checkbox: Checkbox, Fieldset: Fieldset, ScoreMeter: ScoreMeter, Metric: Metric, RuleTrace: RuleTrace, CodeBlock: CodeBlock, LedgerTable: LedgerTable };
  window.Trinetra = Object.assign(window.Trinetra || {}, api);
})();
