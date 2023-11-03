'use client'
import React from 'react'
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import HeaderTopLeft from './headerTopRight';
import TextLogo from './textLogo';

function RouterBack() {
  const router=useRouter();
  const pathname=usePathname();
  
  return (
    <div className='flex justify-between px-5 py-4 rounded-b-lg fixed w-full bg-white z-[9]'>
      {
        pathname==='/'||pathname==='/marketing'?
        <TextLogo/>
        :
        <div className='w-2 ' onClick={()=>router.back()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
            <path d="M0.976449 10.6621C0.390663 11.2479 0.390663 12.1977 0.976449 12.7834L10.5224 22.3294C11.1082 22.9152 12.0579 22.9152 12.6437 22.3294C13.2295 21.7436 13.2295 20.7938 12.6437 20.2081L4.15843 11.7228L12.6437 3.2375C13.2295 2.65171 13.2295 1.70196 12.6437 1.11618C12.0579 0.53039 11.1082 0.53039 10.5224 1.11618L0.976449 10.6621ZM22.0371 10.2228L2.03711 10.2228V13.2228L22.0371 13.2228V10.2228Z" fill="black"/>
          </svg>
        </div>
      }
      
      <HeaderTopLeft/>
    </div>
  )
}

export default RouterBack