import React from 'react'

function ChgPwForm() {
  return (
    <div className="flex flex-col my-[4vh] mx-[4vh]">
      <div className="box-border mt-[2vh]">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">
          새 비밀번호
        </p>
        <input
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="영문, 숫자 포함 8자리 이상 입력"
        />
      </div>

      <div className="box-border mt-[2vh]">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">
          비밀번호 확인
        </p>
        <input
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder='영문, 숫자 포함 8자리 이상 입력'
        />
      </div>
        <button
          className="mt-[10vh] box-border rounded-[8px] min-h-[35px] w-full bg-black text-white
      dark:bg-white dark:black"
        >
          확인
        </button>
        {/* 알럿 추가 */}
    </div>
  )
}

export default ChgPwForm