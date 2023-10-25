import Link from "next/link";
import React from "react";

function SignUpProcess() {
  return (
    <div className="mx-8 my-16">
      <div className="box-border flex flex-col justify-center items-center gap-3 min-h-[30vh] bg-slate-200 rounded-[8px] text-black
      dark:bg-slate-700 dark:text-white">
        <p>1. 회원가입</p>
        <p>2. 약관동의</p>
        <p>3. 정보입력</p>
        <p>4. 가입완료</p>
      </div>
      <Link href="/signup/cert">
        <button
          className="mt-[10vh] box-border rounded-[8px] min-h-[35px] w-full bg-black text-white
      dark:bg-slate-700 dark:text-white"
        >
          확인
        </button>
      </Link>
    </div>
  );
}

export default SignUpProcess;
