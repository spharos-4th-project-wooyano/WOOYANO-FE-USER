"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
//to-do: 비밀번호 찾기 인증단계에서 회원인지 아닌지 탐색하는 로직 완성된후 마저 진행

interface findPwCertform {
  name : string,
  email : string,
  certNumber : string,
}

export default function FindPwCertForm() {
  const [findPwCertForm, setFindPwCertForm] = useState<findPwCertform>({
    name: "",
    email: "",
    certNumber: ""
  })

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    setFindPwCertForm({
      ...findPwCertForm,
      [id]: value,
    });
    console.log(findPwCertForm);
  };

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
    <div className="">
      <div className="">
        <p className="">이름</p>
        <input
          type="text"
          className=""
          placeholder="이름을 입력해주세요."
          id="name"
          value={findPwCertForm.name}
          onChange={handleOnChange}
        />
      </div>

      <div className="">
        <p className="">
          이메일(ID)
        </p>
        <input
          type="text"
          className=""
          placeholder="이메일 형식에 맞게 입력해주세요."
          id="email"
          value={findPwCertForm.email}
          onChange={handleOnChange}
        />
      </div>
      <div className="">
        <div className="">
          <input
            type="text"
            className=""
            placeholder="이메일 인증번호"
            id="certNumber"
            value={findPwCertForm.certNumber}
            onChange={handleOnChange}
          />
          <button
          className="box-border border-1 border-black"
            onClick={handleVerification}
          >
            인증 확인
          </button>
          {timeOutMessage && (
            <p className="">
              입력 제한 시간: {formatTime(timeOut)}
            </p>
          )}
        </div>
      </div>

      <Link href="/chgpw">
        <button
          className="box-border border-1 border-black"
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


