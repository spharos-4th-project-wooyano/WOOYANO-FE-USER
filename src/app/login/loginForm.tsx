"use client";
import React, { FC, useState, ChangeEvent } from "react";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Link from "next/link";
import { useSearchParams } from "next/dist/client/components/navigation";
import Swal from "sweetalert2";
import { signIn } from "next-auth/react";
import CheckEmailForm from "../../components/widget/checkEmailForm";
import PasswordViewButton from "../../components/widget/passwordViewButton";
import Button from "@/shared/Button";
import SnsLogin from "./snsLogin";

export interface LoginFormProps {
  email: string;
  password: string;
}

const LoginForm: FC<LoginFormProps> = ({ }) => {
  const query = useSearchParams();
  const callBackUrl = query.get("callbackUrl");

  //로그인 폼 기본 설정
  const [loginForm, setLoginForm] = useState<LoginFormProps>({
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

  //로그인 유효성 확인 및 로그인 패칭
  const handleLoginFetch = async () => {
    try {
      if (!loginForm.email || !loginForm.password) {
        Swal.fire({
          text: `이메일, 비밀번호를 입력해주세요`,
          toast: false,
          position: "center",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: false,
          customClass: {
            container: "my-swal",
            popup: 'my-swal-position'
          },
        });
      } else {
        if (checkEmail === false) {
          Swal.fire({
            text: `이메일형식을 지켜주세요.`,
            toast: false,
            position: "center",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: false,
            customClass: {
              container: "my-swal",
              popup: 'my-swal-position'
            },
          });
        } else {
          console.log("email", loginForm.email, "password", loginForm.password);
          const result = await signIn("credentials", {
            email: loginForm.email,
            password: loginForm.password,
            redirect: true,
            callbackUrl: callBackUrl ? callBackUrl : "/",
          });
        }
      }
    } catch (error) {
      // 에러 처리 코드를 추가하세요
      console.error("에러 발생:", error);
    }
  };

  //비밀번호 표시 여부
  const handlePwType = () => {
    setPwType(!pwType);
  };

  const [showSnsLogin, setShowSnsLogin] = useState(false);

  return (
    <div className={`nc-LoginForm`}>
      <div className="container mb-6 lg:mb-12">
        <div className="max-w-md mx-auto space-y-6">
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Email
                <Link
                  href="/findid"
                  className="text-sm underline font-medium text-end"
                >
                  Forgot Email?
                </Link>
              </span>
              <div className="relative">
                <Input
                  id="email"
                  type="text"
                  placeholder="example@example.com"
                  className="mt-1"
                  value={loginForm.email}
                  onChange={handleOnChange}
                />
                <div className="absolute right-3.5 top-1/4">
                  <CheckEmailForm checked={checkEmail} />
                </div>
              </div>
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
                <Link href="/chgpw" className="text-sm underline font-medium">
                  Forgot password?
                </Link>
              </span>
              <div className="relative">
                <Input
                  id="password"
                  type={pwType ? "password" : "text"}
                  className="mt-1"
                  value={loginForm.password}
                  onChange={handleOnChange}
                />
                <div className="absolute right-3 top-3">
                  <PasswordViewButton pwType={pwType} onClick={handlePwType} />
                </div>
              </div>
            </label>
            <Button
              className="w-full rounded-xl ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50"
              onClick={handleLoginFetch}>
              Sign In
            </Button>
          </form>
          {/* ==== */}
          <div>
            <span className="block text-center text-neutral-700 dark:text-neutral-300">
              WooYaNo가 처음이신가요? {` `}
              <Link href="/signup" className="font-semibold underline">
                회원가입 하기
              </Link>
            </span>
          </div>

          {/* OR */}
          <div className="relative text-center">
            <button className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900"
              onClick={() => setShowSnsLogin(!showSnsLogin)}>
              다른 방법으로 로그인하기
            </button>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          <div className={`transition-all duration-700 ease-in-out ${showSnsLogin ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-8px]'}`}>
            {showSnsLogin && (
              <div>
                <SnsLogin />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
