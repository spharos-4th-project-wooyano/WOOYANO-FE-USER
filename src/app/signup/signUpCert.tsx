"use client";
import Label from "@/components/Label";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import React from "react";

export default function SignUpCert() {
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
              // value={signUpForm.username}
              // onChange={handleOnChange}
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              className="mt-1.5"
              id="email"
              type="text"
              placeholder="ex) wooyano@example.com"
              // value={signUpForm.email}
              // onChange={handleOnChange}
            />
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
