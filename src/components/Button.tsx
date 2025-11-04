import { RiArrowRightUpLongLine } from "@remixicon/react";
import React from "react";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="flex items-center gap-2.5 max-w-max">
      <h2 className="flex items-center flex-wrap gap-2">{label}</h2>
      <span className="bg-purple-600 w-20 h-12 flex items-center justify-center rounded-full hover:bg-purple-500 transition-colors">
        <RiArrowRightUpLongLine size={26} />
      </span>
    </button>
  );
};

export default Button;
