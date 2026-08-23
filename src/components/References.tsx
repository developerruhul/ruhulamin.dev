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
    <section className="section" id="references">
      <p className="eyebrow">References</p>
      <h2>What colleagues say</h2>
    <div className="refs">
        {QUOTES.map(q => (
          <figure className="refs__card" key={q.name}>
            <blockquote className="refs__quote">{q.quote}</blockquote>
            <figcaption className="refs__attr">
              <span className="refs__name">{q.name}</span>
              <span className="refs__title">{q.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
