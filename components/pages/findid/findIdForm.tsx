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
    <div className="">
      <div className="">
        <p className="">
          이름
        </p>
        <input
          type="text"
          className=""
          placeholder="이름을 입력해주세요."
          id = "name"
          value = {findIdForm.name}
          onChange={handleOnChange}
        />
      </div>

      <div className="">
        <p className="">
          전화번호
        </p>
        <input
          type="text"
          className=""
          placeholder='"-"없이 전화번호 11자리를 입력해주세요.'
          id = "phoneNumber"
          value = {findIdForm.phoneNumber}
          onChange={handleOnChange}
        />
      </div>
        <button
          className="box-border border-1 border-black"
          onClick={handleFindId}
        >
          확인
        </button>
    </div>
  );
}

export default FindIdForm;
