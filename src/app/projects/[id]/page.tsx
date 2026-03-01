import { SectionContainer } from '@/components/SectionContainer';
import { getRepoByName } from '@/services/github';
import { ArrowLeftIcon, ArrowSquareOutIcon, GithubLogoIcon } from '@phosphor-icons/react/dist/ssr';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProjectButton } from '../_components/ProjectButton';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const repo = await getRepoByName('Zev1n', id);

  if (!repo) return { title: 'Projeto não encontrado' };

  return {
    title: `${repo.name} | Projetos`,
    description: repo.description ?? '',
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  const repo = await getRepoByName('Zev1n', id);
  if (!repo) notFound();

  return (
    <>
      {/* HERO */}
      <div className="relative w-full overflow-hidden bg-black">
        <div className="absolute inset-0 bg-linear-to-r from-teal-600/35 via-blue-accent/25 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-black/20" />

        <div className="relative">
          <SectionContainer>
            <div className="py-14">
              <Link
                href="/projects"
                className="mb-5 inline-flex items-center gap-2 text-base font-semibold text-white transition-colors hover:text-white/80"
              >
                <ArrowLeftIcon size={24} weight="bold" />
                Voltar para projetos
              </Link>

              <h1 className="font-family-manrope mb-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                {repo.name}
              </h1>

              <p className="max-w-3xl text-lg text-white/90 md:text-xl">
                {repo.description ?? 'Sem descrição.'}
              </p>
            </div>
          </SectionContainer>
        </div>
      </div>

      {/* CONTEÚDO */}
      <section className="mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-8 md:py-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="mb-8">
              <h2 className="font-family-manrope mb-4 text-2xl font-bold text-foreground md:text-3xl">
                Sobre o projeto
              </h2>

              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {repo.description ??
                  'Este repositório ainda não possui uma descrição completa. Em breve adicionarei detalhes do projeto.'}
              </p>
            </div>

            {repo.topics && repo.topics.length > 0 && (
              <div className="mb-8">
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground/80 uppercase">
                  Tecnologias
                </h3>
                <div className="flex flex-wrap gap-2">
                  {repo.topics.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-6 space-y-8">
              <div>
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground/80 uppercase">
                  Links
                </h3>

                <div className="flex flex-col gap-3">
                  <ProjectButton
                    variant="outline"
                    href={repo.html_url}
                    icon={<GithubLogoIcon size={20} weight="regular" />}
                  >
                    Ver repositório
                  </ProjectButton>

                  {repo.homepage && (
                    <ProjectButton
                      variant="gradient"
                      href={repo.homepage}
                      icon={<ArrowSquareOutIcon size={20} weight="regular" />}
                    >
                      Acessar demo
                    </ProjectButton>
                  )}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground/80 uppercase">
                  Info
                </h3>

                <div className="space-y-2 text-sm text-muted-foreground">
                  {repo.language && (
                    <p>
                      <span className="text-foreground/80">Linguagem:</span> {repo.language}
                    </p>
                  )}
                  <p>
                    <span className="text-foreground/80">Stars:</span> {repo.stargazers_count}
                  </p>
                  <p>
                    <span className="text-foreground/80">Atualizado:</span>{' '}
                    {new Date(repo.updated_at).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>

              {/* Autor = você */}
              <div>
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground/80 uppercase">
                  Desenvolvido por
                </h3>

                <div className="flex items-start gap-3">
                  <div className="from-blue-accent to-teal-primary relative size-12 shrink-0 overflow-hidden rounded-full bg-linear-to-br" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground">Henrique Azevedo</p>
                    <p className="text-sm text-muted-foreground">Salesforce Developer • Full Stack</p>

                    <a
                      href="https://github.com/Zev1n"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm text-blue-accent transition-colors hover:text-blue-accent-dark"
                    >
                      <GithubLogoIcon size={16} weight="regular" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}