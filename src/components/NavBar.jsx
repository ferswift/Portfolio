import { Logo } from "./Logo";
import { Link } from "react-scroll";
import { useState } from "react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="flex justify-between items-center p-5 md:p-10 text-xl text-cyan-300 font-semibold border-b border-cyan-300 relative">
      <Logo />
      <div className="hidden md:flex gap-5 items-center ">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:border-b border-cyan-300"
        >
          Sobre
        </Link>
        <Link
          to="work"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:border-b border-cyan-300"
        >
          Projetos
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:border-b border-cyan-300"
        >
          Contato
        </Link>
      </div>

      <button
        className="md:hidden text-2xl"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? "X" : "☰"}
      </button>

      {isMenuOpen && (
        <div className="absolute top-0 right-0 bg-slate-900 w-full p-10 border-1">
          <div className="flex justify-end">
            <button className="text-2xl text-cyan-300" onClick={toggleMenu}>
              X
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 mt-10">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-xl text-cyan-300 cursor-pointer border-1 p-2"
            >
              Sobre
            </Link>
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="text-xl text-cyan-300 cursor-pointer border-1 p-2"
            >
              Projetos
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-xl text-cyan-300 cursor-pointer border-1 p-2"
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
