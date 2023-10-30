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
    <div className="text-center font-Gmarket-mid">
      <p
        className="text-left pl-1 text-[14px] mb-[4px] after:content-['*'] 
        after:ml-0.5 after:text-red-500 block font-medium text-slate-700 dark:text-white
        "
      >
        아이디(이메일)
      </p>
      <input
        type="text"
        className="text-[14px] mb-[15px] pl-2 border-box border-[1px] border-black rounded-[8px] w-full min-h-[45px]"
        placeholder="아이디(이메일)를 입력해주세요."
        id="email"
        onChange={handleOnChange}
      />
      <p
        className="text-left pl-1 text-[14px] mb-[4px] after:content-['*'] 
        after:ml-0.5 after:text-red-500 block font-medium text-slate-700 dark:text-white"
      >
        비밀번호
      </p>
      <input
        type={pwType ? "password" : "text"}
        className="text-[14px] mb-[15px] pl-2 border-box border-[1px] border-black rounded-[8px] w-full min-h-[45px]"
        placeholder="비밀번호를 입력해주세요."
        id="password"
        onChange={handleOnChange}
      />
      {/* 비밀번호 표시 버튼 */}
      <button type="button" onClick={handlePwType}>
        view password
      </button>

      <div className="flex flex-col font-Omyu_pretty font-bold items-center mt-10">
        <button
          className="box-border mb-3 border-[1px] min-h-[40px] min-w-[30vh] max-w-[50vh] mt-2 rounded-[8px] bg-gradient-to-r from-cyan-300 to-blue-400
        dark:text-black dark:border-black dark:bg-gradient-to-r dark:from-green-300 dark:to-green-400"
          onClick={handleLoginFetch}
        >
          로그인
        </button>
        <Link href="/signup/process">
          <button
            className="box-border border-[1px] min-h-[40px] min-w-[30vh] max-w-[50vh] rounded-[8px] bg-gradient-to-r from-cyan-300 to-blue-400 mb-3
          dark:text-black dark:border-black dark:bg-gradient-to-r dark:from-green-300 dark:to-green-400"
          >
            회원가입
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
