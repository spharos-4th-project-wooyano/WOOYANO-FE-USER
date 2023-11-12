import Charactor from "@/images/svg_component/charactor";
import LogoSvg from "@/shared/LogoSvg";
import React from "react";

const signUpSteps = [
  {
    title: "1. 이메일 인증을 위한 정보 입력",
    content: "이름과 이메일을 입력해주세요.",
  },
  {
    title: "2. 이메일 인증번호 입력",
    content: "이메일로 전송된 인증번호를 입력해주세요.",
  },
  {
    title: "3. 회원 정보 입력",
    content: "회원 정보를 입력해주세요.",
  },
  {
    title: "4. 회원가입 완료",
    content: "",
  },
];

function SignUpLoadMap() {
  return (
    <div className="md:flex space-y-6 sm:space-y-8">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="pt-6 px-3 md:px-0">
        <div className="flex flex-col font-semibold gap-3 mb-6">
            <h2 className="text-3xl">회원가입</h2>
            <div>
              <p className="text-lg">Wooyano에 오신 것을 환영합니다!</p>
              <p className="text-lg">아래의 과정을 통해 회원가입이 진행됩니다.</p>
            </div>
          </div>
          {signUpSteps.map((step, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-bold mb-2">{step.title}</h2>
              <p className="text-gray-600">{step.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SignUpLoadMap;
