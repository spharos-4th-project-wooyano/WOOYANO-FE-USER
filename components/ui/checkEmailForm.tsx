import React from "react";

interface CheckEmailFormProps {
  checked: boolean;
}

export default function CheckEmailForm({ checked }: CheckEmailFormProps) {
  return (
    <div className="text-[20px]">
      {checked ? <span className="text-blue-600">&#10004;</span>
       : <span className="text-slate-500">&#10004;</span>}
    </div>
  );
}
