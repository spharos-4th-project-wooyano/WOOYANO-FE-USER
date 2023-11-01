import Link from "next/link";
import React from "react";

interface CustomButtonProps {
  text: string;
  onClick: () => void;
}

export default function CustomButton({ text, onClick }: CustomButtonProps) {
  console.log(onClick);
  return (
    <button
      className="border rounded-md pl-2 h-[50px] w-full align-middle
      bg-black text-white font-semibold
      dark:text-black dark:bg-slate-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
