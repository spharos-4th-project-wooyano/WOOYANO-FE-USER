'use client'
import React, { useEffect } from 'react'
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';


function Sidebar(props:{isOpened:Boolean,setIsOpened:React.Dispatch<React.SetStateAction<Boolean>>}) {
  const {theme,setTheme}=useTheme();
  const {isOpened, setIsOpened}=props;
  const router=useRouter();
  
  const menuList=[
    {
      id:1,
      contents:"주소관리",
      
    },
    {
      id:2,
      contents:"리스트 보러가기",
      
    },
    {
      id:3,
      contents:"공지사항",
      
    },
    {
      id:4,
      contents:"FAQ",
      
    },
    
  ]

  interface menuListType {
    id:number,
    contents:string,
    
  }

  
  return (
    <>
      <div className={`${isOpened?"absolute z-10 top-0 left-0 bg-black opacity-40 w-full h-[100vh]":"hidden"}`} onClick={()=>setIsOpened(!isOpened)}></div>
      <div className={`sidebar ${isOpened? "translate-x-0 duration-500":"translate-x-[-110%] duration-500"}  absolute z-20 top-0 left-0 bg-white dark:bg-slate-700 w-[80%] h-[100vh] `}>
        {/* 사이드바 */}
        <div className=''>
          <div className='flex justify-between border-b-1 border-slate-300 mb-2' onClick={()=>router.push('/')}>
            <div className='w-[65px] my-2 mx-1' onClick={()=>setIsOpened(!isOpened)}>
              <Image
              alt="사이드바 로고"
              src={"/images/Logo/wooyano-logo.png"}
              width={1000}
              height={1000}
              />
            </div>
            
            <div className='w-4 mt-4 mr-4' onClick={()=>setIsOpened(!isOpened)}>
              <Image
              alt="사이드바 닫는버튼"
              src={"/images/sidebar/ximage.png"}
              width={1000}
              height={1000}
              />
            </div>
          
          </div>
          <div className=' border-b-1 border-slate-300 mb-4 '>
            <p className='text-[19px] pt-2 pl-2 font-semibold'>로그인해주세요.</p>
            <div className='flex justify-around my-10 px-2 gap-2'>
              <Button className="w-full bg-gradient-to-tr from-sky-300 to-red-300 text-white shadow-lg rounded-md" onClick={()=>{setIsOpened(!isOpened);router.push("/login");}}>로그인 하기</Button>
              <Button className="w-full bg-gradient-to-tr from-sky-300 to-red-300 text-white shadow-lg rounded-md" onClick={()=>{setIsOpened(!isOpened);router.push("/signup");}}>회원가입</Button>
            </div>
          </div>

          <div>
            {
              menuList.map((item:menuListType)=>(
                <div key={item.id} className='border w-full border-black h-16 pl-2 pt-4 text-[20px] font-semibold'>
                  {item.contents}
                </div>
              ))
            }
            
          </div>

          <div className='w-9 m-2 mt-2 border-2 border-slate-400 rounded-md absolute bottom-2 right-2' onClick={()=>setTheme(theme==="light"?"dark":"light")}>
            <Image
            alt={"다크모드 사진"}
            src={"/images/darkmode/darkmode.png"}
            width={1000}
            height={1000}
            />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Sidebar