import CopyEmail from "./CopyEmail";

const EMAIL = "ruhulamin.webdev@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/developerruhul";
const UPWORK = "https://www.upwork.com/freelancers/~01194011f7d63c1a51";

export default function Contact() {
  return (
    <>
      <section className="border-t border-hairline py-16" id="contact">
        <p className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-ink-soft uppercase before:mr-2.5 before:text-accent before:content-['//']">
          Contact
        </p>
        <h2 className="mt-6 mb-8">
          <CopyEmail />
        </h2>
        <div className="flex flex-wrap gap-7 text-[0.9375rem]">
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={UPWORK} target="_blank" rel="noreferrer">
            Upwork
          </a>
          <a href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">
            Email
          </a>
        </div>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-8 pb-12">
        <p className="flex items-center gap-3 font-mono text-xs text-ink-soft">
          <svg
            className="size-5"
            viewBox="0 0 64 64"
            aria-hidden="true"
          >
            <rect width="64" height="64" rx="14" fill="#171A21" />
            <circle cx="32" cy="32" r="8" fill="#0A54C7" />
            <circle
              cx="32"
              cy="32"
              r="15"
              fill="none"
              stroke="#0A54C7"
              strokeOpacity="0.5"
              strokeWidth="2.5"
            />
          </svg>
          © {new Date().getFullYear()} Ruhul Amin · Built with Next.js
        </p>
        <p className="font-mono text-xs text-accent">ruhulamin.dev</p>
      </footer>
    </>
  );
}
