import About from "../components/about";
import Intro from "../components/intro";

import SectionDevider from "../components/section-devider";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDevider />
      <About />
      <Experience />
    </main>
  );
}
