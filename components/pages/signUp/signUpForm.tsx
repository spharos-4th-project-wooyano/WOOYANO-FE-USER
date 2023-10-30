"use client";
import ProgressBar from "@/components/ui/progressBar";
import PostCodeDaum from "@/components/widget/postCodeDaum";
import { DaumAddressType } from "@/types/DaumAddrssType";
import Link from "next/link";
import React, { ChangeEvent,useEffect,useState } from "react";
import Swal from "sweetalert2";

interface signUpform{
  name : string,
  email : string,
  password : string,
  nickName : string,
  birth : string,
  phoneNumber : string,
  localCode : number 
  address : string,
  extraAddress : string,
}

export default function SignUpForm() {
  const [isView, setIsView] = useState<boolean>(false);
  const [addressInfo, setAddressInfo] = useState<DaumAddressType>();
  const [signUpForm,setSignUpForm] = useState<signUpform>(
    {
      name : "",
      email : "",
      password : "",
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

  //회원가입 입력 유효성 검사 및 POST 요청
  const handleSignUpPost = async () => {
    if(!signUpForm.name || !signUpForm.email || !signUpForm.password 
      ||!signUpForm.birth ||!signUpForm.nickName || !signUpForm.birth
      ||!signUpForm.phoneNumber || !signUpForm.address || !signUpForm.extraAddress
      ||signUpForm.localCode === 0) {
        Swal.fire({
          icon: "error",
          title: "오류",
          text: "모든 필수 정보를 입력하세요.",
        });
      } else {
        const res = await fetch(`${process.env.BASE_API_URL}/api/v1/users/join`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "email": `${signUpForm.email}`,
            "password": `${signUpForm.password}`,
            "username": `${signUpForm.name}`,
            "nickname": `${signUpForm.nickName}`,
            "birthday": `${signUpForm.birth}`,
            "phone": `${signUpForm.phoneNumber}`,
            "localAddress": `${signUpForm.address}`,
            "extraAddress": `${signUpForm.extraAddress}`,
            "localCode": signUpForm.localCode
          }),
        })
        // // if(res.ok) {
        // //   const userDataResponse = await res.json();
        // //   setUserData(userDataResponse);
        // //   router.push("/signup/complete")
        // }
      }
  

  useEffect(()=>{
    if (addressInfo?.address && addressInfo?.sigunguCode){
      const localCodeset:number = parseInt(addressInfo.sigunguCode);
      setSignUpForm((prevForm) => (
        {
          ...prevForm,
          localCode: localCodeset,
          address: addressInfo.address
          
        }
      ))
    }
  },[addressInfo])}

  return (
    <div className="flex flex-col my-[4vh] gap-2">
      <div className="box-border mt-[2vh]">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">
          이메일(ID)
        </p>
        <input
        id="email"
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="아이디로 사용할 이메일을 작성해주세요."
          value={signUpForm.email}
          onChange={handleOnChange}
        />
      </div>
      <div className="box-border">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">
          비밀번호
        </p>
        <input
        id='password'
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="비밀번호 작성해주세요."
          value={signUpForm.password}
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

        <button
          className="box-border rounded-[8px] min-h-[35px] w-full bg-black text-white
        dark:bg-slate-700 dark:text-slate-200"
        onClick={handleSignUpPost}
        >
          가입하기
        </button>
      {/* 알럿 추가 */}
    </div>
  );
}