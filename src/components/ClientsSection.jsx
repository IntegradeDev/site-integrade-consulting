import { useMemo, useState } from 'react';
import { clients, categories } from '../data/clients';
import ClientCard from './ClientCard';

const ALL = 'Todos';

export default function ClientsSection() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(ALL);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();

    return clients.filter((client) => {
      const matchesCategory =
        activeCategory === ALL || client.category === activeCategory;
      const matchesTerm = term === '' || client.name.toLowerCase().includes(term);
      return matchesCategory && matchesTerm;
    });
  }, [search, activeCategory]);

  const countFor = (category) =>
    category === ALL
      ? clients.length
      : clients.filter((client) => client.category === category).length;

  const filters = [ALL, ...categories];

  return (
    <section id="clientes" className="border-t border-white/5 bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              Nossos clientes
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Organizações que confiam na Integrade
            </h2>
            <p className="mt-4 text-slate-400">
              Atuamos ao lado de prefeituras, hospitais, universidades, indústrias e
              instituições culturais em todo o país.{' '}
              <span className="font-semibold text-slate-200">
                {clients.length} clientes
              </span>{' '}
              atendidos em {categories.length} segmentos.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900/70 px-5 py-4 text-center">
            <p className="text-3xl font-bold text-white">{clients.length}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">
              clientes
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
              🔍
            </span>
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar cliente por nome..."
              aria-label="Buscar cliente por nome"
              className="w-full rounded-xl border border-white/10 bg-slate-900/80 py-3 pl-11 pr-4 text-sm text-slate-100 placeholder:text-slate-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${
                    isActive
                      ? 'border-brand-500 bg-brand-600 text-white'
                      : 'border-white/10 bg-slate-900/60 text-slate-300 hover:border-brand-500/50 hover:text-white'
                  }`}
                >
                  {category}
                  <span
                    className={`ml-2 ${
                      isActive ? 'text-brand-100' : 'text-slate-500'
                    }`}
                  >
                    {countFor(category)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-xs uppercase tracking-widest text-slate-500">
          {filtered.length} {filtered.length === 1 ? 'resultado' : 'resultados'}
        </p>

        {filtered.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((client) => (
              <ClientCard
                key={`${client.category}-${client.name}`}
                name={client.name}
                category={client.category}
              />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-xl border border-dashed border-white/10 bg-slate-900/40 p-10 text-center">
            <p className="text-sm text-slate-400">
              Nenhum cliente encontrado para "{search}".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch('');
                setActiveCategory(ALL);
              }}
              className="mt-4 rounded-lg border border-brand-500/40 px-4 py-2 text-xs font-semibold text-brand-200 transition hover:bg-brand-500/10"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
