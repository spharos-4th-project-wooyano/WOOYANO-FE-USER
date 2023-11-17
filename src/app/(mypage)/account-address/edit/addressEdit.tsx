"use client";
import React, { useEffect, useState } from "react";
import AddressEditButton from "./addressEditButton";
import AddressFlightCard from "./addressFlightCard";
import { useSearchParams } from "next/navigation";

export default function AddressEdit() {
  const SearchParams = useSearchParams();
  const addressId = Number(SearchParams.get("id"));
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
        <h2 className="text-3xl font-semibold">Address Edit</h2>
        <div className="flex md:text-sm text-xs text-gray-500">
          <p>주소를 수정하시려면 아래 버튼을 눌러 수정해주세요.</p>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="space-y-6"></div>
        <div className="gap-6 md:space-y-6">
          <div className="md:order-1 max-w-3xl">
            <AddressFlightCard addressId={addressId} />
          </div>
          <div className="md:order-2 mt-4 max-w-3xl">
            <AddressEditButton addressId = {addressId}/>
          </div>
        </div>
      </div>
    </>
  );
}
