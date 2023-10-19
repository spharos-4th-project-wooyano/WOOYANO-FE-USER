'use client'
import React, { useState } from "react";
import Link from 'next/link'

function FindIdForm(){
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  console.log(`name:${name} | phone:${phoneNumber}`);

  return (
    <div className="flex flex-col my-[4vh] mx-[4vh]">
      <div className="box-border mt-[2vh]">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">
          이름
        </p>
        <input
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="이름을 입력해주세요."
          value = {name}
          onChange={(e)=>setName(e.target.value)}
        />
      </div>

      <div className="box-border mt-[2vh]">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">
          전화번호
        </p>
        <input
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder='"-"없이 전화번호 11자리를 입력해주세요.'
          value = {phoneNumber}
          onChange={(e)=>setPhoneNumber(e.target.value)}
        />
      </div>
      <Link href="/findidresult">
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

export default FindIdForm;
