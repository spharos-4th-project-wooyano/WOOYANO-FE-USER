import React from "react";
import Link from 'next/link'

function FindIdResult() {
  return (
    <div className="flex flex-col text-center mx-[5vh]">
      <div className="box-border mt-[6vh] text-xl font-bold text-center">
        <p>{"소*영"}님이 가입하신 아이디는</p>
        <p className="mt-[2vh]">{"so12345@gmail.com"}</p>
        <p className="mt-[2vh]">입니다.</p>
      </div>
      <Link href="/login">
        <button
          className="mt-[10vh] box-border rounded-[8px] min-h-[35px] w-full bg-black text-white
      dark:bg-slate-700 dark:text-slate-200"
        >
          확인
        </button>
      </Link>
    </div>
  );
}

export default FindIdResult;
