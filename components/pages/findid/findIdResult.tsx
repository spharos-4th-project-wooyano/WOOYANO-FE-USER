'use client'
import React from "react";
import CustomButton from "@/components/ui/customButton";
import { useRouter } from 'next/navigation';

function FindIdResult() {
  const router = useRouter()
  return (
    <div className="">
      <div className="">
        <p>{"소*영"}님이 가입하신 아이디는</p>
        <p className="">{"so12345@gmail.com"}</p>
        <p className="">입니다.</p>
      </div>
        <CustomButton text={"다음"} onClick={()=>router.push('/login')}        />
    </div>
  );
}

export default FindIdResult;
