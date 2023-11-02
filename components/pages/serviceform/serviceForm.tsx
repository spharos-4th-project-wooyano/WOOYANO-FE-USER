import React from 'react'
import ServiceCalender from './serviceCalender'
import Link from 'next/link'
import Image from 'next/image'


const Product=[
  {
    productnum:"1",
    name:"원룸",
    min_time:"2",
    price:20000
  },
  {
    productnum:"2",
    name:"빌라",
    min_time:"2",
    price:30000
  },
  {
    productnum:"3",
    name:"아파트",
    min_time:"2",
    price:40000
  },
  {
    productnum:"4",
    name:"시간추가",
    min_time:"2",
    price:10000
  }
]

interface productType{
  productnum:string,
  name:string,
  min_time:string,
  price:number
}


function ServiceForm() {
  return (
    <div className='pt-1 bg-slate-200 dark:bg-background1'>
      {/* 기사이름 */}
      <div className='text-xl font-semibold mb-2 border-y-1 border-b-slate-200 leading-10 pl-2 bg-white dark:bg-background2 rounded-lg'>
        <div className=' bg-white'>
          <p>임찬섭 기사</p>
          <p className='text-[13px] px-1'>기사 간단한 소개글</p>
        </div>
        
      </div>

      {/* 주소지 */}
      <div className='mb-2 bg-white dark:bg-background2 h-40 rounded-lg'>
        <p className='text-xl font-semibold mb-2 border-b-1 border-b-slate-200 leading-10 pt-2 pl-2'>주소지</p>
        <input type="text" value={"해운대구 우동 리더스마크빌"} disabled className='border-1 ml-1 mt-2 w-[98%] h-10 rounded-xl border-black pl-2 text-slate-400 mb-2 dark:bg-background3' />
        <input type="text" value={"스파로스 아카데미"} disabled className='border-1 w-[98%] ml-1 h-10 rounded-xl border-black pl-2 text-slate-400 dark:bg-background3'/>
      </div>

      {/* 서비스 선택 */}
      <div className='mb-2 bg-white rounded-lg dark:bg-background2 h-auto'>
        <p className='text-xl font-semibold mb-2 border-b-1 border-b-slate-200 leading-10 pt-2 pl-2 '>서비스 선택</p>
        <ul className=''>
          {
            Product.map((item:productType)=>(
              <li key={item.productnum}  className='flex gap-3 w-full border-b-1 h-[100px] py-2'>
                <div className='pt-6 pl-2'>
                  <input id={item.productnum} type="checkbox" className='w-[30px] h-[20px]'/>
                </div>
                <div >
                  <div >
                    <p className='text-lg font-semibold'>{item.name}</p>
                    <p className='text-base '>최소시간: {item.min_time}시간</p>
                    <p className='text-lg font-semibold'>{item.price}원</p>
                  </div>
                </div>
              </li>
            ))
          }
          
        </ul>
      </div>
      
      {/* 날짜와 시간 선택 페이지 */}
      <div className='border-b-1 bg-white rounded-lg dark:bg-background2 h-auto'>
        <p className='text-xl font-semibold mb-2 border-b-1 border-b-slate-200 leading-10 pt-2 pl-2'>날짜와 시간을 선택해 주세요.</p>
        <div className='mt-4 mb-8 w-full border-b-1'>
          <ServiceCalender/>
        </div>
        <div className='mb-4 p-2 gap-1'>
          <p>오전</p>
          <ul className='flex flex-row flex-wrap min-w-[300px] gap-2'>
            <li className='w-[23%] pt-3'>
              <button className='border border-slate-400 rounded-lg w-full leading-[48px]'>11:00</button>
            </li>
          </ul>

          <p className='pt-8'>오후</p>
          <ul className='flex flex-wrap w-full gap-2 '>
            <li className='w-[23%] pt-3'>
              <button className='border border-slate-400 rounded-lg w-full leading-[48px]'>13:00</button>
            </li>
            <li className='w-[23%] pt-3'>
              <button className='border border-slate-400 rounded-lg w-full leading-[48px]'>14:00</button>
            </li>
            <li className='w-[23%] pt-3'>
              <button className='border border-slate-400 rounded-lg w-full leading-[48px]'>15:00</button>
            </li>
            <li className='w-[23%] pt-3'>
              <button className='border border-slate-400 rounded-lg w-full leading-[48px]'>16:00</button>
            </li>
            <li className='w-[23%] pt-3'>
              <button className='border border-slate-400 rounded-lg w-full leading-[48px]'>17:00</button>
            </li>
            <li className='w-[23%] pt-3'>
              <button className='border border-slate-400 rounded-lg w-full leading-[48px]'>18:00</button>
            </li>
          </ul>
        </div>
      </div>
      
      {/* 요청사항 */}
      <div className='bg-white rounded-lg dark:bg-background2 h-auto mb-2 pb-2'>
        <p className='text-xl font-semibold my-2 border-b-1 leading-10 pl-2'>요청사항</p>
        <div className='relative '>
          <textarea
                className="border w-[98%] h-[70px] ml-1"
                placeholder='요청사항을 입력해주세요'
          />
          <p className='absolute right-4 bottom-2 text-[13px] text-slate-400'>500자</p>
        </div>
      </div>
      
      {/* 반려동물 여부 */}
      <div className='bg-white rounded-lg dark:bg-background2 h-auto mb-[80px] pb-2'>
        <p className='text-xl font-semibold my-2 border-b-1 leading-10 pl-2'>반려동물 여부</p>
        <ul className='flex justify-between p-2'>
          <li className='w-[47%]'><button className='border border-slate-400 rounded-lg w-full leading-[48px]'>예</button></li>
          <li className='w-[47%]'><button className='border border-slate-400 rounded-lg w-full leading-[48px]'>아니요</button></li>
        </ul>
      </div>
      
      {/* 결제 수단 */}
      <div className='fixed bottom-0 w-full bg-white dark:bg-background1 left-0 px-4 py-2 border-t-1 rounded-t-lg'>
        <div className='w-[80%] border mt-2 leading-[48px] bg-sky-300 dark:bg-background3 rounded-lg ' >
          <Link href='/order/servicecheck' className='w-full flex justify-center'>결제하기</Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceForm