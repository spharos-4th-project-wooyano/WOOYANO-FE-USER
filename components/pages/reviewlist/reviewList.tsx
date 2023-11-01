'use client'
import React, { useState } from 'react'
import Image from "next/image";

function ReviewList() {

  const [isOpen, setIsOpen] = useState(false);

  const renderDetail = () => {
    if (!isOpen) return null;
    return (
      <div className="p-4">
        리뷰 답글
      </div>
    );
  };

  return (
    <div className='pt-[100px]'>
      <div className='ml-5'>
        <p className='text-4xl'>
          OOO님이 작성한 리뷰
        </p>
        <p className="block text-neutral-500 dark:text-neutral-400 mt-3">
          최근 작성한 리뷰 순으로 표시됩니다.
        </p>
      </div>

      <div className='px-2 pt-10 p-4 sm:p-6 relative bg-white dark:bg-neutral-900 border border-neutral-100
     rounded-2xl overflow-hidden hover:shadow-lg transition-shadow space-y-6 mt-10'>
        <div className='p-4'>
          <p className='text-[20px] font-bold pb-2 pt-4'>업체이름</p>

          <div className='flex justify-between pr-2'>
            <div className='flex gap-2'>
              <p className='text-[12px] text-blue-500 font-semibold'>다음에도 이용할게요:)</p>
              <p className='text-[12px] text-slate-500'>1개월전</p>
            </div>

            <div className='border rounded-2xl bg-slate-200 text-[14px] font-bold'>
              <button className='mx-[6px]'>삭제</button>
            </div>
          </div>

          <div className="text-[12px]">
            <span>이하늘 기사</span>
            <span className="mx-2">·</span>
            <span>서비스 일자</span>
          </div>

          <div className='mt-3'>
            <span className='break-words'>
              리뷰 내용
            </span>
            
            <div className='w-full py-4 flex gap-2 flex-nowrap overflow-scroll'>
              <Image
              className='rounded-lg'
              src = "/images/cleaning.jfif"
              alt = "청소1"
              width={1000}
              height={1000}
              />
              <Image
              className='rounded-lg'
              src = "/images/cleaning.jfif"
              alt = "청소1"
              width={1000}
              height={1000}
              />
              <Image
              className='rounded-lg'
              src = "/images/cleaning.jfif"
              alt = "청소1"
              width={1000}
              height={1000}
              />
              <Image
              className='rounded-lg'
              src = "/images/cleaning.jfif"
              alt = "청소1"
              width={1000}
              height={1000}
              />
              <Image
              className='rounded-lg'
              src = "/images/cleaning.jfif"
              alt = "청소1"
              width={1000}
              height={1000}
              />
            </div>
            <div className='flex justify-between my-5'>
              <div className='max-w-fit py-2 flex gap-2'>
                <p className='border border-slate-500 px-2 rounded-2xl text-[14px] font-bold'>
                  서비스명
                </p>
                <p className='border border-slate-500 px-2 rounded-2xl text-[14px] font-bold'>
                  서비스명
                </p>
                <p className='border border-slate-500 px-2 rounded-2xl text-[14px] font-bold'>
                  서비스명
                </p>
              </div>
              <div className={` ${isOpen?"w-10 h-10 bg-neutral-50 transform -rotate-180 pt-4":"pb-4"}`} 
                onClick={()=>{setIsOpen(!isOpen)}}>
                  <Image
                  src={'/images/ui/under-arrow.png'}
                  alt="아래 화살표"
                  width={20}
                  height={20}
                  />
              </div>
            </div>
           
            {renderDetail()}
            
          </div>
          
          

        </div>
      </div>

      {/* <div className="p-4 sm:p-6 relative bg-white dark:bg-neutral-900 border border-neutral-100
     dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow space-y-6 mt-10">

        <div className='flex justify-end'>
          <button className='text-gray-500'>
            삭제
          </button>
        </div>

        <div className='flex'>

          <div className="block space-y-1 ml-4 mb-4">
            <div className="flex font-semibold">
                <div className="flex flex-col">
                  <span>업체 이름</span>
                  <span>서비스명</span>
                </div>
            </div>
            <div className="text-sm text-neutral-500 font-normal mt-0.5">
                <span className="VG3hNb">이하늘 기사</span>
                <span className="mx-2">·</span>
                <span>서비스 일자</span>
            </div>
          </div>

          <div className="flex-[4] mr-5 whitespace-nowrap sm:text-right">
            <div>
              <span className="text-xl text-blue-500 font-semibold text-secondary-6000">
                다음에도 이용할게요:)
              </span>
            </div>
            <div className="text-xs sm:text-sm text-neutral-500 font-normal mt-0.5">
              작성 일자
            </div>
          </div>
          
        </div>

        

        <div className='w-50 md:w-50 lg:w-50 flex-shrink-0 md:pt-7'>
            <Image
            className='rounded-lg'
            src = "/images/cleaning.jfif"
            alt = "청소1"
            width={1000}
            height={1000}
            />
        </div>
        
        {renderDetail()}
        

      </div> */}

    </div>
  )
}

export default ReviewList