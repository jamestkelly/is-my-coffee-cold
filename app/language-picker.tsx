'use client';

import { Select, SelectContent, SelectItem, SelectItemIndicator, SelectLabel, SelectTrigger, SelectValue } from '@ui-sdk/react/select';
import { translator, languages, isLocale, type Locale } from '../lib/languages';
import { privacyPath } from '../lib/site';

const options = Object.entries(languages).map(([value, label]) => ({ value, label }));

export function LanguagePicker({ locale, onChange }: { locale: Locale; onChange?: (next: Locale) => void }) {
  return <Select value={locale} items={options} onValueChange={next => {
    if (!isLocale(next) || next === locale) return;
    if (onChange) onChange(next);
    else location.assign(privacyPath(next));
  }}>
    <SelectLabel className="sr-only">{translator(locale)('language')}</SelectLabel>
    <SelectTrigger className="inline-flex min-h-11 items-center gap-2 rounded border border-transparent p-2 text-sm text-slate-600 hover:border-slate-400 hover:bg-white focus-visible:outline-offset-2 data-open:border-slate-400 data-open:bg-white"><SelectValue /><span aria-hidden="true">▾</span></SelectTrigger>
    <SelectContent className="group z-10 max-h-[min(340px,var(--available-height,calc(100dvh-24px)))] w-56 max-w-[calc(100vw-24px)] overflow-auto overscroll-contain rounded-md border border-slate-400 bg-white p-1.5 shadow-lg" align="end" sideOffset={8} collisionPadding={12} alignItemWithTrigger={false}>
      {options.map(({ value, label }) => <SelectItem key={value} value={value} lang={value} className="flex min-h-11 cursor-pointer items-center justify-between px-3 py-2 data-selected:font-semibold data-selected:text-accent data-highlighted:bg-blue-50 group-data-[modality=keyboard]:data-highlighted:outline-2 group-data-[modality=keyboard]:data-highlighted:-outline-offset-2 group-data-[modality=keyboard]:data-highlighted:outline-accent">{label}<SelectItemIndicator aria-hidden="true">✓</SelectItemIndicator></SelectItem>)}
    </SelectContent>
  </Select>;
}
