import React from "react";

function signUpLoadMap() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="py-10">
          <h1 className="text-3xl font-bold mb-4">회원가입</h1>
          <p className="text-gray-600 mb-8">
            다음 단계를 따라 회원가입을 완료해주세요.
          </p>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">
              1. 이메일 인증을 위한 정보 입력
            </h2>
            <p className="text-gray-600">이름과 이메일을 입력해주세요.</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">2. 이메일 인증번호 입력</h2>
            <p className="text-gray-600">
              이메일로 전송된 인증번호를 입력해주세요.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">3. 회원 정보 입력</h2>
            <p className="text-gray-600">회원 정보를 입력해주세요.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">4. 회원가입 완료</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signUpLoadMap;
