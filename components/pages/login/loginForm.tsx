"use client";
import React, { useState, ChangeEvent } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

// 각 타입 지정
interface LoginForm {
  email: string;
  password: string;
}

function LoginForm() {
  const query = useSearchParams();
  const callBackUrl = query.get("callbackUrl");

  //로그인 폼 기본 설정
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  //비밀번호 표시 여부 설정을 위한 타입 선택
  const [pwType, setPwType] = useState<boolean>(true);

  //email, password 값 실시간 적용, 자동로그인 적용, 에러 텍스트 표시
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    setLoginForm({
      ...loginForm,
      [id]: value,
    });
    console.log("step1 loginForm", loginForm);
  };

  //자동로그인 연동 여부 확인 및 로그인 패칭
  const handleLoginFetch = async () => {
    if (!loginForm.email || !loginForm.password) {
      Swal.fire({
        icon: "error",
        title: "입력 필요",
        text: "이메일과 비밀번호를 모두 입력하세요.",
      });
    } else {
      console.log("step2 email", loginForm.email ,"password", loginForm.password);

      const result = await signIn("credentials", {
        email: loginForm.email,
        password: loginForm.password,
        redirect: true,
        callbackUrl: callBackUrl ? callBackUrl : "/",
      });
    }
  };

  //비밀번호 표시 여부
  const handlePwType = () => {
    setPwType(!pwType);
  };

  return (
    <div className="">
      <p
        className=""
      >
        아이디(이메일)
      </p>
      <input
        type="text"
        className=""
        placeholder="아이디(이메일)를 입력해주세요."
        id="email"
        onChange={handleOnChange}
      />
      <p
        className="">
        비밀번호
      </p>
      <input
        type={pwType ? "password" : "text"}
        className=""
        placeholder="비밀번호를 입력해주세요."
        id="password"
        onChange={handleOnChange}
      />
      {/* 비밀번호 표시 버튼 */}
      <button type="button" onClick={handlePwType}>
        view password
      </button>

      <div className="">
        <button
          className="box-border border-1 border-black"
          onClick={handleLoginFetch}
        >
          로그인
        </button>
        <Link href="/signup/process">
          <button
          className="box-border border-1 border-black"
          >
            회원가입
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
