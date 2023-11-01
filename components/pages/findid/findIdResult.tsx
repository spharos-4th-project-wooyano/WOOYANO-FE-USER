import React from "react";
import Link from 'next/link'

function FindIdResult() {
  return (
    <div className="">
      <div className="b">
        <p>{"소*영"}님이 가입하신 아이디는</p>
        <p className="">{"so12345@gmail.com"}</p>
        <p className="">입니다.</p>
      </div>
      <Link href="/login">
        <button
          className="box-border border-1 border-black"
        >
          확인
        </button>
      </Link>
    </div>
  );
}

export default FindIdResult;
