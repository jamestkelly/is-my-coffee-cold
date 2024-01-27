import { ButtonProps } from "@/lib/interfaces/button";
import React from "react";

const Button: React.FC<ButtonProps> = ({ displayText, onClick, className }) => {
  const defaultStyle =
    "bg-primary-0 hover:bg-primary-1 text-white font-bold py-2 px-4 rounded";

  return (
    <button
      className={`${className ? className : defaultStyle}`}
      onClick={onClick}
    >
      {displayText}
    </button>
  );
};

export default Button;
