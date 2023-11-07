"use client";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import React, { ChangeEvent, useState } from "react";

//todo : 비밀번호 형식 유효성 검사, 비밀번호 확인 검사, 새 비밀번호 post fetch, 에러처리, 변경 결과 alert
interface chgPwform {
  newPassword: string;
  passwordCheck: string;}

export default function chgPwForm() {
  const [chgPwform, setChgPwform] = useState<chgPwform>({
    newPassword: "",
    passwordCheck: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    setChgPwform({
      ...chgPwform,
      [id]: value,
    });
    console.log(chgPwform);
  };


  return (
    <div className="container mb-6 lg:mb-12">
      <div className="max-w-md mx-auto space-y-6">
        {/* HEADING */}
        <div className="flex flex-col font-semibold gap-3 mt-16">
          <h2 className="text-3xl">Change Password</h2>
          <p className="text-xl">
            비밀번호 변경을 위해 아래 정보를 입력해주세요.
          </p>
        </div>
        <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* FORM */}
        <form className="grid grid-cols-1 gap-6" action="#" method="post">
          <label className="block">
            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
              New Password
            </span>
            <Input
              id="newPassword"
              type="text"
              placeholder="새 비밀번호를 입력하세요."
              className="mt-1"
              value={chgPwform.newPassword}
              onChange={handleOnChange}
            />
          </label>
          <label className="block">
            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
              Password Check
            </span>
            <Input
              id="passwordCheck"
              type="text"
              placeholder="한번 더 입력해주세요."
              className="mt-1 mb-6"
              value={chgPwform.passwordCheck}
              onChange={handleOnChange}
            />
          </label>
          <ButtonPrimary
          // onClick={}
          href="/"
          >Continue</ButtonPrimary>
        </form>
      </div>
    </div>
  );}
