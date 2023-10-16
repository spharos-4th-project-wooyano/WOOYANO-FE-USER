import React from "react";

function LoginForm() {
  return (
    <div className="text-center font-Gmarket-mid">
      <p
        className="text-left pl-1 text-[14px] mb-[4px] after:content-['*'] 
        after:ml-0.5 after:text-red-500 block font-medium text-slate-700 dark:text-white
        "
      >
        아이디(이메일)
      </p>
      <input
        type="text"
        className="text-[14px] mb-[15px] pl-2 border-box border-[1px] border-black rounded-[8px] w-full min-h-[45px]"
        placeholder="아이디(이메일)를 입력해주세요."
      />
      <p
        className="text-left pl-1 text-[14px] mb-[4px] after:content-['*'] 
        after:ml-0.5 after:text-red-500 block font-medium text-slate-700 dark:text-white"
      >
        비밀번호
      </p>
      <input
        type="text"
        className="text-[14px] mb-[15px] pl-2 border-box border-[1px] border-black rounded-[8px] w-full min-h-[45px]"
        placeholder="비밀번호를 입력해주세요."
      />
      <div className="flex flex-col font-Omyu_pretty font-bold items-center mt-20">
        <button className="box-border border-[1px] min-h-[40px] min-w-[30vh] max-w-[50vh] mt-2 rounded-[8px] bg-gradient-to-r from-cyan-300 to-blue-400">
          로그인
        </button>
        <button className="box-border border-[1px] min-h-[40px] min-w-[30vh] max-w-[50vh] mt-2 rounded-[8px] bg-gradient-to-r from-cyan-300 to-blue-400 mb-3">
          회원가입
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
