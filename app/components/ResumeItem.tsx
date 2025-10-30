import { Achievement } from 'app/achievements/achievements-data';
import { Role } from 'app/experience/experience-data';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const formatDateRange = (item: Role | Achievement) => {
  const startDate = item.startMonth
    ? `${item.startMonth} ${item.start}`
    : item.start;

  if (item.end) {
    const endDate = item.endMonth ? `${item.endMonth} ${item.end}` : item.end;
    return `${startDate} – ${endDate}`;
  } else if (item.start > new Date().getFullYear()) {
    return startDate;
  } else {
    return `${startDate} – Present`;
  }
};

export interface ResumeItemProps {
  item: Role | Achievement;
}

export function ResumeItem({ item }: ResumeItemProps) {
  return (
    <div className="pb-4">
      <div className="w-full items-baseline">
        <h3 className="text-black dark:text-white  tracking-tight block group transition-opacity duration-200 text-xl">
          {item.role}
        </h3>
        <small>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-black font-semibold align-baseline px-1 ${item.styles}`}
          >
            {item.title}
            {item.organization && ` – ${item.organization}`}
            <FaArrowUpRightFromSquare className="inline-block align-baseline ml-1 w-2.5 h-2.5" />
          </a>{' '}
          <span className="text-black dark:text-white font-medium tracking-tight group transition-opacity duration-200">
            {' '}
            • {formatDateRange(item)}
          </span>
        </small>
      </div>
      {item.description && (
        <p className="prose prose-neutral dark:prose-invert pt-3">
          {item.description}
        </p>
      )}
      {item.bullets && item.bullets.length > 0 && (
        <ul className="prose prose-neutral dark:prose-invert pt-3 list-disc list-outside space-y-2 pl-5">
          {item.bullets.map((bullet, bulletIndex) => (
            <li key={bulletIndex} className="text-md leading-relaxed">
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
