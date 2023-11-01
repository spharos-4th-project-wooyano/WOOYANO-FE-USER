'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import HomePageImage from '@/components/ui/homePageImage'
import { useRouter } from 'next/navigation';

function HomePage() {
  const [imageUrl,setImageUrl]=useState<string>("bg-[url('/images/homepage/clean5.png')]");
  const [imgNumber, setImageNumber]=useState<number>(1);
  const router=useRouter();

  if (imgNumber===4){
    setImageNumber(0)
  }
  const handelHomeImage=()=>{
    const imageDict=[
      "bg-[url('/images/homepage/clean5.png')]",
      "bg-[url('/images/homepage/clean7.png')]",
      "bg-[url('/images/homepage/clean6.png')]",
      "bg-[url('/images/homepage/clean4.png')]",
    ]
    setTimeout(function() {
      // 이벤트를 발생시키는 동작을 여기에 작성하세요.
      setImageUrl(imageDict[imgNumber])
      setImageNumber(imgNumber+1)
    }, 5000);
  }
  
  useEffect(() => {
    handelHomeImage()
  },[imageUrl])
  
  // console.log(imageUrl);
  
  

  return (
    <div className='p-2 pt-[60px] dark:bg-background1'>
      <div className={`pt-10 justify-center items-center border shadow-x rounded-sm mb-3 ${imageUrl} bg-cover duration-500 h-[500px]`}>
        <div className='text-white text-[2rem] font-bold font-BalooDa flex flex-col px-6 pb-32'>
          <div className='self-start flex'>우<p className='text-[1.5rem] pt-2.5'>리들의 문제를 </p></div>
          <div className='self-center flex'>야<p className='text-[1.5rem] pt-2.5'>무지게 해결할</p></div> 
          <div className='self-end flex'>노<p className='text-[1.5rem] pt-2.5'>련한 전문가</p></div>
        </div>
        <div className='flex justify-center pt-8 mb-4'>
          {/* <HomePageImage/> */}
        </div>
        
        <div className='flex flex-col items-center justify-center gap-4 mb-10'>
          <div className='w-[75%]'>
            <button className='border border-primary-500 w-full bg-primary-500 text-white font-bold text-[17px] leading-[50px] rounded-md' onClick={()=>{router.push('/chat')}}>GPT에게 질문하기</button>
          </div>
        </div>
      </div>

      <div className='pt-10 justify-center items-center rounded-sm border-y mb-10'>
        <div>
          <div className='text-[#142535] dark:text-white text-[1.8rem] font-bold font-BalooDa flex flex-col px-3'>
            <p className='self-start flex'>신뢰있는 플랫폼</p>
            <span className='text-[15px] font-medium text-slate-500 dark:text-white pt-2'><strong className='text-[18px] text-blue-700'>우야노</strong>는 바로 업체를 제공하는 것이아니라, <br/> 사용자에게 <strong className='text-[18px] text-black dark:text-white'>해결책</strong>을 먼저 제시해 줍니다.</span>
          </div>
          <div className='p-2 pt-6'>
            <Image
            className='rounded-xl'
            src={"/images/homepage/gptImage.png"}
            alt="gpt 검색 이미지"
            width={500}
            height={500}
            />          
          </div>
        </div>
      </div>

      <div className='pt-10 justify-center items-center rounded-sm border-b mb-10'>
        <div>
          <div className='text-[#142535] dark:text-white text-[1.8rem] font-bold font-BalooDa flex flex-col px-3'>
            <p className='self-start flex '>세분화된 분야</p>
            <span className='text-[15px] font-medium text-slate-500 dark:text-white pt-2'><strong className='text-[18px] text-blue-700'>우야노</strong>는 4개의 청소로 구분합니다.</span>
          </div>
          <div className='p-2 pt-6'>
            <Image
            className='rounded-xl'
            src={"/images/homepage/category.png"}
            alt="gpt 검색 이미지"
            width={500}
            height={500}
            />          
          </div>
        </div>
      </div>


    </div>
  )
}

export default HomePage