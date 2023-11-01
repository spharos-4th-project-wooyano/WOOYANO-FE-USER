'use client'
import Link from "next/link";
import React,{useState} from "react";

function SignUpAgreeForm() {

  return (
    <div className="">
      <div className="">
        <p className="">약관 내용</p>
        <div className="">
          <p>1. 약관 내용 1</p>
          <p>2. 약관 내용 2</p>
          <p>3. 약관 내용 3</p>
          <p>4. 약관 내용 4</p>
          <p>5. 약관 내용 5</p>
        </div>
      </div>
      <Link href="/signup/form">
        <button
          className="box-border border-1 border-black"
        >
          다음
        </button>
      </Link>
      {/* 알럿 추가 */}
    </div>
  );
}

export default SignUpAgreeForm