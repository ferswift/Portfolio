import { Contact } from "./components/Contact";
import { HighlightedProject } from "./components/HighlightedProject";
import { Marquee } from "./components/Marquee";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { SectionAbout } from "./components/SectionAbout";
import { SectionTop } from "./components/SectionTop";
import { Footer } from "./components/Footer";
import { EasterEgg } from "./components/EasterEgg";

export const App = () => {
  return (
    <>
      <NavBar />
      <SectionTop />
      <SectionAbout />
      <Marquee />
      <HighlightedProject />
      <Projects />
      <Contact />
      <EasterEgg />
      <Footer />
    </>
  );
};
