import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import References from "./components/References";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="page">
      <Hero />
      <About />
      <Work />
      <References />
      <Contact />
    </div>
  );
}
