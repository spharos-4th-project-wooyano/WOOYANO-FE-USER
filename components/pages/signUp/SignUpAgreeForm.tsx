'use client'
import ProgressBar from "@/components/ui/ProgressBar";
import Link from "next/link";
import React,{useState} from "react";

function SignUpAgreeForm() {

  return (
    <div className="flex flex-col my-[4vh] mx-[4vh]">
      <ProgressBar completed={2} total={4} />
      <div className="box-border mt-[2vh]">
        <p className="text-[13px] leading-[3vh] pl-[4px]">약관 내용</p>
        <div className="flex flex-col gap-2 box-border bg-slate-200 min-h-[30vh] rounded-[8px] justify-center items-center dark:bg-slate-700 dark:text-slate-200">
          <p>1. 약관 내용 1</p>
          <p>2. 약관 내용 2</p>
          <p>3. 약관 내용 3</p>
          <p>4. 약관 내용 4</p>
          <p>5. 약관 내용 5</p>
        </div>
      </div>
      <Link href="/signup/form">
        <button
          className="mt-[10vh] box-border rounded-[8px] min-h-[35px] w-full bg-black text-white dark:bg-slate-700 dark:text-slate-200"
        >
          다음
        </button>
      </Link>
      {/* 알럿 추가 */}
    </div>
  );
}

export default SignUpAgreeForm