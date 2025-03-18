import avatar from "../assets/avatar.jpg";
import { Button } from "./Button";

export const SectionTop = () => {
  return (
    <section className="flex flex-col items-center gap-5 text-center my-10 sm:my-20 px-4">
      <img
        src={avatar}
        alt="avatar"
        className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-cover mb-6 max-w-full"
      />
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-800 font-bold leading-tight">
        Olá, Me Chamo Fernando 👋
      </h2>
      <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-bold text-slate-400">
        front-end
        <br />
        Web Developer.
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 max-w-full sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl px-2 sm:px-4 lg:px-6 mb-6">
        Desenvolvedor{" "}
        <span className="text-cyan-300 font-bold capitalize">Front-End </span>
        apaixonado por criar aplicações web modernas, pixel-perfect e de{" "}
        <span className="text-red-700 font-bold capitalize">
          alto desempenho
        </span>
        , utilizando{" "}
        <span className="text-cyan-300 font-bold capitalize">
          React.js, TypeScript, Redux, Next.js
        </span>{" "}
        e tecnologias mais recentes.
      </p>
      <Button
        className="w-32 sm:w-40 md:w-48 lg:w-56 h-12 mt-4 text-sm sm:text-base"
        onClick={() =>
          (window.location.href =
            "mailto:fernando@gmail.com?subject=Contato via Portfólio&body=Olá, gostaria de falar sobre...")
        }
      >
        Entre em contato
      </Button>
    </section>
  );
};
