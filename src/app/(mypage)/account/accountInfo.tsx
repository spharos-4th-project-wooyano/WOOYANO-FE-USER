"use client";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import Label from "@/components/Label";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import { AccountInfoType } from "@/types/AccountInfoType";

export default function AccountInfo({
  accountInfo,
}: {
  accountInfo: AccountInfoType;
}) {

  const [changeInfo, setChangeInfo] = useState<boolean>(false);

  //기존 정보
  const [defaultInfoData] = useState<AccountInfoType>({
    username: accountInfo.username, //서버에서 받아오는 값으로 변경
    email: accountInfo.email, //서버에서 받아오는 값으로 변경
    birthday: accountInfo.birthday,
    nickname: accountInfo.nickname,
    phone: accountInfo.phone,
  });

  const [accountInfoEditForm, setAccountInfoEditForm] =
    useState<AccountInfoType>({
      username: defaultInfoData.username,
      email: defaultInfoData.email,
      birthday: "",
      nickname: "",
      phone: "",
    });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    console.log("default:", defaultInfoData[id as keyof AccountInfoType]);
    console.log("edit:", accountInfoEditForm[id as keyof AccountInfoType]);
    if (
      defaultInfoData[id as keyof AccountInfoType] ===
      accountInfoEditForm[id as keyof AccountInfoType]
    ) {
      setChangeInfo(false);
    } else {
      setChangeInfo(true);
    }
    console.log(changeInfo);

    setAccountInfoEditForm({
      ...accountInfoEditForm,
      [id]: value,
    });
  };

  const [showEmailVerification, setShowEmailVerification] = useState(false);

  useEffect(() => {
    setShowEmailVerification(true);
  }, []);


  return (
    <div
      className={`space-y-6 transition-all duration-500 ease-in-out transform ${
        showEmailVerification
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-[-8px]"
      }`}
    >
      <h2 className="text-3xl font-semibold">Account infomation</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0 flex items-start">
          <div className="relative rounded-full overflow-hidden flex">
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="mt-1 text-xs">Change Image</span>
            </div>
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex-grow mt-0 max-w-3xl space-y-6">
          <div>
            <Label>Name</Label>
            <Input
              className="mt-1.5"
              defaultValue={defaultInfoData.username}
              readOnly
              id="username"
              onChange={handleOnChange}
            />
          </div>
          {/* ---- */}
          <div>
            <Label>Email</Label>
            <Input
              className="mt-1.5"
              defaultValue={defaultInfoData.email}
              readOnly
              id="email"
              onChange={handleOnChange}
            />
          </div>
          {/* ---- */}
          <div>
            <Label>Nickname</Label>
            <Input
              className="mt-1.5"
              defaultValue={defaultInfoData.nickname}
              id="nickname"
              onChange={handleOnChange}
            />
          </div>
          {/* ---- */}
          <div>
            <Label>Date of birth</Label>
            <Input
              className="mt-1.5"
              defaultValue={defaultInfoData.birthday}
              type="date"
              id="birthday"
              onChange={handleOnChange}
            />
          </div>
          {/* ---- */}
          <div>
            <Label>Phone number</Label>
            <Input
              className="mt-1.5"
              defaultValue={defaultInfoData.phone}
              id="phone"
              onChange={handleOnChange}
            />
          </div>
          {changeInfo ? (
            <div className="pt-2">
              <ButtonPrimary>Update info</ButtonPrimary>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
