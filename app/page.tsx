import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import References from "./components/References";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <main className="mx-auto max-w-[67rem] px-(--gutter)">
      <Hero />
      <About />
      <Work />
      <References />
      <Contact />
    </main>
  );
}
