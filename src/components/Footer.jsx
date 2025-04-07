import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="flex justify-center items-center h-20 text-white"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <p className="text-sm text-center px-4">
        &copy; {currentYear} Fernando Ribeiro Souza. Todos os direitos
        reservados.
      </p>
    </motion.footer>
  );
};
