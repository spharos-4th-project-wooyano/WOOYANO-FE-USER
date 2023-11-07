import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import React from "react";

export default function ChgPwCert() {
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
              Name
            </span>
            <Input
              id="name"
              type="text"
              placeholder="서비스에 가입된 이름을 입력해주세요."
              className="mt-1"
              // value={findIdForm.name}
              // onChange={handleOnChange}
            />
          </label>
          <label className="block">
            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
              Phone Number
            </span>
            <Input
              id="phoneNumber"
              type="text"
              placeholder="'-'없이 전부 입력해주세요."
              className="mt-1 mb-6"
              // value={findIdForm.phoneNumber}
              // onChange={handleOnChange}
            />
          </label>
          <ButtonPrimary>Continue</ButtonPrimary>
        </form>
      </div>
    </div>
  );
}
