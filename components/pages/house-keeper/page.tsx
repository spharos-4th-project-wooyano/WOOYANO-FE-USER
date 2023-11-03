'use client'
import React, { useState } from 'react'
import  Image from "next/image"
import { Carousel } from 'react-responsive-carousel'
import ImgSwiper from '@/components/ui/imgSwiper'
import BtnLikeIcon from '@/components/ui/likeIcon'

function HouseKeeperTem() {

  // const like = false;
  // const [btnActive, setBtnActive] = useState("")

  return (
    <div className='pt-[100px]'>

      <div className='ml-5'>
        <p className='text-4xl'>
          가사도우미
        </p>
        <p className='block text-neutral-500 mt-3'>
          n개의 업체가 조회되었습니다.
        </p>
      </div>

      <div className='flex justify-center my-10'>
        <div className='flex justify-between p-4 sm:p-6 relative bg-white border border-neutral-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow space-y-6 w-full'>
          <p className='text-center'>
            해운대구 우동 리더스마크 <br/>
            스파로스 아카데미
          </p>
          <button className='border-none bg-slate-300 rounded-xl px-2 mb-5'>
            주소찾기
          </button>
        </div>
      </div>

      <div className='w-[300px] border border-neutral-300 rounded-2xl pb-3 mt-5'>
        <div className='ml-3'>
          <ImgSwiper/>
        </div>

          <div className='flex flex-col gap-3 mt-2 ml-3'>
            <p className='font-semibold text-lg'>
              업체 이름
            </p>

            <div className='flex justify-between'>
              <div className='flex'>
              <Image
              src = '/images/ui/good.png'
              alt = '긍정 수'
              width = {25}
              height = {20}
              />
              <p>
                +999
              </p>
              </div>

              <div className='mr-3'>
              {/* <BtnLikeIcon isLiked={like}/> */}
              </div>
            </div>
              
          
          </div>

      </div>
    </div>
  )
}

export default HouseKeeperTem

function setLikedState(arg0: boolean) {
  throw new Error('Function not implemented.')
}
