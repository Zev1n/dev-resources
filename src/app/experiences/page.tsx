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

const arturExperiences: ExperienceItem[] = [
    {
        title: 'Estágio em Desenvolvimento de Software',
        organization: 'DTI digital',
        period: 'Set 2024 - Atualmente',
        category: 'Profissional',
        icon: BriefcaseIcon,
    },
    {
        title: 'Palestrante sobre Docker no GDG BH',
        organization: 'WebTech Network & GDG',
        period: 'Out 2025',
        category: 'Evento',
        icon: CalendarBlankIcon,
    },
    {
        title: 'Chapter Lead & Desenvolvedor Full Stack',
        organization: 'WebTech Network',
        period: 'Mar 2024 - Atualmente',
        category: 'Projetos',
        icon: CodeIcon,
    },
    {
        title: 'Graduação em Engenharia de Software',
        organization: 'PUC Minas',
        period: 'Ago 2024 - Jul 2028',
        category: 'Acadêmica',
        icon: GraduationCapIcon,
    },
    {
        title: 'Curso Técnico de Informática',
        organization: 'Cotemig',
        period: 'Fev 2021 - Dez 2023',
        category: 'Acadêmica',
        icon: GraduationCapIcon,
    },
    {
        title: 'Desenvolvedor Full Stack',
        organization: 'PUCTec',
        period: '2023 - 2024',
        category: 'Profissional',
        icon: BriefcaseIcon,
    },
    {
        title: 'CXO & Desenvolvedor Full Stack',
        organization: 'QuickFood Technologies',
        period: '2023 - 2024',
        category: 'Profissional',
        icon: BriefcaseIcon,
    },
    {
        title: 'Estágio em Desenvolvimento de Chatbot',
        organization: 'Write Wall',
        period: '2023 - 2024',
        category: 'Profissional',
        icon: BriefcaseIcon,
    },
    {
        title: 'Desenvolvedor Web',
        organization: 'Vida Empreendimentos',
        period: '2023',
        category: 'Profissional',
        icon: BriefcaseIcon,
    },
];

const eduardaExperiences: ExperienceItem[] = [
    {
        title: 'Extensionista e líder no desenvolvimento do site',
        organization: 'Elas++',
        period: 'Ago 2025 - Atualmente',
        category: 'Projetos',
        icon: CodeIcon,
    },
    {
        title: 'Extensionista e desenvolvedora de software',
        organization: 'WebTech Network',
        period: 'Mar 2025 - Atualmente',
        category: 'Projetos',
        icon: CodeIcon,
    },
    {
        title: 'Monitoria de Desenvolvimento de Interfaces Web',
        organization: 'PUC Minas',
        period: 'Mar 2025 - Atualmente',
        category: 'Acadêmica',
        icon: GraduationCapIcon,
    },
    {
        title: 'Graduação em Engenharia de Software',
        organization: 'PUC Minas',
        period: 'Ago 2024 - Jul 2028',
        category: 'Acadêmica',
        icon: GraduationCapIcon,
    },
    {
        title: 'Curso Técnico em Desenvolvimento de Sistemas',
        organization: 'SENAI',
        period: 'Mai 2023 - Ago 2024',
        category: 'Acadêmica',
        icon: GraduationCapIcon,
    },
];

function matchFilter(item: ExperienceItem, filter: FilterOption) {
    if (filter === 'Todos') {
        return true;
    }

    if (filter === 'Projeto') {
        return item.category === 'Projetos';
    }

    return item.category === filter;
}

export default function Experiences() {
    const [selectedFilter, setSelectedFilter] = useState<FilterOption>('Todos');

    const filteredArtur = useMemo(
        () => arturExperiences.filter((item) => matchFilter(item, selectedFilter)),
        [selectedFilter]
    );

    const filteredEduarda = useMemo(
        () => eduardaExperiences.filter((item) => matchFilter(item, selectedFilter)),
        [selectedFilter]
    );

    return (
        <SectionContainer>
            <Title text="Experiências" />
            <Subtitle text="Nossa trajetória acadêmica, profissional e em projetos." />
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

            <section className="mb-8 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
                <div className="w-full md:border-r md:border-gray-300 md:pr-8">
                    <h3 className="mb-4 text-center text-2xl font-semibold">Artur Bomtempo</h3>
                    <div className="flex flex-col gap-4">
                        {filteredArtur.map((experience, index) => (
                            <ExperienceCard
                                key={`${experience.title}-${experience.period}`}
                                title={experience.title}
                                organization={experience.organization}
                                period={experience.period}
                                category={experience.category}
                                icon={experience.icon}
                                showLine={index < filteredArtur.length - 1}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-full">
                    <div className="w-full">
                        <h3 className="mb-4 text-center text-2xl font-semibold">Eduarda Vieira</h3>
                        <div className="flex flex-col gap-4">
                            {filteredEduarda.map((experience, index) => (
                                <ExperienceCard
                                    key={`${experience.title}-${experience.period}`}
                                    title={experience.title}
                                    organization={experience.organization}
                                    period={experience.period}
                                    category={experience.category}
                                    icon={experience.icon}
                                    showLine={index < filteredEduarda.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </SectionContainer>
    );
}
