import { Contact } from "./components/Contact";
import { HighlightedProject } from "./components/highlightedProject";
import { Marquee } from "./components/Marquee";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { SectionAbout } from "./components/SectionAbout";
import { SectionTop } from "./components/SectionTop";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col mx-50">
        <SectionTop />
        <SectionAbout />
        <Marquee />
        <HighlightedProject />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
};
