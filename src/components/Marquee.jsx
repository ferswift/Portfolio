import icon1 from "../assets/CSS3.svg";
import icon2 from "../assets/Express.svg";
import icon3 from "../assets/Figma.svg";
import icon4 from "../assets/Git.svg";
import icon5 from "../assets/GitHub.svg";
import icon6 from "../assets/HTML5.svg";
import icon7 from "../assets/JavaScript.svg";
import icon8 from "../assets/Node.js.svg";
import icon9 from "../assets/ReactLogo.svg";
import icon10 from "../assets/Redux.svg";
import icon11 from "../assets/NPM.svg";
import icon12 from "../assets/PostgresSQL.svg";
import icon13 from "../assets/TypeScript.svg";
import icon14 from "../assets/Vite.js.svg";
import icon15 from "../assets/VisualStudio.svg";
import icon16 from "../assets/TailwindCSS.svg";
import icon17 from "../assets/Insomnia.svg";
import icon18 from "../assets/Next.js.svg";

const icons = [
  icon6,
  icon1,
  icon7,
  icon13,
  icon2,
  icon8,
  icon16,
  icon11,
  icon3,
  icon4,
  icon5,
  icon9,
  icon10,
  icon18,
  icon12,
  icon14,
  icon15,
  icon17,
];

export const Marquee = () => {
  return (
    <div className="flex justify-center items-center overflow-hidden w-full mt-10 animate-pulse">
      <div className="flex gap-8 flex-wrap justify-center animate-marquee mx-2">
        {/* Primeira parte dos ícones */}
        {icons.map((icon) => (
          <img
            key={icon.id}
            src={icon}
            alt="techs logo"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 transition-all duration-300 hover:scale-110"
          />
        ))}
      </div>
    </div>
  );
};
