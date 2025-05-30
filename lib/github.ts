import { pinnedReposConfig, getRepoConfig, type PinnedRepoConfig } from './pinned-repos-config';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  topics: string[];
}

export interface PinnedRepo {
  title: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  featured: boolean;
}

// Fetch a specific repository by name
async function fetchRepository(username: string, repoName: string): Promise<GitHubRepo | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repoName}`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-Website',
        },
        // Cache for 1 hour
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        console.warn(`Repository ${username}/${repoName} not found`);
        return null;
      }
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching repository ${username}/${repoName}:`, error);
    return null;
  }
}

// Fallback function to fetch repos using the old heuristic approach
async function fetchReposWithHeuristic(username: string): Promise<PinnedRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-Website',
        },
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter and sort repos to get the most relevant ones
    const filteredRepos = repos
      .filter(repo =>
        !repo.name.includes(username) && // Exclude profile repos
        repo.description && // Must have description
        !repo.name.startsWith('.') && // Exclude dotfiles
        repo.stargazers_count >= 0 // Include all for now
      )
      .sort((a, b) => {
        // Sort by a combination of stars and recent activity
        const scoreA = a.stargazers_count * 2 + (new Date(a.updated_at).getTime() / 1000000000);
        const scoreB = b.stargazers_count * 2 + (new Date(b.updated_at).getTime() / 1000000000);
        return scoreB - scoreA;
      })
      .slice(0, 6); // Take top 6

    return filteredRepos.map(repo => ({
      title: repo.name,
      description: repo.description,
      url: repo.html_url,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      topics: repo.topics,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
      featured: false,
    }));
  } catch (error) {
    console.error('Error fetching repos with heuristic:', error);
    return [];
  }
}

export async function fetchPinnedRepos(username: string): Promise<PinnedRepo[]> {
  try {
    // If no configuration is provided, fall back to heuristic approach
    if (pinnedReposConfig.length === 0) {
      console.warn('No pinned repos configured, falling back to heuristic approach');
      return await fetchReposWithHeuristic(username);
    }

    // Fetch each configured repository
    const repoPromises = pinnedReposConfig.map(async (config) => {
      let repo: GitHubRepo | null;

      // Check if the repoName contains a slash (external repository)
      if (config.repoName.includes('/')) {
        const [owner, repoName] = config.repoName.split('/');
        repo = await fetchRepository(owner, repoName);
      } else {
        // Use the provided username for repositories without owner specified
        repo = await fetchRepository(username, config.repoName);
      }

      if (!repo) {
        return null;
      }

      const repoConfig = getRepoConfig(config.repoName);

      return {
        title: repoConfig?.displayName || repo.name,
        description: repoConfig?.customDescription || repo.description,
        url: repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        featured: repoConfig?.featured || false,
      };
    });

    // Wait for all repositories to be fetched
    const repos = await Promise.all(repoPromises);

    // Filter out null results (repos that couldn't be fetched)
    const validRepos = repos.filter((repo): repo is PinnedRepo => repo !== null);

    // Sort by configured order
    validRepos.sort((a, b) => {
      const configA = pinnedReposConfig.find(config =>
        config.displayName === a.title || config.repoName === a.title || config.repoName.endsWith(`/${a.title}`)
      );
      const configB = pinnedReposConfig.find(config =>
        config.displayName === b.title || config.repoName === b.title || config.repoName.endsWith(`/${b.title}`)
      );

      const orderA = configA?.order || 999;
      const orderB = configB?.order || 999;

      return orderA - orderB;
    });

    // If no valid repos were found, fall back to heuristic approach
    if (validRepos.length === 0) {
      console.warn('No configured repos could be fetched, falling back to heuristic approach');
      return await fetchReposWithHeuristic(username);
    }

    return validRepos;
  } catch (error) {
    console.error('Error fetching pinned repos:', error);
    // Fall back to heuristic approach on error
    return await fetchReposWithHeuristic(username);
  }
}

export function getLanguageColor(language: string | null): string {
  const colors: Record<string, string> = {
    'TypeScript': '#3178c6',
    'JavaScript': '#f1e05a',
    'Python': '#3572A5',
    'Java': '#b07219',
    'C++': '#f34b7d',
    'C': '#555555',
    'Go': '#00ADD8',
    'Rust': '#dea584',
    'Swift': '#fa7343',
    'Kotlin': '#A97BFF',
    'PHP': '#4F5D95',
    'Ruby': '#701516',
    'C#': '#239120',
    'HTML': '#e34c26',
    'CSS': '#1572B6',
    'Shell': '#89e051',
    'Dockerfile': '#384d54',
  };

  return colors[language || ''] || '#6b7280';
}