"use client";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import Swal from "sweetalert2";

//todo: 이메일, 인증번호 유효성 검사, 인증번호 전송 fetch, 인증번호 확인 fetch 각 기능에 대한 에러 처리
interface findPwCertform {
  name: string;
  email: string;
  emailCertNumber: string;
}

export default function ChgPwCert() {
  const router = useRouter();
  const [findPwCertForm, setFindPwCertForm] = useState<findPwCertform>({
    name: "",
    email: "",
    emailCertNumber: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    setFindPwCertForm({
      ...findPwCertForm,
      [id]: value,
    });
    console.log(findPwCertForm);
  };

  const handleSendEmailNumber = async () => {
    if (!findPwCertForm.name || !findPwCertForm.email) {
      Swal.fire({
        text: `모든 정보를 입력해주세요`,
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
      // 유저 유무 확인
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/email/exist/check?username=${findPwCertForm.name}&email=${findPwCertForm.email}`
        );
        if (res.ok) {
          res.json().then(async (data) => {
            if (data.result.checkResult === true) {
              //이메일 인증번호 요청
              try {
                const res = await fetch(
                  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/send/change/password/code?name=${findPwCertForm.name}&email=${findPwCertForm.email}`
                );
                if (res.ok) {
                  res.json().then(async (data) => {
                    console.log("이메일 요청 여부 : " , data.success);
                    if (data.success === true) {
                      //todo:남은시간 타이머 생성
                    } else {
                      Swal.fire({
                        text: `이메일 전송을 실패하였습니다.`,
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
                  });
                }
              } catch (error) {
                console.error("오류 발생:", error);
              }
            } else {
              Swal.fire({
                text: `가입된 정보가 없습니다.`,
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
          });
        }
      } catch (error) {
        console.error("오류 발생:", error);
      }
    }
  };

  const handleCheck = async () => {
    if (!findPwCertForm.emailCertNumber) {
      Swal.fire({
        text: `인증번호를 입력해주세요.`,
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
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/confirm/code?email=${findPwCertForm.email}&code=${findPwCertForm.emailCertNumber}`
        );
        if (res.ok){
          res.json().then((data) => {
            if(data.success === true){
              router.push(
                `/chgpw/form`
              );
            }
          })
        } else if (!res.ok) {
          res.json().then((data) => {
            if ( data.code === 9020) {
              Swal.fire({
                text: `인증번호가 일치하지 않습니다.`,
                toast: false,
                position: "top",
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: false,
                customClass: {
                  container: "my-swal",
                },
              });
            } else {
              Swal.fire({
                title: `${data.code}`,
                text: `알 수 없는 에러가 발생하였습니다.`,
                toast: false,
                position: "top",
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: false,
                customClass: {
                  container: "my-swal",
                },
              });
            }
          })
        }
      } catch (error) {
        console.error("오류 발생:", error);
      }
    }
  };

  return (
    <div className="container mb-6 lg:mb-12">
      <div className="max-w-md mx-auto space-y-6">
        {/* HEADING */}
        <div className="flex flex-col font-semibold gap-3 mt-16">
          <h2 className="text-3xl">Change Password</h2>
          <p className="text-xl">이메일 인증을 먼저 진행해주세요.</p>
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
              value={findPwCertForm.name}
              onChange={handleOnChange}
            />
          </label>
          <div>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Email
              </span>
              <Input
                id="email"
                type="text"
                placeholder="ex) wooyano@example.com"
                className="mt-1"
                value={findPwCertForm.email}
                onChange={handleOnChange}
              />
            </label>
            <label className="block relative">
              <div className="flex gap-3 mt-2 mb-4 relative">
                <Input
                  id="emailCertNumber"
                  type="text"
                  placeholder="인증번호 4자리 입력"
                  className=""
                  value={findPwCertForm.emailCertNumber}
                  onChange={handleOnChange}
                />
                <ButtonPrimary
                  className="max-h-11"
                  onClick={handleSendEmailNumber}
                >
                  Send Number
                </ButtonPrimary>
              </div>
              <p className="absolute text-sm left-2 top-11 animate-pulse text-red-700">
                Remain 01:30
              </p>
            </label>
          </div>

          <ButtonPrimary onClick={handleCheck} >
            Continue
          </ButtonPrimary>
        </form>
      </div>
    </div>
  );
}
