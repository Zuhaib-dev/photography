import React from "react";

interface inputProps {
  htmlFor: string;
  label: string;
  type: string;
  id: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  htmlFor,
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
}: inputProps) => {
  return (
    <div className="grid gap-2">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        className="border-b border-neutral-800 focus:border-neutral-400 focus:border-b outline-0 py-3 transition-colors bg-transparent"
      />
    </div>
  );
};

export default InputField;
