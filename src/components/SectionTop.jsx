import avatar from "../assets/avatar.jpg";
import { Button } from "./Button";

export const SectionTop = () => {
  return (
    <section className="flex flex-col items-center gap-5 text-center my-20 ">
      <img src={avatar} alt="avatar" className="rounded-full" />
      <h2 className="leading-[0.9] text-4xl text-slate-800 font-bold">
        Olá, Me Chamo Fernando 👋
      </h2>
      <h1 className="uppercase text-9xl leading-[0.9] font-bold text-slate-400">
        front-end
        <br />
        Web Developer.
      </h1>
      <p className="text-[1.25rem] text-slate-600 chil max-w-[70rem]">
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
        className="w-[10rem] h-[3prem]"
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
