const categoryStyles = {
  Governo: 'bg-brand-500/10 text-brand-200 border-brand-500/30',
  Saúde: 'bg-emerald-500/10 text-emerald-200 border-emerald-500/30',
  Educação: 'bg-amber-500/10 text-amber-200 border-amber-500/30',
  Indústria: 'bg-sky-500/10 text-sky-200 border-sky-500/30',
  Serviços: 'bg-fuchsia-500/10 text-fuchsia-200 border-fuchsia-500/30',
  'Terceiro Setor': 'bg-rose-500/10 text-rose-200 border-rose-500/30',
};

function getInitials(name) {
  return name
    .replace(/[^A-Za-zÀ-ÿ0-9\s-]/g, ' ')
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export default function ClientCard({ name, category }) {
  const badge = categoryStyles[category] || 'bg-white/5 text-slate-300 border-white/10';

  return (
    <article className="group flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900/60 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-brand-500/40 hover:bg-slate-900">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 text-sm font-bold tracking-wide text-brand-300 transition group-hover:border-brand-500/40 group-hover:text-brand-200">
        {getInitials(name)}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-slate-100" title={name}>
          {name}
        </h3>
        <span
          className={`mt-1 inline-block rounded-full border px-2 py-0.5 text-[11px] font-medium ${badge}`}
        >
          {category}
        </span>
      </div>
    </article>
  );
}
