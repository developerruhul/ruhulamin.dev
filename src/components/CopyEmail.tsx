import { useState } from "react";

const EMAIL = "ruhulamin.webdev@gmail.com";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // clipboard API can fail on non-secure contexts; the mailto link below
      // is the fallback, so failing silently here is fine
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <span className="copyemail">
      <a
        href={`mailto:${EMAIL}`}
        className="copyemail__link"
        target="_blank"
        rel="noreferrer"
      >
        {EMAIL}
      </a>
      <button
        type="button"
        className="copyemail__btn"
        onClick={copy}
        aria-label={copied ? "Copied" : `Copy email address ${EMAIL}`}
      >
        {copied ? "copied ✓" : "copy"}
      </button>
    </span>
  );
}
