import React from 'react'
import TextLogo from './textLogo';
import HeaderTopRight from './HeaderTopRight';
import HeaderTopLeft from './HeaderTopLeft';

function HomeHeader() {
  
  
  return (
    <div className='flex justify-between px-4 py-9 rounded-b-2xl shadow-md fixed w-full bg-[#020405] z-[9]'>
      <HeaderTopLeft />
      <TextLogo/>
      <HeaderTopRight/>
    </div>
  )
}

export default HomeHeader