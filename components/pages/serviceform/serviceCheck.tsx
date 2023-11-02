import React from 'react'
import TossPaymets from './tossPayment'

function ServiceCheck() {
  return (
    <div className='p-2'>
      <div className='mb-10'>
        <h2 className='text-[20px] font-semibold'>서비스 요청 사항</h2>
        <p className='text-[13px] font-semibold'>부산시 해운대구 우동 리더스마크 스파로스 아카데미</p>
      </div>

      <div className='border border-black p-3 leading-10 text-[15px] font-semibold'>
        <p>기사이름</p>
        <p>서비스 일정</p>
        <p>00월 00일 00시 ~ 00월 00일 00시</p>
        <p>업체: 00 클린</p>
        <p>가사도우미 청소</p>
        <p>요청사항:</p>
        <p>반려동물 여부</p>
        <p>YES</p>
      </div>
      
      <TossPaymets />
    
      

      {/* <div className='absolute bottom-0 left-0 border w-full border-black text-center leading-10'>
        <button> 70,000만원 결제하기</button>
      </div> */}
    </div>
    
  )
}

export default ServiceCheck