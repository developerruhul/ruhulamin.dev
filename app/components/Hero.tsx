const EMAIL = "ruhulamin.webdev@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/developerruhul";

// page-load stagger; opacity-0 + forwards keeps the pre-animation state
const reveal = "motion-safe:animate-reveal";

export default function Hero() {
  return (
    <header className="grid gap-5 pt-10 pb-10 md:pt-14 md:pb-16 lg:pt-24">
      <p
        className={`inline-flex w-fit items-center gap-2.5 rounded-full border border-hairline bg-paper-raise px-4 py-2 font-mono text-xs font-medium tracking-wide text-ink-soft opacity-0 max-sm:items-start max-sm:text-pretty ${reveal}`}
      >
        <span className="relative flex size-2 flex-none max-sm:mt-1" aria-hidden="true">
          <span className="absolute inset-0 rounded-full bg-accent" />
          <span className="absolute inset-[-4px] rounded-full border border-accent motion-safe:animate-[status-ping_2.4s_ease-out_infinite]" />
        </span>
        currently available — open to full-time, contract, and part-time work
      </p>

      <h1
        className={`text-[clamp(2.5rem,7.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] opacity-0 ${reveal}`}
        style={{ animationDelay: "80ms" }}
      >
        Ruhul Amin
      </h1>

      <p
        className={`max-w-md font-mono text-[0.9375rem] leading-[1.7] text-ink-soft opacity-0 ${reveal}`}
        style={{ animationDelay: "160ms" }}
      >
        Full-Stack Engineer · React, Next.js, TypeScript, Node.js
      </p>

      <p
        className={`-mt-3 max-w-lg font-mono text-[0.9375rem] leading-[1.7] text-ink-soft opacity-0 ${reveal}`}
        style={{ animationDelay: "240ms" }}
      >
        most recently: frontend @ UJET — silicon valley enterprise contact
        center
      </p>

      <div
        className={`mt-2 flex flex-wrap gap-3 opacity-0 ${reveal}`}
        style={{ animationDelay: "320ms" }}
      >
        <a
          className="inline-flex items-center rounded-md border border-accent bg-accent px-6 py-2.5 text-[0.9375rem] font-semibold text-white no-underline hover:border-accent-ink hover:bg-accent-ink"
          href={`mailto:${EMAIL}`}
          target="_blank"
          rel="noreferrer"
        >
          Get in touch
        </a>
        <a
          className="inline-flex items-center rounded-md border border-hairline px-6 py-2.5 text-[0.9375rem] font-semibold text-ink no-underline hover:border-accent hover:bg-accent-wash hover:text-accent"
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="mt-7 size-40 rounded-[10px] border border-hairline object-cover"
        src="/assets/ruhul-amin.png"
        alt="Portrait of Ruhul Amin"
        width={614}
        height={768}
        fetchPriority="high"
        decoding="async"
      />
    </header>
  );
}
