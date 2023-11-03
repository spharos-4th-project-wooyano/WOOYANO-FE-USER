import Link from "next/link";
import React from "react";

function SignUpProcess() {
  return (
    <div className="">
      <div className="">
        <p>1. 회원가입</p>
        <p>2. 약관동의</p>
        <p>3. 정보입력</p>
        <p>4. 가입완료</p>
      </div>
      <Link href="/signup/cert">
        <button
          className="box-border border-1 border-black"
        >
          확인
        </button>
      </Link>
    </div>
  );
}

export default SignUpProcess;
