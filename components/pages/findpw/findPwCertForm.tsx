"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function FindPwCertForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [certNumber, setCertNumber] = useState("");

  const [timeOut, setTimeOut] = useState(150);
  const [timeOutMessage, setTimeOutMessage] = useState(false);
  //시간 감소 호출
  const handleVerification = () => {
    setTimeOutMessage(true);
  };

  //시간 감소
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timeOutMessage) {
      timer = setInterval(() => {
        if (timeOut > 0) {
          setTimeOut((remainTime) => remainTime - 1);
        } else {
          clearInterval(timer);
        }
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [timeOutMessage, timeOut]);

  return (
    <div className="flex flex-col my-[4vh]">
      <div className="box-border mt-[2vh]">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">이름</p>
        <input
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="이름을 입력해주세요."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="box-border mt-[2vh]">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">
          이메일(ID)
        </p>
        <input
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="이메일 형식에 맞게 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex box-border mt-[1vh] mb-10">
        <div className="relation flex gap-2 w-full">
          <input
            type="text"
            className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
            placeholder="이메일 인증번호"
            value={certNumber}
            onChange={(e) => setCertNumber(e.target.value)}
          />
          <button
            className="box-border border-[1px] border-black rounded-[8px] min-w-[8vh] bg-black text-white text-[12px]
      dark:bg-slate-700 dark:text-slate-200"
            onClick={handleVerification}
          >
            인증 확인
          </button>
          {timeOutMessage && (
            <p className="absolute pl-1 pt-[40px] text-[12px] text-red-500 dark:text-blue-700">
              입력 제한 시간: {formatTime(timeOut)}
            </p>
          )}
        </div>
      </div>

      <Link href="/chgpw">
        <button
          className="box-border rounded-[8px] min-h-[35px] w-full bg-black text-white
      dark:bg-slate-700 dark:text-slate-200"
        >
          확인
        </button>
      </Link>
    </div>
  );
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

export default FindPwCertForm;
