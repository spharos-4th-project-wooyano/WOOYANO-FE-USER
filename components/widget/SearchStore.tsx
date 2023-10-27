import React from 'react'
import Image from 'next/image';

function SearchStore(props:{isOpened:Boolean,setIsOpened:React.Dispatch<React.SetStateAction<Boolean>>}) {
  const {isOpened, setIsOpened}=props;


  return (
    <>
    <div className={`sidebar ${isOpened? " duration-300 ":"translate-y-[98%] duration-300 rounded-t-lg"} px-4 absolute z-20 top-0 left-0 bg-white w-full h-[100vh] `}>
      <div className='bg-slate-400 w-1/2 h-[6px] rounded-full absolute top-0 left-[50%] translate-x-[-50%]' onClick={()=>setIsOpened(!isOpened)}></div>
      <div className='mt-10'>
        <p className='text-xl font-semibold'>
          원하시는 서비스를 고르세요.
        </p>
        <div className='py-4'>
          <select name="main_category" id="main_category" className='border h-10 w-full rounded-xl px-2'>
            <option value="defalut">서비스 선택</option>
            <option value="housekeeper">가사도우미</option>
            <option value="move">이사.입주</option>
            <option value="office">사무실</option>
            <option value="home_appliances">가전제품</option>
          </select>
        </div>
      </div>

      <div className='w-full flex gap-2 absolute bottom-5 justify-center translate-x-[-3%]'>
        <div className='border w-1/3 rounded-lg' onClick={()=>setIsOpened(!isOpened)}>
          <button className='w-full leading-10'>취소</button>
        </div>
        <div className='border w-1/3 rounded-lg bg-blue-700 text-white'>
          <button className='w-full leading-10'>검색</button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default SearchStore