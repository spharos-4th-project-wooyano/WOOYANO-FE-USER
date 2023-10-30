'use client'
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from 'next/router';

function SignUpCompleteForm() {
  const router = useRouter();
  const email = router.query.email;
  const username = router.query.username;
  const phone = router.query.phone; 
  const address = `${router.query.localAddress} + ${router.query.extraAddress}`

  return (
    <div className="flex flex-col my-[4vh]">
      <div className="pb-10">
      </div>
      <div className="box-border flex flex-col mb-10 gap-3">
        <div>
          <p>${username}님</p>
          <p>회원가입이 완료되었습니다.</p>
        </div>
        <div>
          <p className="text-[20px] font-bold">이메일</p>
          <p>${email}</p>
        </div>
        <div>
          <p className="text-[20px] font-bold">주소</p>
          <p>${address}</p>
        </div>
        <div>
          <p className="text-[20px] font-bold">전화번호</p>
          <p>${phone}</p>
        </div>
      </div>
      <Link href="/login">
        <button
          className="box-border rounded-[8px] min-h-[35px] w-full bg-black text-white
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