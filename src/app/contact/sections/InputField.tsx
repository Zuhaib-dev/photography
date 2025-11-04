import React from "react";

interface inputProps {
  htmlFor: string;
  label: string;
  type: string;
  id: string;
  placeholder: string;
}

const InputField = ({ htmlFor, label, type, id, placeholder }: inputProps) => {
  return (
    <div className="grid gap-2">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className="border-b border-neutral-800 focus:border-neutral-400 focus:border-b outline-0 py-3 transition-colors"
      />
    </div>
  );
};

export default InputField;
