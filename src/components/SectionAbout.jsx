import avatar from "../assets/avatar.jpg";

export const SectionAbout = () => {
  return (
    <section
      id="about"
      className="flex items-center gap-30 text-[1.25rem] text-slate-600 "
    >
      <div className="flex flex-col  gap-5 ">
        <h1 className="text-5xl font-bold text-white ">Sobre</h1>
        <p className="max-w-[50rem] border-b-1 border-cyan-300 pb-5">
          Olá! Sou Fernando, um desenvolvedor Frontend / Fullstack baseado em
          Salvador, Bahia. Acordo de manhã, pego uma xícara de café, ligo meu PC
          e passo o dia todo estudando stacks novas e criando coisas que vivem
          na web. Quem me conhece diz que sou obcecado, e é verdade, sou muito
          focado e amo front-end. Estou me preparando para me tornar um
          desenvolvedor mobile em breve, sempre em busca de novos desafios e
          aprendizados.
        </p>
        <div className="flex flex-col gap-5">
          <h2 className="text-x1 text-slate-400 font-bold">Tecnologias</h2>
          <ul className="grid grid-cols-3 gap-3">
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
      <div className="flex items-center justify-center">
        <img src={avatar} alt="avatar" className="w-110 h-110" />
      </div>
    </section>
  );
};
