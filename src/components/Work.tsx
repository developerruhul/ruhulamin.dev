type Job = {
  years: string;
  role: string;
  company: string;
  link?: string;
  summary: string;
  stack?: string[];
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
    <section className="section" id="work">
      <p className="eyebrow">Work</p>
      <h2>Experience</h2>
      <ol className="work__list">
        {JOBS.map(job => (
          <li className="work__entry" key={job.company}>
            <p className="work__years">{job.years}</p>
            <div className="work__body">
              <h3 className="work__role">
                {job.role}
                {job.link ? (
                  <>
                    {" "}
                    ·{" "}
                    <a href={job.link} target="_blank" rel="noreferrer">
                      {job.company}
                    </a>
                  </>
                ) : (
                  <> · {job.company}</>
                )}
              </h3>
              <p>{job.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
