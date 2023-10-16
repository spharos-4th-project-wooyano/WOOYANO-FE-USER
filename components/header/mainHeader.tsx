"use client"

import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import DarkModeSwitch from './darkModeSwitch';
import HomeHeader from './homeHeader';

function Header() {
  const [mounted, setMounted] =useState(false);
  const pathname=usePathname();
  const router=useRouter();

  useEffect(()=>{
    setMounted(true);
  },[])
  
  if (!mounted) return null

  return (
    <div className='flex justify-between px-2 py-2'>
      {/* justify-between으로 나눠줘야 되서 위에 (채팅,업체찾기)div랑 Button div를 자기들끼리 묶어서 css적용함 */}
      {pathname==="/"?
      <HomeHeader/>:
      <div onClick={()=>router.back()}>{"<"}</div>
      }
      <DarkModeSwitch/>
      
    </div>
  )
}

export default Header