import React from 'react'
import TextLogo from './textLogo';
// import HeaderTopLeft from './HeaderTopLeft';
import HeaderTopRight from './headerTopRight';
import HeaderTopLeft from './headerTopLeft';

function HomeHeader() {
  
  
  return (
    <div className='flex justify-between px-4 py-9 rounded-b-md fixed w-full bg-white z-[9]'>
      <HeaderTopLeft />
      <TextLogo/>
      <HeaderTopRight/>
    </div>
  )
}

export default HomeHeader