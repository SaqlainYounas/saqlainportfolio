import Skills from "@/components/skills";
import About from "../components/about";
import Intro from "../components/intro";
import Projects from "../components/projects";
import SectionDevider from "../components/section-devider";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDevider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
