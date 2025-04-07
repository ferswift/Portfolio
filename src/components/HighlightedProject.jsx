import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const HighlightedProject = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setSelectedImage(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-4 my-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h3
        className="text-[1.5rem] text-cyan-300 capitalize"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projeto Destacado
      </motion.h3>

      <motion.h1
        className="text-4xl md:text-5xl uppercase font-bold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        React-Essentials
      </motion.h1>

      <motion.p
        className="text-[1.1rem] md:text-[1.25rem] text-slate-600 max-w-[50rem] mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Este projeto foi desenvolvido enquanto eu estudava sobre React e sua
        manipulação de estados...
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row gap-10 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
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
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {["/images/React-essentials2.png", "/images/React-essentials3.png"].map(
          (src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`React Essentials Screenshot ${i + 2}`}
              className="w-full lg:w-1/2 h-auto object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedImage(src)}
            />
          )
        )}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              alt="Imagem ampliada"
              className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
