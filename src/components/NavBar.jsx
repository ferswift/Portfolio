import { Logo } from "./Logo";
import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <nav className="flex justify-between gap-5 items-center p-10 text-xl text-cyan-300 font-semibold border-b border-cyan-300">
      <Logo />
      <div className="flex gap-8 items-center">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Sobre
        </Link>
        <Link to="work" smooth={true} duration={500} className="cursor-pointer">
          Projetos
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Contato
        </Link>
      </div>
    </nav>
  );
};
