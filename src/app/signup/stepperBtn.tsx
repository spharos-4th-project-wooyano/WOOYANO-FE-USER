"use client";
import React, { SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { SignUpType } from "@/types/SignUpType";
import ButtonPrimary from "@/shared/ButtonPrimary";

export default function StepperBtn({
  btnText,
  stepId,
  setStepId,
  signUpData,
  setSignUpData,
}: {
  btnText: string;
  stepId: number;
  setStepId: React.Dispatch<SetStateAction<number>>;
  signUpData: SignUpType;
  setSignUpData: React.Dispatch<React.SetStateAction<SignUpType>>;
}) {
  const router = useRouter();

  interface ErrorSignUpType {
    email: string;
    password: string;
    checkPassword: string;
    username: string;
    nickname: string;
    birthday: string;
    phone: string;
    localAddress: string;
    extraAddress: string;
    localCode: string;
    emailCertNumber: string;
  }

  const hadnleSignUpFetch = async () => {
    let errorText: ErrorSignUpType = {
      email: "",
      password: "",
      checkPassword: "",
      username: "",
      nickname: "",
      birthday: "",
      phone: "",
      localAddress: "",
      extraAddress: "",
      localCode: "",
      emailCertNumber: "",
    };

    if (stepId == 2) {
      if (signUpData.username === "" || signUpData.username === undefined)
        errorText.username = "이름을 입력해주세요.";
      if (signUpData.email === "" || signUpData === undefined)
        errorText.email = "이메일을 입력해주세요.";
      if (errorText.username !== "" || errorText.email !== "") {
        if (errorText.username! == "") {
          alert(errorText.username);
        } else if (errorText.email !== "") {
          alert(errorText.email);
        }
      } else {
        setStepId(stepId + 1);
        // to-do 이메일 인증 fetch 추가 및 에러처리
      }
    } else if (stepId == 3) {
      if (
        signUpData.emailCertNumber === "" ||
        signUpData.emailCertNumber === undefined
      )
        errorText.emailCertNumber = "메일로 받은 인증번호를 입력해주세요.";
      if (errorText.emailCertNumber !== "") {
        alert(errorText.emailCertNumber);
      } else {
        // to-do 이메일 인증 fetch 추가 및 에러처리
        setStepId(stepId + 1);
      }
    } else if (stepId == 4) {
      if (signUpData.email === "" || signUpData.email === undefined)
        errorText.email = "이메일을 입력해주세요.";
      if (signUpData.password === "" || signUpData.password === undefined)
        errorText.password = "비밀번호를 입력해주세요.";
      if (
        signUpData.checkPassword === "" ||
        signUpData.checkPassword === undefined
      )
        errorText.checkPassword = "입력한 비밀번호가 서로 다릅니다.";
      if (signUpData.username === "" || signUpData.username === undefined)
        errorText.username = "이름을 입력해주세요.";
      if (signUpData.nickname === "" || signUpData.nickname === undefined)
        errorText.nickname = "서비스에서 표시할 닉네임을 입력해주세요.";
      if (signUpData.birthday === "" || signUpData.birthday === undefined)
        errorText.birthday = "생년월일을 입력해주세요.";
      if (signUpData.phone === "" || signUpData.phone === undefined)
        errorText.phone = "전화번호를 입력해주세요.";
      if (
        signUpData.localAddress === "" ||
        signUpData.localAddress === undefined
      )
        errorText.localAddress = "주소를 입력해주세요.";
      if (
        signUpData.extraAddress === "" ||
        signUpData.extraAddress === undefined
      )
        errorText.extraAddress = "주소를 입력해주세요.";
      if (signUpData.localCode === 0 || signUpData.localCode === undefined)
        errorText.localCode = "주소를 입력해주세요.";

      if (
        errorText.email !== "" ||
        errorText.password !== "" ||
        errorText.checkPassword !== "" ||
        errorText.username !== "" ||
        errorText.nickname !== "" ||
        errorText.birthday !== "" ||
        errorText.phone !== "" ||
        errorText.localAddress !== "" ||
        errorText.extraAddress !== "" ||
        errorText.localCode !== ""
      ) {
        if (errorText.email !== "") {
          alert(errorText.email);
        } else if (errorText.password !== "") {
          alert(errorText.password);
        } else if (errorText.checkPassword !== "") {
          alert(errorText.checkPassword);
        } else if (errorText.username !== "") {
          alert(errorText.username);
        } else if (errorText.nickname !== "") {
          alert(errorText.nickname);
        } else if (errorText.birthday !== "") {
          alert(errorText.birthday);
        } else if (errorText.phone !== "") {
          alert(errorText.phone);
        } else if (errorText.localAddress !== "") {
          alert(errorText.localAddress);
        } else if (errorText.extraAddress !== "") {
          alert(errorText.extraAddress);
        } else if (errorText.localCode !== "") {
          alert(errorText.localCode);
        } else {
        }
      } else {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/join`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: `${signUpData.email}`,
              password: `${signUpData.password}`,
              username: `${signUpData.username}`,
              nickname: `${signUpData.nickname}`,
              birthday: `${signUpData.birthday}`,
              phone: `${signUpData.phone}`,
              localAddress: `${signUpData.localAddress}`,
              extraAddress: `${signUpData.extraAddress}`,
              localCode: signUpData.localCode,
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
    }
  };

  return (
    <div className="flex md:pt-20 pt-10 justify-center">
      <ButtonPrimary
        className="w-full max-w-3xl"
        onClick={
          stepId === 5
            ? () => router.push("/login")
            : stepId === 2
            ? hadnleSignUpFetch
            : stepId === 4
            ? hadnleSignUpFetch
            : () => setStepId(stepId + 1)
        }
      >
        {btnText}
      </ButtonPrimary>
    </div>
  );
}
