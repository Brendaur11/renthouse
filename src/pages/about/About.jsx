import Hero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import Values from "./Values";
import Timeline from "./Timeline";
import Team from "./Team";
import CTA from "./CTA";

// About.jsx
export default function About() {
  return (
    <main className="bg-white text-gray-800">
      <Hero />
      <WhoWeAre />
      <Values />
      <Timeline />
      <Team />
      <CTA />
    </main>
  );
}

