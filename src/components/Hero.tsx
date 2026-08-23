const EMAIL = "ruhulamin.webdev@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/developerruhul";

export default function Hero() {
  return (
    <header className="hero section">
      <p className="status reveal" style={{ animationDelay: "0ms" }}>
        <span className="status__dot" aria-hidden="true" />
        currently available — open to full-time, contract, and part-time work
      </p>

      <h1 className="reveal" style={{ animationDelay: "80ms" }}>
        Ruhul Amin
      </h1>

      <p className="hero__title reveal" style={{ animationDelay: "160ms" }}>
        Full-Stack Engineer · React, Next.js, TypeScript, Node.js
      </p>

      <div className="hero__actions reveal" style={{ animationDelay: "240ms" }}>
        <a className="hero__cta" href={`mailto:${EMAIL}`}>
          Get in touch
        </a>
        <a
          className="hero__cta hero__cta--ghost"
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <img
        className="hero__photo"
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
