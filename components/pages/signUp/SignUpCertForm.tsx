'use client'
import ProgressBar from "@/components/ui/ProgressBar";
import Link from "next/link";
import React,{useState} from "react";

function SignUpCertForm() {
  const [name,setName] = useState("")
  const [id,setId] = useState("")
  const [certNumber,setCertNumber] = useState("")
  console.log(`name${name} | id:${id} | certNum:${certNumber}`)

  return (
    <div className="flex flex-col my-[4vh] mx-[4vh]">
      <ProgressBar completed={1} total={4} />
      <div className="box-border mt-[2vh]">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">이름</p>
        <input
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="이름을 작성해주세요."
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
      </div>

      <div className="box-border mt-[2vh]">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">
          이메일(ID)
        </p>
        <input
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="본 서비스에서 사용할 이메일을 입력해주세요"
          value={id}
          onChange={(e)=>setId(e.target.value)}
        />
      </div>

      <button
        className="mt-2 box-border rounded-[8px] min-h-[35px] max-w-[140px] bg-black text-white
      dark:bg-slate-700 dark:text-slate-200"
      >
        인증번호 전송
      </button>

      <div className="flex gap-2">
        <input
          type="text"
          className="mt-2 box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="인증번호 입력"
          value={certNumber}
          onChange={(e)=>setCertNumber(e.target.value)}
        />
        <button
          className="mt-2 box-border rounded-[8px] min-h-[35px] min-w-[10vh] bg-black text-white
      dark:bg-slate-700 dark:text-slate-200"
        >
          인증 확인
        </button>
      </div>
      <Link href="/signup/agree">
        <button
          className="mt-[10vh] box-border rounded-[8px] min-h-[35px] w-full bg-black text-white
      dark:bg-slate-700 dark:text-slate-200"
        >
          다음
        </button>
      </Link>
      {/* 알럿 추가 */}
    </div>
  );
}
export default SignUpCertForm;
