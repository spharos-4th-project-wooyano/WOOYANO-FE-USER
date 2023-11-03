'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { divider } from '@nextui-org/react';

const category=[
  {
    id:1,
    imgUrl:'/images/searchStore/house-keeper.png',
    content:"가사도우미",
    en_content:"House Keeper"
  },
  {
    id:2,
    imgUrl:'/images/searchStore/home.png',
    content:"이사/입주 청소",
    en_content:"Moving in"
  },
  {
    id:3,
    imgUrl:'/images/searchStore/office.png',
    content:"사무실 청소",
    en_content:"Office"
  },
  {
    id:4,
    imgUrl:'/images/searchStore/laundry.png',
    content:"가전 청소",
    en_content:"Home Appliances"
  },
]

const homeAppiance=[
  {
    id:1,
    imgUrl:'/images/searchStore/laundry2.png',
    content:"세탁기 청소",
  },
  {
    id:2,
    imgUrl:'/images/searchStore/air-conditioner.png',
    content:"에어컨 청소",
  },
  {
    id:3,
    imgUrl:'/images/searchStore/tv.png',
    content:"티비 청소",
  },
  {
    id:4,
    imgUrl:'/images/searchStore/imac.png',
    content:"컴퓨터 청소",
  },
]

interface categoryType{
  id:number,
  imgUrl:string,
  content:string,
  en_content:string
}
interface homeAppianceType{
  id:number,
  imgUrl:string,
  content:string,
}

function SearchStore(props:{isOpened:Boolean,setIsOpened:React.Dispatch<React.SetStateAction<Boolean>>}) {
  const {isOpened, setIsOpened}=props;
  const [clickValue,setClickValue]=useState<string>("");

  const handleOnClick=(e:React.MouseEvent<HTMLElement>)=>{
    const id= e.currentTarget.id
    setClickValue(id)
  }

  const homeAppliances=(id:string)=>{
    if(id==="가전 청소"){
      return true
    }
  }

  return (
    <>
    <div className={`sidebar ${isOpened? " duration-300 ":"translate-y-[98%] duration-300 rounded-t-lg"} px-4 absolute z-20 top-0 left-0 bg-white w-full h-[100vh] `}>
      <div className='bg-slate-400 w-1/2 h-[6px] rounded-full absolute top-0 left-[50%] translate-x-[-50%]' onClick={()=>setIsOpened(!isOpened)}></div>
      <div className='mt-10'>
        <p className='text-xl font-semibold'>
          원하시는 서비스를 고르세요.
        </p>
        <div className='py-4 border-b-1'>
          {
            category.map((item:categoryType)=>(
              <div id={item.content} onClick={handleOnClick} key={item.id} className='flex border rounded-xl gap-4 border-white hover:bg-slate-100 mb-2 py-3 pl-2'>
                <div className='border w-14 bg-blue-50 rounded-2xl p-2' >
                  <Image
                  src={item.imgUrl}
                  alt="카테고리"
                  height={1000}
                  width={1000}
                  />
                </div>
                <div className='pt-1'>
                  <p>{item.content}</p>
                  <p className='text-slate-500'>{item.en_content}</p>
                </div>
              </div>
            ))
          }
  
          <div className={`w-full gap-2 justify-center items-center border rounded-xl border-t-white duration-300 ${homeAppliances(clickValue)?"flex flex-wrap":"hidden"}`}>
            {
              homeAppiance.map((item:homeAppianceType)=>(
                <div id={item.content} key={item.id} className='flex flex-col w-[45%] justify-center items-center border rounded-xl hover:bg-slate-100 p-2'>
                  <div className='w-10 p-1'>
                    <Image 
                    src={item.imgUrl}
                    alt={item.content}
                    width={1000}
                    height={1000}
                    />
                    
                  </div>
                  <p className='text-[12px]'>{item.content}</p>
                </div>
                
              ))
            }
          </div>
          
        </div>
      </div>

      <div className='w-full flex gap-2 absolute bottom-5 justify-center translate-x-[-3%]'>
        <div className='border w-1/3 rounded-lg' onClick={()=>setIsOpened(!isOpened)}>
          <button className='w-full leading-10'>취소</button>
        </div>
        <div className='border w-1/3 rounded-lg bg-blue-700 text-white'>
          <button className='w-full leading-10'>검색</button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default SearchStore