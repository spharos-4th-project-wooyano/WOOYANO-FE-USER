'use client'
import ButtonPrimary from "@/shared/ButtonPrimary";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function FindIdResult() {
  const SearchParams = useSearchParams();

  const name = SearchParams.get('name')
  const email = SearchParams.get('email')

  return (
    <div className="container mb-6 lg:mb-12">
      <div className="max-w-md mx-auto space-y-6">
        {/* HEADING */}
        <div className="flex flex-col font-semibold gap-3 mt-16">
          <h2 className="text-3xl mb-6">Find Result</h2>
          <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="mt-8 mb-16 text-xl">
            <div className="flex gap-2">
              <p className="font-bold text-2xl">{name}</p>
              <p className="leading-[36px]">님이 가입하신 이메일은</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold text-2xl">{email}</p>
              <p className="leading-[36px]">입니다.</p>
            </div>
          </div>
          <ButtonPrimary href="/login">Sign In</ButtonPrimary>
        </div>
      </div>
    </div>
  );
}
