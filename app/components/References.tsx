const QUOTES = [
  {
    quote:
      "He was basically involved in everything — front-end to back-end to setting up the database. He really took ownership and made things happen, which is something every founder wants to see in a dev.",
    name: "Stefan Smiljkovic",
    title: "Founder, Automatio.ai",
  },
  {
    quote:
      "I watched him single-handedly set up applications that were incredibly professional in both feel and appearance... one of the most brilliant full-stack engineers I've come across.",
    name: "Vlad Vaviloff",
    title: "Backend Developer, Automatio.ai",
  },
  {
    quote:
      "Ruhul is a dependable frontend engineer with a strong sense of ownership... When he takes on a task, it moves forward smoothly with minimal follow-up.",
    name: "Najmul Kabir",
    title: "Lead Software Engineer, UJET.cx",
  },
];

export default function References() {
  return (
    <section className="border-t border-hairline py-16" id="references">
      <p className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-ink-soft uppercase before:mr-2.5 before:text-accent before:content-['//']">
        References
      </p>
      <h2 className="mt-6 mb-8 text-[1.75rem] font-bold tracking-[-0.01em]">
        What colleagues say
      </h2>
      <div className="grid gap-5">
        {QUOTES.map(q => (
          <figure
            className="rounded-[10px] border border-hairline bg-paper-raise px-6 py-6"
            key={q.name}
          >
            <blockquote className="text-[0.9375rem] leading-[1.65] text-ink before:mr-1 before:font-mono before:text-accent before:content-['“'] after:ml-0.5 after:font-mono after:text-accent after:content-['”']">
              {q.quote}
            </blockquote>
            <figcaption className="mt-4 flex flex-col gap-0.5">
              <span className="text-sm font-semibold">{q.name}</span>
              <span className="font-mono text-xs text-ink-soft">{q.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
