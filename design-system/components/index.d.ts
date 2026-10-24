import type * as React from 'react';
export type Tone = 'neutral' | 'brand' | 'pass' | 'warn' | 'fail' | 'measure' | 'discern';
export type Status = 'pass' | 'warn' | 'fail';
export interface MastheadProps { title: string; version?: string; meta?: { label: string; value: React.ReactNode }[]; children?: React.ReactNode; className?: string }
export declare function Masthead(props: MastheadProps): React.ReactElement;
export interface EyeCardProps { eye: 1 | 2 | 3; title: string; steps?: React.ReactNode[]; children?: React.ReactNode; className?: string }
export declare function EyeCard(props: EyeCardProps): React.ReactElement;
export interface PanelProps { title?: string; eyebrow?: string; description?: string; tone?: 'perceive' | 'measure' | 'discern'; level?: 1 | 2; actions?: React.ReactNode; children?: React.ReactNode; className?: string }
export declare function Panel(props: PanelProps): React.ReactElement;
export interface NoticeProps { tone?: 'neutral' | Status; title?: string; children?: React.ReactNode; className?: string }
export declare function Notice(props: NoticeProps): React.ReactElement;
export interface BadgeProps { tone?: Tone; glyph?: boolean; mono?: boolean; children?: React.ReactNode; className?: string }
export declare function Badge(props: BadgeProps): React.ReactElement;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'quiet' | 'danger'; size?: 'md' | 'sm' }
export declare function Button(props: ButtonProps): React.ReactElement;
export interface FieldProps { label: React.ReactNode; hint?: React.ReactNode; error?: React.ReactNode; required?: boolean; span?: 1 | 2; id?: string; children: React.ReactNode; className?: string }
export declare function Field(props: FieldProps): React.ReactElement;
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { prefix?: string }
export declare function Input(props: InputProps): React.ReactElement;
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> { options?: (string | { value: string; label: string })[]; placeholderOption?: string }
export declare function Select(props: SelectProps): React.ReactElement;
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export declare function Textarea(props: TextareaProps): React.ReactElement;
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> { label?: React.ReactNode; children?: React.ReactNode }
export declare function Checkbox(props: CheckboxProps): React.ReactElement;
export interface FieldsetProps { legend: React.ReactNode; description?: React.ReactNode; layout?: 'grid' | 'checks'; children: React.ReactNode; className?: string }
export declare function Fieldset(props: FieldsetProps): React.ReactElement;
export interface ScoreBand { upTo: number; tone: Status; label: string }
export interface ScoreMeterProps { value: number; max?: number; label?: string; bands?: ScoreBand[]; children?: React.ReactNode; className?: string }
export declare function ScoreMeter(props: ScoreMeterProps): React.ReactElement;
export interface MetricProps { label: string; value: React.ReactNode; delta?: React.ReactNode; deltaTone?: Status; cite?: string; className?: string }
export declare function Metric(props: MetricProps): React.ReactElement;
export interface TraceRule { id: string; title: React.ReactNode; detail?: React.ReactNode; cite?: string; result: Status; label?: string }
export interface RuleTraceProps { rules: TraceRule[]; className?: string }
export declare function RuleTrace(props: RuleTraceProps): React.ReactElement;
export interface CodeBlockProps { caption?: string; children: React.ReactNode; className?: string }
export declare function CodeBlock(props: CodeBlockProps): React.ReactElement;
export interface LedgerColumn { key: string; label: string; mono?: boolean; align?: 'start' | 'end' }
export interface LedgerTableProps { columns: LedgerColumn[]; rows?: Record<string, React.ReactNode>[]; empty?: React.ReactNode; caption?: string; className?: string }
export declare function LedgerTable(props: LedgerTableProps): React.ReactElement;
declare global { interface Window { Trinetra: { Masthead: typeof Masthead; EyeCard: typeof EyeCard; Panel: typeof Panel; Notice: typeof Notice; Badge: typeof Badge; Button: typeof Button; Field: typeof Field; Input: typeof Input; Select: typeof Select; Textarea: typeof Textarea; Checkbox: typeof Checkbox; Fieldset: typeof Fieldset; ScoreMeter: typeof ScoreMeter; Metric: typeof Metric; RuleTrace: typeof RuleTrace; CodeBlock: typeof CodeBlock; LedgerTable: typeof LedgerTable } } }
