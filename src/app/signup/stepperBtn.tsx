"use client";
import React, { SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { SignUpType } from "@/types/SignUpType";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Swal from "sweetalert2";

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
    message: string;
  }

  const hadnleSignUpFetch = async () => {
    let errorText: ErrorSignUpType = {
      message: "",
    };

    if (stepId == 2) {
      if (!signUpData.username && signUpData.email)
        errorText.message = "이름을 입력해주세요.";
      if (!signUpData.email && signUpData.username)
        errorText.message = "이메일을 입력해주세요.";
      if (!signUpData.email && !signUpData.username)
        errorText.message = "모든 정보를 입력해주세요.";
      if (errorText.message != "") {
        Swal.fire({
            text: errorText.message,
            toast: false,
            position: "center",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: false,
            customClass: {
              container: "my-swal",
            },
          });
      } else {
        errorText.message == ""
          setStepId(stepId + 1);
          // to-do 이메일 인증 fetch 추가 및 에러처리
        }

    } else if (stepId == 3) {
        console.log('signUpData.emailCertNumber:'+signUpData.emailCertNumber)
      if (!signUpData.emailCertNumber)
        errorText.message = "메일로 받은 인증번호를 입력해주세요.";
      if (errorText.message) {
        Swal.fire({
            text: errorText.message,
            toast: false,
            position: "center",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: false,
            customClass: {
              container: "my-swal",
            },
          });
      } else {
        errorText.message == ""
        // to-do 이메일 인증 fetch 추가 및 에러처리
        setStepId(stepId + 1);
      }
    } else if (stepId == 4) {
        
    if (
        !signUpData.username ||
        !signUpData.email ||
        !signUpData.password ||
        !signUpData.birthday ||
        !signUpData.nickname ||
        !signUpData.phone ||
        !signUpData.localAddress ||
        !signUpData.extraAddress ||
        signUpData.localCode === 0
      ){ Swal.fire({
            text: "모든 정보를 입력해주세요",
            toast: false,
            position: "center",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: false,
            customClass: {
              container: "my-swal",
            },
          });} else {
            if(signUpData.password != signUpData.checkPassword){
                Swal.fire({
                    text: "입력하신 비밀번호가 서로 다릅니다.",
                    toast: false,
                    position: "center",
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: false,
                    customClass: {
                      container: "my-swal",
                    },
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
    }
  };

  return (
    <div className="flex md:pt-20 pt-10 justify-center">
      <ButtonPrimary
        className="w-full max-w-3xl"
        onClick={
          stepId === 5
            ? () => router.push("/login")
            : stepId === 2 || stepId === 3 || stepId === 4
            ? hadnleSignUpFetch
            : () => setStepId(stepId + 1)
        }
      >
        {btnText}
      </ButtonPrimary>
    </div>
  );
}
