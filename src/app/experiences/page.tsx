'use client';

import {
  BriefcaseIcon,
  CalendarBlankIcon,
  CodeIcon,
  GraduationCapIcon,
  Icon,
} from '@phosphor-icons/react';
import { useMemo, useState } from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { ExperienceCard, ExperienceCategory } from './_components/ExperienceCard';
import { Title } from '@/components/Title';
import { Subtitle } from '@/components/Subtitle';
import { Pills } from './_components/Pills';

type FilterOption = 'Todos' | 'Acadêmica' | 'Profissional' | 'Projeto' | 'Evento';

type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  category: ExperienceCategory;
  icon: Icon;
};

const filters: FilterOption[] = ['Todos', 'Acadêmica', 'Profissional', 'Projeto', 'Evento'];

const henriqueExperiences: ExperienceItem[] = [
  // PROFISSIONAL
  {
    title: 'Salesforce Developer',
    organization: 'JediCRM · Tempo integral',
    period: 'Out 2025 - Atualmente · Remoto (Belo Horizonte, MG)',
    category: 'Profissional',
    icon: BriefcaseIcon,
  },
  {
    title: 'Estagiário',
    organization: 'ArcelorMittal Sistemas · Meio período',
    period: 'Out 2023 - Set 2025 · Híbrido (Belo Horizonte, MG)',
    category: 'Profissional',
    icon: BriefcaseIcon,
  },
  {
    title: 'Assistente de TI',
    organization: 'CABTEC · Meio período',
    period: 'Jun 2022 - Abr 2023 · Belo Horizonte, MG',
    category: 'Profissional',
    icon: BriefcaseIcon,
  },

  // PROJETOS (opcional – mantém a categoria “Projetos” caso você queira)
  {
    title: 'Portfólio pessoal (este site)',
    organization: 'Projeto próprio',
    period: '2026 · Next.js + Tailwind + TypeScript',
    category: 'Projetos',
    icon: CodeIcon,
  },

  // ACADÊMICA (ajuste se quiser)
  {
    title: 'Graduação em Engenharia de Software',
    organization: 'PUC Minas',
    period: '2024 - (em andamento)',
    category: 'Acadêmica',
    icon: GraduationCapIcon,
  },

  // EVENTO (opcional – exemplo)
  {
    title: '100.000+ pontos no Trailhead',
    organization: 'Salesforce Trailhead',
    period: 'Conquista pessoal · Aprendizado contínuo',
    category: 'Evento',
    icon: CalendarBlankIcon,
  },
];

function matchFilter(item: ExperienceItem, filter: FilterOption) {
  if (filter === 'Todos') return true;

  if (filter === 'Projeto') {
    return item.category === 'Projetos';
  }

  return item.category === filter;
}

export default function Experiences() {
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>('Todos');

  const filtered = useMemo(
    () => henriqueExperiences.filter((item) => matchFilter(item, selectedFilter)),
    [selectedFilter]
  );

  return (
    <SectionContainer>
      <Title text="Experiências" />
      <Subtitle text="Minha trajetória acadêmica, profissional e em projetos." />

      <div className="my-4 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Pills
            key={filter}
            text={filter}
            isActive={selectedFilter === filter}
            onClick={() => setSelectedFilter(filter)}
          />
        ))}
      </div>

      {/* UMA COLUNA SÓ */}
      <section className="mb-8 mx-auto w-full max-w-3xl">
        <h3 className="mb-4 text-center text-2xl font-semibold">Henrique Azevedo</h3>

        <div className="flex flex-col gap-4">
          {filtered.map((experience, index) => (
            <ExperienceCard
              key={`${experience.title}-${experience.period}`}
              title={experience.title}
              organization={experience.organization}
              period={experience.period}
              category={experience.category}
              icon={experience.icon}
              showLine={index < filtered.length - 1}
            />
          ))}
        </div>
      </section>
    </SectionContainer>
  );
}