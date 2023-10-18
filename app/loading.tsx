import React from 'react'
import Image from 'next/image'
function loading() {
  return (
    <div className='bg-white flex w-full h-full justify-center items-center'>
      <div className='w-[1000px]'>
        <Image
          src={'/images/Logo/loading.png'}
          alt='로딩사진'
          width={1000}
          height={1000}
        >
        </Image>
      </div>
    </div>
    
  )
}

export default loading