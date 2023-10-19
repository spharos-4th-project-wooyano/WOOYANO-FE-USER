"use client";
import ProgressBar from "@/components/ui/progressBar";
import PostCodeDaum from "@/components/widget/PostCodeDaum";
import { DaumAddressType } from "@/types/DaumAddrssType";
import Link from "next/link";
import React, { useState } from "react";

function SignUpForm() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [passWord, setPassWord] = useState("");
  const [nickname, setNickName] = useState("");
  const [birth, setBirth] = useState("");
  const [phoneNumber, setPhoneNuber] = useState("");

  const [isView, setIsView] = useState<boolean>(false);
  const [address, setAddress] = useState<DaumAddressType>();
  console.log(name, id, passWord, nickname, birth, phoneNumber);

  const handleOpenModal = () => {
    setIsView(true);
  };

  return (
    <div className="flex flex-col my-[4vh] mx-[4vh] gap-2">
      <ProgressBar completed={3} total={4} />
      <div className="box-border mt-[2vh]">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">
          이메일(ID)
        </p>
        <input
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="아이디로 사용할 이메일을 작성해주세요."
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className="box-border">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">
          비밀번호
        </p>
        <input
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="비밀번호 작성해주세요."
          value={passWord}
          onChange={(e) => setPassWord(e.target.value)}
        />
      </div>
      <div className="box-border">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">이름</p>
        <input
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="이름을 작성해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">닉네임</p>
        <div className="flex gap-2">
          <input
            type="text"
            className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
            placeholder="서비스에서 표시할 이름을 작성해주세요."
            value={nickname}
            onChange={(e) => setNickName(e.target.value)}
          />
          <button
            className="box-border rounded-[8px] min-h-[35px] min-w-[10vh] bg-black text-white
      dark:bg-slate-700 dark:text-slate-200"
          >
            중복 확인
          </button>
        </div>
      </div>
      <div>
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">
          생년월일
        </p>
        <input
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="생년월일 6자리를 작성해주세요."
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
        />
      </div>
      <div>
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">
          전화번호
        </p>
        <input
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="'-'없이 전화번호를 작성해주세요"
          value={phoneNumber}
          onChange={(e) => setPhoneNuber(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">주소</p>
        <div className="flex gap-2">
          <input
            type="text"
            className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
            placeholder="주소찾기 버튼을 사용해 주세요."
            value={address?.address}
            readOnly
          />
          <PostCodeDaum isView={isView} setIsView={setIsView} setAddress={setAddress} />
          <button
            className="box-border rounded-[8px] min-h-[35px] min-w-[10vh] bg-black text-white
      dark:bg-slate-700 dark:text-slate-200"
            onClick={()=>{handleOpenModal}}
          >
            주소 찾기
          </button>
        </div>
        <input
          type="text"
          className="mt-1 box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="상세 주소입력"
          // value={extraAddress}
          // onChange={(e) => setExtraAddress(e.target.value)}
        />
      </div>
      <div
        className="flex box-border min-h-[20vh] rounded-[8px] bg-slate-200 justify-center items-center
      dark:bg-slate-700 dark:text-slate-200"
      >
        <p>약관 내용</p>
      </div>

      <Link href="/signup/complete">
        <button
          className="mt-[3vh] box-border rounded-[8px] min-h-[35px] w-full bg-black text-white
        dark:bg-slate-700 dark:text-slate-200"
        >
          가입하기
        </button>
      </Link>
      {/* 알럿 추가 */}
    </div>
  );
}
export default SignUpForm;
