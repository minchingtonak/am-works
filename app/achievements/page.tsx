import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Achievements, Achievement } from './achievements-data';

const formatDateRange = (achievement: Achievement) => {
  const startDate = achievement.startMonth
    ? `${achievement.startMonth} ${achievement.start}`
    : achievement.start;

  if (achievement.end) {
    const endDate = achievement.endMonth
      ? `${achievement.endMonth} ${achievement.end}`
      : achievement.end;
    return `${startDate} – ${endDate}`;
  } else if (achievement.start > new Date().getFullYear()) {
    return startDate;
  } else {
    return `${startDate} – Present`;
  }
};

export default function AchievementsPage() {
  return (
    <section>
      <div className="fade-in-bottom delay-500">
        <h1 className="mb-4 text-2xl font-medium tracking-tight">
          Achievements & Awards
        </h1>
        <div className="space-y-6">
          {Achievements.map((achievement, index) => (
            <div key={index} className="pb-4">
              <div className="w-full items-baseline">
                <h3 className="text-black dark:text-white tracking-tight block group transition-opacity duration-200 text-xl">
                  {achievement.role}
                </h3>
                <small>
                  <a
                    key={index}
                    href={achievement.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      achievement.locked === true
                        ? `cursor-not-allowed ${achievement.styles}`
                        : `cursor-pointer ${achievement.styles}`
                    }
                  >
                    {achievement.title}
                    {achievement.organization &&
                      ` – ${achievement.organization}`}
                    <FaArrowUpRightFromSquare className="inline-block align-baseline ml-1 w-2.5 h-2.5" />
                  </a>{' '}
                  <span className="text-black dark:text-white font-medium tracking-tight group transition-opacity duration-200">
                    {' '}
                    • {formatDateRange(achievement)}
                  </span>
                </small>
              </div>
              {achievement.description && (
                <p className="prose prose-neutral dark:prose-invert pt-3">
                  {achievement.description}
                </p>
              )}
              {achievement.bullets && achievement.bullets.length > 0 && (
                <ul className="prose prose-neutral dark:prose-invert pt-3 list-disc list-outside space-y-2 pl-5">
                  {achievement.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-md leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
