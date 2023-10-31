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

  const handleFindId = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/v1/users/email/find?username=${findIdForm.name}&phone=${findIdForm.phoneNumber}`
        );
        if (res.ok) {
          console.log(res);
          const data = await res.json()
          console.log('data:' , data);
          //to-do: 응답처리 수정 후 데이터 받아 결과 페이지에 표시하도록 수정
        }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  }

  return (
    <div className="flex flex-col my-[4vh]">
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

      <div className="box-border mt-[2vh] mb-10 ">
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
        <button
          className="box-border rounded-[8px] min-h-[35px] w-full bg-black text-white
          dark:bg-slate-700 dark:text-slate-200"
          onClick={handleFindId}
        >
          확인
        </button>
    </div>
  );
}

export default FindIdForm;
