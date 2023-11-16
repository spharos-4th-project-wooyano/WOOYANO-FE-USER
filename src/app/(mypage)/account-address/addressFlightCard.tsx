"use client";

import Image from "next/image";
import React, { FC, useState } from "react";
// import GallerySlider from "./GallerySlider";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { HomeIcon, HomeModernIcon } from "@heroicons/react/24/solid";

export interface AddressFlightCardProps {
  className?: string;
  data: {
    id: string;
    res: string;
    review: {
      img: string;
      name: string;
      workername: string;
    };
  };
}

const AddressFlightCard: FC<AddressFlightCardProps> = ({ data }) => {
  return (
    <div
      className={`nc-FlightCardgroup p-4 md:p-6 relative bg-white dark:bg-neutral-900 border border-neutral-100
     dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow space-y-6`}
    >
      <div className={`relative`}>
        <div className="absolute right-0 flex justify-end gap-5 md:gap-3 text-slate-400">
          {/* 주소 삭제 버튼 */}
          <button>
            <TrashIcon className="md:h-4 md:w-4 h-6 w-6" />
          </button>
          <button>
            {/* 주소 수정 버튼 */}
            <PencilSquareIcon className="md:h-4 md:w-4 h-6 w-6" />
          </button>
        </div>
        <div className="flex relative">
          <div className="absolute md:top-3 top-2.5 md:-left-2 -left-[5px]">
            <button>
              <HomeIcon className=" text-primary-6000 md:w-6 md:h-6 w-6 h-6" />
            </button>
          </div>
          <div className="md:pl-6 pl-8">
            <div className="flex flex-col space-y-6 sm:space-y-0">
              <div className="font-semibold">
                <div className="flex justify-between md:mb-2 mb-1">
                  {/* localAddress */}
                  <span>{"경상남도 김해시 분성로 14"}</span>
                </div>
              </div>
            </div>
            <div className="block space-y-1">
              <div className="text-sm text-neutral-500 font-normal">
                {/* extraAddress */}
                <span className="VG3hNb">{"일동한신아파트 107동 1602호"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressFlightCard;
