'use client'
import Link from 'next/link'
import React, { ChangeEvent, useState } from 'react'

interface chgPwForm{
  newPassWord : string,
}

function ChgPwForm() {
  const [newPassWordCheck, setNewPassWordCheck] = useState("")
  const [chgPwForm,setChgPwForm] = useState<chgPwForm>(
    {
      newPassWord : "",
    }
  )

  const handleOnChange=(e:ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    setChgPwForm({
      ...chgPwForm,
      [id]:value
    })
  }

  return (
    <div className="">
      <div className="">
        <p className="">
          새 비밀번호
        </p>
        <input
          type="text"
          className=""
          placeholder="영문, 숫자 포함 8자리 이상 입력"
          id = "newPassWord"
          value = {chgPwForm.newPassWord}
          onChange={handleOnChange}

        />
      </div>

      <div className="">
        <p className="">
          비밀번호 확인
        </p>
        <input
          type="text"
          className=""
          placeholder='영문, 숫자 포함 8자리 이상 입력'
          value={newPassWordCheck}
          onChange={(e) => setNewPassWordCheck(e.target.value)}
        />
      </div>

      {/* 알럿 구현 후 Link 삭제 */}
      <Link href="/login"> 
        <button
          className="box-border border-1 border-black"
        >
          확인
        </button>
        {/* 알럿 추가 */}
      </Link>
    </div>
  )
}

export default ChgPwForm