"use client";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import Label from "@/components/Label";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import { DaumAddressType } from "@/types/DaumAddrssType";
import Swal from "sweetalert2";
import PostCodeDaum from "@/components/widget/postCodeDaum";

//todo : 이전단계에서 이름과 이메일 받아오기, 비밀번호 재입력 및 확인 , 각 입력에 대한 유효성 검사

interface signUpform {
  email: string;
  password: string;
  username: string;
  nickname: string;
  birthday: string;
  phone: string;
  localAddress: string;
  extraAddress: string;
  localCode: number;
}

const SingUpForm = () => {
  const [isView, setIsView] = useState<boolean>(false);
  const [addressInfo, setAddressInfo] = useState<DaumAddressType>();
  const [signUpForm, setSignUpForm] = useState<signUpform>({
    email: "",
    password: "",
    username: "",
    nickname: "",
    birthday: "",
    phone: "",
    localAddress: "",
    extraAddress: "",
    localCode: 0,
  });
  //회원가입 정보 업데이트
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;

    if (id === "birthday") {
      // 생년월일 필드인 경우 입력값에서 하이픈을 제거하여 "YYMMDD" 형식으로 변환
      const birthdayForm = value.replace(/-/g, "").substring(2);
      setSignUpForm({
        ...signUpForm,
        [id]: birthdayForm,
      });
    } else {
      setSignUpForm({
        ...signUpForm,
        [id]: value,
      });
    }
  };

  //모달창 상태
  const handleOpenModal = () => {
    setIsView(!isView);
  };

  //닉네임 중복확인
  const handleNickNameCheck = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/nickname/check?nickname=${signUpForm.nickname}`
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        if (data === true) {
          Swal.fire({
            icon: "warning",
            text: "이미 사용중인 닉네임입니다",
          });
        } else if (data === false) {
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

  //회원가입 입력 유효성 검사 및 POST 요청
  const handleSignUpPost = async () => {
    console.log(signUpForm);

    if (
      !signUpForm.username ||
      !signUpForm.email ||
      !signUpForm.password ||
      !signUpForm.birthday ||
      !signUpForm.nickname ||
      !signUpForm.phone ||
      !signUpForm.localAddress ||
      !signUpForm.extraAddress ||
      signUpForm.localCode === 0
    ) {
      Swal.fire({
        icon: "error",
        title: "오류",
        text: "모든 필수 정보를 입력하세요.",
      });
    } else {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/join`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: `${signUpForm.email}`,
            password: `${signUpForm.password}`,
            username: `${signUpForm.username}`,
            nickname: `${signUpForm.nickname}`,
            birthday: `${signUpForm.birthday}`,
            phone: `${signUpForm.phone}`,
            localAddress: `${signUpForm.localAddress}`,
            extraAddress: `${signUpForm.extraAddress}`,
            localCode: signUpForm.localCode,
          }),
        }
      );
      if (res.ok) {
        res
          .json()
          .then((signUpresult) => {
            console.log(signUpresult);
          })
          .catch((error) => {
            console.error("Error parsing response:", error);
          });
      } else {
        console.error("Request failed with status:", res.status);
      }
    }
  };

  //주소 검색결과 두 값이 모두 있을 경우 지역주소와 시군구 코드 업데이트
  useEffect(() => {
    if (addressInfo?.address && addressInfo?.sigunguCode) {
      const localCodeset: number = parseInt(addressInfo.sigunguCode);
      setSignUpForm((prevForm) => ({
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
              value={signUpForm.username}
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
              value={signUpForm.email}
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
              value={signUpForm.password}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <Label>Check Password</Label>
            <Input
              className="mt-1.5"
              placeholder="비밀번호를 한번 더 입력해주세요."
              id="passwordCheck"
              type="text"
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
                value={signUpForm.nickname}
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
              value={signUpForm.phone}
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
                value={signUpForm.localAddress}
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
              value={signUpForm.extraAddress}
              onChange={handleOnChange}
            />
            <ButtonPrimary
              className="mt-1.5 max-h-11 w-full"
              onClick={handleSignUpPost}
            >
              Sign Up
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUpForm;
