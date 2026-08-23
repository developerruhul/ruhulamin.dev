"use client";

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
    <span className="inline-flex flex-wrap items-baseline gap-3">
      <a
        href={`mailto:${EMAIL}`}
        className="text-[clamp(1.15rem,3.5vw,1.5rem)] tracking-[-0.01em] text-ink no-underline border-b-2 border-accent pb-0.5 break-all hover:text-accent"
        target="_blank"
        rel="noreferrer"
      >
        {EMAIL}
      </a>
      <button
        type="button"
        className="rounded-full border border-hairline bg-paper-raise px-3.5 py-1.5 font-mono text-xs text-ink-soft transition-colors duration-150 hover:border-accent hover:text-accent"
        onClick={copy}
        aria-label={copied ? "Copied" : `Copy email address ${EMAIL}`}
      >
        {copied ? "copied ✓" : "copy"}
      </button>
    </span>
  );
}
