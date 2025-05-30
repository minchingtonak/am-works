export interface PinnedRepoConfig {
  repoName: string;           // GitHub repository name (e.g., 'my-repo' or 'owner/repo' for external repos)
  displayName?: string;       // Custom display name (optional)
  customDescription?: string; // Override GitHub description (optional)
  order?: number;            // Display order (optional)
  featured?: boolean;        // Highlight this repo (optional)
}

// Configuration for pinned repositories
// Add your desired repositories here in the order you want them displayed
//
// For your own repositories: use just the repo name (e.g., 'my-repo')
// For external repositories: use 'owner/repo' format (e.g., 'basilTeam/basil')
export const pinnedReposConfig: PinnedRepoConfig[] = [
  {
    repoName: 'lambster',
    featured: true,
  },
  {
    repoName: 'basilTeam/basil',  // External repository example
    featured: true
  },
  {
    repoName: 'lambster.dev',
    customDescription: 'Web interface for lambster'
  },
  {
    repoName: 'dots',
  },
  {
    repoName: 'pocketstore',
  },
  {
    repoName: 'jamesjuett/lobster',
  },
  {
    repoName: 'hazelgrove/hazel'
  },
  // Add more repositories as needed
  // Example configurations:
  // {
  //   repoName: 'your-repo-name',              // Your own repo
  //   displayName: 'Custom Display Name',
  //   customDescription: 'Custom description that overrides GitHub description',
  //   order: 2,
  //   featured: false,
  // },
  // {
  //   repoName: 'someuser/external-repo',      // External repo
  //   displayName: 'External Project',
  //   featured: true,
  // },
];

// Helper function to get configuration by repo name
export function getRepoConfig(repoName: string): PinnedRepoConfig | undefined {
  return pinnedReposConfig.find(config =>
    config.repoName === repoName ||
    config.repoName.endsWith(`/${repoName}`)
  );
}

// Helper function to get all configured repo names
export function getConfiguredRepoNames(): string[] {
  return pinnedReposConfig.map(config => config.repoName);
}