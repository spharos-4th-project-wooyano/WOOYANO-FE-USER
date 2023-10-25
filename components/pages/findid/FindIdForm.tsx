'use client'
import React, { useState,ChangeEvent } from "react";
import Link from 'next/link'

interface findIdform{
  name : string,
  phoneNumber : string
}

function FindIdForm() {
  const [findIdForm,setFindIdForm] = useState<findIdform>(
    {
      name : "",
      phoneNumber : "",
    }
  )

  const handleOnChange=(e:ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    setFindIdForm({
      ...findIdForm,
      [id]:value
    })
  }

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
          id = "name"
          value = {findIdForm.name}
          onChange={handleOnChange}
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
          id = "phoneNumber"
          value = {findIdForm.phoneNumber}
          onChange={handleOnChange}
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
