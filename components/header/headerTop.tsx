"use client"

import { usePathname, useRouter } from 'next/navigation';
import { Suspense } from 'react'
import React, { useEffect, useState } from 'react'
import HomeHeader from './homeHeader';
import RouterBack from './routerBack';
import TextLogo from './textLogo';
import HeaderTopLeft from './headerTopRight';


function HeaderTop() {
  const [mounted, setMounted] =useState(false);
  const pathname=usePathname();
  

  useEffect(()=>{
    setMounted(true);
  },[])
  
  if (!mounted) return null

  

  return (
    <div >
      {/* justify-between으로 나눠줘야 되서 위에 (채팅,업체찾기)div랑 Button div를 자기들끼리 묶어서 css적용함 */}
      {pathname==="/"
      ?
      <HomeHeader/>
      :
      <RouterBack/>
      }
      {/* <TextLogo/>
      <HeaderTopLeft/> */}
      
    </div>
  )
}

export default HeaderTop