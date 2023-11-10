"use client";
import Label from "@/components/Label";
import CheckEmailForm from "@/components/widget/checkEmailForm";
import Input from "@/shared/Input";
import { SignUpType } from "@/types/SignUpType";
import React, { ChangeEvent, useState } from "react";

interface signUpCertForm {
  name: string;
  email: string;
}

export default function SignUpCertForm(props: {
  signUpData: SignUpType;
  setSignUpData: React.Dispatch<React.SetStateAction<SignUpType>>;
}) {
  const { signUpData, setSignUpData } = props;

  //이메일 유효성 검사 변수
  const [checkEmail, setCheckEmail] = useState<boolean>(false);

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
    setSignUpData({
      ...signUpData,
      [id]: value,
    });
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex-grow mt-2 md:mt-0 p-4 md:p-0 max-w-3xl space-y-6 ">
          <div className="flex flex-col font-semibold gap-3">
            <h2 className="text-3xl">이메일 인증</h2>
            <div>
              <p className="text-xl">Sign up and</p>
              <p className="text-xl">staring Wooyano</p>
            </div>
          </div>
          <div>
            <Label>Name</Label>
            <Input
              className="mt-1.5"
              id="username"
              type="text"
              placeholder="이름을 입력해주세요."
              value={signUpData.username}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <Label>Email</Label>
            <div className="relative">
              <Input
                className="mt-1.5"
                id="email"
                type="text"
                placeholder="ex) wooyano@example.com"
                value={signUpData.email}
                onChange={handleOnChange}
              />
              <div className="absolute top-1/4 right-3">
                <CheckEmailForm checked={checkEmail} />
              </div>
            </div>
          </div>
          <p>
            By signing up you agree to our Term of <strong>use </strong>and{" "}
            <strong>privacy notice</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
