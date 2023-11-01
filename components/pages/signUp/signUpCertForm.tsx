"use client";
import Link from "next/link";
import React, { useState, ChangeEvent } from "react";
import Swal from "sweetalert2";

interface signUpCertForm {
  name: string;
  email: string;
}

export default function SignUpCertForm() {
  const [certNumber, setCertNumber] = useState("");
  const [signUpCertForm, setSignUpCertForm] = useState<signUpCertForm>({
    name: "",
    email: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    setSignUpCertForm({
      ...signUpCertForm,
      [id]: value,
    });
  };

  //todo: 이메일 중복확인 및 인증번호 요청 -> CORS
  const handleEmailCheckCert = async () => {
    try {
      console.log(process.env)
      const res = await fetch(`http://localhost:8000/api/v1/users/email/check?email=${signUpCertForm.email}`);
      if (res.ok) {
        const data = await res.json();
        if (data === true) {
          Swal.fire({
            icon: "error",
            title: "오류",
            text: "해당 이메일은 이미 사용 중입니다.",
          });
        } else if (data === false) {
          const certres = await fetch(
            `http://localhost:8000/api/v1/users/email/auth?name=${signUpCertForm.name}&email=${signUpCertForm.email}`
          );
          if (certres.ok === true) {
            //인증번호 요청 성공 유무에 대한 서버측 응답 없음
            Swal.fire({
              icon: "success",
              title: "성공",
              text: "인증번호 요청 성공.",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "실패",
              text: "인증번호 요청 실패",
            });
          }
        }
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  //이메일 중복체크 번호 확인
  const handleEmailNumCheck = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/v1/users/certnum/check?email=${signUpCertForm.email}&code=${certNumber}`
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data)
        if (data === true) {
          Swal.fire({
            icon: "success",
            title: "성공",
            text: "인증번호가 일치합니다.",
          });
        } else if (data === false) {
          Swal.fire({
            icon: "warning",
            title: "실패",
            text: "인증번호가 일치하지 않습니다.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "실패",
            text: "요청에 실패했습니다.",
          });
        }
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  return (
    <div className="">
      <div className="">
        <p className="">이름</p>
        <input
          type="text"
          className=""
          placeholder="이름을 작성해주세요."
          id="name"
          value={signUpCertForm.name}
          onChange={handleOnChange}
        />
      </div>

      <div className="]">
        <p className="">
          이메일(ID)
        </p>
        <input
          type="text"
          className=""
          placeholder="본 서비스에서 사용할 이메일을 입력해주세요"
          id="email"
          value={signUpCertForm.email}
          onChange={handleOnChange}
        />
      </div>

      <button
        className=""
        onClick={handleEmailCheckCert}
      >
        인증번호 전송
      </button>

      <div className="">
        <input
          type="text"
          className=""
          placeholder="인증번호 입력"
          value={certNumber}
          onChange={(e) => setCertNumber(e.target.value)}
        />
        <button
          className=""
          onClick={handleEmailNumCheck}
        >
          인증 확인
        </button>
      </div>
      <Link href="/signup/agree">
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
