'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type LangContent = {
  title: string;
  subtitle: string;
  roleLine: string;
  summary: string;
  sections: Array<
    | { h: string; p: string; bullets?: never }
    | { h: string; p?: never; bullets: string[] }
  >;
  ctaOpen: string;
  ctaClose: string;
};

export default function AboutPage() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

  const content: LangContent = useMemo(() => {
    const pt: LangContent = {
      title: 'Sobre mim',
      subtitle: 'Clique no card para abrir e ver mais.',
      roleLine:
        'Técnico em computadores • Desenvolvedor Salesforce (Pleno) • Full Stack (Java + Frontend)',
      summary:
        'Atuo no CRM da Belgo Arames, com foco em Sales Cloud, Apex e Flows. Também desenvolvo aplicações full stack com backend em Java e frontend (HTML, CSS, JavaScript).',
      sections: [
        {
          h: 'O que eu faço hoje',
          p: 'Trabalho com desenvolvimento e evolução do CRM (Salesforce) na Belgo Arames, entendendo regras de negócio, integrações e automações para dar escala ao time comercial.',
        },
        {
          h: 'Salesforce (minha especialidade)',
          bullets: [
            'Sales Cloud e processos comerciais',
            'Apex (classes, triggers, testes)',
            'Flows (Screen/Record-Triggered e boas práticas)',
            'Modelagem de dados (objetos, relacionamentos, validações)',
            'Organização de mudanças e deploy (boas práticas de release)',
          ],
        },
        {
          h: 'Trailhead & aprendizado contínuo',
          p: 'Tenho mais de 100.000 pontos no Trailhead e estudo continuamente para evoluir como desenvolvedor e entregar soluções cada vez melhores.',
        },
        {
          h: 'Full Stack',
          bullets: [
            'Frontend: HTML, CSS, JavaScript, React',
            'Backend: Java (APIs e regras de negócio)',
            'Banco de dados: PostgreSQL (quando aplicável)',
          ],
        },
      ],
      ctaOpen: 'Abrir card',
      ctaClose: 'Fechar',
    };

    const en: LangContent = {
      title: 'About me',
      subtitle: 'Click the card to expand and read more.',
      roleLine:
        'Computer Technician • Salesforce Developer (Mid-level) • Full Stack (Java + Frontend)',
      summary:
        'I work on Belgo Arames CRM, focusing on Sales Cloud, Apex and Flows. I also build full stack applications with Java backend and frontend (HTML, CSS, JavaScript).',
      sections: [
        {
          h: 'What I do today',
          p: 'I develop and improve Belgo Arames CRM (Salesforce), understanding business rules, integrations and automations to help the sales team scale.',
        },
        {
          h: 'Salesforce (my main skill)',
          bullets: [
            'Sales Cloud and sales processes',
            'Apex (classes, triggers, unit tests)',
            'Flows (Screen/Record-Triggered and best practices)',
            'Data modeling (objects, relationships, validations)',
            'Release/deploy organization (best practices)',
          ],
        },
        {
          h: 'Trailhead & continuous learning',
          p: 'I have 100,000+ Trailhead points and keep studying to grow as a developer and deliver better solutions.',
        },
        {
          h: 'Full Stack',
          bullets: [
            'Frontend: HTML, CSS, JavaScript, React',
            'Backend: Java (APIs and business logic)',
            'Database: PostgreSQL (when applicable)',
          ],
        },
      ],
      ctaOpen: 'Open card',
      ctaClose: 'Close',
    };

    return language === 'en' ? en : pt;
  }, [language]);

  return (
    <div className="bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold md:text-4xl">{content.title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{content.subtitle}</p>
        </div>

        {/* Card gigante clicável */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="group w-full text-left"
          aria-expanded={open}
        >
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[0_0_0_1px_rgba(255,255,255,0.05)] transition hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)]">
            {/* topo decorativo */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>

              <span className="text-xs text-muted-foreground">
                {open ? content.ctaClose : content.ctaOpen}
              </span>
            </div>

            <div className="grid gap-8 px-6 py-8 md:grid-cols-[140px,1fr] md:items-start">
              {/* Foto */}
              <div className="flex md:justify-start justify-center">
                <div className="relative h-28 w-28 overflow-hidden rounded-full border border-border bg-white/5 shadow-[0_0_0_6px_rgba(255,255,255,0.03)]">
                  <Image
                    src="/profile.jpg"
                    alt="Foto de perfil"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Resumo */}
              <div>
                <p className="text-sm font-semibold text-foreground/90">
                  {content.roleLine}
                </p>
                <p className="mt-3 text-base text-foreground/85">{content.summary}</p>

                {/* Indicador visual */}
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-primary" />
                  {open ? content.ctaClose : content.ctaOpen}
                  <span
                    className={`transition-transform duration-300 ${
                      open ? 'rotate-180' : 'rotate-0'
                    }`}
                    aria-hidden
                  >
                    ▼
                  </span>
                </div>
              </div>
            </div>

            {/* Conteúdo expandido */}
            <div
              className={`grid gap-6 px-6 pb-8 transition-all duration-300 ${
                open ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="grid gap-6 md:grid-cols-2">
                {content.sections.map((s, idx) => (
                  <div key={idx} className="rounded-2xl border border-border bg-white/5 p-5">
                    <h3 className="text-sm font-semibold">{s.h}</h3>

                    {'p' in s && s.p ? (
                      <p className="mt-2 text-sm text-muted-foreground">{s.p}</p>
                    ) : null}

                    {'bullets' in s && s.bullets ? (
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-primary" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <span className="text-xs text-muted-foreground">
                  {content.ctaClose} ↑
                </span>
              </div>
            </div>

            {/* glow suave */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-teal-primary/10 blur-3xl" />
          </div>
        </button>
      </section>
    </div>
  );
}