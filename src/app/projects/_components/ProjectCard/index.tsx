'use client';

import { ArrowSquareOutIcon, GithubLogoIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import type { GitHubRepo } from '@/services/github';
import { ProjectButton } from '../ProjectButton';

interface Props {
  repo: GitHubRepo;
}

export function GitHubProjectCard({ repo }: Props) {
  const title = repo.name.replace(/[-_]/g, ' ');
  const description = repo.description ?? 'Sem descrição';

  return (
    <div className="group flex max-w-md min-w-70 flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30">
      <Link href={`/projects/${repo.name}`} className="block">
        {/* topo “hero” (sem imagem do GitHub) */}
        <div className="h-48 w-full bg-linear-to-r from-teal-600/70 to-blue-accent/70" />

        <div className="flex flex-col gap-4 p-5">
          <div className="flex flex-col gap-2">
            <h3 className="font-family-manrope text-base font-bold">{title}</h3>
            <p className="text-sm font-normal text-muted-foreground">{description}</p>

            <div className="mt-2 flex flex-wrap gap-2">
              {repo.language && (
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-foreground/80">
                  {repo.language}
                </span>
              )}
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-foreground/80">
                ⭐ {repo.stargazers_count}
              </span>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex gap-3 px-5 pb-5">
        <ProjectButton
          variant="outline"
          href={repo.html_url}
          icon={<GithubLogoIcon size={20} weight="regular" />}
        >
          Repositório
        </ProjectButton>

        {repo.homepage && (
          <ProjectButton
            variant="gradient"
            href={repo.homepage}
            icon={<ArrowSquareOutIcon size={20} weight="regular" />}
          >
            Demo
          </ProjectButton>
        )}
      </div>
    </div>
  );
}