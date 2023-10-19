import React from 'react'
import ServiceCalender from './serviceCalender'


const Product=[
  {
    productnum:"1",
    name:"원룸",
    min_time:"2",
    price:20000
  },
  {
    productnum:"2",
    name:"빌라",
    min_time:"2",
    price:30000
  },
  {
    productnum:"3",
    name:"아파트",
    min_time:"2",
    price:40000
  },
  {
    productnum:"4",
    name:"시간추가",
    min_time:"2",
    price:10000
  }
]

interface productType{
  productnum:string,
  name:string,
  min_time:string,
  price:number
}


function ServiceForm() {
  return (
    <div className='p-2'>
      {/* 기사이름 */}
      <div className='text-xl font-semibold mb-4 border-y-1 border-b-slate-200 h-10 pt-2 pl-2'>
        <p>기사이름</p>
      </div>

      {/* 주소지 */}
      <div className='mb-4'>
        <p className='text-xl font-semibold mb-2 border-y-1 border-b-slate-200 h-10 pt-2 pl-2'>주소지</p>
        <input type="text" value={"해운대구 우동 리더스마크빌"} disabled className='border-1 w-full h-10 rounded-xl border-black pl-2 text-slate-400 mb-2' />
        <input type="text" value={"스파로스 아카데미"} disabled className='border-1 w-full h-10 rounded-xl border-black pl-2 text-slate-400'/>
      </div>

      {/* 서비스 선택 */}
      <div className='mb-4'>
        <p className='text-xl font-semibold mb-2 border-y-1 border-b-slate-200 h-10 pt-2 pl-2 '>서비스 선택</p>
        <ul className=''>
          {
            Product.map((item:productType)=>(
              <li key={item.productnum}  className='flex gap-3 w-full border-b-1 h-[100px] py-2'>
                <div className='pt-6 pl-2'>
                  <input id={item.productnum} type="checkbox" className='w-[30px] h-[20px]'/>
                </div>
                <div >
                  <div >
                    <p className='text-lg font-semibold'>{item.name}</p>
                    <p className='text-lg '>최소시간: {item.min_time}시간</p>
                    <p className='text-lg font-semibold'>{item.price}원</p>
                  </div>
                </div>
              </li>
            ))
          }
          
        </ul>
      </div>
      
      {/* 날짜와 시간 선택 페이지 */}
      <div className='border-b-1'>
        <p className='text-xl font-semibold mb-2 border-y-1 border-b-slate-200 h-10 pt-2 pl-2'>날짜와 시간을 선택해 주세요.</p>
        <div className='mt-4 mb-8 w-full border-b-1'>
          <ServiceCalender/>
        </div>
        <div className='mb-4 p-2 gap-1'>
          <p>오전</p>
          <ul className='flex flex-row flex-wrap min-w-[400px] gap-2'>
            <li className='w-[20%] pt-3'>
              <button className='border border-slate-400 rounded-lg w-full leading-[48px]'>11:00</button>
            </li>
          </ul>

          <p className='pt-8'>오후</p>
          <ul className='flex flex-wrap min-w-[400px] gap-2'>
            <li className='w-[20%] pt-3'>
              <button className='border border-slate-400 rounded-lg w-full leading-[48px]'>13:00</button>
            </li>
            <li className='w-[20%] pt-3'>
              <button className='border border-slate-400 rounded-lg w-full leading-[48px]'>14:00</button>
            </li>
            <li className='w-[20%] pt-3'>
              <button className='border border-slate-400 rounded-lg w-full leading-[48px]'>15:00</button>
            </li>
            <li className='w-[20%] pt-3'>
              <button className='border border-slate-400 rounded-lg w-full leading-[48px]'>16:00</button>
            </li>
            <li className='w-[20%] pt-3'>
              <button className='border border-slate-400 rounded-lg w-full leading-[48px]'>17:00</button>
            </li>
          </ul>
        </div>
      </div>
      
      <div>
        <p className='text-xl font-semibold my-4 border-b-1 pb-2'>요청사항</p>
        <div className='relative'>
          <textarea
                className="border w-full h-[70px] "
                placeholder='요청사항을 입력해주세요'
          />
          <p className='absolute right-2 bottom-2 text-[13px] text-slate-400'>500자</p>
        </div>
        
      </div>


    </div>
  )
}

export default ServiceForm