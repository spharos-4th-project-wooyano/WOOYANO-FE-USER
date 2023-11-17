import React, { Fragment, SetStateAction } from 'react'
import { Tab } from '@headlessui/react'
import ButtonSecondary from '@/shared/ButtonSecondary';
import CommentListing from '@/components/CommentListing';
import Worker from '../worker/worker';



function TapMenu({setOnClickData}:{setOnClickData:React.Dispatch<SetStateAction<any>>}) {
  const workerData=[
    {
      name:"임찬섭",
      star:50,
      sub_desc:"투룸,쓰리룸 전문 가사도우미. 고객 만족율 99%!",
      desc:"20년 근속의 가사도우미 경력을 통해서 성장해 왔습니다. 정성것 모시겠습니다.",
      service:"가사도우미"
    },
    {
      name:"이하늘",
      star:50,
      sub_desc:"투룸,쓰리룸 전문 가사도우미. 고객 만족율 99%!",
      desc:"20년 근속의 가사도우미 경력을 통해서 성장해 왔습니다. 정성것 모시겠습니다.",
      service:"가사도우미"
    },
    {
      name:"소준영",
      star:50,
      sub_desc:"투룸,쓰리룸 전문 가사도우미. 고객 만족율 99%!",
      desc:"20년 근속의 가사도우미 경력을 통해서 성장해 왔습니다. 정성것 모시겠습니다.",
      service:"가사도우미"
    },
]
  
  const renderMain = () => {
    return (
  <>
      <Tab.Group>
        <Tab.List className="flex justify-center gap-10 mb-10 w-full">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full focus:outline-none ${
                  selected
                    ? "bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900"
                    : "text-neutral-6000 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`}
              >
                기사
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full flex items-center justify-center focus:outline-none  ${
                  selected
                    ? "bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900"
                    : " text-neutral-6000 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`}
              >
                <span className="mr-2.5">업체 정보</span>
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full focus:outline-none ${
                  selected
                    ? "bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900"
                    : "text-neutral-6000 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`}
              >
                리뷰
              </button>
            )}
          </Tab>
        </Tab.List>

        <Tab.Panels className="min-w-full">
          <Tab.Panel className="space-y-5 ">
            <div className="listingSection__wrap">
            {/* HEADING */}
            <h2 className="text-2xl font-semibold">기사 리스트</h2>
            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
            
            {/* 작업자 */}
            <div className="divide-y divide-neutral-300">
            {
              workerData.map((data,idx)=>(
                <Worker key={idx} data={data} setOnClickData={setOnClickData}/>
              ))
            }
            </div>
            
            
            
            </div>
          </Tab.Panel>
            <Tab.Panel className="space-y-5">
            <div className="listingSection__wrap">
              <h2 className="text-2xl font-semibold">업체 정보</h2>
              <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
              <div className="text-neutral-6000 dark:text-neutral-300">
                <div>
                  <div className='font-semibold text-2xl text-black'>
                    업체 소개
                  </div>
                  <div>
                    업체 소개말이 들어갑니다.
                  </div>
                </div>

                <div className='mt-5'>
                  <div className='font-semibold text-2xl text-black'>
                    영업정보
                  </div>
                  <div>
                    상호명
                  </div>
                  <div>
                    서비스 가능지역
                  </div>
                </div>

                <div className='mt-5'>
                  <div className='font-semibold text-2xl text-black'>
                  사업자정보
                  </div>
                  <div>
                    상호명
                  </div>
                  <div>
                    사업자주소
                  </div>
                  <div>
                    사업자번호
                  </div>
                </div>
                
              </div>
            </div>
            </Tab.Panel>
            <Tab.Panel className="space-y-5">
            <div className="listingSection__wrap">
            {/* HEADING */}
            <h2 className="text-2xl font-semibold">Reviews</h2>
            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

            {/* review */}
            <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
              <CommentListing className="py-8" />
              <CommentListing className="py-8" />
              <CommentListing className="py-8" />
              <CommentListing className="py-8" />
              {/* <div className="pt-8">
                <ButtonSecondary>View more 20 reviews</ButtonSecondary>
              </div> */}
            </div>
            </div>
            </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>

    )}

  return (
   
      <div className='w-full mb-10'>{renderMain()}</div>
  )
}

export default TapMenu

// w-full lg:w-4/5 xl:w-2/3 lg:pr-10 