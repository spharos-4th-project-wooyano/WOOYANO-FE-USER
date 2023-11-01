import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import SearchStore from '../widget/SearchStore';

function HeaderTopLeft() {
  const router=useRouter();
  const [isOpened,setIsOpened]=useState<Boolean>(false);

  const hadleOpened=()=>{
    setIsOpened(!isOpened);
  }
  
  return (
    <>
      <div className='flex gap-3 text-black'>
        <div className='text-black font-semibold' onClick={hadleOpened}>업체</div>
      </div>

      <SearchStore isOpened={isOpened} setIsOpened={setIsOpened}/>
    </>
  )
}

export default HeaderTopLeft