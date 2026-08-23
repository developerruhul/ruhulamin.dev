type Job = {
  years: string;
  role: string;
  company: string;
  link?: string;
  summary: string;
};

const JOBS: Job[] = [
  {
    years: "2024–2026",
    role: "Frontend Engineer",
    company: "UJET",
    link: "https://ujet.cx",
    summary:
      "Worked across the email, voice, and chat experience for UJET, a Silicon Valley cloud contact center platform. Spent most of my time on the email module — building features and helping migrate the email adapter from AngularJS to React/TypeScript. Became my team's E2E testing ambassador, setting up the initial E2E test infrastructure for the email adapter from scratch. Also did regular PR reviews and helped unblock teammates on frontend bugs.",
  },
  {
    years: "2022",
    role: "Lead Developer, Full-Stack",
    company: "Moonly",
    link: "https://moon.ly",
    summary:
      "Led full-stack development of Moonly, an NFT analytics dashboard for the Solana ecosystem, from concept to launch — using Next.js, TailwindCSS, and Node.js. Built the live blockchain event feed, wallet tracking system, and admin dashboard. Worked closely with the scraping and DevOps teams to keep data pipelines stable.",
  },
  {
    years: "2019–2020",
    role: "Fullstack Web Developer",
    company: "Automatio",
    link: "https://automatio.ai",
    summary:
      "Built and maintained a Chrome extension and cloud dashboard for a no-code web scraping tool, using React and vanilla JS at the DOM level, plus GraphQL. The extension had to interact intelligently with arbitrary web pages, not just scrape static content. Also worked on the server-side scraper engine (authenticated sessions, CAPTCHA handling) and picked up backend work with Express, GraphQL, and Prisma when needed.",
  },
];

export default function Work() {
  return (
    <section className="border-t border-hairline py-16" id="work">
      <p className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-ink-soft uppercase before:mr-2.5 before:text-accent before:content-['//']">
        Work
      </p>
      <h2 className="mt-6 mb-8 text-[1.75rem] font-bold tracking-[-0.01em]">
        Experience
      </h2>
      <ol className="grid list-none gap-11 p-0">
        {JOBS.map(job => (
          <li
            className="grid gap-5 max-sm:gap-1.5 sm:grid-cols-[7.5rem_1fr]"
            key={job.company}
          >
            <p className="pt-1 font-mono text-[0.8125rem] whitespace-nowrap text-ink-soft">
              {job.years}
            </p>
            <div>
              <h3 className="mb-2 text-[1.0625rem] font-bold">
                {job.role}
                {job.link ? (
                  <>
                    {" "}
                    ·{" "}
                    <a
                      className="font-semibold"
                      href={job.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {job.company}
                    </a>
                  </>
                ) : (
                  <> · {job.company}</>
                )}
              </h3>
              <p className="max-w-md text-[0.9375rem] leading-[1.7] text-ink-soft">
                {job.summary}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
