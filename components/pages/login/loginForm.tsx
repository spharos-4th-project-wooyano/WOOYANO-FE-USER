"use client";
import React, { useState, ChangeEvent } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

import CustomInput from "@/components/ui/customInput";
import PasswordViewButton from "@/components/ui/passwordViewButton";
import CheckEmailForm from "@/components/ui/checkEmailForm";
import CustomButton from "@/components/ui/customButton";

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

  //이메일 유효성 검사 변수
  const [checkEmail, setCheckEmail] = useState<boolean>(false);

  //email, password 값 실시간 적용, 자동로그인 적용, 에러 텍스트 표시
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    // 이메일 유효성 검사 정규식
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    //이메일 유효성 검사
    if (id === "email") {
      const checkedEmail = emailRegex.test(value);
      setCheckEmail(checkedEmail);
    }
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
      console.log("step2 email", loginForm.email, "password", loginForm.password);

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
    <div className="flex flex-col">
      <div className="flex flex-col gap-8">
        <div className="relative">
          <CustomInput
            id="email"
            label="EMAIL"
            placeholder="예시) woooyano@email.com"
            type="text"
            onChange={handleOnChange}
          />
          <div className="absolute right-3 top-1/4">
            <CheckEmailForm checked={checkEmail} />
          </div>
        </div>

        <div className="relative">
          <CustomInput
            id="password"
            label="PASSWORD"
            placeholder="예시) 비밀번호를 입력해주세요."
            type={pwType ? "password" : "text"}
            onChange={handleOnChange}
          />
          <div className="absolute right-3 top-4">
            <PasswordViewButton pwType={pwType} onClick={handlePwType} />
          </div>
          <div className="mt-10">
          <CustomButton text={"SIGN UP"} onClick={handleLoginFetch}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
