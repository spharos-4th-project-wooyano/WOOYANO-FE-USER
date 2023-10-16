import React from 'react'
import Image from 'next/image'
function loading() {
  return (
    <div className='bg-white flex fixed w-full h-full justify-center items-center'>
      <div>
        <Image
          src={'/images/Logo/loading.png'}
          alt='로딩사진'
          width={300}
          height={300}
        >
        </Image>
      </div>
    </div>
    
  )
}

export default loading