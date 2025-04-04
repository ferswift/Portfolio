import { Card } from "./Card";

export const Projects = () => {
  return (
    <section
      id="work"
      className="flex flex-col justify-center items-center px-4 my-10 md:my-20 w-full overflow-x-hidden"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-5 md:mb-7">
        Projects
      </h1>

      <p className="text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] text-slate-600 max-w-[40rem] text-center mb-8 md:mb-10">
        Aqui estão alguns dos projetos que desenvolvi, focando em design
        moderno, funcionalidade e acessibilidade. Cada projeto demonstra minhas
        habilidades com React, diversas outras techs e boas práticas de
        desenvolvimento. Confira e sinta-se à vontade para explorar o código e
        funcionalidades!
      </p>

      <div className="flex flex-wrap gap-6 sm:gap-8 justify-center w-full max-w-screen-xl px-4">
        <Card
          image="/images/elegant-context.png"
          title="Elegant Context"
          description="Implementação de Context API com React para gerenciamento global de estados."
          secondaryDescription="Sistema eficiente e minimalista para projetos React."
          githubLink="https://github.com/ferswift/Elegant-context"
        />
        <Card
          reverse
          image="/images/projeto-tic-tac.png"
          title="Projeto Tic-Tac-Toe"
          description="Jogo da velha clássico desenvolvido com React"
          secondaryDescription="Desenvolvido com componentes funcionais e hooks."
          githubLink="https://github.com/ferswift/React-tic-tac-toe"
        />
        <Card
          image="/images/Projeto-Gikalove.png"
          title="Projeto Gikalove"
          description="Landing page estilosa e interativa desenvolvida com React e module.css"
          secondaryDescription="Focada em design responsivo e acessibilidade."
          githubLink="https://github.com/ferswift?tab=repositories"
        />
        <Card
          reverse
          image="/images/Final-countdown.png"
          title="Final Countdown"
          description="Aplicação de contagem regressiva com interface intuitiva, aplicando estados e refs."
          secondaryDescription="Utiliza React com controle de estado eficiente."
          githubLink="https://github.com/ferswift/Final-CountDown"
        />
        <Card
          image="/images/Lista-de-Projetos.png"
          title="Lista de Projetos"
          description="Uma aplicação de gerenciamento de projetos com React feita para prática e estudo."
          secondaryDescription="Organização e navegação simplificada."
          githubLink="https://github.com/ferswift?tab=repositories"
        />
        <Card
          reverse
          image="/images/place-Picker.png"
          title="Place Picker"
          description="Ferramenta interativa para seleção de locais utilizando React, fundamentando-se em geolocalização."
          secondaryDescription="Foco em usabilidade e experiência do usuário."
          githubLink="https://github.com/ferswift/Place-Picker"
        />
        <Card
          image="/images/Cubos-cafe.jpg"
          title="Cubos Café"
          description="Plataforma desenvolvida com HTML, CSS, AXIOS, DB, DOM entre diversos outros."
          secondaryDescription="Estilo clean e responsivo."
          githubLink="https://github.com/ferswift/Cafeteria-Cubos"
        />
        <Card
          reverse
          image="/images/Desafio-front-end.png"
          title="Desafio Front-end"
          description="Projeto desenvolvido como desafio técnico com HTML e CSS."
          secondaryDescription="Foco em boas práticas e acessibilidade."
          githubLink="https://github.com/ferswift/Desafio-frontend-m1"
        />
        <Card
          image="/images/React-essentials.png"
          title="React Essentials"
          description="Coleção de componentes essenciais desenvolvidos com React, meu primeiro projetinho :)"
          secondaryDescription="Prático e reutilizável para qualquer projeto."
          githubLink="https://github.com/ferswift/react-essentials"
        />
        <Card
          reverse
          image="/images/React-investment-calculator.png"
          title="React Investment Calculator"
          description="Projeto desenvolvido com React para cálculo de investimentos."
          secondaryDescription="Foco em usabilidade e design intuitivo."
          githubLink="https://github.com/ferswift/React-investment-calculator"
        />
        <Card
          image="/images/netflix.png"
          title="Netflix Clone"
          description="Clone da interface do Netflix desenvolvido com HTML e CSS."
          secondaryDescription="Foco em responsividade e fidelidade ao design original."
          githubLink="https://github.com/ferswift/netflix-clone"
        />
        <Card
          reverse
          image="/images/dene.png"
          title="Doceria Dene"
          description="Landing page de uma doceria."
          secondaryDescription="Foco em design responsivo e acessibilidade."
          githubLink="https://github.com/ferswift/Project4"
        />
        <Card
          image="/images/pepsi.png"
          title="Pepsi Clone"
          description="Clone da interface do site da Pepsi desenvolvido com HTML e CSS."
          secondaryDescription="Foco em responsividade e fidelidade ao design original."
          githubLink="https://github.com/ferswift/project5"
        />
        <Card
          reverse
          image="/images/hostels.png"
          title="Hostels"
          description="Landing page de uma empresa de hotelaria."
          secondaryDescription="Foco em design responsivo e acessibilidade."
          githubLink="https://github.com/ferswift/RWD-HOSTELS"
        />
        <Card
          image="/images/fashion.png"
          title="Fashion Site"
          description="Site de moda desenvolvido com HTML e CSS."
          secondaryDescription="Foco em responsividade e fidelidade ao design original."
          githubLink="https://github.com/ferswift/Project3"
        />
      </div>
    </section>
  );
};
