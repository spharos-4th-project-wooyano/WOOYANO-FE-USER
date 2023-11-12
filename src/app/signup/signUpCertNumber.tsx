"use client";
import Input from "@/shared/Input";
import { SignUpType } from "@/types/SignUpType";
import React, { useState, ChangeEvent, useRef } from "react";

export default function SignUpCertNumber(props: {
  signUpData: SignUpType;
  setSignUpData: React.Dispatch<React.SetStateAction<SignUpType>>;
}) {
  const { signUpData, setSignUpData } = props;
  const [certNumbers, setCertNumbers] = useState(["", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([
    null,
    null,
    null,
    null,
  ]);

  const handleInputChange = (index: number, value: string) => {
    const newCertNumbers = [...certNumbers];
    newCertNumbers[index] = value;
    setCertNumbers(newCertNumbers);

    if (index < 3 && value !== "") {
      inputRefs.current[index + 1]?.focus();
    }

    const certNumber = newCertNumbers.join("");
    setSignUpData((prevData) => ({ ...prevData, emailCertNumber: certNumber }));
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && index > 0 && certNumbers[index] === "") {
      const prevInput = inputRefs.current[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex-grow mt-2 md:mt-0 p-4 md:p-0 max-w-3xl space-y-6">
          <div className="flex flex-col font-semibold gap-3">
            <h2 className="text-3xl">인증번호 입력</h2>
            <div>
              <p className="text-xl">Sign up and</p>
              <p className="text-xl">starting Wooyano</p>
            </div>
          </div>
          <div>
            <p>인증 코드가 {signUpData.email || "error"}으로 발송되었습니다.</p>
            <p>{"01:30"} 이후 인증코드가 만료됩니다.</p>
          </div>
          <div className="flex gap-4 max-w-2xl mx-auto md:px-16 md:py-10 px-6 py-6">
            {[0, 1, 2, 3].map((index) => (
              <Input
                key={index}
                id={`certInput_${index}`}
                type="text"
                value={certNumbers[index]}
                className="bg-gray-200 md:text-6xl text-[40px] text-center rounded-2xl md:h-40 h-20 w-20 font-bold"
                maxLength={1}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>
          <p>
            회원가입 시 Wooyano의 이용약관 및 개인정보 처리방침에 동의합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
