"use client";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import Label from "@/components/Label";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import { DaumAddressType } from "@/types/DaumAddrssType";
import Swal from "sweetalert2";
import PostCodeDaum from "@/components/widget/postCodeDaum";
import { SignUpType } from "@/types/SignUpType";

const SignUpForm = (props: {
  signUpData: SignUpType;
  setSignUpData: React.Dispatch<React.SetStateAction<SignUpType>>;
}) => {
  const [isView, setIsView] = useState<boolean>(false);
  const [addressInfo, setAddressInfo] = useState<DaumAddressType>();
  const { signUpData, setSignUpData } = props;

  //회원가입 정보 업데이트
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;
    //비밀번호 체크
    if (signUpData.password === signUpData.secondPassword) {
      setSignUpData({
        ...signUpData,
        passwordCheck: true,
      });
    } else {
      setSignUpData({
        ...signUpData,
        passwordCheck: false,
      });
    }

    if (id === "birthday") {
      // 생년월일 필드인 경우 입력값에서 하이픈을 제거하여 "YYMMDD" 형식으로 변환
      const birthdayForm = value.replace(/-/g, "").substring(2);
      setSignUpData({
        ...signUpData,
        birthday: birthdayForm,
      });
    } else {
      setSignUpData({
        ...signUpData,
        [id]: value,
      });
    }
  };

  //모달창 상태
  const handleOpenModal = () => {
    setIsView(!isView);
  };

  //닉네임 중복확인 및 확인여부 업데이트
  const handleNickNameCheck = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/nickname/check?nickname=${signUpData.nickname}`
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        if (data.result.checkResult === true) {
          setSignUpData({
            ...signUpData,
            nicknameCheck: false,
          });
          Swal.fire({
            icon: "warning",
            text: "이미 사용중인 닉네임입니다",
          });
        } else if (data.result.checkResult === false) {
          setSignUpData({
            ...signUpData,
            nicknameCheck: true,
          });
          Swal.fire({
            icon: "success",
            text: "사용가능한 닉네임입니다.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "실패",
            text: "요청에 실패했습니다.",
          });
        }
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  //주소 검색결과 두 값이 모두 있을 경우 지역주소와 시군구 코드 업데이트
  useEffect(() => {
    if (addressInfo?.address && addressInfo?.sigunguCode) {
      const localCodeset: number = parseInt(addressInfo.sigunguCode);
      setSignUpData((prevForm) => ({
        ...prevForm,
        localCode: localCodeset,
        localAddress: addressInfo.address,
      }));
    }
  }, [addressInfo]);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex-grow mt-10 md:mt-0 p-4 md:p-0 max-w-3xl space-y-6 ">
          <div>
            <Label>Name</Label>
            <Input
              className="mt-1.5 bg-slate-300"
              id="username"
              type="text"
              value={signUpData.username}
              onChange={handleOnChange}
              readOnly
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              className="mt-1.5 bg-slate-300"
              id="email"
              type="text"
              value={signUpData.email}
              onChange={handleOnChange}
              readOnly
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              className="mt-1.5"
              placeholder="사용하실 비밀번호를 입력해주세요."
              id="password"
              type="text"
              value={signUpData.password}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <Label>Check Password</Label>
            <Input
              className="mt-1.5"
              placeholder="비밀번호를 한번 더 입력해주세요."
              id="secondPassword"
              type="text"
              value={signUpData.secondPassword}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <Label>Nickname</Label>
            <div className="flex gap-3">
              <Input
                className="mt-1.5"
                placeholder="최대 8자리까지 가능합니다."
                id="nickname"
                type="text"
                value={signUpData.nickname}
                onChange={handleOnChange}
              />
              <ButtonPrimary
                className="mt-1.5 max-h-11"
                onClick={handleNickNameCheck}
              >
                Check
              </ButtonPrimary>
            </div>
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input
              className="mt-1.5"
              placeholder="'-' 빼고 전부 입력해주세요."
              id="phone"
              type="text"
              value={signUpData.phone}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <Label>Date of birth</Label>
            <Input
              className="mt-1.5 w-full"
              type="date"
              id="birthday"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <Label>Addess</Label>
            <div className="w-full mx-auto">
              <PostCodeDaum
                isView={isView}
                setIsView={setIsView}
                setAddressInfo={setAddressInfo}
              />
            </div>

            <div className="flex gap-3">
              <Input
                className="mt-1.5"
                placeholder="Find 버튼을 통해 주소를 검색해주세요."
                id="localAddress"
                type="text"
                value={signUpData.localAddress}
                onChange={handleOnChange}
                readOnly
              />
              <ButtonPrimary
                className="mt-1.5 max-h-11"
                onClick={() => {
                  handleOpenModal();
                }}
              >
                Find
              </ButtonPrimary>
            </div>
            <Input
              className="mt-1.5 mb-10"
              placeholder="상세주소를 입력해주세요."
              id="extraAddress"
              type="text"
              value={signUpData.extraAddress}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
