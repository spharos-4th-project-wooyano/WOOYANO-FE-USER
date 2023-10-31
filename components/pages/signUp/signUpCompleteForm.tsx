'use client'
import Link from "next/link";
import React, { useState } from "react";
// import { useRouter } from 'next/router';

function SignUpCompleteForm() {
  // const router = useRouter();
  // const email = router.query.email;
  // const username = router.query.username;
  // const phone = router.query.phone; 
  // const address = `${router.query.localAddress} + ${router.query.extraAddress}`

  return (
    <div className="">
      {/* <div className="">
      </div>
      <div className="">
        <div>
          <p>${username}님</p>
          <p>회원가입이 완료되었습니다.</p>
        </div>
        <div>
          <p className="">이메일</p>
          <p>${email}</p>
        </div>
        <div>
          <p className="">주소</p>
          <p>${address}</p>
        </div>
        <div>
          <p className="">전화번호</p>
          <p>${phone}</p>
        </div>
      </div> */}
      <Link href="/login">
        <button
          className="border-box border-1 border-black"
        >
          WOOYANO 로그인 하러가기
        </button>
      </Link>
      {/* 알럿 추가 */}
    </div>
  );
}

export default SignUpCompleteForm