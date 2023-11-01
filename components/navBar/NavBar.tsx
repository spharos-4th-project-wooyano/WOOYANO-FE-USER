'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';


function NavBar() {
  const pathname=usePathname();
  const router=useRouter()
  return (
    <>
    {pathname=='/chat' || pathname==="/" || pathname==="/order/serviceform"?null:
    <div className='border h-[55px]  bottom-0 w-full bg-white rounded-t-lg shadow-inner flex justify-around gap-10 items-end text-xs fixed'>
      <div className='flex w-full justify-around'>
        <div 
        className='flex flex-col items-center gap-1'
        onClick={()=>router.push('/login')}
        >
          <div className='w-[25px]'>
            <Image
              src={'/images/navbar/login.png'}
              alt='로그인 사진'
              width={40}
              height={40}
              />
          </div>
          로그인
        </div>
        <div 
        className='flex flex-col items-center gap-1'
        onClick={()=>router.push('/favorite')}
        >
          <div className='w-[25px]'>
            <Image
              src={'/images/navbar/heart.png'}
              alt='찜 사진'
              width={40}
              height={40}
              />
          </div>
          찜
        </div>
      </div>
      <div 
      className='w-[2.9rem] h-[2.9rem] border border-black rounded-full shadow-2xl bg-white absolute top-[-20px]' 
      onClick={()=>router.push('/')}
      >
        <div className='w-[40px]'>
          <Image
          src={'/images/Logo/wooyano-logo.png'}
          alt='홈 로고'
          width={1000}
          height={1000}
          />
        </div>        
      </div>
      <div className='flex w-full justify-around'>
        <div 
        className='flex flex-col items-center gap-1'
        onClick={()=>router.push('/servicehistory')}
        >
          <div className='w-[25px]'>
            <Image
              src={'/images/navbar/orderlist.png'}
              alt='서비스 내역사진'
              width={40}
              height={40}
              />
          </div>
          서비스내역
        </div>
        <div 
        className='flex flex-col items-center gap-1'
        onClick={()=>router.push('/mypage')}
        >
          <div className='w-[25px]'>
            <Image
              src={'/images/navbar/mypage.png'}
              alt='마이페이지 사진'
              width={40}
              height={40}
              />
          </div>
          마이페이지
        </div>
      </div>
    </div>
    }
      
    </>
  )
}

export default NavBar