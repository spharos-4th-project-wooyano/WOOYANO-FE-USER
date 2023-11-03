'use client'
import React, { useState } from 'react'
import Sidebar from '../widget/Sidebar';
import { usePathname } from 'next/navigation';


function HeaderTopRight() {
  const [isOpened,setIsOpened]=useState<Boolean>(false);
  const pathname=usePathname();
  
  const hadleOpened=()=>{
    setIsOpened(!isOpened);
  }

  if(pathname==="/marketing") return null

  return (
    <>
      <div className='flex gap-6'>
        <div className='pr-1 ' onClick={hadleOpened}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='none'>
            <path d="M4 5H20" stroke={"#000"} strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 12L20 12" stroke={"#000"} strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 19H20" stroke={"#000"} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        
        <Sidebar isOpened={isOpened} setIsOpened={setIsOpened}/>
        


      </div>
    </>
  )
}

export default HeaderTopRight