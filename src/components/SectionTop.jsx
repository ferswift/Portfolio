import avatar from "../assets/avatar.jpg";
import { Button } from "./Button";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const SectionTop = () => {
  return (
    <section className="flex flex-col items-center gap-5 text-center my-10 sm:my-20 px-4 ">
      <motion.img
        src={avatar}
        alt="avatar"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-cover mb-6 max-w-full"
      />

      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-800 font-bold leading-tight"
      >
        Olá, Me Chamo Fernando 👋
      </motion.h2>

      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-bold text-slate-400 "
      >
        <TypeAnimation
          sequence={[
            "Front-End Web Developer.",
            2000,
            "React Developer.",
            2000,
            "UI/UX Enthusiast.",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 max-w-full sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl px-2 sm:px-4 lg:px-6 mb-6"
      >
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
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
      >
        <Button
          className="w-32 sm:w-40 md:w-48 lg:w-56 h-12 mt-4 text-sm sm:text-base"
          onClick={() =>
            (window.location.href =
              "mailto:fernando@gmail.com?subject=Contato via Portfólio&body=Olá, gostaria de falar sobre...")
          }
        >
          Entre em contato
        </Button>
      </motion.div>
    </section>
  );
};
