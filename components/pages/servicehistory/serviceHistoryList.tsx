'use client'

import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import DropDownMenu from '@/components/button/dropDownMenu'
  
function serviceHistoryList() {
  return (
    <div className='pt-[50px]'>
      
      <div className='flex flex-col items-center my-10 gap-5'>
        <p className='text-3xl font-bold'>
          서비스 내역
        </p>

        <p className='text-base'>
          서비스 내역을 확인합니다.
        </p>
      </div>

      <DropDownMenu/>
      
      <div className='flex flex-col max-w-[800px] mt-5'>
        <div className ='border w-full h-[200px] border-black rounded-lg flex flex-col pl-2 pr-2 pt-1'>
          
          <div className='flex justify-between'>
            <p>2023.10.20</p>
            <p>서비스 상태</p>
          </div>

          <div className='flex gap-3'>
            <div className='w-[7rem] h-[7rem] '>
              <Image className='m-auto ml-1 w-[300px] h-[95%] rounded-full overflow-hidden'
                alt={"청소1"}
                src={"/images/cleaning.jfif"}
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <p className='text-[20px] font-semibold'>
                가사도우미 업체명
              </p>
              <p>서비스명</p>
              <p>금액</p>
            </div>
          </div>

          <div className='w-full border border-black rounded-lg py-1'>
            <button className='w-full leading-10'>상세 내역 보기</button>
          </div>
        </div>

        <div className ='border w-full h-[200px] border-black rounded-lg flex flex-col pl-2 pr-2 pt-1'>
          
          <div className='flex justify-between'>
            <p>2023.09.15</p>
            <p>서비스 완료</p>
          </div>

          <div className='flex gap-3'>
            <div className='w-[7rem] h-[7rem] '>
              <Image className='m-auto ml-1 w-[300px] h-[95%] rounded-full overflow-hidden'
                alt={"청소1"}
                src={"/images/cleaning.jfif"}
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <p className='text-[20px] font-semibold'>
                가사도우미 업체명
              </p>
              <p>서비스명</p>
              <p>금액</p>
            </div>
          </div>

          <div className='w-full border border-black rounded-lg py-1'>
            <button className='w-full leading-10'>상세 내역 보기</button>
          </div>
        </div>
      </div>
      

      
    </div>
  )
}

export default serviceHistoryList