export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  updated_at: string;
};

const GITHUB_API = 'https://api.github.com';

const githubHeaders = {
  Accept: 'application/vnd.github+json',
};

export async function getRepos(username: string) {
  const res = await fetch(
    `${GITHUB_API}/users/${username}/repos?sort=updated&per_page=12`,
    {
      headers: githubHeaders,
      next: { revalidate: 60 * 30 }, 
    }
  );

  if (!res.ok) throw new Error('Falha ao buscar repositórios do GitHub');

  const repos: GitHubRepo[] = await res.json();

  return repos.filter((r) => !r.full_name.includes('/fork') && r.description);
}

export async function getRepoByName(username: string, repoName: string) {
  const res = await fetch(`${GITHUB_API}/repos/${username}/${repoName}`, {
    headers: githubHeaders,
    next: { revalidate: 60 * 30 },
  });

  if (!res.ok) return null;

  const repo: GitHubRepo = await res.json();
  return repo;
}