'use client';

import { Icon } from '@phosphor-icons/react';
import { Pills } from '../Pills';

export type ExperienceCategory = 'Acadêmica' | 'Profissional' | 'Projetos' | 'Evento';

interface ExperienceCardProps {
    title: string;
    organization: string;
    period: string;
    category: ExperienceCategory;
    icon: Icon;
    showLine?: boolean;
}

const categoryClasses: Record<ExperienceCategory, string> = {
    Acadêmica: 'border-sky-500 bg-sky-900 text-sky-500',
    Profissional: 'border-green-500 bg-green-900 text-green-500',
    Projetos: 'border-teal-500 bg-teal-900 text-teal-500',
    Evento: 'border-orange-500 bg-orange-900 text-orange-500',
};

export function ExperienceCard({
    title,
    organization,
    period,
    category,
    icon: CardIcon,
    showLine = true,
}: ExperienceCardProps) {
    return (
        <div className="flex gap-3">
            <div className="relative flex w-9 shrink-0 justify-center md:w-10">
                <div
                    className={`z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 md:h-10 md:w-10 ${categoryClasses[category]}`}
                >
                    <CardIcon size={16} weight="regular" />
                </div>
                {showLine && (
                    <span className="absolute top-9 h-[calc(100%+1rem)] w-px bg-gray-600 md:top-10" />
                )}
            </div>

            <article className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-3 md:px-4 md:py-3.5">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-sm leading-tight font-semibold text-gray-100 md:text-base">
                            {title}
                        </h3>
                        <p className="mt-0.5 text-[11px] text-gray-300 md:text-xs">
                            {organization}
                        </p>
                    </div>

                    <Pills
                        text={category}
                        className={`shrink-0 border px-2 py-0.5 text-[10px] md:px-2.5 md:py-0.5 md:text-[11px] ${categoryClasses[category]}`}
                    />
                </div>

                <p className="mt-3 text-center text-[11px] font-light text-slate-300 italic md:text-xs">
                    {period}
                </p>
            </article>
        </div>
    );
}
