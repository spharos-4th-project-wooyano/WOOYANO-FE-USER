"use client";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import React, { useState, ChangeEvent } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

interface findIdForm {
  name: string;
  phoneNumber: string;
}

export default function FindIdForm() {
  const router = useRouter();
  const [findIdForm, setFindIdForm] = useState<findIdForm>({
    name: "",
    phoneNumber: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    setFindIdForm({
      ...findIdForm,
      [id]: value,
    });
    console.log(findIdForm);
  };

  const handleFindId = async () => {
    if (!findIdForm.name || !findIdForm.phoneNumber) {
      Swal.fire({
        icon: "error",
        title: "입력 필요",
        text: "이름과 전화번호를 모두 입력하세요.",
      });
    } else {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/email/find?username=${findIdForm.name}&phone=${findIdForm.phoneNumber}`
        );
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          router.push(`/findid/result?name=${data.name}&email=${data.email}`)
        } else {
            // 패칭이후 삭제 ▽
            router.push(`/findid/result?name=${"test"}&email=${"email"}`)
        }
      } catch (error) {
        console.error("오류 발생:", error);
      }
    }
  };

  return (
    <div className="container mb-6 lg:mb-12">
      <div className="max-w-md mx-auto space-y-6">
        {/* HEADING */}
        <div className="flex flex-col font-semibold gap-3 mt-16">
          <h2 className="text-3xl">Find Email</h2>
          <p className="text-xl">
            서비스에 가입한 이메일을 찾기 위해 아래 정보를 입력해주세요
          </p>
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
              value={findIdForm.name}
              onChange={handleOnChange}
            />
          </label>
          <label className="block">
            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
              Phone Number
            </span>
            <Input
              id="phoneNumber"
              type="text"
              placeholder="'-'없이 전부 입력해주세요."
              className="mt-1 mb-6"
              value={findIdForm.phoneNumber}
              onChange={handleOnChange}
            />
          </label>
          <ButtonPrimary onClick={handleFindId}>Continue</ButtonPrimary>
        </form>
      </div>
    </div>
  );
}
