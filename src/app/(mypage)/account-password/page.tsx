//회원 비밀번호 변경 페이지 -> 템플릿 + 기존 디자인 예정, 회원일 시 아닐 시 확인 할 것인가? 기존 한페이지를 공유할 것인가?
import React from "react";
import Label from "@/components/Label";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";

const AccountPass = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* HEADING */}
      <h2 className="text-3xl font-semibold">Update your password</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <div className=" max-w-xl space-y-6">
        <div>
          <Label>Current password</Label>
          <Input type="password" className="mt-1.5" />
        </div>
        <div>
          <Label>New password</Label>
          <Input type="password" className="mt-1.5" />
        </div>
        <div>
          <Label>Confirm password</Label>
          <Input type="password" className="mt-1.5" />
        </div>
        <div className="pt-2">
          <ButtonPrimary>Update password</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default AccountPass;
