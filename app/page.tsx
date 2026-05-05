import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Clubs from "./components/Clubs";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { connection } from "next/server";

export default async function Home() {
  await connection();

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
