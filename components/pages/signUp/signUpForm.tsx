"use client";
import PostCodeDaum from "@/components/widget/postCodeDaum";
import { DaumAddressType } from "@/types/DaumAddrssType";
import router from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";

interface signUpform {
  email: string;
  password: string;
  username: string;
  nickname: string;
  birthday: string;
  phone: string;
  localAddress: string;
  extraAddress: string;
  localCode: number;
}

export default function SignUpForm() {
  const [isView, setIsView] = useState<boolean>(false);
  const [addressInfo, setAddressInfo] = useState<DaumAddressType>();
  const [signUpForm, setSignUpForm] = useState<signUpform>({
    email: "",
    password: "",
    username: "",
    nickname: "",
    birthday: "",
    phone: "",
    localAddress: "",
    extraAddress: "",
    localCode: 0,
  });
  //회원가입 정보 업데이트
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    setSignUpForm({
      ...signUpForm,
      [id]: value,
    });
  };
  //모달창 상태
  const handleOpenModal = () => {
    setIsView(true);
  };

  //닉네임 중복확인
  const handleNickNameCheck = async () => {
    try {
      const res = await fetch(
        // `${process.env.BASE_API_URL}/api/v1/users/certnum/check?email=${signUpCertForm.email}&code=${certNumber}`
        `http://localhost:65316/api/v1/users/nickname/check?nickname=${signUpForm.nickname}`
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        if (data === true) {
          Swal.fire({
            icon: "warning",
            text: "이미 사용중인 닉네임입니다",
          });
        } else if (data === false) {
          Swal.fire({
            icon: "success",
            text: "사용가능한 닉네임입니다.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "실패",
            text: "요청에 실패했습니다.",
          });
        }
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  //회원가입 입력 유효성 검사 및 POST 요청
  const handleSignUpPost = async () => {
    console.log(signUpForm);

    if (
      !signUpForm.username ||
      !signUpForm.email ||
      !signUpForm.password ||
      !signUpForm.birthday ||
      !signUpForm.nickname ||
      !signUpForm.phone ||
      !signUpForm.localAddress ||
      !signUpForm.extraAddress ||
      signUpForm.localCode === 0
    ) {
      Swal.fire({
        icon: "error",
        title: "오류",
        text: "모든 필수 정보를 입력하세요.",
      });
    } else {
      const res = await fetch(
        // `${process.env.BASE_API_URL}/api/v1/users/join`
        `http://localhost:65316/api/v1/users/join`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: `${signUpForm.email}`,
            password: `${signUpForm.password}`,
            username: `${signUpForm.username}`,
            nickname: `${signUpForm.nickname}`,
            birthday: `${signUpForm.birthday}`,
            phone: `${signUpForm.phone}`,
            localAddress: `${signUpForm.localAddress}`,
            extraAddress: `${signUpForm.extraAddress}`,
            localCode: signUpForm.localCode,
          }),
        }
      );
      if (res.ok) {
        res
          .json()
          .then((signUpresult) => {
            console.log(signUpresult)
            //router.query를 통해 URL 파라미터로 데이터 전달
            // router.push({
            //   pathname: '/signup/complete',
            //   query: {
            //     email: signUpresult.email,
            //     username: signUpresult.username,
            //     nickname:signUpresult.nickname,
            //     phone:signUpresult.phone,
            //     localAddress:signUpresult.localAddress,
            //     extraAddress:signUpresult.extraAddress,
            //   },
            // });
          })
          .catch((error) => {
            console.error("Error parsing response:", error);
          });
      } else {
        console.error("Request failed with status:", res.status);
      }
    }
  };

  //주소 검색결과 두 값이 모두 있을 경우 지역주소와 시군구 코드 업데이트
  useEffect(() => {
    if (addressInfo?.address && addressInfo?.sigunguCode) {
      const localCodeset: number = parseInt(addressInfo.sigunguCode);
      setSignUpForm((prevForm) => ({
        ...prevForm,
        localCode: localCodeset,
        localAddress: addressInfo.address,
      }));
    }
  }, [addressInfo]);

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
          id="password"
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
          id="username"
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="이름을 작성해주세요"
          value={signUpForm.username}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">닉네임</p>
        <div className="flex gap-2">
          <input
            id="nickname"
            type="text"
            className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
            placeholder="서비스에서 표시할 이름을 작성해주세요."
            value={signUpForm.nickname}
            onChange={handleOnChange}
          />
          <button
            className="box-border rounded-[8px] min-h-[35px] min-w-[10vh] bg-black text-white
      dark:bg-slate-700 dark:text-slate-200"
            onClick={handleNickNameCheck}
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
          id="birthday"
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="생년월일 6자리를 작성해주세요."
          value={signUpForm.birthday}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">
          전화번호
        </p>
        <input
          id="phone"
          type="text"
          className="box-border border-[1px] border-black rounded-[8px] min-h-[35px] w-full pl-2"
          placeholder="'-'없이 전화번호를 작성해주세요"
          value={signUpForm.phone}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col">
        <p className="after:content-['*'] after:ml-0.5 after:text-red-500 text-[13px] leading-[3vh] pl-[4px]">주소</p>
        <div className="flex gap-2">
          <input
            id="localAddress"
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
            onClick={() => {
              handleOpenModal();
            }}
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
