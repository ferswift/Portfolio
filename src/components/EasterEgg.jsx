import React, { useState } from "react";
import dog from "../assets/dog.png";

export const EasterEgg = () => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={handleVisible}>🐕</button>
      {visible && (
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-6xl text-white font-bold">
            Parabéns você achou o{" "}
            <span className="text-amber-400">Caramelo</span> secreto
          </p>
          <img src={dog} alt="clarinha easteregg" />
        </div>
      )}
    </div>
  );
};
