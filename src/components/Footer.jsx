export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center h-20  text-white">
      <p className="text-sm">
        &copy; {currentYear} Fernando Ribeiro Souza. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};
