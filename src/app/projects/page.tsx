import { SectionContainer } from '@/components/SectionContainer';
import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';
import { getRepos } from '@/services/github';
import { GitHubProjectCard } from './_components/GitHubProjectCard';

export default async function Projects() {
  const repos = await getRepos('Zev1n');

  return (
    <div className="bg-background text-foreground">
      <SectionContainer>
        <div className="text-left">
          <Title text="Projetos" />
          <Subtitle text="Alguns repositórios e trabalhos que publiquei no GitHub." />
        </div>

        <div className="mx-auto mt-8 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <GitHubProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}