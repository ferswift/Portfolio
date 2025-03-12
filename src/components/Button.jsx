export const Button = ({
  children,
  className = "",
  onClick,
  bgColor = "bg-rose-500",
  textColor = "text-slate-100",
  shadow = "shadow-[0_10px_20px_rgba(235,29,72,0.5),0_6px_6px_rgba(235,29,72,0.5),0_0_100px_-10px_rgba(235,29,72,0.5)]",
}) => {
  return (
    <button
      className={`inline-block font-semibold no-underline tracking-tight ${bgColor} ${textColor} py-2 px-4 rounded-lg ${shadow} transition-transform duration-300 ease-in-out hover:translate-y-[-4px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
