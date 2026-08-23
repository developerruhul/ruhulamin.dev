export default function About() {
  return (
    <section className="border-t border-hairline py-16" id="about">
      <p className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-ink-soft uppercase before:mr-2.5 before:text-accent before:content-['//']">
        About
      </p>
      <p className="mt-6 max-w-md text-ink">
        Full-stack engineer with 6+ years building production web apps and
        developer tools. Most recently at UJET, where I worked on the email,
        voice, and chat experience for their contact center platform — spent
        most of my time on the email module, helped migrate it from AngularJS
        to React/TypeScript, and became my team's E2E testing ambassador.
        Before that, I was an early engineer at Automatio, building their
        Chrome extension and scraping engine, then later led full-stack
        development on Moonly, an NFT analytics dashboard, from concept to
        launch.
      </p>
    </section>
  );
}
