import React from "react";

export const HighlightedProject = () => {
  return (
    <section className="my-40">
      <h3 className="text-[1.5rem] text-cyan-300 capitalize ">
        Projeto Destacado
      </h3>
      <h1 className="text-5xl uppercase font-bold text-white mb-10">
        React-Essentials
      </h1>
      <p className="text-[1.25rem] text-slate-600 max-w-[50rem]">
        Este projeto foi desenvolvido enquanto eu estudava sobre React e sua
        manipulação de estados. Através dele, pude explorar como o React
        realmente funciona por trás dos panos, entendendo seu ciclo de vida, o
        processo de re-renderização e como o estado é gerenciado de forma
        eficiente para criar interfaces dinâmicas e interativas. A experiência
        me ajudou a aprimorar minhas habilidades com a biblioteca, dando uma
        visão mais profunda sobre a criação de componentes e a construção de
        aplicações escaláveis.
      </p>
      <div className="flex gap-100  my-10">
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
      <div className="flex flex-wrap gap-4">
        <img
          className="w-[48%] h-auto object-cover"
          src="/images/React-essentials.png"
          alt=""
        />
        <img
          className="w-[48%] h-auto object-cover"
          src="/images/React-essentials2.png"
          alt=""
        />
        <img
          className="w-[48%] h-auto object-cover"
          src="/images/React-essentials3.png"
          alt=""
        />
        <img
          className="w-[48%] h-auto object-cover"
          src="/images/React-essentials4.png"
          alt=""
        />
      </div>
    </section>
  );
};
