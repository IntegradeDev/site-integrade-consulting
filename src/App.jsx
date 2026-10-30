import ClientsSection from './components/ClientsSection.jsx';
import { clients, categories } from './data/clients.js';

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Números', href: '#numeros' },
  { label: 'Clientes', href: '#clientes' },
];

const services = [
  {
    icon: '◆',
    title: 'Consultoria em Gestão',
    description:
      'Diagnóstico organizacional e planos de ação para ganho de eficiência, redução de custos e melhoria da qualidade dos serviços prestados.',
  },
  {
    icon: '▤',
    title: 'Mapeamento de Processos',
    description:
      'Modelagem, padronização e redesenho de fluxos de trabalho com foco em produtividade, rastreabilidade e conformidade.',
  },
  {
    icon: '◎',
    title: 'Planejamento Estratégico',
    description:
      'Construção de objetivos, metas e indicadores que conectam a alta direção à execução no dia a dia das equipes.',
  },
  {
    icon: '⬢',
    title: 'Tecnologia e Dados',
    description:
      'Estruturação de dados, painéis de gestão e automação de rotinas para decisões baseadas em informação confiável.',
  },
  {
    icon: '⚖',
    title: 'Governança e Compliance',
    description:
      'Políticas internas, gestão de riscos e adequação à LGPD para organizações públicas e privadas.',
  },
  {
    icon: '✎',
    title: 'Capacitação e Treinamento',
    description:
      'Trilhas de formação e desenvolvimento de lideranças que sustentam as mudanças implantadas na operação.',
  },
];

const numbers = [
  { value: `${clients.length}`, label: 'clientes atendidos' },
  { value: `${categories.length}`, label: 'segmentos de atuação' },
  { value: '20+', label: 'anos de experiência' },
  { value: '150+', label: 'projetos entregues' },
];

const differentials = [
  'Equipes multidisciplinares com vivência em setor público e privado',
  'Metodologia própria de diagnóstico e implantação, orientada a resultado',
  'Transferência de conhecimento para as equipes do cliente',
  'Acompanhamento pós-projeto e mensuração de ganhos',
];

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#topo" className="flex flex-col leading-none">
          <span className="text-lg font-bold tracking-[0.18em] text-white">
            INTEGRADE
          </span>
          <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.42em] text-brand-400">
            Consulting
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#clientes"
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-500"
        >
          Ver clientes
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-200">
          Consultoria em gestão e processos
        </span>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Transformando a gestão de organizações{' '}
          <span className="bg-gradient-to-r from-brand-400 to-emerald-300 bg-clip-text text-transparent">
            públicas e privadas
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          A Integrade Consulting combina método, dados e experiência de campo para
          estruturar processos, fortalecer a governança e sustentar decisões com
          informação confiável.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#servicos"
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-500"
          >
            Conhecer serviços
          </a>
          <a
            href="#clientes"
            className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-500/50 hover:text-white"
          >
            Base de clientes
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-white/5 pt-8 sm:grid-cols-4">
          {numbers.map((item) => (
            <div key={item.label}>
              <dt className="text-2xl font-bold text-white sm:text-3xl">
                {item.value}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="border-t border-white/5 bg-slate-900/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            Serviços
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Soluções para cada etapa da jornada
          </h2>
          <p className="mt-4 text-slate-400">
            Da leitura do cenário atual à implantação e sustentação das mudanças.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition duration-200 hover:-translate-y-1 hover:border-brand-500/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-lg text-brand-300">
                {service.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="border-t border-white/5 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            Sobre a Integrade
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Método, proximidade e resultado mensurável
          </h2>
          <p className="mt-5 text-slate-400">
            A Integrade Consulting atua há mais de duas décadas ao lado de organizações
            públicas e privadas. Nosso trabalho começa pela escuta e pelo diagnóstico
            preciso, avança para a construção conjunta de soluções e termina com a
            implantação acompanhada — sempre com indicadores que comprovam o ganho.
          </p>
          <p className="mt-4 text-slate-400">
            Atendemos prefeituras, câmaras, hospitais, universidades, indústrias,
            instituições financeiras e entidades culturais, respeitando a realidade e a
            cultura de cada organização.
          </p>

          <ul className="mt-8 space-y-3">
            {differentials.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-[10px] font-bold text-brand-300">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
            <p className="text-sm font-semibold text-brand-300">Setor público</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Prefeituras, câmaras, secretarias, autarquias e companhias docas.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
            <p className="text-sm font-semibold text-emerald-300">Saúde</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Hospitais, grupos hospitalares, clínicas e laboratórios.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
            <p className="text-sm font-semibold text-amber-300">Educação</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Universidades, institutos federais, colégios e fundações de ensino.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
            <p className="text-sm font-semibold text-fuchsia-300">Indústria</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Indústrias, energia nuclear, saneamento e logística.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  return (
    <section id="numeros" className="border-t border-white/5 bg-slate-900/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            Números
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Indicadores da nossa atuação
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {numbers.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 text-center"
            >
              <p className="text-3xl font-bold text-white sm:text-4xl">{item.value}</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-[0.18em] text-white">
              INTEGRADE
            </span>
            <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.42em] text-brand-400">
              Consulting
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Consultoria em gestão, processos e estratégia para organizações públicas e
            privadas. {clients.length} clientes atendidos em {categories.length}{' '}
            segmentos.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Navegação
          </span>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-500 transition hover:text-slate-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Segmentos
          </span>
          {categories.map((category) => (
            <span key={category} className="text-sm text-slate-500">
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/5 px-6 pt-6">
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Integrade Consulting. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Numbers />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}
