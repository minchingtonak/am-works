import { ACHIEVEMENTS } from './achievements-data';
import { ResumeItem } from 'app/components/ResumeItem';

export default function AchievementsPage() {
  return (
    <section>
      <div className="fade-in-bottom">
        <h1 className="mb-4 text-2xl font-medium tracking-tight">
          Achievements & Awards
        </h1>
        <div className="space-y-6">
          {ACHIEVEMENTS.map((achievement) => (
            <ResumeItem key={achievement.title} item={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}
