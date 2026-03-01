'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { language, setLanguage } = useLanguage();

  const t = {
    pt: {
      navCta: 'Sobre mim',
      title: 'Olá, sou Henrique Azevedo',
      subtitle:
        'Desenvolvedor Salesforce (Pleno) na Belgo Arames, com foco em Sales Cloud, Apex e Flows.',
      aboutTitle: 'Sobre mim',
      aboutText:
        'Atuo no CRM da Belgo Arames desenvolvendo soluções escaláveis com Sales Cloud, Apex e Flows. Tenho +100.000 pontos no Trailhead e também desenvolvo como Full Stack, com backend em Java e frontend em HTML, CSS e JavaScript/React.',
      interestsTitle: 'Áreas de interesse',
      stacksTitle: 'Stacks e ferramentas',
      footerNote: '© 2026 Henrique Azevedo. Todos os direitos reservados.',
      pt: 'Português',
      en: 'Inglês',
    },
    en: {
      navCta: 'About me',
      title: "Hi, I'm Henrique Azevedo",
      subtitle:
        'Mid-level Salesforce Developer at Belgo Arames, focused on Sales Cloud, Apex and Flows.',
      aboutTitle: 'About me',
      aboutText:
        'I work on Belgo Arames CRM building scalable solutions with Sales Cloud, Apex and Flows. I have 100,000+ Trailhead points and I also build Full Stack projects with Java backend and HTML/CSS/JavaScript (React) frontend.',
      interestsTitle: 'Areas of interest',
      stacksTitle: 'Stacks & tools',
      footerNote: '© 2026 Henrique Azevedo. All rights reserved.',
      pt: 'Portuguese',
      en: 'English',
    },
  }[language];

  const interests =
    language === 'en'
      ? [
          'Sales Cloud',
          'Apex',
          'Flows',
          'Integrations',
          'Java',
          'React',
          'CRM Architecture',
          'Performance',
        ]
      : [
          'Sales Cloud',
          'Apex',
          'Flows',
          'Integrações',
          'Java',
          'React',
          'Arquitetura CRM',
          'Performance',
        ];

  const stacks = [
    'Salesforce',
    'Apex',
    'Flows',
    'Java',
    'React',
    'TypeScript',
    'PostgreSQL',
    'GitHub',
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#0b1d3a] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.35)_1px,transparent_1px),radial-gradient(circle_at_60%_20%,rgba(255,255,255,0.25)_1px,transparent_1px),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:140px_140px,220px_220px,180px_180px]" />
        </div>

        <div className="relative max-w-3xl text-center">
          <h1 className="text-4xl font-semibold md:text-5xl">{t.title}</h1>
          <p className="mx-auto mt-4 max-w-xl text-white/80">{t.subtitle}</p>

          <div className="mt-8 flex justify-center">
            <a
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-[#0b1d3a] transition hover:bg-white/90"
            >
              {t.navCta}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="border-t border-white/5 bg-[#0a1730] py-14">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
          {/* Card Sobre */}
          <div className="rounded-2xl bg-[#2b3445]/70 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>

            <h2 className="text-2xl font-semibold">{t.aboutTitle}</h2>
            <p className="mt-4 text-white/75">{t.aboutText}</p>

            <div className="mt-6">
              <p className="text-sm font-semibold text-white/80">
                {t.interestsTitle}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {/* Badge especial */}
                <span className="rounded-full bg-[#00a6f4]/20 px-3 py-1 text-xs text-[#9ce1ff] shadow-[0_0_0_1px_rgba(0,166,244,0.35)]">
                  🏆 100k+ Trailhead
                </span>

                {interests.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Botões idioma */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  onClick={() => setLanguage('pt')}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                    language === 'pt'
                      ? 'bg-[#00a6f4] text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/15'
                  }`}
                >
                  {t.pt}
                </button>

                <button
                  onClick={() => setLanguage('en')}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                    language === 'en'
                      ? 'bg-[#00a6f4] text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/15'
                  }`}
                >
                  {t.en}
                </button>
              </div>
            </div>
          </div>

          {/* Card Stacks */}
          <div className="rounded-2xl bg-[#2b3445]/70 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>

            <h2 className="text-2xl font-semibold">{t.stacksTitle}</h2>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {stacks.map((tool) => (
                <div
                  key={tool}
                  className="rounded-xl bg-white/5 px-4 py-4 text-sm text-white/85 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-6xl px-6 text-center text-xs text-white/50">
          {t.footerNote}
        </p>
      </section>
    </div>
  );
}