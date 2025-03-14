import { Button } from "./Button";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center gap-10 text-center mt-50 border-t-1 border-b-1 border-cyan-300 py-20 bg-[url('public/react.svg')] bg-no-repeat bg-right bg-[length:20%_auto]"
    >
      <h1 className="text-5xl text-white font-bold">Entre em Contato</h1>
      <p className="text-xl text-slate-600 max-w-[50rem]">
        Quer você esteja iniciando um projeto, tenha perguntas comerciais ou
        apenas queira dizer oi, minha caixa de entrada está sempre aberta, então
        sinta-se à vontade para entrar em contato e eu retornarei o mais rápido
        possível.
      </p>
      <div className="flex gap-5">
        <a
          href="mailto:nandofhen@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            bgColor="bg-green-300"
            textColor="text-black"
            shadow="shadow-[0_10px_20px_rgba(0,255,0,0.5),0_6px_6px_rgba(0,255,0,0.5),0_0_100px_-10px_rgba(0,255,0,0.5)]"
            className="w-[10rem] h-[3rem] bounce1"
          >
            Email
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/fernando-ribeiro-863210250/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            bgColor="bg-blue-300"
            textColor="text-black"
            shadow="shadow-[0_10px_20px_rgba(0,0,255,0.5),0_6px_6px_rgba(0,0,255,0.5),0_0_100px_-10px_rgba(0,0,255,0.5)]"
            className="w-[10rem] h-[3rem] bounce2"
          >
            Linkedin
          </Button>
        </a>
        <a
          href="https://github.com/ferswift"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            bgColor="bg-purple-600"
            textColor="text-black"
            shadow="shadow-[0_10px_20px_rgba(128,0,128,0.5),0_6px_6px_rgba(128,0,128,0.5),0_0_100px_-10px_rgba(128,0,128,0.5)]"
            className="w-[10rem] h-[3rem] bounce3"
          >
            GitHub
          </Button>
        </a>
        <a
          href="https://www.instagram.com/ferr2xx/?hl=pt-br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            textColor="text-black"
            shadow="shadow-[0_10px_20px_rgba(128,0,128,0.5),0_6px_6px_rgba(128,0,128,0.5),0_0_100px_-10px_rgba(128,0,128,0.5)]"
            className="w-[10rem] h-[3rem] bounce4"
          >
            Instagram
          </Button>
        </a>
      </div>
    </section>
  );
};
