import { FaArrowUpRightFromSquare, FaStar, FaCodeFork } from 'react-icons/fa6';
import { fetchPinnedRepos, getLanguageColor } from '../../lib/github';

const GITHUB_USERNAME = 'minchingtonak';

export default async function Projects() {
  const repos = await fetchPinnedRepos(GITHUB_USERNAME);

  return (
    <section>
      <div className="text-xl font-bold fade-in-bottom">
        Open source is awesome! Here are some things I've worked on.
        <hr className="flex m-auto my-4 opacity-75 dark:opacity-25 w-full" />
      </div>
      <div className="fade-in-bottom">
        <h1 className="mb-4 text-2xl font-medium tracking-tight">Projects</h1>
        <div className="space-y-6">
          {repos.length > 0 ? (
            repos.map((repo, index) => (
              <div
                key={index}
                className={`py-2 ${
                  repo.featured
                    ? 'border-l-4 border-green-500 pl-4 bg-green-50 dark:bg-green-950/20 rounded-r-lg'
                    : ''
                }`}
              >
                <div className="w-full items-baseline">
                  <h3 className="text-black dark:text-white tracking-tight block group transition-opacity duration-200 text-xl">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-75 transition-opacity duration-200 flex items-center"
                    >
                      {repo.title}
                      {repo.featured && (
                        <span className="ml-2 px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                          Featured
                        </span>
                      )}
                      <FaArrowUpRightFromSquare className="inline-block align-baseline ml-1 w-3 h-3" />
                    </a>
                  </h3>
                  <div className="flex items-center gap-3 mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: getLanguageColor(repo.language),
                          }}
                        ></span>
                        {repo.language}
                      </span>
                    )}
                    {repo.stars > 0 && (
                      <span className="flex items-center gap-1">
                        <FaStar className="w-3 h-3" />
                        {repo.stars}
                      </span>
                    )}
                    {repo.forks > 0 && (
                      <span className="flex items-center gap-1">
                        <FaCodeFork className="w-3 h-3" />
                        {repo.forks}
                      </span>
                    )}
                    {}
                  </div>
                </div>
                {repo.description && (
                  <p className="prose prose-neutral dark:prose-invert pt-3">
                    {repo.description}
                  </p>
                )}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-3">
                    {repo.topics.slice(0, 5).map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-400">
                Unable to load repositories at the moment. Please check back
                later.
              </p>
            </div>
          )}
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Want to see more? Check out my{' '}
            <a
              href="https://github.com/minchingtonak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 hover:underline"
            >
              GitHub profile
              <FaArrowUpRightFromSquare className="inline-block align-baseline ml-1 w-2.5 h-2.5" />
            </a>{' '}
            for all my repositories.
          </p>
        </div>
      </div>
    </section>
  );
}
