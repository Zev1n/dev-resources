'use client';

import { ArrowSquareOutIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { ProjectButton } from '../ProjectButton';

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('pt-BR', { year: 'numeric', month: 'short' });
  } catch {
    return iso;
  }
}

export function GitHubProjectCard({ repo }: { repo: GitHubRepo }) {
  return (
    <div className="group flex max-w-md min-w-70 flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30">
      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-family-manrope text-base font-bold">{repo.name}</h3>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>★ {repo.stargazers_count}</span>
          </div>
        </div>

        <p className="text-sm font-normal text-muted-foreground">
          {repo.description ?? 'Sem descrição.'}
        </p>

        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          {repo.language && (
            <span className="rounded-full bg-white/5 px-3 py-1 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
              {repo.language}
            </span>
          )}
          <span className="rounded-full bg-white/5 px-3 py-1 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
            Atualizado: {formatDate(repo.updated_at)}
          </span>
        </div>
      </div>

      <div className="flex gap-3 px-5 pb-5">
        <ProjectButton
          variant="outline"
          href={repo.html_url}
          icon={<GithubLogoIcon size={20} weight="regular" />}
        >
          Repositório
        </ProjectButton>

        {repo.homepage ? (
          <ProjectButton
            variant="gradient"
            href={repo.homepage}
            icon={<ArrowSquareOutIcon size={20} weight="regular" />}
          >
            Demo
          </ProjectButton>
        ) : null}
      </div>
    </div>
  );
}