import React from 'react'
import Image from 'next/image'

function ReviewList() {
  return (
    <div className='pt-[50px]'>
      
      <div className='flex flex-col items-center my-10 gap-5'>
        <p className='text-3xl font-bold'>
          OOO님이 작성한 리뷰
        </p>

        <p className='text-base'>
          최근 작성한 리뷰 순으로 표시됩니다.
        </p>
      </div>

      <div className ='border w-full h-[200px] border-black rounded-lg flex flex-col pl-2 pr-2 pt-1'>

        <div className='flex justify-between'>
          <p>
            작성일
          </p>
          <div className='flex justify-end gap-5 text-gray-500'>
          <button>
            수정
          </button>
          <button>
            삭제
          </button>
          </div>
        </div>

        <div className='flex gap-5'> 
          <div className='w-[7rem] h-[7rem]'>
            <Image className='m-auto ml-1 w-[300px] h-[95%] rounded-xl overflow-hidden'
            alt = {"리뷰1"}
            src = {"/images/review1.jfif"}
            width = {1000}
            height = {1000}
            />
          </div>
          
          <div className='felx flex-col'>
            <p>
              청소를 말끔히 잘 해주셔서 기분이 좋아요 !!
            </p>
            <p className='text-blue-600'>
              다음에도 이용할게요:)
            </p>
            
            <div className='flex flex-col items-end text-gray-500'>
              <p>
              서비스 일시 : 2023.10.20
              </p>
              <p>
              서비스명 : 
              </p>
              <p>
              기사명 : 이하늘
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className ='border w-full h-[200px] border-black rounded-lg flex flex-col pl-2 pr-2 pt-1'>

        <div className='flex justify-between'>
          <p>
            작성일
          </p>
          <div className='flex justify-end gap-5 text-gray-500'>
          <button>
            수정
          </button>
          <button>
            삭제
          </button>
          </div>
        </div>

        <div className='flex gap-5'> 
          <div className='w-[7rem] h-[7rem]'>
            <Image className='m-auto ml-1 w-[300px] h-[95%] rounded-xl overflow-hidden'
            alt = {"리뷰2"}
            src = {"/images/review1.jfif"}
            width = {1000}
            height = {1000}
            />
          </div>
          
          <div className='felx flex-col'>
            <p>
              제대로 안 해주셔서 제가 다시했어요,,
            </p>
            <p className='text-blue-600'>
              이번에만 이용할게요:(
            </p>
            
            <div className='flex flex-col items-end text-gray-500'>
              <p>
              서비스 일시 : 2023.19.15
              </p>
              <p>
              서비스명 : 
              </p>
              <p>
              기사명 : 임찬섭
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ReviewList