import React from "react";

interface CustomInputProps {
  id: string;
  placeholder: string;
  type: string;
  label: string; 
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CustomTextField({ id, placeholder, type, label, value, onChange }: CustomInputProps) {
  return (
    <div className="relative">
      <label className="absolute left-3 -top-3 text-[#4A5F73] text-[14px] font-semibold leading-[20.4px] uppercase bg-white px-2
      dark:bg-black dark:text-slate-300
      font-baloo-da ">
        {label || ""}
      </label>
      <input
        id={id}
        placeholder={placeholder || ""}
        type={type}
        value={value||""}
        onChange={onChange}
        className="border border-[#DBE9F5] rounded-md pl-4 h-[50px] w-full align-middle
        focus:outline-blue-500
        dark:bg-black"
      />
    </div>
  );
}

export default CustomTextField;
