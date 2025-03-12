import { Button } from "../components/Button";

export const Card = ({
  reverse = false,
  image,
  title = "Project",
  description = "Descrição do projeto.",
  secondaryDescription = "Descrição adicional do projeto.",
  githubLink = "#",
}) => {
  return (
    <div
      className={`flex justify-center items-center gap-5 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <img
        src={image}
        alt="cards"
        className="w-[504px] h-[504px] object-cover block mx-auto"
      />
      <div className="flex flex-col justify-center items-center gap-5 text-center">
        <h3 className="text-[1.5rem] text-white font-bold">{title}</h3>
        <div className="flex flex-col justify-center items-center max-w-[30rem] gap-5 text-1xl">
          <p className="text-slate-600">{description}</p>
          <p className="text-slate-400">{secondaryDescription}</p>
          <Button
            bgColor="bg-blue-600 hover:bg-blue-700"
            textColor="text-white"
            shadow="shadow-[0_10px_20px_rgba(37,99,235,0.5),0_6px_6px_rgba(37,99,235,0.5),0_0_100px_-10px_rgba(37,99,235,0.5)]"
            className="w-[200px] h-[50px] z-10"
          >
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
