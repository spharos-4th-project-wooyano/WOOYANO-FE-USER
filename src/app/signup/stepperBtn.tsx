"use client";
import React, { SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { SignUpType } from "@/types/SignUpType";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Swal from "sweetalert2";
import SignUpForm from "./signUpForm";

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

  const [emailCertified, setEmailCertified] = useState<boolean>(false);

  interface ErrorSignUpType {
    message: string;
  }

  const hadnleSignUpFetch = async () => {
    // console.log("emailCertified:", emailCertified);
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
      }
      // 이상 없을 시 이메일 중복검사 후 인증 요청
      else {
        console.log(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/email/check?email=${signUpData.email}`
        );
        //이메일 중복 검사 요청
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/email/check?email=${signUpData.email}`
        );
        //중복결과 분기
        if (res.ok) {
          const data = await res.json();
          const result = data.result.checkResult;
          console.log("res:", data);
          //중복이 없었을 때,
          if (result === false) {
            console.log(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/send/user/join/code?name=${signUpData.username}&email=${signUpData.email}`
            );
            //인증번호 요청
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/send/user/join/code?name=${signUpData.username}&email=${signUpData.email}`
            );
            //인증번호 요청 - 응답이 있을 경우
            if (res.ok) {
              const data = await res.json();
              console.log("res2:", data);
              //인증번호 요청 성공
              if (data.success === true) {
                errorText.message == "";
                setStepId(stepId + 1);
              }
              // 인증번호 요청 실패
              else {
                Swal.fire({
                  text: "이메일 인증을 시도할 수 없습니다.",
                  toast: false,
                  position: "center",
                  showConfirmButton: false,
                  timer: 1000,
                  timerProgressBar: false,
                  customClass: {
                    container: "my-swal",
                  },
                });
              }
            }
            //인증번호 요청 - 응답이 없을 경우
            else {
              Swal.fire({
                text: "인증 요청에 실패하였습니다.",
                toast: false,
                position: "center",
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: false,
                customClass: {
                  container: "my-swal",
                },
              });
            }
          }
          // 중복일 경우
          else if (result === true) {
            Swal.fire({
              text: "이미 사용중인 이메일 입니다.",
              toast: false,
              position: "center",
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: false,
              customClass: {
                container: "my-swal",
              },
            });
          }
          // 기타 에러
          else {
            Swal.fire({
              text: "인증 요청에 실패하였습니다.",
              toast: false,
              position: "center",
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: false,
              customClass: {
                container: "my-swal",
              },
            });
          }
        }
        // 기타 에러
        else {
          Swal.fire({
            text: "인증 요청에 실패하였습니다.",
            toast: false,
            position: "center",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: false,
            customClass: {
              container: "my-swal",
            },
          });
        }
      }
    } else if (stepId == 3) {
      console.log("signUpData.emailCertNumber:" + signUpData.emailCertNumber);
      console.log(signUpData.emailCertNumber.length);
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
        //이메일 인증번호 확인
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/email/check?email=${signUpData.email}`
        );
        errorText.message == "";
        // to-do 이메일 인증 fetch 추가 및 에러처리
        setEmailCertified(true);

        if (emailCertified === true) {
          setStepId(stepId + 1);
        } else {
          Swal.fire({
            text: `${emailCertified}`,
            toast: false,
            position: "center",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: false,
            customClass: {
              container: "my-swal",
            },
          });
        }
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
      ) {
        Swal.fire({
          text: "모든 정보를 입력해주세요",
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
        if (signUpData.password != signUpData.secondPassword) {
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

  const hadleEmailCertAgain = async () => {
    Swal.fire({
      text: "이메일 재인증 하실건가요?",
      toast: false,
      position: "center",
      showConfirmButton: true,
      showCancelButton: true,
      customClass: {
        container: "my-swal",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setEmailCertified(false);
        setStepId(stepId - 2);
      } else {
      }
    });
  };

  return (
    <div className="md:pt-20 pt-10 justify-center">
      <div className="flex gap-3 box-border max-w-3xl mx-auto">
        <ButtonPrimary
          className={`w-full ${stepId === 1 ? "hidden" : " "}`}
          onClick={
            stepId === 0
              ? () => {}
              : stepId === 4
              ? hadleEmailCertAgain
              : () => setStepId(stepId - 1)
          }
        >
          Back
        </ButtonPrimary>
        <ButtonPrimary
          className="w-full"
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
    </div>
  );
}
