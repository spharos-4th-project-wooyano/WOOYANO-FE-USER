"use client";

import React, { FC, useEffect, useState } from "react";
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { ReserveDataType, ReviewListType } from "@/types/ReviewType";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";


export interface FlightCardProps {
  className?: string;
  data:ReviewListType;
  onClick?: () => void;
}
// data에 들어있는 값 (작성일자, 에약번호, 리뷰 평가, 리뷰 아이디, 서비스 아이디)

// 작업자 아이디를 위한 fetch (서비스명, 에약 날짜, 작업자 아이디) 
async function getWorkerId(reservationNum: string, session: Session) {
  if (!session) {
    console.error("세션이 만료됨")
    return null
  }
  try {
    const response = await fetch(`http://3.35.62.185:8000/api/v1/reservation/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user.result.token}`
      },
      body:JSON.stringify({
      "reservationNum" : reservationNum,
      })
  })
  if (response.ok) {
    const result = await response.json();
    console.log('worker data 성공', result)
    return result;
    }
  } catch (error) {
    console.log('worker data', error)
  }
}



const FlightCard: FC<FlightCardProps> = ({ className = "", data, onClick }) => {
  
  const { data: session } = useSession();
  // 작업자 아이디
  const [workerId,setWorkerId] = useState<ReserveDataType>();
  // 작업자 아이디가 들어있는 데이터가 배열이기 때문에 0번째 행만 사용
  const [workerBasic, setWorkerbasic] = useState<ReserveDataType>();
  const [fetchData,setFetchData] = useState<any>([]);
  // data의 작성일자 날짜 형태로 변경
  const date = new Date(data.createdAt)
  // data 안의 reservationNum만 사용
  const { reservationNum } = data


  console.log("데이터 구조", data)

  useEffect(() => {
    const workerDataFetch = async () => {
      try {
        if (reservationNum && session) {
          // 작업자 아이디
          const workerRes = await getWorkerId(reservationNum, session);
          console.log("잘 가져오나", workerRes)
          if (workerRes) {
            const workerBasicRow = workerRes.result[0]
            setWorkerId(workerRes)
            setWorkerbasic(workerBasicRow)
          }
        }
      } catch (error) {
        console.log("loading error", error)
      }
    }
    workerDataFetch();
  }, [session, reservationNum])

  return (
    <div
      className={`nc-FlightCardgroup p-8 md:p-6 relative bg-white dark:bg-neutral-900 border border-neutral-100
     dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow space-y-6 ${className}`} onClick={onClick}
    >
      <div className={`relative  ${className}`}>
        {/* 수정, 삭제 버튼 */}
        <div className="flex justify-end gap-5 md:gap-3 text-slate-400">
          <button>
            <TrashIcon className="md:h-4 md:w-4 h-6 w-6"/>
          </button>

          <button>
            <PencilSquareIcon className="md:h-4 md:w-4 h-6 w-6"/>
          </button>

        </div>

        <div className="flex flex-col space-y-6 sm:space-y-0">
          {/* 에약번호 */}
          <div>
            {reservationNum}
          </div>
          <div className="font-semibold">
            <div className="flex justify-between mb-2">
              {/* 업체명 */}
              <p>업체명</p>

              <div className="text-xs sm:text-sm text-neutral-500 font-normal mt-0.5">
                작성 일자 : {" "}
                {date.toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </div>
            </div>
          </div>
        </div>

          {/* 서비스 내용 */}
          <div className="block space-y-1">
            

            <div className="text-sm text-neutral-500 font-normal mt-2">
              <span className="VG3hNb">
                {/* 작업자 이름 */}
                데이터 기사
                </span>
                {/* 서비스 일자 */}
              <span className="mx-2">·</span>
              <span>2023.10.30</span>
            </div>
          </div>

          {/* 서비스 평가 */}
          <div className="flex-[4] whitespace-nowrap sm:text-left">
            <div>
              {/* 리뷰 반응 */}
              <span className="text-xl font-semibold text-secondary-6000">
                {data.reuse?"다음에도 이용할게요:)":"이번에만 이용할게요:("}
              </span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default FlightCard;
