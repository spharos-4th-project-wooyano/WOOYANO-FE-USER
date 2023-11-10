"use client";

import Image from "next/image";
import React, { FC, useState } from "react";
import GallerySlider from "./GallerySlider";
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'


export interface FlightCardProps {
  className?: string;
  data: {
    id: string;
    res:string;
    review: {
      img: string;
      name: string;
      workername:string;
    };
  };
}

const FlightCard: FC<FlightCardProps> = ({ className = "", data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderDetailTop = () => {
    return (
      <div>
        <div className="flex flex-col md:flex-row ">

          <div className="w-24 md:w-20 lg:w-24 flex-shrink-0 md:pt-7">
            <Image
              src={data.review.img}
              className="w-10"
              alt="review"
              sizes="40px"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderDetail = () => {
    if (!isOpen) return null;
    return (
      <div className="p-4 md:p-8 border border-neutral-200 dark:border-neutral-700 rounded-2xl ">
        리뷰 답글
      </div>
    );
  };

  return (
    <div
      className={`nc-FlightCardgroup p-8 md:p-6 relative bg-white dark:bg-neutral-900 border border-neutral-100
     dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow space-y-6 ${className}`}
    >
      <div className={`relative  ${className}`}>
        {/*  리뷰 답글 버튼 */}
        <div className="flex justify-end gap-5 md:gap-3 text-slate-400">
          <button>
            <TrashIcon className="md:h-4 md:w-4 h-6 w-6"/>
          </button>

          <button>
            <PencilSquareIcon className="md:h-4 md:w-4 h-6 w-6"/>
          </button>

        </div>

        <div className="flex flex-col space-y-6 sm:space-y-0">

          <div className="font-semibold">
              <div>
                <span>{data.review.name}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>서비스명</span>
                <div className="text-xs sm:text-sm text-neutral-500 font-normal mt-0.5">
                  작성 일자
                </div>
              </div>
          </div>

          {/* Review IMG */}
        </div>

          
          

          {/* 서비스 내용 */}
          <div className="block space-y-1">
            

            <div className="text-sm text-neutral-500 font-normal mt-2">
              <span className="VG3hNb">{data.review.workername} 기사</span>
              <span className="mx-2">·</span>
              <span>2023.10.30</span>
            </div>
          </div>

          {/* NAME */}
          {/* <div className="hidden lg:block  min-w-[150px] flex-[4] ">
            <div className="text-sm text-neutral-500 font-normal mt-0.5">
              {data.review.name}
            </div>
          </div> */}

          {/* 작성 일자 */}
          <div className="flex-[4] whitespace-nowrap sm:text-left">
            <div>
              <span className="text-xl font-semibold text-secondary-6000">
                {data.res}
              </span>
            </div>
          </div>
        </div>

       
      {/* DETAIL */}
      {renderDetail()}
    </div>
  );
};

export default FlightCard;
