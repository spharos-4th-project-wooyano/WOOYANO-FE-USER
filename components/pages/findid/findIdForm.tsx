"use client";
import React, { useState, ChangeEvent } from "react";
import CustomButton from "@/components/ui/customButton";
import CustomInput from "@/components/ui/customInput";
import { useRouter } from 'next/navigation';

interface findIdform {
  name: string;
  phoneNumber: string;
}

function FindIdForm() {
  const router = useRouter()
  const [findIdForm, setFindIdForm] = useState<findIdform>({
    name: "",
    phoneNumber: "",
  });

  const [checkedPhoneNumber, setCheckPhoneNumber] = useState<boolean>(false);
  const [viewPhoneNumber, setViewPhoneNumber] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    const intPattern = /^-?\d+$/;

    if (id === "phoneNumber") {
      const checkedPhoneNumber = intPattern.test(value);
      setCheckPhoneNumber(checkedPhoneNumber);
      if (checkedPhoneNumber) {
        // 전화번호를 원하는 형식으로 표시하고 저장
        const formPhoneNumber = checkedPhoneNumber ? value.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3") : value;
        setViewPhoneNumber(formPhoneNumber);
      } else {

      }
    }
    setFindIdForm({
      ...findIdForm,
      [id]: value,
    });
    console.log(findIdForm);
  };

  const handleFindId = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/email/find?username=${findIdForm.name}&phone=${findIdForm.phoneNumber}`
      );
      if (res.ok) {
        console.log(res);
        const data = await res.json();
        console.log("data:", data);
        router.push('/findidresult')
        //to-do: 응답처리 수정 후 데이터 받아 결과 페이지에 표시하도록 수정
      }
    } catch (error) {
      console.error("오류 발생:", error);
      router.push('/findidresult')
      // △ 에러처리 후 삭제 
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-6 mb-8">
        <CustomInput
          id="name"
          label="name"
          placeholder="예시) 홍길동"
          type="text"
          value={findIdForm.name}
          onChange={handleOnChange}
        />

        <CustomInput
          id="phoneNumber"
          label="PHONENUMBER"
          placeholder='"-"없이 입력해주세요.'
          type="text"
          value={viewPhoneNumber}
          onChange={handleOnChange}
        />
      </div>
        <CustomButton text={"다음"} onClick={handleFindId} />
    </div>
  );
}

export default FindIdForm;
