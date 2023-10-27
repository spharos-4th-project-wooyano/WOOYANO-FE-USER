'use client'
import React from 'react'
import {signIn, signOut, useSession} from 'next-auth/react'

function SnsLoginForm() {
  return (
    <div className='flex flex-col gap-4 justify-center my-10'>
      <button className="box-border"
      onClick={() => signIn("kakao", {redirect: true, callbackUrl: "/"})}>
        카카오</button>
      <button className='box-border'
      onClick={() => signIn("google", {redirect: true, callbackUrl: "/"})}>
        구글</button>
      <button className='box-border'
      onClick={() => signIn("naver", {redirect: true, callbackUrl: "/"})}>
        네이버
      </button>
      <button
      onClick={()=>signOut()}>
        로그아웃 버튼
      </button>
    </div>
  )
}

export default SnsLoginForm