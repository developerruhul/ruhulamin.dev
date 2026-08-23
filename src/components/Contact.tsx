import CopyEmail from "./CopyEmail";

const EMAIL = "ruhulamin.webdev@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/developerruhul";
const UPWORK = "https://www.upwork.com/freelancers/~01194011f7d63c1a51";

export default function Contact() {
  return (
    <>
      <section className="section contact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2 className="contact__heading">
          <CopyEmail />
        </h2>
        <div className="contact__links">
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

      <footer className="footer">
        <p className="footer__meta">
          © {new Date().getFullYear()} Ruhul Amin · Built with Vite + React
        </p>
        <p className="footer__site">ruhulamin.dev</p>
      </footer>
    </>
  );
}
