import avatar from "../assets/avatar.jpg";

export const SectionAbout = () => {
  return (
    <section
      id="about"
      className="flex justify-center flex-col items-center md:flex-row gap-10 px-4 py-10 text-[1.25rem] text-slate-600"
    >
      <div className="flex flex-col gap-5 max-w-[50rem] w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Sobre</h1>
        <p className="border-b-2 border-cyan-300 pb-5">
          Olá! Sou Fernando, um desenvolvedor Frontend / Fullstack baseado em
          Salvador, Bahia. Acordo de manhã, pego uma xícara de café, ligo meu PC
          e passo o dia todo estudando stacks novas e criando coisas que vivem
          na web. Quem me conhece diz que sou obcecado, e é verdade, sou muito
          focado e amo front-end. Estou me preparando para me tornar um
          desenvolvedor mobile em breve, sempre em busca de novos desafios e
          aprendizados.
        </p>
        <div className="flex flex-col gap-5">
          <h2 className="text-xl text-slate-400 font-bold">Tecnologias</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            <li>React.js👍</li>
            <li>Redux👍</li>
            <li>Next.js👍</li>
            <li>JavaScript👍</li>
            <li>TypeScript👍</li>
            <li>Node👍</li>
            <li>NPM👍</li>
            <li>Express.js👍</li>
            <li>Vite👍</li>
            <li>Git👍</li>
            <li>GitHub👍</li>
            <li>PostgreSQL👍</li>
            <li>Html5👍</li>
            <li>CSS3👍</li>
            <li>Tailwind CSS👍</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center mt-10 md:mt-0">
        <img
          src={avatar}
          alt="avatar"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover" // Ajuste para imagem responsiva
        />
      </div>
    </section>
  );
};
