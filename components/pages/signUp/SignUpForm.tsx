"use client";
import ProgressBar from "@/components/ui/progressBar";
import PostCodeDaum from "@/components/widget/PostCodeDaum";
import { DaumAddressType } from "@/types/DaumAddrssType";
import Link from "next/link";
import React, { ChangeEvent,useEffect,useState } from "react";

interface signUpform{
  name : string,
  id : string,
  passWord : string,
  nickName : string,
  birth : string,
  phoneNumber : string,
  localCode : number 
  address : string,
  extraAddress : string,
}

function SignUpForm() {
  const [isView, setIsView] = useState<boolean>(false);
  const [addressInfo, setAddressInfo] = useState<DaumAddressType>();
  const [signUpForm,setSignUpForm] = useState<signUpform>(
    {
      name : "",
      id : "",
      passWord : "",
      nickName : "",
      birth : "",
      phoneNumber : "",
      localCode : 0,
      address : "",
      extraAddress : "",
    }
  )

  const handleOnChange=(e:ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    setSignUpForm({
      ...signUpForm,
      [id]:value
    })
  }

  const handleOpenModal = () => {
    setIsView(true);
  };

  //주소 검색결과가 인지되면 변수값 대입 및 스트링 형태 시군구 코드 앞 2자리 숫자인 시코드로 변경
  useEffect(()=>{
    if (addressInfo?.address && addressInfo?.sigunguCode){
      const localCodeset:number = parseInt(addressInfo.sigunguCode.substring(0, 2), 10);
      setSignUpForm((prevForm) => (
        {
          ...prevForm,
          localCode: localCodeset,
          address: addressInfo.address
          
        }
      ))
    }
  },[addressInfo])

  return (
    <div className="flex flex-col my-[4vh] gap-2">
      <div className="box-border mt-[2vh]">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">
          이메일(ID)
        </p>
        <input
        id="id"
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="아이디로 사용할 이메일을 작성해주세요."
          value={signUpForm.id}
          onChange={handleOnChange}
        />
      </div>
      <div className="box-border">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">
          비밀번호
        </p>
        <input
        id='passWord'
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="비밀번호 작성해주세요."
          value={signUpForm.passWord}
          onChange={handleOnChange}
        />
      </div>
      <div className="box-border">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">이름</p>
        <input
        id="name"
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="이름을 작성해주세요"
          value={signUpForm.name}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">닉네임</p>
        <div className="flex gap-2">
          <input
          id="nickName"
            type="text"
            className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
            placeholder="서비스에서 표시할 이름을 작성해주세요."
            value={signUpForm.nickName}
            onChange={handleOnChange}
          />
          <button
            className="box-border rounded-[8px] min-h-[35px] min-w-[10vh] bg-black text-white
      dark:bg-slate-700 dark:text-slate-200"
          >
            중복 확인
          </button>
        </div>
      </div>
      <div>
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">
          생년월일
        </p>
        <input
        id="birth"
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="생년월일 6자리를 작성해주세요."
          value={signUpForm.birth}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">
          전화번호
        </p>
        <input
        id="phoneNumber"
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="'-'없이 전화번호를 작성해주세요"
          value={signUpForm.phoneNumber}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">주소</p>
        <div className="flex gap-2">
          <input
          id="address"
            type="text"
            className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
            placeholder="주소찾기 버튼을 사용해 주세요."
            value={addressInfo?.address || ""} //addressInfo.address = undefined 에러 처리
            onChange={handleOnChange}
            readOnly
          />
          <p></p>
          {/* 주소검색 호출 */}
          <PostCodeDaum isView={isView} setIsView={setIsView} setAddressInfo={setAddressInfo} />
          
          <button
            className="box-border rounded-[8px] min-h-[35px] min-w-[10vh] bg-black text-white
      dark:bg-slate-700 dark:text-slate-200"
            onClick={()=>{handleOpenModal()}}
          >
            주소 찾기
          </button>
        </div>
        <input
        id="extraAddress"
          type="text"
          className="mt-1 box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="상세 주소입력"
          value={signUpForm.extraAddress}
          onChange={handleOnChange}
        />
      </div>
      <div
        className="mb-10 flex box-border min-h-[20vh] rounded-[8px] bg-slate-200 justify-center items-center
      dark:bg-slate-700 dark:text-slate-200"
      >
        <p>약관 내용</p>
      </div>

      <Link href="/signup/complete">
        <button
          className="box-border rounded-[8px] min-h-[35px] w-full bg-black text-white
        dark:bg-slate-700 dark:text-slate-200"
        onClick={()=>{console.log(signUpForm)}}
        >
          가입하기
        </button>
      </Link>
      {/* 알럿 추가 */}
    </div>
  );
}
export default SignUpForm;
