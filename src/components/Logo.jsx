import reactSvg from "../assets/react.svg";

export const Logo = () => {
  return (
    <div className="flex items-center gap-5">
      <img
        src={reactSvg}
        alt="react-logo"
        className="h-10 w-10 animate-spin-slow"
      />
      <h1 className="text-white text-4xl font-semibold animate-glow">
        Ferswift
      </h1>
    </div>
  );
};
