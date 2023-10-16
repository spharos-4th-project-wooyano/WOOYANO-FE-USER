import { useRouter } from 'next/navigation';
import React from 'react'

function HomeHeader() {
  const router=useRouter();
  
  return (
    <div>
      <div className='flex gap-3'>
        <div onClick={()=>router.push('/')}>채팅</div>
        <div className='justify' onClick={()=>router.push('/selectstore')}>업체찾기</div>
      </div>
    </div>
  )
}

export default HomeHeader