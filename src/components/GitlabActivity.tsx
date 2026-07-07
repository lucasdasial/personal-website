import type { Lang } from "@/data/content";

const GITLAB_USERNAME = "lucasdasial";
const GITLAB_PROFILE_URL = `https://gitlab.com/${GITLAB_USERNAME}`;
const WEEKS = 53;

type Day = { date: string; count: number };

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    heading: string;
    sub: string;
    contributions: (n: number) => string;
    less: string;
    more: string;
    profileLink: string;
    unavailable: string;
  }
> = {
  en: {
    eyebrow: "02 / Activity",
    heading: "Recent GitLab activity.",
    sub: "A snapshot of my commit activity over the last year, pulled straight from GitLab.",
    contributions: (n) => `${n.toLocaleString("en-US")} contributions in the last year`,
    less: "Less",
    more: "More",
    profileLink: "View profile on GitLab",
    unavailable: "GitLab activity is temporarily unavailable.",
  },
  pt: {
    eyebrow: "02 / Atividade",
    heading: "Atividade recente no GitLab.",
    sub: "Um retrato da minha atividade de commits no último ano, direto do GitLab.",
    contributions: (n) => `${n.toLocaleString("pt-BR")} contribuições no último ano`,
    less: "Menos",
    more: "Mais",
    profileLink: "Ver perfil no GitLab",
    unavailable: "A atividade do GitLab está temporariamente indisponível.",
  },
};

function levelFor(count: number) {
  if (count <= 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

function buildWeeks(counts: Record<string, number>): Day[][] {
  const end = new Date();
  end.setUTCHours(0, 0, 0, 0);
  end.setUTCDate(end.getUTCDate() + (6 - end.getUTCDay()));

  const totalDays = WEEKS * 7;
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - (totalDays - 1));

  const days: Day[] = [];
  const cursor = new Date(start);
  for (let i = 0; i < totalDays; i++) {
    const iso = cursor.toISOString().slice(0, 10);
    days.push({ date: iso, count: counts[iso] ?? 0 });
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  const weeks: Day[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

async function fetchCalendar(): Promise<Record<string, number> | null> {
  try {
    const res = await fetch(`https://gitlab.com/users/${GITLAB_USERNAME}/calendar.json`);
    if (!res.ok) return null;
    return (await res.json()) as Record<string, number>;
  } catch {
    return null;
  }
}

export default async function GitlabActivity({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const counts = await fetchCalendar();

  return (
    <section id="activity" className="reveal activity">
      <div className="wrap">
        <div className="eyebrow">{c.eyebrow}</div>
        <h2>{c.heading}</h2>
        <p className="sub">{c.sub}</p>

        {counts ? (
          <>
            {(() => {
              const weeks = buildWeeks(counts);
              const total = weeks.flat().reduce((sum, d) => sum + d.count, 0);
              return (
                <>
                  <p className="activity-total mono">{c.contributions(total)}</p>
                  <div className="calendar-scroll">
                    <div className="calendar-grid">
                      {weeks.map((week, wi) => (
                        <div className="calendar-week" key={wi}>
                          {week.map((day) => (
                            <div
                              key={day.date}
                              className={`calendar-day level-${levelFor(day.count)}`}
                              title={`${day.date}: ${day.count}`}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="calendar-legend mono">
                    <span>{c.less}</span>
                    {[0, 1, 2, 3, 4].map((level) => (
                      <span key={level} className={`calendar-day level-${level}`} />
                    ))}
                    <span>{c.more}</span>
                  </div>
                </>
              );
            })()}
          </>
        ) : (
          <p className="sub">{c.unavailable}</p>
        )}

        <a
          className="linkline activity-link"
          href={GITLAB_PROFILE_URL}
          target="_blank"
          rel="noopener"
        >
          {c.profileLink} <span className="accent-arrow">→</span>
        </a>
      </div>
    </section>
  );
}
