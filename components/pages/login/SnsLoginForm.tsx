// 'use client'
import React from 'react'
// import {signIn, signOut, useSession} from 'next-auth/react'

// const { data:session } = useSession();

function SnsLoginForm() {
  return (
    <div className='flex space-x-5 font-Omyu_pretty justify-center mt-10'>
      <button className='box-border border-black border-[1px] bg-yellow-200 h-[45px] w-[60px] rounded-full'>카카오</button>
      <button className='box-border border-black border-[1px] bg-white h-[45px] w-[60px] rounded-full'>구글</button>
      <button className='box-border border-black border-[1px] bg-green-400  h-[45px] w-[60px] rounded-full'>
        네이버
      </button>
    </div>
  )
}

export default SnsLoginForm