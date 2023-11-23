"use client";

import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import GallerySlider from "./GallerySlider";
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { ReviewListType } from "@/types/ReviewType";


export interface FlightCardProps {
  className?: string;
  data:ReviewListType;
  onClick?: () => void;
}

const FlightCard: FC<FlightCardProps> = ({ className = "", data, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [workerId,setWorkerId]=useState<any>([]);
  const [fetchData,setFetchData]=useState<any>([]);
  let date=new Date(data.createdAt)

  console.log('adadasd',data);

  // const jwt="eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiVVNFUiIsInN1YiI6ImFiY2QxMjM0QGdtYWlsLmNvbSIsImlhdCI6MTcwMDEyMzExNywiZXhwIjoxNzAwMTI2NzE3fQ.T86ZcvgzcL4kfzjnDAXD1p4yJsNPknb9JBOBAbvQBlQ"

  // async function getWorkerId(reservationNum:string) {
  //   try {

  //     const response = await fetch(`http://3.35.62.185:8000/api/v1/reservation/review`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "email": "abcd1234@gmail.com",
  //         "Authorization": `Bearer ${jwt}`
  //       },
  //       body:JSON.stringify({
  //         "reservationNum" : reservationNum,
  //       })
  //     });
  
  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log("성공:", result);
  //       setWorkerId(result["result"])
  //       return true;
  //     }
  //   } catch (error) {
  //     console.error("실패:", error);
  //     return false;
  //   }
  // }

  // async function getServiceName() {
  //   try {
      
  //     const response = await fetch(`http://3.35.62.185:8000/api/v1/client/review/detail?serviceId=${data.serviceId}&workerId=${workerId}}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "email": "abcd1234@gmail.com",
  //         "Authorization": `Bearer ${jwt}`
  //       },
  //     });
  
  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log("성공:", result);
  //       setFetchData(result["result"])
  //       return true;
  //     }
  //   } catch (error) {
  //     console.error("실패:", error);
  //     return false;
  //   }
  // }

  // useEffect(()=>{
  //   async function fetchData() {
  //     try {
  //       // 먼저 workerId를 얻어옴
  //       const workerNameResult = await getWorkerId(data.reservationNum);
  //       console.log(workerNameResult);
        
    
  //       // workerId를 성공적으로 얻어왔을 때만 getJSON을 호출
  //       if (workerNameResult) {
  //         const jsonResult = await getServiceName();
  //         // jsonResult에 대한 추가적인 처리...
  //       }
  //     } catch (error) {
  //       console.error("데이터를 가져오는 중 오류 발생:", error);
  //     }
  //   }
  //   fetchData()
  // })


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
     dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow space-y-6 ${className}`} onClick={onClick}
    >
      <div className={`relative  ${className}`}>
        {/* 수정 삭제 버튼 */}
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
                <span>{data.serviceId}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>{"서비스명"}</span>
                <div className="text-xs sm:text-sm text-neutral-500 font-normal mt-0.5">
                  작성 일자: {date.toLocaleDateString("ko-KR", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            })}
                </div>
              </div>
          </div>

          {/* Review IMG */}
        </div>

          
          

          {/* 서비스 내용 */}
          <div className="block space-y-1">
            

            <div className="text-sm text-neutral-500 font-normal mt-2">
              <span className="VG3hNb">
                {/* fetchData 받아온 것에서 기사 이름 가져오기 */}
                {data.reviewId} 기사
                </span>
                {/* 서비스 일자 */}
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

          {/* 서비스 평가 */}
          <div className="flex-[4] whitespace-nowrap sm:text-left">
            <div>
              <span className="text-xl font-semibold text-secondary-6000">
                {data.reuse?"다음에도 이용할게요:)":"이번에만 이용할게요:("}
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
