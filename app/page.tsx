import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Clubs from "./components/Clubs";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white">
      <Navigation />
      <Hero />
      <Experience />
      <Education />
      <Clubs />
      <Skills />
      <Contact />
    </main>
  );
}
