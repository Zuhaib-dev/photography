import React from "react";

interface InputProps {
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
}: InputProps) => {
  return (
    <div className="group flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-xs font-semibold uppercase tracking-[2px] text-neutral-500 group-focus-within:text-purple-400 transition-colors duration-300"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        className="
          bg-transparent
          text-white text-base
          py-3
          border-b border-neutral-700
          focus:border-purple-500
          outline-none
          placeholder:text-neutral-600
          transition-colors duration-300
          w-full
        "
      />
    </div>
  );
};

export default InputField;
