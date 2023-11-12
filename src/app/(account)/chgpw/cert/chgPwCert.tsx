"use client";
import CheckEmailForm from "@/components/widget/checkEmailForm";
import Button from "@/shared/Button";
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

  //이메일 유효성 검사 변수
  const [checkEmail, setCheckEmail] = useState<boolean>(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    // 이메일 유효성 검사 정규식
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    //이메일 유효성 검사
    if (id === "email") {
      const checkedEmail = emailRegex.test(value);
      setCheckEmail(checkedEmail);
    }
    setFindPwCertForm({
      ...findPwCertForm,
      [id]: value,
    });
    console.log("step1 loginForm", findPwCertForm);
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
                    if (data.success === true) {
                      startCountdown()
                      Swal.fire({
                        text: `인증코드가 발송되었습니다.`,
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
        if (res.ok) {
          res.json().then((data) => {
            if (data.success === true) {
              router.push(
                `/chgpw/form`
              );
            }
          })
        } else if (!res.ok) {
          res.json().then((data) => {
            if (data.code === 9020) {
              Swal.fire({
                text: `인증번호가 일치하지 않습니다.`,
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

  //제한시간 관련
  const [countdown, setCountdown] = useState(180);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [formTime, setFormTime] = useState("3:00");
  const [showTimer, setShowTimer] = useState(false);

  const startCountdown = () => {
    setShowTimer(true);
    setTimer(
      setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === -1) {
            clearInterval(timer!);
            return 0;
          }

          // 0:00 형식으로 시각화
          const minutes = Math.floor(prevCountdown / 60);
          const seconds = prevCountdown % 60 > 0 ? prevCountdown % 60 : 0;
          const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds == 0 ? "00" : String(seconds);
          setFormTime(`${minutes}:${formattedSeconds}`);
          return prevCountdown - 1;
        });
      }, 1000)
    );
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
              <div className="relative">
                <Input
                  id="email"
                  type="text"
                  placeholder="ex) wooyano@example.com"
                  className="mt-1"
                  value={findPwCertForm.email}
                  onChange={handleOnChange}
                />
                <div className="absolute right-3.5 top-1/4">
                  <CheckEmailForm checked={checkEmail} />
                </div>
              </div>
            </label>
            <label className="block relative">
              <div className="relative">
                <div className="flex gap-3 mt-2 mb-4">
                  <Input
                    id="emailCertNumber"
                    type="text"
                    placeholder="인증코드 4자리 입력"
                    className=""
                    value={findPwCertForm.emailCertNumber}
                    onChange={handleOnChange}
                  />
                  <Button
                    className="max-h-11 rounded-xl ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 "
                    onClick={handleSendEmailNumber}
                  >
                    Send Number
                  </Button>
                </div>
                {showTimer ?
                  <p className={`absolute text-[12px] left-2 top-12 ${countdown <= 59 ? 'text-red-500 animate-blink' : ''}`}>
                    {formTime} 이후 인증코드가 만료됩니다.
                  </p>
                  : null
                }
              </div>


            </label>
          </div>

          <Button
            className="rounded-xl ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 "
            onClick={handleCheck} >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
}
