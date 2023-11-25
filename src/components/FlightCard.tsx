"use client";

import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'

import { newDataType } from "@/app/(mypage)/review/page";

export interface FlightCardProps {}

const FlightCard = ({ data }: { data:newDataType }) => {
  
  const date = new Date(data.createdAt)
  const reserveDate = new Date(data.reservationDate)
  const { reservationNum } = data

  return (
    <div
      className={`nc-FlightCardgroup p-8 md:p-6 relative bg-white dark:bg-neutral-900 border border-neutral-100
     dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow space-y-6`} 
    >
      <div className={`relative`}>
        <div className="flex justify-end gap-5 md:gap-3 text-slate-400">
          <button>
            <TrashIcon className="md:h-4 md:w-4 h-6 w-6"/>
          </button>

          <button>
            <PencilSquareIcon className="md:h-4 md:w-4 h-6 w-6"/>
          </button>

        </div>

        <div className="flex flex-col space-y-6 sm:space-y-0">
          <div>
            {reservationNum}
          </div>
          <div className="font-semibold">
            <div className="flex justify-between mb-2">
              <p>{data.serviceName}</p>

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
                {data.workerName}
                </span>
                {/* 서비스 일자 */}
              <span className="mx-2">·</span>
              <span>{reserveDate.toLocaleTimeString("ko-KR", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}</span>
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
