import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center gap-10 pt-35 tet-center mt-50 border-2 border-cyan-300 py-20"
    >
      <h1 className="text-4xl md:text-5xl text-white font-bold">
        Entre em Contato
      </h1>
      <p className="text-lg md:text-xl text-slate-600 max-w-[90%] md:max-w-[50rem]">
        Quer você esteja iniciando um projeto, tenha perguntas comerciais ou
        apenas queira dizer oi, minha caixa de entrada está sempre aberta, então
        sinta-se à vontade para entrar em contato e eu retornarei o mais rápido
        possível.
      </p>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        <a
          href="https://github.com/ferswift"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-16 h-16 md:w-20 md:h-20 hover:text-white transition duration-500 hover:drop-shadow-[0_0_10px_#ffffff] active:text-white focus:text-white active:drop-shadow-[0_0_10px_#ffffff] focus:drop-shadow-[0_0_10px_#ffffff]" />
        </a>

        <a
          href="https://www.linkedin.com/in/fernando-ribeiro-863210250/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-16 h-16 md:w-20 md:h-20 hover:text-[#0077B5] transition duration-500 hover:drop-shadow-[0_0_10px_#0077B5] active:text-[#0077B5] focus:text-[#0077B5] active:drop-shadow-[0_0_10px_#0077B5] focus:drop-shadow-[0_0_10px_#0077B5]" />
        </a>

        <a
          href="https://www.instagram.com/ferr2xx/?hl=pt-br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="w-16 h-16 md:w-20 md:h-20 hover:text-[#E1306C] transition duration-500 hover:drop-shadow-[0_0_10px_#E1306C] active:text-[#E1306C] focus:text-[#E1306C] active:drop-shadow-[0_0_10px_#E1306C] focus:drop-shadow-[0_0_10px_#E1306C]" />
        </a>

        <a href="mailto:nandofhen@gmail.com">
          <MdEmail className="w-16 h-16 md:w-20 md:h-20 hover:text-[#D44638] transition duration-500 hover:drop-shadow-[0_0_10px_#D44638] active:text-[#D44638] focus:text-[#D44638] active:drop-shadow-[0_0_10px_#D44638] focus:drop-shadow-[0_0_10px_#D44638]" />
        </a>
      </div>
    </section>
  );
};
