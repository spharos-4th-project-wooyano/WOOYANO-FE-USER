import Link from "next/link";
import React from "react";

function Findinfo() {
  return (
    <div className="mt-[19px] flex justify-center">
      <div className="box-border flex gap-8 text-zinc-800 text-[11px] font-medium font-['Montserrat'] leading-[21px]">
        <Link href="/findid">
          <p>아이디 찾기</p>
        </Link>
        <Link href="/findpwcert">
          <p>비밀번호 찾기</p>
        </Link>
        <Link href="/signup/process">
          <p>회원가입</p>
        </Link>
      </div>
    </div>
  );
}

export default Findinfo;
