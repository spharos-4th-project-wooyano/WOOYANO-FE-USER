import Review from '@/components/policy/review'
import React from 'react'

function ReviewAdd() {
  return (
    <div className='pt-[50px] max-w-[900px] mx-auto'>
      
      <div className='flex flex-col items-center my-10 gap-5'>
        <p className='text-3xl font-bold'>
          리뷰 작성
        </p>

        <p className='text-base'>
          리뷰를 작성합니다.
        </p>
      </div>

      <div className='flex justify-between px-10 my-8'>
        <p className='w-1/3 text-center'>
          일시
        </p>
        <p className='w-1/3 text-center'>
          서비스명
        </p>
        <p className='w-1/3 text-center'>
          기사명
        </p>
      </div>

      <div className='border w-full h-[100px] border-gray-400 rounded-lg'>
        <div className='flex justify-between px-10 py-10'>
        <p className='w-1/3 text-center'>
          2023년
          10월 20일
        </p>
        <p className='w-1/3 text-center'>
          서비스명
        </p>
        <p className='w-1/3 text-center'>
          이하늘
        </p>
        </div>
      </div>

      <div className='my-10'> 
        <p className='mb-5'>
          서비스 평가
        </p>

        <div className='flex justify-center gap-5'>
        <button className='w-[170px] h-[35px] bg-sky-200 rounded-lg border border-black'>
          다음에도 이용할게요:)
        </button>

        <button className='w-[170px] h-[35px] bg-gray-300 rounded-lg border border-black'>
          이번에만 이용할게요:(
        </button>
        </div>
      </div>

      <div>
        <p>
          리뷰 작성
        </p>
        
        <input
        className='border border-gray-400 rounded-lg w-full h-[250px] text-center'
        type='text'
        placeholder='공백 포함 최대 1000자까지 입력 가능합니다.'
        />
      </div>
      
      <div className='flex justify-center my-[50px]'>
      <button className='w-[350px] h-[35px] bg-sky-200 rounded-lg border border-black'>
        사진 첨부하기
      </button>
      </div>
      
      <Review/>

      <div className='flex justify-center my-[200px]'>
      <button className='w-full h-[35px] bg-green-700 rounded-lg text-white'>
        작성 완료
      </button>
      </div>
    </div>

    
  )
}

export default ReviewAdd