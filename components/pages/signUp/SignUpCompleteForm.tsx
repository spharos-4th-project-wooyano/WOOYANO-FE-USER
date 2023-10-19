'use client'
import ProgressBar from "@/components/ui/progressBar";
import Link from "next/link";
import React, { useState } from "react";

function SignUpCompleteForm() {
  // const [name,setName] = useState("")
  // const [id,setId] = useState("")
  // const [certNumber,setCertNumber] = useState("")
  // console.log(`name${name} | id:${id} | certNum:${certNumber}`)

  return (
    <div className="flex flex-col my-[4vh] mx-[4vh]">
      <div className="pb-10">
        <ProgressBar completed={4} total={4} />
      </div>
      <div className="box-border flex flex-col gap-3">
        <div>
          <p>닉네임({"스**리"})님</p>
          <p>회원가입이 완료되었습니다.</p>
        </div>
        <div>
          <p className="text-[20px] font-bold">이메일</p>
          <p>{"sojunyeong301@gmail.com"}</p>
        </div>
        <div>
          <p className="text-[20px] font-bold">주소</p>
          <p>{"부산광역시 해운대구 우동 스파로스 아카데미"}</p>
        </div>
        <div>
          <p className="text-[20px] font-bold">전화번호</p>
          <p>{"010-1111-2222"}</p>
        </div>
      </div>
      <Link href="/login">
        <button
          className="mt-[10vh] box-border rounded-[8px] min-h-[35px] w-full bg-black text-white
          dark:bg-slate-700 dark:text-slate-200"
        >
          WOOYANO 로그인 하러가기
        </button>
      </Link>
      {/* 알럿 추가 */}
    </div>
  );
}

export default SignUpCompleteForm