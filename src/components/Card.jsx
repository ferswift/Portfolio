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
      className={`flex flex-col sm:flex-row justify-center items-center gap-5 ${
        reverse ? "sm:flex-row-reverse" : ""
      }`}
    >
      <img
        src={image}
        alt={title}
        className="w-full sm:w-[504px] h-[504px] object-cover block mx-auto transition-transform duration-300 hover:scale-120 rounded-lg"
      />
      <div className="flex flex-col justify-center items-center gap-5 text-center">
        <h3 className="text-[1.5rem] text-white font-bold">{title}</h3>
        <div className="flex flex-col justify-center items-center max-w-[30rem] gap-5 text-1xl">
          <p className="text-slate-600">{description}</p>
          <p className="text-slate-400">{secondaryDescription}</p>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center w-full font-semibold no-underline tracking-tight py-2 px-4 rounded-lg transition-transform duration-300 ease-in-out hover:translate-y-[-4px] bg-blue-700 text-slate-100 shadow-[0_10px_20px_rgba(0,0,255,0.5),0_6px_6px_rgba(0,0,255,0.5),0_0_100px_-10px_rgba(0,0,255,0.5)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
