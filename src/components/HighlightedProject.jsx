export const HighlightedProject = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 my-20 px-4 ">
      <h3 className="text-[1.5rem] text-cyan-300 capitalize">
        Projeto Destacado
      </h3>
      <h1 className="text-4xl md:text-5xl uppercase font-bold text-white mb-6">
        React-Essentials
      </h1>

      <p className="text-[1.1rem] md:text-[1.25rem] text-slate-600 max-w-[50rem] mb-10">
        Este projeto foi desenvolvido enquanto eu estudava sobre React e sua
        manipulação de estados. Através dele, pude explorar como o React
        realmente funciona por trás dos panos, entendendo seu ciclo de vida, o
        processo de re-renderização e como o estado é gerenciado de forma
        eficiente para criar interfaces dinâmicas e interativas. A experiência
        me ajudou a aprimorar minhas habilidades com a biblioteca, dando uma
        visão mais profunda sobre a criação de componentes e a construção de
        aplicações escaláveis.
      </p>

      <div className="flex flex-col md:flex-row gap-15 mb-10">
        <div>
          <h2 className="text-2xl text-white font-bold mb-2">Tech Stack</h2>
          <ul className="text-[1.25rem] text-slate-600">React.js</ul>
        </div>
        <div>
          <h2 className="text-2xl text-white font-bold mb-2">Project Type</h2>
          <p className="text-[1.25rem] text-slate-600">SPA</p>
        </div>
        <div>
          <h2 className="text-2xl text-white font-bold mb-2">Timeline</h2>
          <p className="text-[1.25rem] text-slate-600">2024-Present</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <img
          className="w-full sm:w-[90%] md:w-[45%] lg:w-[22%] h-auto object-cover transition-transform duration-300 hover:scale-105"
          src="/images/React-essentials.png"
          alt="React Essentials Screenshot 1"
        />
        <img
          className="w-full sm:w-[90%] md:w-[45%] lg:w-[22%] h-auto object-cover transition-transform duration-300 hover:scale-105"
          src="/images/React-essentials2.png"
          alt="React Essentials Screenshot 2"
        />
        <img
          className="w-full sm:w-[90%] md:w-[45%] lg:w-[22%] h-auto object-cover transition-transform duration-300 hover:scale-105"
          src="/images/React-essentials3.png"
          alt="React Essentials Screenshot 3"
        />
        <img
          className="w-full sm:w-[90%] md:w-[45%] lg:w-[22%] h-auto object-cover transition-transform duration-300 hover:scale-105"
          src="/images/React-essentials4.png"
          alt="React Essentials Screenshot 4"
        />
      </div>
    </section>
  );
};
