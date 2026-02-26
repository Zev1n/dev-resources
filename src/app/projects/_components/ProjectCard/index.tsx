'use client';

import { ArrowSquareOutIcon, GithubLogoIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import { ProjectButton } from '../ProjectButton';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt?: string;
    repositoryUrl?: string;
    demoUrl?: string;
}

export function ProjectCard({
    title,
    description,
    imageUrl,
    imageAlt = 'Imagem do projeto',
    repositoryUrl,
    demoUrl,
}: ProjectCardProps) {
    return (
        <div className="flex max-w-md min-w-70 flex-col overflow-hidden rounded-lg border border-neutral-200">
            <div className="relative h-48 w-full">
                <Image src={imageUrl} alt={imageAlt} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-4 p-5">
                <div className="flex flex-col gap-2">
                    <h3 className="font-family-manrope text-base font-bold">{title}</h3>
                    <p className="text-sm font-normal">{description}</p>
                </div>
                <div className="flex gap-3">
                    {repositoryUrl && (
                        <ProjectButton
                            variant="outline"
                            href={repositoryUrl}
                            icon={<GithubLogoIcon size={20} weight="regular" />}
                        >
                            Repositório
                        </ProjectButton>
                    )}
                    {demoUrl && (
                        <ProjectButton
                            variant="gradient"
                            href={demoUrl}
                            icon={<ArrowSquareOutIcon size={20} weight="regular" />}
                        >
                            Demo
                        </ProjectButton>
                    )}
                </div>
            </div>
        </div>
    );
}
