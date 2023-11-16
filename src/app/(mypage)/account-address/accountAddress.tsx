"use client";
import AddressFlightCard from "./addressFlightCard";
import React, { ChangeEvent, useEffect, useState } from "react";
import AddressAddButton from "./addressAddButton";
import AddressList from "./addressList";

export default function AccountAddress() {
  const [showAnimation, setShowAnimation] = useState(false);
  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <>
      <div
        className={`md:space-y-6 space-y-4 transition-all duration-500 ease-in-out transform ${
          showAnimation
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-8px]"
        }`}
      >
        <h2 className="text-3xl font-semibold">Address</h2>
        <p className="md:text-sm text-xs text-gray-500">
          주소를 추가하시려면 아래 버튼을 통해 추가해주세요.
        </p>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="space-y-6"></div>
        <div className="md:flex gap-6 space-y-6 md:space-y-0">
          <div className="md:order-2 md:ml-4 md:w-[680px]">
            <AddressAddButton />
          </div>
          <div className="md:order-1 md:w-full">
            <AddressList />
          </div>
        </div>
      </div>
    </>
  );
}
